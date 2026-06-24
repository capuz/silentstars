---
repo: "vaalaav/telemt-install"
name: "telemt-install"
description: "Автоустановка telemt + дополнения"
url: "https://github.com/vaalaav/telemt-install"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["mtproto", "mtproto-proxy", "telegram", "telemt"]
stars: 26
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-16T08:07:06Z"
lastCommitAt: "2026-06-24T06:38:25Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 35
maintainers: ["vaalaav", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/4ff6a26d1fa1d77dad6434a8710011c9e71ef9cbe0d81984f3ad513d11f0c369/vaalaav/telemt-install"
---

# Установка telemt proxy на VPS + примочки

🇷🇺 [Русский](#-русский) | 🇬🇧 [English](#-english)

---

## 🇷🇺 Русский

### Что это

Модульный автоустановщик **telemt** для Ubuntu — разворачивает прокси-сервер на VPS в одну команду. Поддерживает несколько инстансов с индивидуальными портами и доменами, опциональный VLESS Reality, камуфляжный сайт с TLS и защиту от DPI-зондирования.

### Возможности

- **Мультиинстанс** — до 4 параллельных прокси с отдельными секретами
- **VLESS Reality** — интеграция с xray-core для дополнительного транспорта
- **Камуфляжный сайт** — Nginx + Certbot, автоматический TLS-сертификат
- **Защита от DPI** — rate-limit через xt_recent и nftables SYN-лимитер
- **Тюнинг ядра** — BBR, TCP Keepalive
- **Файрвол** — автонастройка UFW
- **systemd-сервисы** — автозапуск, обновление (`--update`) и полная очистка (`--purge`)

### Быстрый старт

```bash
# Запуск от root на чистой Ubuntu 20.04+
git clone https://github.com/vaalaav/telemt-install.git
cd telemt-install
chmod +x install.sh
sudo ./install.sh
```

### Интерактивный менеджер управления

```bash
sudo mytelemtinfo
```

### Управление

```bash
sudo ./main.sh --update   # Обновление бинарника и перезапуск…
