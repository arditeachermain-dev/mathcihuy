// functions/api/angket.js
// Endpoint Angket Refleksi Diri Pemahaman Matematika Kelas XII (Cloudflare D1)
// Digunakan untuk pengambilan data nyata pembelajaran Bab Statistika (P15 - P21)

import { authenticateRequest, jsonResponse } from './_auth.js';

export async function onRequestGet(context) {
  try {
    if (!context.env || !context.env.DB) {
      return jsonResponse({ error: 'Database D1 belum terhubung' }, 503);
    }

    const session = await authenticateRequest(context.request, context.env);
    const url = new URL(context.request.url);
    const nis = url.searchParams.get('nis');
    const isAll = url.searchParams.get('all') === '1';
    const isCsv = url.searchParams.get('export') === 'csv';

    // 1. EXPORT CSV UNTUK PRAKTIKUM STATISTIKA (GURU ATAU SISWA KELAS)
    if (isCsv) {
      const { results } = await context.env.DB.prepare(
        "SELECT nis, nama, kelas, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, total_poin, skor_d3, skor_peluang, skor_total, catatan, created_at, updated_at FROM angket_refleksi ORDER BY kelas ASC, nama ASC"
      ).all();

      const rows = results || [];
      const headers = [
        'NIS', 'Nama Siswa', 'Kelas',
        'Q1_Visualisasi_3D', 'Q2_Jarak_Titik_Garis', 'Q3_Jarak_Titik_Bidang', 'Q4_Sudut_Ruang',
        'Q5_Filling_Slots', 'Q6_Permutasi_Kombinasi', 'Q7_Peluang_Majemuk', 'Q8_Peluang_Bersyarat',
        'Q9_Kecukupan_Data', 'Q10_Keyakinan_TKA',
        'Total_Poin_10_Soal', 'Rerata_Dimensi_3', 'Rerata_Peluang', 'Skor_Rerata_Total', 'Catatan_Siswa', 'Waktu_Submit'
      ];

      let csvContent = '\uFEFF' + headers.join(',') + '\n';
      for (const r of rows) {
        const escapeCsv = (val) => {
          const str = String(val === null || val === undefined ? '' : val).replace(/"/g, '""');
          return `"${str}"`;
        };
        const totalP = r.total_poin !== null && r.total_poin !== undefined ? r.total_poin : (r.q1 + r.q2 + r.q3 + r.q4 + r.q5 + r.q6 + r.q7 + r.q8 + r.q9 + r.q10);
        const row = [
          escapeCsv(r.nis),
          escapeCsv(r.nama),
          escapeCsv(r.kelas),
          r.q1, r.q2, r.q3, r.q4,
          r.q5, r.q6, r.q7, r.q8,
          r.q9, r.q10,
          totalP,
          Number(r.skor_d3 || 0).toFixed(2),
          Number(r.skor_peluang || 0).toFixed(2),
          Number(r.skor_total || 0).toFixed(2),
          escapeCsv(r.catatan || ''),
          escapeCsv(r.updated_at || r.created_at)
        ];
        csvContent += row.join(',') + '\n';
      }

      return new Response(csvContent, {
        status: 200,
        headers: {
          'Content-Type': 'text/csv; charset=utf-8',
          'Content-Disposition': 'attachment; filename="Data_Refleksi_Matematika_Kelas_XII.csv"',
          'Cache-Control': 'no-cache'
        }
      });
    }

    // 2. REKAP SELURUH ANGKET (ALL DATA & AGGREGATE STATS)
    if (isAll) {
      const { results } = await context.env.DB.prepare(
        "SELECT nis, nama, kelas, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, total_poin, skor_d3, skor_peluang, skor_total, catatan, created_at, updated_at FROM angket_refleksi ORDER BY kelas ASC, nama ASC"
      ).all();

      const list = results || [];

      // Hitung ringkasan statistik per kelas
      const classSummary = {};
      const overall = {
        total_responden: list.length,
        q_avg: Array(10).fill(0),
        avg_d3: 0,
        avg_peluang: 0,
        avg_total: 0,
        avg_poin: 0
      };

      for (const item of list) {
        const k = item.kelas || 'Lainnya';
        if (!classSummary[k]) {
          classSummary[k] = {
            count: 0,
            q_sum: Array(10).fill(0),
            sum_d3: 0,
            sum_peluang: 0,
            sum_total: 0,
            sum_poin: 0
          };
        }
        classSummary[k].count++;
        for (let i = 1; i <= 10; i++) {
          const val = Number(item[`q${i}`] || 0);
          classSummary[k].q_sum[i - 1] += val;
          overall.q_avg[i - 1] += val;
        }
        const pTotal = item.total_poin !== null && item.total_poin !== undefined ? Number(item.total_poin) : (Number(item.skor_total || 0) * 10);
        classSummary[k].sum_d3 += Number(item.skor_d3 || 0);
        classSummary[k].sum_peluang += Number(item.skor_peluang || 0);
        classSummary[k].sum_total += Number(item.skor_total || 0);
        classSummary[k].sum_poin += pTotal;

        overall.avg_d3 += Number(item.skor_d3 || 0);
        overall.avg_peluang += Number(item.skor_peluang || 0);
        overall.avg_total += Number(item.skor_total || 0);
        overall.avg_poin += pTotal;
      }

      // Finalize Averages
      if (list.length > 0) {
        for (let i = 0; i < 10; i++) overall.q_avg[i] = Number((overall.q_avg[i] / list.length).toFixed(2));
        overall.avg_d3 = Number((overall.avg_d3 / list.length).toFixed(2));
        overall.avg_peluang = Number((overall.avg_peluang / list.length).toFixed(2));
        overall.avg_total = Number((overall.avg_total / list.length).toFixed(2));
        overall.avg_poin = Number((overall.avg_poin / list.length).toFixed(1));
      }

      for (const k in classSummary) {
        const c = classSummary[k];
        c.q_avg = c.q_sum.map(s => Number((s / c.count).toFixed(2)));
        c.avg_d3 = Number((c.sum_d3 / c.count).toFixed(2));
        c.avg_peluang = Number((c.sum_peluang / c.count).toFixed(2));
        c.avg_total = Number((c.sum_total / c.count).toFixed(2));
        c.avg_poin = Number((c.sum_poin / c.count).toFixed(1));
        delete c.q_sum;
        delete c.sum_d3;
        delete c.sum_peluang;
        delete c.sum_total;
        delete c.sum_poin;
      }

      return jsonResponse({
        total: list.length,
        overall,
        classSummary,
        data: list
      });
    }

    // 3. AMBIL DATA SISWA SPESIFIK BERDASARKAN NIS
    if (nis) {
      const cleanNis = String(nis).trim();
      const row = await context.env.DB.prepare(
        "SELECT * FROM angket_refleksi WHERE nis = ?"
      ).bind(cleanNis).first();

      return jsonResponse(row || null);
    }

    return jsonResponse({ error: 'Parameter NIS atau all=1 diperlukan' }, 400);
  } catch (err) {
    return jsonResponse({ error: err.message }, 500);
  }
}

export async function onRequestPost(context) {
  try {
    if (!context.env || !context.env.DB) {
      return jsonResponse({ error: 'Database D1 belum terhubung' }, 503);
    }

    let body;
    try {
      body = await context.request.json();
    } catch (e) {
      return jsonResponse({ error: 'Format JSON tidak valid' }, 400);
    }

    const { nis, nama, kelas, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, catatan } = body;

    if (!nis || !nama || !kelas) {
      return jsonResponse({ error: 'NIS, Nama, dan Kelas wajib diisi' }, 400);
    }

    // Validasi 10 Pertanyaan Skor (1 s.d. 10)
    const questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
    for (let i = 0; i < 10; i++) {
      const val = Number(questions[i]);
      if (isNaN(val) || val < 1 || val > 10) {
        return jsonResponse({ error: `Nilai Pertanyaan Q${i + 1} harus antara 1 sampai 10` }, 400);
      }
    }

    const cleanQ = questions.map(q => Math.round(Number(q)));
    const total_poin = cleanQ.reduce((a, b) => a + b, 0); // 10 s.d 100 poin
    const skor_d3 = Number(((cleanQ[0] + cleanQ[1] + cleanQ[2] + cleanQ[3]) / 4).toFixed(2));
    const skor_peluang = Number(((cleanQ[4] + cleanQ[5] + cleanQ[6] + cleanQ[7]) / 4).toFixed(2));
    const skor_total = Number((total_poin / 10).toFixed(2));

    await context.env.DB.prepare(`
      INSERT INTO angket_refleksi (
        nis, nama, kelas, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, catatan,
        total_poin, skor_d3, skor_peluang, skor_total, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
      ON CONFLICT(nis) DO UPDATE SET
        nama = excluded.nama,
        kelas = excluded.kelas,
        q1 = excluded.q1,
        q2 = excluded.q2,
        q3 = excluded.q3,
        q4 = excluded.q4,
        q5 = excluded.q5,
        q6 = excluded.q6,
        q7 = excluded.q7,
        q8 = excluded.q8,
        q9 = excluded.q9,
        q10 = excluded.q10,
        catatan = excluded.catatan,
        total_poin = excluded.total_poin,
        skor_d3 = excluded.skor_d3,
        skor_peluang = excluded.skor_peluang,
        skor_total = excluded.skor_total,
        updated_at = CURRENT_TIMESTAMP
    `).bind(
      String(nis).trim(),
      String(nama).trim(),
      String(kelas).trim(),
      cleanQ[0], cleanQ[1], cleanQ[2], cleanQ[3], cleanQ[4],
      cleanQ[5], cleanQ[6], cleanQ[7], cleanQ[8], cleanQ[9],
      catatan ? String(catatan).trim() : '',
      total_poin,
      skor_d3, skor_peluang, skor_total
    ).run();

    return jsonResponse({
      success: true,
      message: 'Refleksi diri matematika Anda berhasil tersimpan!',
      summary: {
        total_poin,
        skor_d3,
        skor_peluang,
        skor_total
      }
    });
  } catch (err) {
    return jsonResponse({ error: err.message }, 500);
  }
}
