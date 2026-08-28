---
repo: "NightSay2002/time_tavern"
name: "time_tavern"
description: "ai酒館，deepseek特攻命中率，高自由度"
readmeQualityOk: true
url: "https://github.com/NightSay2002/time_tavern"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [86]
topics: ["ai", "chat", "llm"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-12T13:24:32Z"
lastCommitAt: "2026-08-28T15:35:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 53
maintainers: ["NightSay2002"]
openGraphImageUrl: "https://opengraph.githubassets.com/5738f0a9049ba0cb624685a1bbcfb8eed5c1effbfdf7d6fe5218f77ccb708702/NightSay2002/time_tavern"
---

# 時分居酒屋

本地長篇角色對話工具，包含主聊天頁、角色卡與 Prompt 編輯、模型內容管理、Discord Bot，以及 NovelAI 跑圖頁。

## 快速啟動

啟動器需求：

- 第一次啟動可連線至 `nodejs.org` 與 npm registry
- 對話 API key：OpenAI-compatible Chat Completions API
- 選配：Discord Bot Token
- 選配：NovelAI Persistent API Token

`start-mac.command` 與 `start-win.bat` 會檢查 Node.js。系統已有 Node.js `>=18` 與 npm 時直接使用；否則從 Node.js 官方下載最新 Node.js 24.x LTS 到 `.runtime/node/`，驗證 SHA-256 後供此專案使用，不需要管理員權限，也不會修改系統 Node.js。

macOS：

```bash
./start-mac.command
```

Windows：

```bat
start-win.bat
```

手動啟動：

```bash
npm install
cp .env.example .env
npm start
```

手動執行 `npm start` 才需要預先自行安裝 Node.js `>=18` 與 npm。

啟動後打開：

- 主頁：`http://localhost:3234`
- NovelAI：`http://localhost:3234/novelai.html`

`npm start` 會先檢查目前追蹤的 GitHub 分支。工作區沒有程式碼改動且可 fast-forward 時會自動更新；離線、有本機程式碼改動或分支已分岔時會保留現況並繼續啟動。

使用者的角色卡、使用者設定、Prompt、目前對話與本機預設都放在被 Git 忽略的 `data/`，自動更新不會覆蓋。根目錄 `.env` 會自動備份到 `data/environment.env`；新版本缺少 `.env` 時，啟動器會由該備份還原。舊版若曾把「儲存預設」或 Prompt 寫進追蹤檔，更新器會先遷移到 `data/` 再更新程式碼。

若本機程式檔改動使自動更新跳過，手動更新時先停止服務並備份整個 `data/`，取得乾淨的新版本後，只把備份的 `data/` 放回新版本再啟動。不要用舊程式檔覆蓋新版本。`data/environment.env` 含 Token 與 API Key，請勿分享或提交。

這個檢查只在每次 `npm start` 啟動時執行一次，不會中斷正在運行的 server 做熱更新。每台 server 都需要以 `npm start`…
