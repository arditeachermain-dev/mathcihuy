// functions/api/_auth.js
// Secure Cryptographic Token Authentication Module (Web Crypto HMAC-SHA256)
// Zero Dependency • Constant-Time Verification • Serverless SQLite D1 Secret Persistence

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

// 1. Ambil atau Buat Kunci Rahasia Serverless di D1
let _cachedSecret = null;
export async function getJwtSecret(env) {
  if (env && env.JWT_SECRET) return env.JWT_SECRET;
  if (_cachedSecret) return _cachedSecret;

  if (env && env.DB) {
    try {
      await env.DB.prepare(`
        CREATE TABLE IF NOT EXISTS app_config (
          key TEXT PRIMARY KEY,
          value TEXT NOT NULL,
          created_at TEXT NOT NULL
        )
      `).run();

      const row = await env.DB.prepare("SELECT value FROM app_config WHERE key = 'jwt_secret'").first();
      if (row && row.value) {
        _cachedSecret = row.value;
        return _cachedSecret;
      }

      // Generate strong 256-bit random secret
      const randomBytes = new Uint8Array(32);
      crypto.getRandomValues(randomBytes);
      const newSecret = Array.from(randomBytes).map(b => b.toString(16).padStart(2, '0')).join('');

      await env.DB.prepare(
        "INSERT INTO app_config (key, value, created_at) VALUES ('jwt_secret', ?, ?)"
      ).bind(newSecret, new Date().toISOString()).run();

      _cachedSecret = newSecret;
      return _cachedSecret;
    } catch (e) {
      console.warn("DB secret error:", e);
    }
  }

  return "mathcihuy_gis2_default_secure_secret_2026_fallback";
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

    // Cek kedaluwarsa (exp)
    if (payload.exp && Date.now() > payload.exp) {
      return null; // Token expired
    }
    return payload;
  } catch (e) {
    return null;
  }
}

// 4. Ekstrak & Verifikasi Sesi dari Request
export async function authenticateRequest(request, env) {
  let token = null;

  // Cek Header Authorization: Bearer <token>
  const authHeader = request.headers.get('Authorization') || request.headers.get('authorization');
  if (authHeader && authHeader.toLowerCase().startsWith('bearer ')) {
    token = authHeader.substring(7).trim();
  }

  // Cek Cookie: auth_token=<token>
  if (!token) {
    const cookieHeader = request.headers.get('Cookie') || request.headers.get('cookie') || '';
    const match = cookieHeader.match(/(?:^|;\s*)auth_token=([^;]+)/);
    if (match) {
      token = decodeURIComponent(match[1]);
    }
  }

  if (!token) return null;

  const secret = await getJwtSecret(env);
  return await verifyToken(token, secret);
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
