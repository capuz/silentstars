---
repo: "rismanasdk/Aplikasi-Kasir"
name: "Aplikasi-Kasir"
description: "Comprehensive Point of Sale and Operational Management System featuring multi-user authentication, real-time stock synchronization, payment gateway integration, advanced reporting, and role-based dashboards for retail and food service businesses."
readmeQualityOk: true
url: "https://github.com/rismanasdk/Aplikasi-Kasir"
homepage: "https://aplikasi-kasir-kappa.vercel.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [75]
stars: 5
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-08-27T02:42:31Z"
lastCommitAt: "2026-07-24T06:09:59Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 64
maintainers: ["rismanasdk"]
openGraphImageUrl: "https://opengraph.githubassets.com/9ff9aa7d526208b75699b88129a9a828d9ed1ffd80f6860547241c6a1c6a9ad0/rismanasdk/Aplikasi-Kasir"
---

# Aplikasi-Kasir (PUSAT)

Aplikasi Kasir adalah aplikasi Point of Sale (POS) full-stack untuk operasional toko/resto dengan frontend `React + TypeScript + Vite` dan backend `Express + MongoDB`. Repo ini sudah mencakup alur transaksi kasir, dashboard admin dan manajer, proses dapur/chef, keamanan server, dashboard publik untuk pelanggan, pembayaran online via `Midtrans`, upload gambar via `Cloudinary`, sinkronisasi stok via `Firebase RTDB`, update real-time via `Socket.IO`, serta pondasi laporan keuangan seperti HPP/laba, modal, aset tetap, liabilitas, dan neraca.

## Ringkasan Fitur

- Multi-role login: `super-admin`, `admin`, `manager`, `kasir`, `chef`, `user`, `security`
- Sistem Role-Based Access Control (RBAC) dengan **permission dinamis** yang dapat diatur oleh super-admin
- Dukungan **Multi Branch (Multi Cabang)** dengan isolasi data berdasarkan `branch_id` untuk setiap cabang restoran
- Manajemen cabang restoran beserta penempatan user ke cabang tertentu
- Login manual berbasis JWT dan login dengan Google OAuth
- Dashboard publik / pelanggan untuk melihat produk, checkout, dan riwayat pesanan
- Keranjang belanja, checkout, dan proses transaksi dengan status pesanan
-…
