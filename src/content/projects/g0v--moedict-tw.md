---
repo: "g0v/moedict.tw"
name: "moedict.tw"
description: "萌典cloudFlare worker複刻版, 整合 React + Vite + Wrangler + Functions + SSR 支援"
readmeQualityOk: true
url: "https://github.com/g0v/moedict.tw"
homepage: "https://www.moedict.tw"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [69, 20]
stars: 11
forks: 3
openIssues: 0
closedIssues: 104
watchers: 2
contributors: 99
recentReleases: 0
createdAt: "2025-11-05T06:00:28Z"
lastCommitAt: "2026-08-11T04:49:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 66
maintainers: ["audreyt", "bestian"]
openGraphImageUrl: "https://opengraph.githubassets.com/252858d9eba707c1b60e34da49a92e3fc56da847b82d26567de43aaa3206b91e/g0v/moedict.tw"
discussionCount: 0
---

# moedict.tw

萌典（moedict）前端重構專案，使用 React + TypeScript + Vite，部署於 Cloudflare Workers。

## 社群協作（最需要）

目前最需要的協助是幫忙實測、發現 bug、提出 issue。  
字典牽涉四種語系與多種複雜功能，很多問題必須靠實際跑流才會發現。  
所以想參與協作，不一定要先建立完整開發環境；像啄木鳥一樣持續實測與提報錯誤，也非常有幫助。

- 正式上線頁面：https://www.moedict.tw/
- 錯誤回報頁面：https://github.com/g0v/moedict.tw/issues

### 回報問題

- 請先確認是否已有相同 issue。
- 問題描述請包含：重現步驟、預期結果、實際結果、截圖（可選）、瀏覽器與作業系統版本。
- 資料相關問題（如部首、詞條、分類）請盡量附上對應詞條與 URL。

### 提交程式碼

- 建議流程：
  1. Fork 專案並開新分支（例如：`fix/radical-qing`、`feat/sidebar-keyboard`）。
  2. 完成修改後送出 Pull Request。
  3. PR 內容請包含：變更摘要、測試方式、風險/相容性說明。

### PR 最低檢查

- `vp check`
- `vp run typecheck`

## 使用自己的 Cloudflare R2 開發（必看）

本專案啟動前，**必須先將靜態資源與字典資料上傳到自己的 R2**。  
若未上傳，頁面會出現樣式缺失、查詢不到資料或 API 404。

### 1. 前置需求

- [Vite+](https://viteplus.dev/) 的全域 `vp` CLI（會管理 Node.js、Bun 與本專案工具鏈）
- rclone
- Cloudflare 帳號（可建立 R2 bucket 與 Worker）

### 2. 建立 R2 Buckets

可自訂名稱，以下為範例：

```bash
vp exec wrangler r2 bucket create <your-fonts-bucket>
vp exec wrangler r2 bucket create <your-fonts-bucket-preview>
vp exec wrangler r2 bucket create <your-assets-bucket>
vp exec wrangler r2 bucket create <your-assets-bucket-preview>
vp exec wrangler r2 bucket create <your-dictionary-bucket>
vp exec wrangler r2…
