// cron-worker/index.js
// Cloudflare Native Scheduled Worker untuk Kuis Harian 16:00:00 WIB
// Presisi 0 Detik • Edge Network Global • Bebas Antrean VM • Zero Local PC Dependency

export default {
  // Pemicu Scheduled Cron Trigger Resmi Cloudflare (Jalan Otomatis Jam 16:00:00 WIB Tepat)
  async scheduled(event, env, ctx) {
    const triggerTime = new Date().toISOString();
    console.log(`[Cloudflare Native Cron] Memulai trigger tepat waktu: ${triggerTime} (Cron: ${event.cron})`);

    const callPromise = fetch("https://mathcihuy.pages.dev/api/cron-quiz", {
      method: "POST",
      headers: {
        "Authorization": "Bearer mathcihuy-super-secret-cron-2026",
        "Content-Type": "application/json",
        "User-Agent": "Cloudflare-Native-Cron-Worker/1.0"
      }
    }).then(async res => {
      const data = await res.json().catch(() => ({}));
      console.log(`[Cloudflare Native Cron] Hasil broadcast:`, JSON.stringify(data));
    }).catch(err => {
      console.error(`[Cloudflare Native Cron] Gagal fetch:`, err);
    });

    ctx.waitUntil(callPromise);
  },

  // HTTP Endpoint untuk manual ping / diagnosa status worker
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const nowWib = new Date(Date.now() + 7 * 3600 * 1000);

    if (url.pathname === "/test" || url.pathname === "/run") {
      const resp = await fetch(`https://mathcihuy.pages.dev/api/cron-quiz${url.search}`, {
        method: "POST",
        headers: {
          "Authorization": "Bearer mathcihuy-super-secret-cron-2026",
          "Content-Type": "application/json"
        }
      });
      return new Response(await resp.text(), {
        status: resp.status,
        headers: { "Content-Type": "application/json" }
      });
    }

    return new Response(JSON.stringify({
      status: "active",
      worker: "mathcihuy-cron",
      schedule: "Setiap hari tepat pukul 16:00:00 WIB (09:00 UTC)",
      cron_expression: "0 9 * * *",
      currentTimeWib: nowWib.toLocaleString("id-ID", { timeZone: "Asia/Jakarta" }) + " WIB",
      engine: "Cloudflare Workers Native Edge Cron Triggers (0ms queue delay)"
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  }
};
