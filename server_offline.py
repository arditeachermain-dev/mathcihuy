# -*- coding: utf-8 -*-
"""
====================================================================
MATH CIHUY • SERVER OFFLINE JARINGAN LOKAL (WIFI SEKOLAH / HOTSPOT)
====================================================================
Jalankan skrip ini agar seluruh siswa dapat mengakses materi dan CBT
hanya lewat koneksi Wi-Fi yang sama (100% TANPA KUOTA INTERNET).
Didesain tahan beban hingga 100+ siswa bersamaan (High Concurrency).
"""

import http.server
import socketserver
import socket
import subprocess
import re
import os
import sys

# Konfigurasi Encoding Windows Console
if sys.platform == 'win32':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
        sys.stderr.reconfigure(encoding='utf-8')
    except Exception:
        pass

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

def get_network_adapters():
    adapters = []
    try:
        out = subprocess.check_output('ipconfig', text=True, encoding='cp1252', errors='ignore')
        sections = re.split(r'\n(?=[A-Za-z0-9])', out)

        for sec in sections:
            lines = sec.strip().split('\n')
            if not lines or not lines[0].strip():
                continue
            name = lines[0].replace(':', '').strip()
            ipv4 = None
            has_gateway = False

            for line in lines[1:]:
                if 'IPv4 Address' in line or 'Alamat IPv4' in line:
                    m = re.search(r':\s*([0-9\.]+)', line)
                    if m:
                        ipv4 = m.group(1).strip()
                if 'Default Gateway' in line or 'Gateway Default' in line:
                    m = re.search(r':\s*([0-9\.]+)', line)
                    if m and m.group(1).strip():
                        has_gateway = True

            if ipv4 and not ipv4.startswith('127.'):
                name_lower = name.lower()
                is_virtual = any(k in name_lower for k in ['virtual', 'ethernet 2', 'warp', 'bluetooth', 'vpn', 'vmware', 'vbox', 'pseudo'])
                is_hotspot = '192.168.137.' in ipv4 or 'local area connection* 1' in name_lower
                is_wifi = 'wi-fi' in name_lower or 'wireless' in name_lower or is_hotspot

                adapters.append({
                    'name': name,
                    'ip': ipv4,
                    'has_gateway': has_gateway,
                    'is_virtual': is_virtual,
                    'is_wifi': is_wifi,
                    'is_hotspot': is_hotspot
                })
    except Exception:
        pass

    adapters.sort(key=lambda a: (
        not a['is_virtual'],
        a['has_gateway'],
        a['is_wifi'] or a['is_hotspot']
    ), reverse=True)

    return adapters

class HighConcurrencyHandler(http.server.SimpleHTTPRequestHandler):
    protocol_version = "HTTP/1.1"

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        # Cache statis agar HP siswa meng-cache file dan tidak mengunduh ulang berkali-kali
        if self.path.endswith(('.js', '.css', '.png', '.svg', '.ico', '.woff2', '.ttf')):
            self.send_header('Cache-Control', 'public, max-age=86400')
        else:
            self.send_header('Cache-Control', 'no-cache')
        self.send_header('Connection', 'keep-alive')
        super().end_headers()

    def log_message(self, format, *args):
        client_ip = self.client_address[0]
        path = args[0] if args else ''
        if path.startswith('GET /index.html') or path.startswith('GET / '):
            print(f"  [+] SISWA TERHUBUNG: {client_ip}")

class HighConcurrencyServer(socketserver.ThreadingMixIn, http.server.HTTPServer):
    daemon_threads = True
    request_queue_size = 256  # Mampu menampung antrean 256 koneksi serentak tanpa drop

def print_banner(adapters, port):
    border = "=" * 70
    print("\n" + border)
    print("  🚀 MATH CIHUY — SERVER OFFLINE JARINGAN LOKAL (100+ SISWA READY)")
    print(border)
    print("  Status Server : ONLINE (Multi-Threaded • Antrean 256 Koneksi)")
    print(f"  Direktori     : {DIRECTORY}")
    print(f"  Port Layanan  : {port}")
    print("-" * 70)
    print("  📲 ALAMAT AKSES UNTUK SISWA (Buka di Google Chrome / Safari Siswa):")

    primary_shown = False
    virtual_list = []

    for a in adapters:
        if not a['is_virtual'] and (a['has_gateway'] or a['is_hotspot'] or a['is_wifi']):
            tag = "KONEKSI WI-FI UTAMA" if a['has_gateway'] else ("MOBILE HOTSPOT PC" if a['is_hotspot'] else "Jaringan LAN")
            print(f"\n     👉👉👉  http://{a['ip']}:{port}  👈👈👈")
            print(f"            ({tag} - {a['name']})")
            primary_shown = True
        else:
            virtual_list.append(a)

    if not primary_shown and adapters:
        first = adapters[0]
        print(f"\n     👉  http://{first['ip']}:{port}")

    if virtual_list:
        print("\n  ⚠️  PERHATIAN: JANGAN gunakan alamat internal PC di bawah ini:")
        for v in virtual_list:
            print(f"      ❌ http://{v['ip']}:{port} ({v['name']})")

    print("-" * 70)
    print("  💡 PETUNJUK KAPASITAS:")
    print("  - PC Anda sanggup melayani 100+ siswa serentak dengan lancar.")
    print("  - Pastikan Router Wi-Fi Sekolah mencukupi kapasitas pengguna.")
    print("  - Tekan [Ctrl + C] di jendela ini untuk mematikan server.")
    print(border + "\n")

def run():
    adapters = get_network_adapters()
    server_address = ('0.0.0.0', PORT)
    try:
        httpd = HighConcurrencyServer(server_address, HighConcurrencyHandler)
        print_banner(adapters, PORT)
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n\n🛑 Server Offline dimatikan. Terima kasih!")
        sys.exit(0)
    except OSError as e:
        if "address already in use" in str(e).lower() or "10048" in str(e):
            print(f"\n❌ Error: Port {PORT} sedang aktif digunakan.")
        else:
            print(f"\n❌ Error: {e}")

if __name__ == '__main__':
    run()
