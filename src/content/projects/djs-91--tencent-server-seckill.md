---
repo: "djs-91/tencent-server-seckill"
name: "tencent-server-seckill"
description: "Tencent Cloud Lightweight Application Server 4 cores 4GB for 38 CNY/year: purchase script"
originalDescription: "腾讯云 轻量应用服务器 4核4G 38元/年 抢购脚本"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/djs-91/tencent-server-seckill"
language: "Python"
languages: ["Python"]
languagePcts: [94]
topics: ["automation", "cloud", "playwright", "python", "seckill", "tencent-cloud"]
stars: 23
forks: 4
openIssues: 0
closedIssues: 6
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-15T05:05:45Z"
lastCommitAt: "2026-10-29T10:03:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 23
maintainers: ["djs-91", "Xenes-cyber"]
openGraphImageUrl: "https://opengraph.githubassets.com/34b5492989483400d291ada58a08d17269180cd711ba6c38a62b1a42cafe9264/djs-91/tencent-server-seckill"
---

# Tencent Cloud Server Purchase Assistant

Automatic ordering tool for Tencent Cloud's “Cloud Selection · Limited-Time Flash Sale” lightweight application servers (38 CNY/year, 4 cores 4GB 3M).

Clicking “Buy Now” manually when the event starts often fails to place an order. This tool does not click on the page. Instead, it calls the `do-goods` interface directly from within the page, with the Cookie and CSRF Token carried by the browser itself.

Event page: https://cloud.tencent.com/act/pro/double11-202611#MS

> The event page slug changes every round (`featured-202607` → `double11-202611` → …). When the page address changes, you only need to change the single `ACTIVITY_URL` line at the top of `seckill.py`. The activity id and product id are fetched automatically at runtime and do not need to be edited manually.

## Environment Setup

Requires Python 3.10 or higher, with the dependencies installed:

```bash
pip install -r requirements.txt
```

This command only installs Python packages. It does not download a browser. If Chrome or Edge is installed locally, it is used directly (the log will show `使用浏览器: 本机 Chrome`). Chromium only needs to be installed if neither is present; see…
