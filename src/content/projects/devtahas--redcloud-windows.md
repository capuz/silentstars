---
repo: "Devtahas/RedCloud-windows"
name: "RedCloud-windows"
description: "Next-Gen Anti-Censorship Client for Windows (Flutter & Rust). Features Hybrid MASQUE H3, Sing-box 1.13, Hysteria 2, VLESS Reality, TUN Mode & Cloudflare Scanner."
readmeQualityOk: true
url: "https://github.com/Devtahas/RedCloud-windows"
homepage: "https://t.me/DevTaha_project"
language: "Dart"
languages: ["Dart", "Rust"]
languagePcts: [56, 27]
topics: ["masque", "vless", "vpn", "warp"]
stars: 24
forks: 3
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 4
createdAt: "2026-06-24T20:03:29Z"
lastCommitAt: "2026-09-12T08:04:23Z"
lastReleaseAt: "2026-09-04T14:42:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 58
undervaluedScore: 20
maintainers: ["Devtahas"]
openGraphImageUrl: "https://opengraph.githubassets.com/abc8fd86d8813875156706b1435f622bbda8cbf939ca253d7dd66cc76a67e9d3/Devtahas/RedCloud-windows"
---

# 🛡️ RedCloud VPN (نسخه 3.7 هیبریدی ویندوز)

### کلاینت نسل جدید ضدسانسور، فوق‌سریع و چند‌هسته‌ای برای ویندوز

**Next-Generation Anti-Censorship Client for Windows Powered by Flutter & Rust**

<br>

<b>ردکلاود (RedCloud)</b> یک کلاینت جامع، سبک و فوق‌العاده مقاوم در برابر شدیدترین اختلالات و فیلترینگ اینترنت است که با تلفیق رابط کاربری مدرن <b>Flutter</b> و هسته باینری پرسرعت <b>Rust</b> برای ویندوز توسعه یافته است.
</p>

[📥 دانلود فایل نصبی مستقیم](https://github.com/Devtahas/RedCloud-windows/releases/latest) • [📢 کانال تلگرام](https://t.me/DevTaha_project) • [📖 راهنمای کاربری](#-راهنمای-دانلود-و-نصب) • [❤️ حمایت مالی](#-حمایت-مالی-از-پروژه-donate)

</div>

---

## 🌟 معماری شبکه و جریان ترافیک (Traffic Flow)

در حالت اتصال هیبریدی، ترافیک بدون شناسایی توسط فایروال‌های DPI از دو لایه عبور می‌کند:

```text
[ کاربر / کل ترافیک سیستم‌عامل ویندوز ]
                    │
                    ▼
   [ کارت شبکه مجازی Wintun یا پروکسی سیستم ]
                    │
                    ▼
   [ هسته ویتوری (Sing-box v1.13.13) ]
                    │
                    │ VLESS Reality / Hysteria 2 / Trojan / ECH
                    │
                    │ زنجیره‌سازی از SOCKS5:…
