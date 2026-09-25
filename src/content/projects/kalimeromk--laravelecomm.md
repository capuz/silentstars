---
repo: "KalimeroMK/LaravelEcomm"
name: "LaravelEcomm"
description: "E-commerce website in laravel 12, modular patern development, docker setup "
readmeQualityOk: true
url: "https://github.com/KalimeroMK/LaravelEcomm"
language: "PHP"
languages: ["PHP", "JavaScript", "CSS"]
languagePcts: [36, 24, 24]
topics: ["2fa-security", "docker", "e-commerce", "ecommerce", "laravel", "laravelmix", "paypal", "php", "seo-optimization", "shop"]
stars: 140
forks: 43
openIssues: 0
closedIssues: 10
watchers: 8
contributors: 4
recentReleases: 0
createdAt: "2021-08-18T15:22:32Z"
lastCommitAt: "2026-09-25T09:01:58Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 82
undervaluedScore: 36
maintainers: ["KalimeroMK", "zbogoevski"]
openGraphImageUrl: "https://opengraph.githubassets.com/baefcbe0d5b8a178ed5290e4957a4ed6a3c7d6496bbceaa7f3354a7ef3fbbe95/KalimeroMK/LaravelEcomm"
---

# Advanced E-commerce Platform in Laravel 13

### 🌐 Demo: https://e-comm.mk

---

## 📑 Table of Contents

- [🚀 Quick Start](#-quick-start)
- [✨ Features Overview](#-features-overview)
- [📸 Screenshots](#-screenshots)
- [📚 Documentation](#-documentation)
- [⚡ Blaze Template Engine](#-blaze-template-engine-custom-fork)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## 🚀 Quick Start

### Requirements

| | |
|---|---|
| **PHP** | 8.4 |
| **Laravel** | 13.x |
| **Node** | for the frontend build |

> **PHP 8.4, not 8.5.** `maatwebsite/excel` 3.x depends on `phpoffice/phpspreadsheet` 1.x, which declares `php >=7.4 <8.5`. `composer.json` pins `config.platform.php` to 8.4 so the lock file always resolves for the deployment runtime, and the Docker image is pinned to `dunglas/frankenphp:1-php8.4`. On PHP 8.5 `composer install` will refuse, and Excel import/export emits deprecations.

### Option 1: Docker (Recommended)

```bash
# 1. Clone and start
git clone https://github.com/KalimeroMK/LaravelEcomm.git
cd LaravelEcomm
docker-compose up -d

# 2. Install dependencies
docker exec e_comm_app composer install

# 3. Setup environment
cp .env.example .env
docker exec…
