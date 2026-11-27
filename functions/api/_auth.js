// functions/api/_auth.js
// Secure Cryptographic Token & Password Authentication Module (Web Crypto HMAC-SHA256 & PBKDF2-SHA256)
// Fail-Closed Secret Persistence • Session Revocation • Cookie / Bearer Only (No URL ?token=)

function base64UrlEncode(bytes) {
  let binary = '';
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

function base64UrlDecode(str) {
  let s = str.replace(/-/g, '+').replace(/_/g, '/');
  while (s.length % 4) s += '=';
  const bin = atob(s);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) {
    bytes[i] = bin.charCodeAt(i);
  }
  return bytes;
}

export function timingSafeEqualBytes(a, b) {
  if (!(a instanceof Uint8Array) || !(b instanceof Uint8Array)) return false;
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff |= a[i] ^ b[i];
  }
  return diff === 0;
}

export function timingSafeEqualStr(a, b) {
  const enc = new TextEncoder();
  return timingSafeEqualBytes(enc.encode(String(a || '')), enc.encode(String(b || '')));
}

export async function sha256Hex(str) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(String(str || '')));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

const PBKDF2_ITERATIONS = 100000;

export async function hashPasswordPBKDF2(password) {
  const enc = new TextEncoder();
  const salt = new Uint8Array(16);
  crypto.getRandomValues(salt);
  const keyMat = await crypto.subtle.importKey('raw', enc.encode(String(password)), 'PBKDF2', false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', salt, iterations: PBKDF2_ITERATIONS, hash: 'SHA-256' },
    keyMat,
    256
  );
  const saltHex = Array.from(salt).map(b => b.toString(16).padStart(2, '0')).join('');
  const hashHex = Array.from(new Uint8Array(bits)).map(b => b.toString(16).padStart(2, '0')).join('');
  return `pbkdf2_sha256$${PBKDF2_ITERATIONS}$${saltHex}$${hashHex}`;
}

function hexToBytes(hex) {
  const clean = String(hex || '').trim();
  if (!clean || clean.length % 2 !== 0) return new Uint8Array(0);
  const out = new Uint8Array(clean.length / 2);
  for (let i = 0; i < out.length; i++) {
    out[i] = parseInt(clean.slice(i * 2, i * 2 + 2), 16);
  }
  return out;
}

export async function verifyPasswordPBKDF2(password, storedHash) {
  const parts = String(storedHash || '').split('$');
  if (parts.length !== 4 || parts[0] !== 'pbkdf2_sha256') return false;
  const iterations = parseInt(parts[1], 10);
  const salt = hexToBytes(parts[2]);
  const expected = hexToBytes(parts[3]);
  if (!iterations || salt.length === 0 || expected.length === 0) return false;

  const enc = new TextEncoder();
  const keyMat = await crypto.subtle.importKey('raw', enc.encode(String(password)), 'PBKDF2', false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', salt, iterations, hash: 'SHA-256' },
    keyMat,
    expected.length * 8
  );
  return timingSafeEqualBytes(new Uint8Array(bits), expected);
}

// 1. Ambil atau Buat Kunci Rahasia Serverless di D1 (Fail-Closed: tidak pernah pakai fallback hardcoded!)
let _cachedSecret = null;
export async function getJwtSecret(env) {
  if (env && env.JWT_SECRET && String(env.JWT_SECRET).trim().length >= 32) {
    return String(env.JWT_SECRET).trim();
  }
  if (_cachedSecret) return _cachedSecret;

  if (env && env.DB) {
    await env.DB.prepare(`
      CREATE TABLE IF NOT EXISTS app_config (
        key TEXT PRIMARY KEY,
        value TEXT NOT NULL,
        created_at TEXT NOT NULL
      )
    `).run();

    const row = await env.DB.prepare("SELECT value FROM app_config WHERE key = 'jwt_secret'").first();
    if (row && row.value && String(row.value).length >= 32) {
      _cachedSecret = row.value;
      return _cachedSecret;
    }

    const randomBytes = new Uint8Array(32);
    crypto.getRandomValues(randomBytes);
    const newSecret = Array.from(randomBytes).map(b => b.toString(16).padStart(2, '0')).join('');

    await env.DB.prepare(
      "INSERT OR IGNORE INTO app_config (key, value, created_at) VALUES ('jwt_secret', ?, ?)"
    ).bind(newSecret, new Date().toISOString()).run();

    const persisted = await env.DB.prepare("SELECT value FROM app_config WHERE key = 'jwt_secret'").first();
    _cachedSecret = persisted?.value || newSecret;
    return _cachedSecret;
  }

  throw new Error('JWT_SECRET dan database D1 tidak tersedia — penandatanganan sesi ditolak (fail-closed).');
}

async function getHmacKey(secret) {
  const enc = new TextEncoder();
  return crypto.subtle.importKey(
    'raw',
    enc.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign', 'verify']
  );
}

