---
repo: "Argh94/telegram-proxy-scraper"
name: "telegram-proxy-scraper"
description: "این پروژه یه اسکریپت پایتون برای جمع‌آوری خودکار پروکسی‌های MTProto تلگرام از منابع متنی و کانال‌های تلگرامه. پروکسی‌ها تو فایل proxy.txt ذخیره می‌شن و هر ۳ ساعت به‌صورت خودکار به‌روزرسانی می‌شن."
url: "https://github.com/Argh94/telegram-proxy-scraper"
homepage: "https://argh94.github.io/telegram-proxy-scraper/Files/index.html"
language: "HTML"
languages: ["HTML", "Python"]
languagePcts: [71, 29]
topics: ["mtproto-proxy", "proxy", "telegram-proxy", "collector-proxy"]
stars: 42
forks: 8
openIssues: 2
closedIssues: 1
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2025-07-11T00:19:27Z"
lastCommitAt: "2026-06-28T13:15:52Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 77
undervaluedScore: 49
maintainers: ["actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/ece09fff3c3db4e442c168a4f565026e8b424c0aa42fc163a2145a1a5c8c3181/Argh94/telegram-proxy-scraper"
---

# 📊 نتایج استخراج: (آخرین بروزرسانی: 16:45 07-04-1405)

</p>

این پروژه یک اسکریپت پایتون برای جمع‌آوری خودکار پروکسی‌های MTProto تلگرام از منابع متنی و کانال‌های تلگرام است. پروکسی‌ها در فایل `proxy.txt` ذخیره می‌شوند و هر 3 ساعت به‌صورت خودکار به‌روزرسانی می‌شوند.

## ✨ درباره پروژه

این اسکریپت با استفاده از `requests` برای منابع متنی و `selenium` برای کانال‌های تلگرام، پروکسی‌های MTProto را جمع‌آوری می‌کند. پروکسی‌های تکراری حذف شده و نتایج در فایل `proxy.txt` ذخیره می‌شوند. این فرآیند به‌صورت خودکار با **GitHub Actions** هر 3 ساعت اجرا می‌شود.

## 🚀 ویژگی‌ها
- 🌐 جمع‌آوری پروکسی از منابع متنی و کانال‌های تلگرام
- 🔄 به‌روزرسانی خودکار هر 3 ساعت
- 🗑 حذف پروکسی‌های تکراری
- 🔑 بدون نیاز به API تلگرام
- 📱 مناسب برای کاربران در جستجوی پروکسی‌های فعال MTProto

## 📋 پیش‌نیازها
- 🐍 پایتون 3.9
- 📦 کتابخانه‌های مورد نیاز: `requests`, `beautifulsoup4`, `selenium`, `pytz`, `jdatetime`
- نصب وابستگی‌ها با: `pip install -r requirements.txt`

## 🛠 نحوه استفاده
1. فایل `proxy.txt` را از [اینجا](proxy.txt) دانلود کنید.
2. لینک‌های پروکسی (با فرمت `tg://proxy?...` یا `https://t.me/proxy?...`) را در کلاینت تلگرام وارد کنید.
3. در جدول زیر، روی لینک‌های ستون **لینک پروکسی** کلیک کنید تا…
