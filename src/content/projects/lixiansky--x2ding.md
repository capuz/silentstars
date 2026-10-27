---
repo: "lixiansky/x2ding"
name: "x2ding"
description: "Twitter (X) intelligent monitoring bot that pushes content to DingTalk"
originalDescription: "Twitter (X) 智能监控机器人，并将内容推送到钉钉"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/lixiansky/x2ding"
language: "Python"
languages: ["Python"]
languagePcts: [87]
stars: 9
forks: 14
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-01-28T06:42:33Z"
lastCommitAt: "2026-10-27T09:16:25Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 70
undervaluedScore: 61
maintainers: ["actions-user", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/476ee443ff8392e1bace1d6324d7c25d7ef86d546b1a0aadb20f1965c95c9f40/lixiansky/x2ding"
---

# Twitter (X) Intelligent Monitoring Bot 🤖

This is an industrial-grade tweet monitoring solution based on **Playwright Stealth** technology. By simulating real browser behavior, it bypasses blocking and bot detection, and pushes Twitter posts (including text, images, translations, and retweets) to your DingTalk in real time.

This project is designed for **GitHub Actions**, running fully automatically without your own server, and also supports local loop mode.

> 📖 **[Quick Start Guide](https://github.com/lixiansky/x2ding/blob/HEAD/DEPLOYMENT.md)** | 🔧 **[Cloudflare Worker Deployment Tutorial](https://github.com/lixiansky/x2ding/blob/HEAD/cloudflare-worker.js)**

## ✨ Core Highlights

*   **🛡️ Strong Anti-Detection**: Abandons traditional RSS interfaces in favor of **Playwright browser automation** + Stealth plugin. Automatically simulates human clicks to easily get past Nitter captchas and access restrictions.
*   **🌐 Automatic Translation & Cleanup**: 
    *   **One-click translation**: Integrates the Google Translate (GTX) interface to automatically translate tweets into Chinese for quick reading.
    *   **Smart cleaning**: Automatically identifies and removes decorative…
