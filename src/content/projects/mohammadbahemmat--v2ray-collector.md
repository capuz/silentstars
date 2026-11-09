---
repo: "MohammadBahemmat/V2ray-Collector"
name: "V2ray-Collector"
description: "💠جمع‌آوری خودکار و رایگان کانفیگ‌های V2Ray از گیتهاب و تلگرام (بدون API). آپدیت هر ۱۵ دقیقه با GitHub Actions. خروجی تفکیک‌شده بر اساس پروتکل. 💠Automated & free collector for V2Ray configs from GitHub repos & Telegram channels (no API needed). Updates every 15min via GitHub Actions. Split output by protocol."
readmeQualityOk: true
url: "https://github.com/MohammadBahemmat/V2ray-Collector"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["automation", "config-collector", "free-internet", "github-actions", "hysteria2", "iran", "juicity", "proxy", "python", "shadowsocks"]
stars: 91
forks: 81
openIssues: 0
closedIssues: 2
watchers: 4
contributors: 2
recentReleases: 0
createdAt: "2026-04-28T23:16:25Z"
lastCommitAt: "2026-11-09T03:30:40Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 90
undervaluedScore: 42
maintainers: ["actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/d4dab0ac9f05b9706da199891734a5e5b9a05c41a259c90a927814d1101b02a7/MohammadBahemmat/V2ray-Collector"
---

<!DOCTYPE html>

این پروژه با بهره‌گیری هم‌زمان از <strong>مخازن گیتهاب</strong> و <strong>کانال‌های عمومی تلگرام</strong> (بدون نیاز به API، ربات یا شماره تلفن)، قدرتمندترین منبع کانفیگ‌های رایگان را فراهم می‌کند. تمام فرآیندها به‌صورت <strong>کاملاً خودکار</strong> روی GitHub Actions اجرا می‌شوند.
چیزی که این پروژه را از سایر جمع‌آوری‌کننده‌ها متمایز می‌کند، <strong>معماری یکپارچه، مدیریت هوشمند Rate Limit با توکن‌های دوگانه، و خروجی‌های تفکیک‌شده و همیشه تازه</strong> است.

        کتابخانه‌های موجود در <code>requirements.txt</code>:
        یکی از موارد زیر برای احراز هویت گیتهاب:

GH_TOKEN              → Personal Access Token (classic)
GH_APP_ID             → App ID برنامه‌ی گیتهاب شما
GH_APP_PRIVATE_KEY    → کلید خصوصی برنامه‌ی گیتهاب

cd V2ray-Collector</pre>

.
├── .github/
│   └── workflows/
│       ├── collector.yml              # گردش‌کار اصلی (اجرای یکپارچه خودکار)
│       └── cleaner_temp.yml           # گردش‌کار موقت برای پاکسازی کانال‌های تلگرام
│
├── src/
│   ├── collector_git.py               # اسکریپت اصلی جمع‌آوری از گیتهاب
│   ├── telegram_collector.py          # اسکریپت جمع‌آوری از تلگرام (بدون API)
│   ├── split_links.py                 # شکستن لینک‌های…
