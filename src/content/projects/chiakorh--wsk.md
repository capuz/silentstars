---
repo: "ChiakoRh/WSK"
name: "WSK"
description: "This project reads the main WhiteDNS sub (~400 servers) every hour and splits it by country into 34 separate subs — so you can pick individual countries in any app, not just WhiteVPN."
readmeQualityOk: true
url: "https://github.com/ChiakoRh/WSK"
homepage: "https://chiakorh.github.io/WSK/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-04T23:49:00Z"
lastCommitAt: "2026-11-26T23:37:17Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 51
maintainers: ["github-actions[bot]", "ChiakoRh"]
openGraphImageUrl: "https://opengraph.githubassets.com/34b8aea58f17f85c66bd37c6e47f375445ce8f2e17a99dc073f2c2ec6d0bd823/ChiakoRh/WSK"
---

# 📡 WSK — ساب تفکیک‌شده بر اساس کشور از روی WhiteDNS

سورس اصلی: https://github.com/iampedii/whitedns-sub (`mihomo.yaml` + `base64.txt`)
که ساب داخلی برنامه https://github.com/WhiteDNS/WhiteVPN هست.

این ریپو هر ۱ ساعت با گیت‌هاب اکشن ⏰ (`update.yml`) از ساب اصلی می‌خونه
و برای هر کشور یه ساب جدا می‌سازه، تا بشه تو برنامه‌های دیگه (v2rayNG، NekoBox، Clash، Streisand...)
هر کشور رو جدا وارد کرد — چیزی که WhiteVPN داخل خودش داره ولی بقیه برنامه‌ها ندارن.

## 🧭 فهرست

- [📂 فرمت‌ها](#formats)
- [🌐 سایت (کپی راحت لینک‌ها)](#site)
- [🔗 لینک مستقیم ساب‌ها](#direct)
- [🌍 لیست کشورها](#countries)
- [⚙️ اجرای دستی](#manual)
- [🙏 تشکر از سازنده اصلی](#thanks)

## 📂 فرمت‌ها (برای هر کشور `CC`)

| فرمت | فایل | به چه دردی می‌خوره |
|---|---|---|
| 🟣 mihomo proxies-only | `subs/mihomo/mihomo-CC.yaml` | WhiteVPN، Mihomo، Clash (مثل فایل اصلی) |
| 🟠 clash کامل | `subs/clash/clash-CC.yaml` | Clash/Mihomo/Streisand — با proxy-group آماده |
| 🔵 base64 | `subs/base64/base64-CC.txt` | v2rayNG، NekoBox، FoXray (فرمت استاندارد ساب) |
| ⚪ raw | `subs/raw/raw-CC.txt` | لینک‌ها به صورت متنی، برای کپی دستی |
