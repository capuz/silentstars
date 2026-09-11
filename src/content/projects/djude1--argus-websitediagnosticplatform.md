---
repo: "Djude1/Argus_WebsiteDiagnosticPlatform"
name: "Argus_WebsiteDiagnosticPlatform"
description: "ARGUS is a website audit and optimization platform that analyzes SEO, AEO, GEO, performance, and security issues, providing actionable recommendations to improve website visibility, user experience, and overall quality."
readmeQualityOk: true
url: "https://github.com/Djude1/Argus_WebsiteDiagnosticPlatform"
language: "Python"
languages: ["Python"]
languagePcts: [69]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-01-13T08:58:22Z"
lastCommitAt: "2026-09-11T06:36:19Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 61
maintainers: ["github-actions[bot]", "XiuJie2", "ZengAnatoly"]
openGraphImageUrl: "https://opengraph.githubassets.com/cb2b2b090d9df7e073dd27c6685d3b7770877d12271aa69d094e8e89f424b036/Djude1/Argus_WebsiteDiagnosticPlatform"
---

# Argus — AI 網站全方位健檢平台

> **輸入一個網址，Argus 自動執行全站爬蟲、四維分析與 AI 動態測試，產出可互動報告、Word 文件，以及能直接貼進 ChatGPT / Claude 的結構化問題 Prompt。**

---

## 目錄

- [Argus — AI 網站全方位健檢平台](#argus--ai-網站全方位健檢平台)
  - [目錄](#目錄)
  - [專案簡介](#專案簡介)
  - [功能特色](#功能特色)
    - [核心掃描能力](#核心掃描能力)
    - [平台功能](#平台功能)
  - [技術棧](#技術棧)
  - [系統架構](#系統架構)
  - [快速開始](#快速開始)
    - [先決條件](#先決條件)
    - [1. 複製專案](#1-複製專案)
    - [2. 安裝依賴](#2-安裝依賴)
    - [3. 設定環境變數](#3-設定環境變數)
    - [4. 初始化資料庫](#4-初始化資料庫)
    - [5. Build 前端並啟動](#5-build-前端並啟動)
    - [6. 驗證環境](#6-驗證環境)
  - [Docker 部署](#docker-部署)
  - [API 總覽](#api-總覽)
    - [認證](#認證)
    - [掃描](#掃描)
    - [點數與訂單](#點數與訂單)
    - [評論](#評論)
  - [點數制度](#點數制度)
  - [法律與倫理機制](#法律與倫理機制)
  - [專案結構](#專案結構)
  - [License](#license)

---

## 專案簡介

**Argus** 是 SaaS 級授權式網站健檢工具。使用者輸入目標網址並確認授權後，系統自動執行：

1. **全站爬蟲**：Playwright Chromium headless，BFS 廣度優先，同網域最多 50 頁 / 深度 3 層，遵守 `robots.txt`
2. **四維靜態掃描**：SEO × AEO × GEO × 被動資安，每個問題產出嚴重度、修補建議與 AI Handoff Prompt
3. **Hermes-Agent 動態 UX 測試**（Phase 2，**需明確啟用**）：LLM 驅動 Playwright 擬真使用者操作，自動回報流程斷點與 UI 缺陷。
   一般掃描**不會執行**——必須同時滿足：`ARGUS_AGENT_ENABLED=true`、掃描模式為 `active`、勾選主動測試授權、且非單頁掃描（`scan_plan.py` 的 `run_agent`），
   並設定 `MINIMAX_API_KEY` / `GLM_API_KEY` /…
