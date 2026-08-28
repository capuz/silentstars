---
repo: "mudachyo/IP-Ranger"
name: "IP-Ranger"
description: "Автоматическое ежедневное обновление IP-подсетей по ASN (Cloudflare, Hetzner, OVH и др.) с генерацией готовых .srs-ruleset’ов для sing-box и интеграцией в Podkop (Remote Subnet Lists) на OpenWrt."
readmeQualityOk: true
url: "https://github.com/mudachyo/IP-Ranger"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 10
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-11-30T12:01:26Z"
lastCommitAt: "2026-08-28T14:25:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 43
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ca15bbdd2e6bffe2b7e33e7cf2faf958c08b048b018cc99c7c42161f1699383f/mudachyo/IP-Ranger"
---

# 🌐 IP-Ranger

### Автоматически обновляемые списки IP-подсетей для обхода блокировок

> 🕐 **Последнее обновление:** 2026-08-28 14:25:31 UTC

</div>

---

## 📖 Что это?

**IP-Ranger** — это готовое решение для тех, кто использует [Podkop](https://podkop.net/) на OpenWrt или sing-box для маршрутизации трафика через VPN/прокси.

### 🎯 Зачем это нужно?

Вместо того чтобы вручную искать и копировать IP-адреса заблокированных сервисов (Cloudflare, AWS, Google Cloud и др.), вы просто добавляете ссылку на наш список — и **всегда получаете актуальные данные**!

---

## 📥 Доступные списки

### 🎁 ALL-IN-ONE

**Все провайдеры в одном файле**

```
https://raw.githubusercontent.com/mudachyo/IP-Ranger/main/ip-lists/ALL-IN-ONE/all-in-one.srs
```

### 📋 Список по провайдерам

<br>

| 🏢 Провайдер | 🔢 ASN | 📦 SRS файл | 📄 JSON файл |
|-------------|--------|------------|--------------|
| **Akamai** | AS12222, AS16625, AS20940, AS63949, AS32787, AS31108 | [📥 akamai.srs](https://raw.githubusercontent.com/mudachyo/IP-Ranger/main/ip-lists/akamai/akamai.srs) | [📄 akamai.json](https://raw.githubusercontent.com/mudachyo/IP-Ranger/main/ip-lists/akamai/akamai.json) |
| **Alibaba Cloud** |…
