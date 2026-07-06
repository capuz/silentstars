---
repo: "yazelin/catime"
name: "catime"
description: "AI-generated hourly cat images - a new cat every hour!"
originalDescription: "AI-generated hourly cat images - a new cat every hour!"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/yazelin/catime"
homepage: "https://yazelin.github.io/catime"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 6
forks: 1
openIssues: 9
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-01-30T05:41:37Z"
lastCommitAt: "2026-07-06T07:03:29Z"
lastReleaseAt: "2026-02-10T12:06:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 82
undervaluedScore: 46
maintainers: ["github-actions[bot]", "yazelin"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1145709362/9b815796-fcf0-47f7-88a0-70be57df5015"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/yazelin"]
discussionCount: 2
---

# <img src="docs/icon-192.png" width="32" height="32" alt="catime icon"> catime

**AI 生成的每小時貓咪圖片，每小時誕生一隻新貓！** 🐱

每小時，GitHub Actions 會透過 Google Gemini 自動生成一張獨特的貓咪圖片，上傳到 GitHub Release，並發佈到月度 issue。103+ 種藝術風格——從浮世繪到賽博龐克到刺繡微縮模型。每隻貓都有自己的故事。

🌐 **圖庫：** [yazelin.github.io/catime](https://yazelin.github.io/catime/)
📲 **Telegram：** [@catime_yaze](https://t.me/catime_yaze) — 每小時自動發圖
📦 **PyPI：** [catime](https://pypi.org/project/catime/)
🧩 **OpenClaw 技能：** `clawhub install catime`

> 📖 其他語言：[English](https://github.com/yazelin/catime/blob/HEAD/README.en.md) | [日本語](https://github.com/yazelin/catime/blob/HEAD/README.ja.md)

## 贊助

如果你喜歡 catime，歡迎透過 [Buy Me a Coffee](https://buymeacoffee.com/yazelin) 贊助本專案 ☕

所有贊助收入將用於 API 費用、運算資源與專案維護。詳見 [SPONSORS.md](https://github.com/yazelin/catime/blob/HEAD/SPONSORS.md)。

## 安裝與使用

```bash
pip install catime
```

```bash
catime                     # 顯示貓咪總數
catime latest              # 查看最新的貓
catime 42                  # 查看第 42 號貓
catime today               # 列出今天的貓
catime yesterday           # 列出昨天的貓
catime 2026-01-30          # 列出某天的所有貓
catime 2026-01-30T05       # 查看某小時的貓
catime --list              # 列出所有貓
catime view                #…
