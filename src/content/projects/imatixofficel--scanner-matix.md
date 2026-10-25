---
repo: "imatixofficel/Scanner-matix"
name: "Scanner-matix"
description: "🔍 Clean Cloudflare IPs, tested every 10 minutes. Real speed. Real results. No duplicates. No fake data. Just fast IPs for your VLESS configs."
readmeQualityOk: true
url: "https://github.com/imatixofficel/Scanner-matix"
homepage: "https://imatixofficel.github.io/Scanner-matix/"
language: "Python"
languages: ["Python", "CSS", "JavaScript"]
languagePcts: [43, 26, 20]
topics: ["clean-ip", "fast", "ip", "ping", "scanner"]
stars: 6
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-19T21:35:32Z"
lastCommitAt: "2026-10-25T09:01:00Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 61
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ddcd6972f0a94b2fedce8b7aa18bf07a2fe4c0e4c1b3c31a31aecf15789abf57/imatixofficel/Scanner-matix"
---

# Matix Scanner — Multi-Source VPN-Oriented IP Scanner

> بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ 🤍

Matix Scanner یک اسکنر چندمنبعی برای پیدا کردن IPهای **واقعاً قابل‌دسترسی** است.

هدف نسخه 4 این است که از چند منبع رسمی (**Fastly، Cloudflare، CloudFront، Google**) IP جمع کند و کاربر خودش منبع را انتخاب کند.

## منابع

| منبع | وضعیت |
|---|---|
| ⚡ Fastly | رنج رسمی (API خود Fastly) |1
| ☁️ Cloudflare | رنج رسمی (API خود Cloudflare) |
| 🟧 CloudFront (آمازون) | رنج رسمی `ip-ranges.json` با فیلتر `CLOUDFRONT` |
| 🔷 Google | رنج رسمی `goog.json` (درصد IP سالم کمتر است، چون فقط بخشی از رنج وب‌سرور است) |
| 🖥️ Railway | فقط از hostname رسمی resolve می‌شود؛ رنج عمومی ثابت ادعا نمی‌شود |
| 🛡️ VPS / ✍️ Custom | فقط IPهایی که خودت در `custom_ips.txt` وارد می‌کنی |

سهم هر منبع در حالت `all`: Fastly 35٪ · Cloudflare 30٪ · CloudFront 15٪ · Google 8٪ · Custom 10٪ · Railway 2٪ (در `DEFAULT_MIX` داخل `scanner.py` قابل تغییر است).

در صفحه وب، بالای لیست می‌توانی **منبع** را انتخاب کنی (همه / Fastly / Cloudflare / CloudFront / Google / Railway / فقط پین‌شده‌ها). لیست همیشه از **کمترین پینگ** شروع می‌شود.

## تست کیفیت

هر IP فقط وقتی وارد `data/clean_ips.json` می‌شود که:

1. اتصال TCP به…
