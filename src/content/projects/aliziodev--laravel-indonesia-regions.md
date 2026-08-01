---
repo: "aliziodev/laravel-indonesia-regions"
name: "laravel-indonesia-regions"
description: "Laravel package for Indonesia regions selection with postal codes | Package Laravel untuk pemilihan wilayah Indonesia lengkap dengan kode pos"
readmeQualityOk: true
url: "https://github.com/aliziodev/laravel-indonesia-regions"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
stars: 25
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-03-06T21:14:02Z"
lastCommitAt: "2026-08-01T06:16:15Z"
lastReleaseAt: "2025-05-26T00:00:03Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 76
undervaluedScore: 56
maintainers: ["github-actions[bot]", "mu-hanz", "aliziodev"]
openGraphImageUrl: "https://opengraph.githubassets.com/98e99941e048775b2597d7b1792abc5cfc8040273e159cec376db4bf3a08ce92/aliziodev/laravel-indonesia-regions"
discussionCount: 3
---

# Laravel Indonesia Regions (Laravel Wilayah Indonesia)

Package Laravel untuk data wilayah Indonesia lengkap dengan kode pos. Package ini menyediakan data provinsi, kota/kabupaten, kecamatan, dan desa/kelurahan.

Package ini dipertahankan sebagai package kompatibilitas untuk integrasi lama. Dataset package ini disinkronkan dari repo upstream `aliziodev/laravel-wilayah` dan disimpan sebagai file PHP agar install dan update tetap lintas database.

## Fitur

-   Data wilayah Indonesia lengkap dan terupdate (sesuai Kepmendagri No 300.2.2-2138 Tahun 2025)
-   Kode pos untuk setiap desa/kelurahan
-   Cache system untuk performa optimal
-   Facade untuk penggunaan yang mudah
-   Support untuk Laravel 11.x dan 12.x
-   Pencarian wilayah
-   Pencarian dengan alamat lengkap
-   Pencarian full text hingga level desa
-   Hirarki/Info wilayah
-   Format untuk dropdown/select
-   Pagination support
-   Format nama negara terbatas ke `Indonesia` atau `ID`
-   Sync dataset via command setelah `composer update`
-   Pencarian case-insensitive termasuk di PostgreSQL
-   Endpoint API bawaan yang siap dipakai

## Instalasi

```bash
composer require aliziodev/laravel-indonesia-regions
```

Kemudian…