// 2. Tanda Tangani Token (Sign Token)
export async function signToken(payload, secret) {
  const enc = new TextEncoder();
  const header = { alg: 'HS256', typ: 'JWT' };
  const headerB64 = base64UrlEncode(enc.encode(JSON.stringify(header)));
  const payloadB64 = base64UrlEncode(enc.encode(JSON.stringify(payload)));
  const dataToSign = `${headerB64}.${payloadB64}`;

  const key = await getHmacKey(secret);
  const signature = await crypto.subtle.sign('HMAC', key, enc.encode(dataToSign));
  const sigB64 = base64UrlEncode(new Uint8Array(signature));

  return `${dataToSign}.${sigB64}`;
}

// 3. Verifikasi Token (Verify Token)
export async function verifyToken(token, secret) {
  if (!token || typeof token !== 'string') return null;
  const parts = token.split('.');
  if (parts.length !== 3) return null;

  const [headerB64, payloadB64, sigB64] = parts;
  const dataToSign = `${headerB64}.${payloadB64}`;
  const enc = new TextEncoder();

  try {
    const key = await getHmacKey(secret);
    const signature = base64UrlDecode(sigB64);
    const isValid = await crypto.subtle.verify('HMAC', key, signature, enc.encode(dataToSign));
    if (!isValid) return null;

    const payloadJson = new TextDecoder().decode(base64UrlDecode(payloadB64));
    const payload = JSON.parse(payloadJson);

    if (payload.exp && Date.now() > payload.exp) {
      return null;
    }
    return payload;
  } catch (e) {
    return null;
  }
}

let _revocationsTableEnsured = false;
export async function revokeSubjectTokens(db, subject) {
  if (!db || !subject) return;
  if (!_revocationsTableEnsured) {
    await db.prepare(`
      CREATE TABLE IF NOT EXISTS auth_revocations (
        subject TEXT PRIMARY KEY,
        min_iat INTEGER NOT NULL
      )
    `).run();
    _revocationsTableEnsured = true;
  }
  await db.prepare(`
    INSERT INTO auth_revocations (subject, min_iat) VALUES (?, ?)
    ON CONFLICT(subject) DO UPDATE SET min_iat = excluded.min_iat
  `).bind(String(subject), Date.now()).run();
}

export function getSubjectForSession(session) {
  if (!session) return null;
  if (session.role === 'guru') return 'guru';
  if (session.nis) return `siswa:${String(session.nis).trim()}`;
  return null;
}

export function getSessionRevokeKey(session) {
  if (!session) return null;
  if (session.jti) return `jti:${String(session.jti).trim()}`;
  return getSubjectForSession(session);
}

export function buildAuthCookie(request, token, maxAgeSec) {
  let isHttps = true;
  try {
    const u = new URL(request.url);
    isHttps = u.protocol === 'https:';
  } catch (_) {}
  const secureFlag = isHttps ? '; Secure' : '';
  return `auth_token=${encodeURIComponent(token || '')}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${Number(maxAgeSec || 0)}${secureFlag}`;
}

// 4. Ekstrak & Verifikasi Sesi dari Request (Hanya Bearer Header & HttpOnly Cookie; URL ?token= DITOLAK)
export async function authenticateRequest(request, env) {
  let token = null;

  const authHeader = request.headers.get('Authorization') || request.headers.get('authorization');
  if (authHeader && authHeader.toLowerCase().startsWith('bearer ')) {
    token = authHeader.substring(7).trim();
  }

  if (!token) {
    const cookieHeader = request.headers.get('Cookie') || request.headers.get('cookie') || '';
    const match = cookieHeader.match(/(?:^|;\s*)auth_token=([^;]+)/);
    if (match) {
      token = decodeURIComponent(match[1]);
    }
  }

  if (!token) return null;

  let secret;
  try {
    secret = await getJwtSecret(env);
  } catch (_) {
    return null;
  }

  const payload = await verifyToken(token, secret);
  if (!payload) return null;

  // Periksa tabel revokasi sesi (per-sesi jti pada logout, dan global subject pada reset/ganti sandi)
  if (env && env.DB) {
    const subject = getSubjectForSession(payload);
    const jtiKey = payload.jti ? `jti:${String(payload.jti).trim()}` : null;
    if (subject || jtiKey) {
      try {
        const querySql = (subject && jtiKey)
          ? "SELECT MAX(min_iat) as min_iat FROM auth_revocations WHERE subject = ? OR subject = ?"
          : "SELECT min_iat FROM auth_revocations WHERE subject = ?";
        const rev = (subject && jtiKey)
          ? await env.DB.prepare(querySql).bind(subject, jtiKey).first()
          : await env.DB.prepare(querySql).bind(subject || jtiKey).first();
        if (rev && rev.min_iat !== null && rev.min_iat !== undefined && Number(payload.iat || 0) <= Number(rev.min_iat || 0)) {
          return null;
        }
      } catch (_) {
        // Tabel belum dibuat (belum pernah logout/reset) -> belum ada revokasi
      }
    }
  }

  return payload;
}

// Helper Response JSON
export function jsonResponse(data, status = 200, headers = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...headers
    }
  });
}
