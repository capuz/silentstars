---
repo: "Argh94/telegram-proxy-scraper"
name: "telegram-proxy-scraper"
description: "This project is a Python script for automatically collecting MTProto proxies from textual sources and Telegram channels. Proxies are stored in the file proxy.txt and are automatically updated every 3 hours."
originalDescription: "این پروژه یه اسکریپت پایتون برای جمع‌آوری خودکار پروکسی‌های MTProto تلگرام از منابع متنی و کانال‌های تلگرامه. پروکسی‌ها تو فایل proxy.txt ذخیره می‌شن و هر ۳ ساعت به‌صورت خودکار به‌روزرسانی می‌شن."
descriptionLang: "fa"
readmeQualityOk: true
url: "https://github.com/Argh94/telegram-proxy-scraper"
homepage: "https://argh94.github.io/telegram-proxy-scraper/Files/index.html"
language: "HTML"
languages: ["HTML", "Python"]
languagePcts: [71, 29]
topics: ["mtproto-proxy", "proxy", "telegram-proxy", "collector-proxy"]
stars: 43
forks: 8
openIssues: 2
closedIssues: 1
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2025-07-11T00:19:27Z"
lastCommitAt: "2026-07-06T07:04:13Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 77
undervaluedScore: 49
maintainers: ["actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/df2af6666b1b40bd83c993334a929682607caadb002da8d4dc2da8303015bba7/Argh94/telegram-proxy-scraper"
---

# 📊 Extraction Results: (Last update: 10:34 15-04-1405)

</p>

This project is a Python script for automatically collecting MTProto proxies from textual sources and Telegram channels. Proxies are stored in the file `proxy.txt` and are automatically updated every 3 hours.

## ✨ About the Project

This script uses `requests` for textual sources and `selenium` for Telegram channels to collect MTProto proxies. Duplicate proxies are removed and results are saved in the file `proxy.txt`. This process is automatically executed every 3 hours with **GitHub Actions**.

## 🚀 Features
- 🌐 Collecting proxies from textual sources and Telegram channels
- 🔄 Automatic updates every 3 hours
- 🗑 Removing duplicate proxies
- 🔑 No need for Telegram API
- 📱 Suitable for users looking for active MTProto proxies

## 📋 Requirements
- 🐍 Python 3.9
- 📦 Required libraries: `requests`, `beautifulsoup4`, `selenium`, `pytz`, `jdatetime`
- Install dependencies with: `pip install -r requirements.txt`

## 🛠 How to Use
1. Download the `proxy.txt` file from [here](https://github.com/Argh94/telegram-proxy-scraper/blob/HEAD/proxy.txt).
2. Enter the proxy links (in the format `tg://proxy?...` or…
