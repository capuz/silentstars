---
repo: "Bangkahdev/AegisCrypt-Web"
name: "AegisCrypt-Web"
description: "AegisCrypt Web is a modern, high-performance encryption tool built with React and the Web Crypto API. It brings desktop-grade security (AES-256-GCM) to the browser, allowing users to encrypt and decrypt files and folders locally without data ever leaving their device."
readmeQualityOk: true
url: "https://github.com/Bangkahdev/AegisCrypt-Web"
homepage: "https://aegis-crypt-web.vercel.app/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
topics: ["aegis", "enc", "encryption"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-11-30T20:09:39Z"
lastCommitAt: "2026-11-12T05:42:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 81
undervaluedScore: 50
maintainers: ["Bangkah"]
openGraphImageUrl: "https://opengraph.githubassets.com/bccb65bbc91a1c85c2e931527a0a407fe4efe74d8a3797d7325ec6a0ded35e75/Bangkahdev/AegisCrypt-Web"
fundingLinks: ["PATREON:https://patreon.com/", "OPEN_COLLECTIVE:https://opencollective.com/", "KO_FI:https://ko-fi.com/", "CUSTOM:https://mdhiyaulatha.me"]
---

# AegisCrypt Web

> **English Version:** bisa dilihat [disini](https://github.com/Bangkahdev/AegisCrypt-Web/blob/HEAD/README.md).

**Suite Enkripsi Berbasis Klien Profesional**

**Live:** [Aplikasi](https://aegiscrypt.bangkah.tech) · [Dokumentasi](https://docs.aegiscrypt.bangkah.tech)

AegisCrypt Web adalah alat enkripsi berbasis browser dengan standar militer. Dirancang dengan prinsip **Zero-Knowledge**, yang berarti file dan kata sandi Anda diproses sepenuhnya di dalam RAM browser melalui Web Crypto API dan tidak pernah dikirimkan ke server eksternal mana pun.

---

## Fitur Utama

* **AES-256-GCM**: Enkripsi terotentikasi yang dapat mendeteksi manipulasi data.
* **Autentikasi Dua Faktor (2FA)**: Menggabungkan `Kata Sandi` + `Keyfile` (misalnya foto, dokumen) untuk keamanan tingkat lanjut.
* **Streaming Engine (v3)**: Enkripsi envelope per file dengan header 128 byte, record terautentikasi, dan pemrosesan per chunk — cocok untuk file berukuran gigabyte tanpa membuat browser *crash*.
* **Nama file terenkripsi**: Nama asli disimpan sebagai metadata terenkripsi di container (flag bit2) dan dipulihkan saat dekripsi.
* **Ganti kata sandi (rewrap)**: Bungkus ulang kunci file dengan…
