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

def get_ip_addresses():
    ip_list = []
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.settimeout(0.2)
        s.connect(('10.255.255.255', 1))
        primary_ip = s.getsockname()[0]
        s.close()
        if primary_ip and not primary_ip.startswith('127.'):
            ip_list.append(primary_ip)
    except Exception:
        pass

    try:
        hostname = socket.gethostname()
        for ip in socket.gethostbyname_ex(hostname)[2]:
            if ip not in ip_list and not ip.startswith('127.'):
                ip_list.append(ip)
    except Exception:
        pass

    if not ip_list:
        ip_list.append('localhost')
    return ip_list

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def log_message(self, format, *args):
        client_ip = self.client_address[0]
        path = args[0] if args else ''
        print(f"  [*] Akses Siswa dari {client_ip} -> {path}")

def print_banner(ips, port):
    border = "=" * 68
    print("\n" + border)
    print("  [OK] MATH CIHUY - SERVER LOKAL OFFLINE BERHASIL AKTIF!")
    print(border)
    print("  Status   : SIAP DIGUNAKAN (100% Offline Tanpa Kuota Internet)")
    print(f"  Direktori: {DIRECTORY}")
    print(f"  Port     : {port}")
    print("-" * 68)
    print("  [!] ALAMAT AKSES UNTUK SISWA (Ketik di Chrome / Safari Siswa):")
    for i, ip in enumerate(ips):
        label = "Wi-Fi Sekolah / Adapter Utama" if i == 0 else f"Jaringan Alternatif {i}"
        print(f"     >>> http://{ip}:{port}   ({label})")
    print("-" * 68)
    print("  [i] PETUNJUK PENGGUNAAN:")
    print("  1. Pastikan HP/Laptop siswa terhubung ke Wi-Fi / Hotspot yang sama.")
    print("  2. Siswa buka browser dan ketik alamat URL di atas.")
    print("  3. Tekan [Ctrl + C] di jendela ini untuk mematikan server.")
    print(border + "\n")

def run():
    ips = get_ip_addresses()
    
    class ThreadedServer(socketserver.ThreadingMixIn, http.server.HTTPServer):
        daemon_threads = True

    server_address = ('0.0.0.0', PORT)
    try:
        httpd = ThreadedServer(server_address, CustomHandler)
        print_banner(ips, PORT)
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n\n[*] Server Offline dimatikan. Terima kasih!")
        sys.exit(0)
    except OSError as e:
        if "address already in use" in str(e).lower() or "10048" in str(e):
            print(f"\n[!] Error: Port {PORT} sedang digunakan oleh aplikasi lain.")
            print(f"    Silakan ubah variabel PORT di server_offline.py ke angka lain (misal: 8081).")
        else:
            print(f"\n[!] Error: {e}")

if __name__ == '__main__':
    run()
