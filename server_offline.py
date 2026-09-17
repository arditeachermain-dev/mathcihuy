# -*- coding: utf-8 -*-
"""
====================================================================
MATH CIHUY • SERVER OFFLINE JARINGAN LOKAL (WIFI SEKOLAH / HOTSPOT)
====================================================================
Jalankan skrip ini agar seluruh siswa dapat mengakses materi dan CBT
hanya lewat koneksi Wi-Fi yang sama (100% TANPA KUOTA INTERNET).
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
    """
    Mendeteksi adapter jaringan aktif secara akurat dari ipconfig,
    memisahkan antara Wi-Fi asli, Mobile Hotspot, dan adapter virtual (VirtualBox/VPN).
    """
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

    # Urutkan: Wi-Fi aktif ber-gateway atau Hotspot di paling atas
    adapters.sort(key=lambda a: (
        not a['is_virtual'],
        a['has_gateway'],
        a['is_wifi'] or a['is_hotspot']
    ), reverse=True)

    return adapters

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def log_message(self, format, *args):
        client_ip = self.client_address[0]
        path = args[0] if args else ''
        if not path.endswith('.png') and not path.endswith('.svg') and not path.endswith('.ico'):
            print(f"  [+] TERHUBUNG: Siswa dari IP {client_ip} -> {path}")

def print_banner(adapters, port):
    border = "=" * 70
    print("\n" + border)
    print("  🚀 MATH CIHUY — SERVER OFFLINE JARINGAN LOKAL TELAH AKTIF!")
    print(border)
    print("  Status Server: ONLINE (Lokal - Tanpa Perlu Kuota Internet)")
    print(f"  Direktori    : {DIRECTORY}")
    print(f"  Port Layanan : {port}")
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
        print("\n  ⚠️  PERHATIAN: JANGAN berikan alamat di bawah ini ke siswa")
        print("      (Ini adalah adapter internal/virtual PC, bukan Wi-Fi):")
        for v in virtual_list:
            print(f"      ❌ http://{v['ip']}:{port} ({v['name']})")

    print("-" * 70)
    print("  💡 PETUNJUK KONEKSI:")
    print("  1. Pastikan HP/Laptop siswa tersambung ke Wi-Fi yang sama dengan PC ini.")
    print("  2. Di browser HP siswa, ketik alamat bertanda 👉👉👉 di atas.")
    print("  3. Jika HP siswa loading lama / tidak bisa akses (karena proteksi Wi-Fi sekolah):")
    print("     -> Aktifkan 'Mobile Hotspot' di Windows Settings PC Anda, lalu minta siswa")
    print("        konek ke Hotspot PC tersebut.")
    print("  4. Tekan [Ctrl + C] di jendela ini untuk mematikan server.")
    print(border + "\n")

def run():
    adapters = get_network_adapters()
    
    class ThreadedServer(socketserver.ThreadingMixIn, http.server.HTTPServer):
        daemon_threads = True

    server_address = ('0.0.0.0', PORT)
    try:
        httpd = ThreadedServer(server_address, CustomHandler)
        print_banner(adapters, PORT)
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n\n🛑 Server Offline dimatikan. Terima kasih!")
        sys.exit(0)
    except OSError as e:
        if "address already in use" in str(e).lower() or "10048" in str(e):
            print(f"\n❌ Error: Port {PORT} sedang aktif digunakan.")
            print(f"   Jika server sudah berjalan di jendela lain, Anda bisa langsung memakainya.")
        else:
            print(f"\n❌ Error: {e}")

if __name__ == '__main__':
    run()
