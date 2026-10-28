---
repo: "MohammadBahemmat/V2ray-Collector"
name: "V2ray-Collector"
description: "💠 Automated & free collector for V2Ray configs from GitHub repos & Telegram channels (no API needed). Updates every 15min via GitHub Actions. Split output by protocol."
originalDescription: "💠جمع‌آوری خودکار و رایگان کانفیگ‌های V2Ray از گیتهاب و تلگرام (بدون API). آپدیت هر ۱۵ دقیقه با GitHub Actions. خروجی تفکیک‌شده بر اساس پروتکل. 💠Automated & free collector for V2Ray configs from GitHub repos & Telegram channels (no API needed). Updates every 15min via GitHub Actions. Split output by protocol."
descriptionLang: "fa"
readmeQualityOk: true
url: "https://github.com/MohammadBahemmat/V2ray-Collector"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["automation", "config-collector", "free-internet", "github-actions", "hysteria2", "iran", "juicity", "proxy", "python", "shadowsocks"]
stars: 86
forks: 81
openIssues: 0
closedIssues: 2
watchers: 4
contributors: 2
recentReleases: 0
createdAt: "2026-04-28T23:16:25Z"
lastCommitAt: "2026-10-28T09:57:32Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 90
undervaluedScore: 42
maintainers: ["actions-user", "MohammadBahemmat"]
openGraphImageUrl: "https://opengraph.githubassets.com/ccd229aa29002dabef5cd4a073f28bc746b114391a6a94d1f615fd839aef23ef/MohammadBahemmat/V2ray-Collector"
---

<!DOCTYPE html>

This project combines <strong>GitHub repositories</strong> and <strong>public Telegram channels</strong> (no API, bot, or phone number required) to provide one of the most powerful sources of free configs. All processes run <strong>fully automatically</strong> on GitHub Actions.
What distinguishes this project from other collectors is its <strong>unified architecture, smart Rate Limit management with dual tokens, and split, always-fresh outputs</strong>.

        Libraries listed in <code>requirements.txt</code>:
        One of the following for GitHub authentication:

GH_TOKEN              → Personal Access Token (classic)
GH_APP_ID             → App ID of your GitHub application
GH_APP_PRIVATE_KEY    → Private key of your GitHub application

cd V2ray-Collector</pre>

.
├── .github/
│   └── workflows/
│       ├── collector.yml              # Main workflow (automated unified run)
│       └── cleaner_temp.yml           # Temporary workflow for cleaning Telegram channels
│
├── src/
│   ├── collector_git.py               # Main script for collecting from GitHub
│   ├── telegram_collector.py          # Script for collecting from Telegram (no API)
│   ├──…
