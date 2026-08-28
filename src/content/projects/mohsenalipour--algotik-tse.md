---
repo: "mohsenalipour/algotik_tse"
name: "algotik_tse"
description: "A python package for get Tehran stock market data"
readmeQualityOk: true
url: "https://github.com/mohsenalipour/algotik_tse"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 11
forks: 2
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-09-30T11:10:42Z"
lastCommitAt: "2026-08-28T15:32:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 55
undervaluedScore: 46
maintainers: ["mohsenalipour"]
openGraphImageUrl: "https://opengraph.githubassets.com/4c819b44d984c41f6b84cc88b73eb71de7d3eb6075f709f78ddf8e3f1852d1cc/mohsenalipour/algotik_tse"
---

# AlgoTik TSE

**A Python toolkit for historical, live and analytical data from Iran's capital market.**

Fetch TSETMC prices, client type, trades, order books, funds, bonds and options with Jalali date support, then use the built-in fixed-income and option analytics for research and algorithmic trading.

### 🇮🇷 معرفی فارسی

`algotik-tse` برای دریافت و تحلیل داده‌های بورس و فرابورس ایران ساخته شده است. با نام فارسی نماد می‌توانید تاریخچهٔ قیمت، حقیقی/حقوقی، معاملات ریز، سفارش‌ها و اطلاعات لحظه‌ای بازار را بگیرید؛ فهرست صندوق‌ها، اوراق و اختیارها را بسازید؛ و تحلیل‌های تخصصی اخزا و اختیار معامله را روی همان داده‌ها انجام دهید.

بیشتر خروجی‌های جدولی به‌صورت **Pandas DataFrame** ارائه می‌شوند و تاریخ شمسی، تاریخ میلادی و داده‌های چندنمادی پشتیبانی می‌شوند. خروجی‌های ساختاریافته‌ای مانند snapshot بازار، زنجیرهٔ اختیار و منحنی بازده در بخش [نوع خروجی](#نوع-خروجی) توضیح داده شده‌اند.

## ویژگی‌ها

- دریافت تاریخچهٔ قیمت و حقیقی/حقوقی با نماد فارسی، تاریخ شمسی/میلادی، تعدیل قیمت، بازده و خروجی چندنمادی
- افزودن کنترل‌شدهٔ ردیف امروز با `include_today=True` و metadata مربوط به freshness و partial بودن داده
- نمای زندهٔ کل بازار یا یک نماد، قدرت خریدار، جریان پول، spread و imbalance پنج…
