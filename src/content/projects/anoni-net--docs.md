---
repo: "anoni-net/docs"
name: "docs"
description: "在臺灣，我們希望藉由推廣「匿名網路」與「網路自由」的概念，喚起社會大眾對這些重要議題的重視。  我們計劃使用 Tor、Tails 和 OONI 等開源匿名工具，來增強在網路上的匿名性和安全性。並希望如新聞媒體、獨立記者、公民團體與開源科技社群能夠有更多機會協作與交流，共同探討並開發出相對應的解決方案。"
readmeQualityOk: true
url: "https://github.com/anoni-net/docs"
homepage: "https://anoni.net/docs/"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [60, 39]
topics: ["censorship", "network-circumvention", "network-measurement", "ooni", "research", "tails", "tor"]
stars: 49
forks: 7
openIssues: 12
closedIssues: 36
watchers: 6
contributors: 9
recentReleases: 2
createdAt: "2023-10-16T05:34:30Z"
lastCommitAt: "2026-09-04T08:09:44Z"
lastReleaseAt: "2026-09-01T23:11:30Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 95
undervaluedScore: 58
maintainers: ["toomore"]
openGraphImageUrl: "https://opengraph.githubassets.com/9530e444d1390bde835e4b7070f231c0b12141179cb904d5570c9f9c0e85abbb/anoni-net/docs"
---

# 匿名網路社群文件 | anoni.net Docs

> 推廣與翻譯匿名網路 Tor、Tails 與 OONI 觀測工具

「匿名網路社群 anoni.net」的核心文件系統。倉庫裡有四個目錄：對外的多語系文件網站、Tor 中繼監控後端、OONI 觀測資料分析 CLI，以及支撐前三者的共用腳本與 CI 檢查。

## 📚 專案結構

```
anoni-net-docs/
├── docs/           # MkDocs 多語系文件網站（zh-TW、zh-CN、en）
├── pulse/          # Tor 中繼監控系統（FastAPI + PostgreSQL）
├── asn_coverage/   # OONI 觀測資料與 ASN 涵蓋率分析 CLI
└── tools/          # 共用腳本：編輯標準掃描、前端測試、資料產生、部署
```

四個目錄各有自己的 README，授權也不同，見下方「授權」一節。

### 1. docs：文件網站

基於 [MkDocs Material](https://squidfunk.github.io/mkdocs-material/) 的多語系網站，提供正體中文、簡體中文與英文三個版本。

**網站分區：**

| 分區 | 內容 |
|------|------|
| 指南 | 概念、工具、場景、進階、報告五組。工具依「連線層」、「環境層」、「觀測層」、「日常隱私基本功」分類 |
| 在地脈絡 | 台灣的觀測資料與法規制度（個資法、VASP、揭弊者保護） |
| 小工具 | 在瀏覽器內執行的隱私工具：威脅模型盤點、密語產生、QR code 產生與讀取、metadata 清除、網址清理、隱形字元偵測、瀏覽器指紋示範 |
| 互動與呈現 | 洋蔥路由與會合點的動畫，以及 Tor 中繼地球儀 |
| 資訊更新 | 部落格與 Tor、Tails、Arti、OONI 的軟體更新日誌 |
| 社群 | 參與方式、翻譯流程、貢獻者百科、架設中繼與 onion 服務、讀懂觀測資料 |
| 關於我們 | 專案介紹、聯絡方式、離線內容管理 |

**技術特點：**

- 三語系內容分別存放於 `docs/zh-TW/`、`docs/zh-CN/`、`docs/en/`，各有一份 mkdocs 設定檔。預設語系 zh-TW 建在根路徑
- 外掛：`blog`、`rss`、`charts`（Vega-Lite）、`social`（Open Graph 卡片）、`privacy`（建置時把 CDN 資源取回本地）、`git-revision-date-localized`、`redirects`
- 小工具區的運算全部在瀏覽器內完成，不送出使用者輸入。對應的守門測試放在 `tools/`
-…
