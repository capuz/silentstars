---
repo: "g0v/OpenTransLive"
name: "OpenTransLive"
description: "An open-source, broadcast-style live translation framework — built for event organizers."
url: "https://github.com/g0v/OpenTransLive"
homepage: "https://transcribe.g0v.tw"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [51, 46]
stars: 32
forks: 0
openIssues: 0
closedIssues: 17
watchers: 1
contributors: 97
recentReleases: 0
createdAt: "2025-09-11T08:05:58Z"
lastCommitAt: "2026-06-28T03:11:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 52
maintainers: ["SeanGau"]
openGraphImageUrl: "https://opengraph.githubassets.com/fa0548245b1f79f9f0434778af84f43919010a93e10e7c7eb9fda29777941231/g0v/OpenTransLive"
---

# OpenTransLive — 為活動舉辦方設計的開源廣播式即時翻譯框架

OpenTransLive 是一套**為活動舉辦方（event organizers）打造的廣播式（one-to-many）即時翻譯框架**，而非一般的會議協作工具。完整開源（GNU AGPL v3.0），具備網頁介面與 YouTube 同步支援，可自行部署、自由修改。

設計上假設活動現場有「一位講者／一組字幕團隊」作為轉錄來源，台下或線上的「無上限觀眾」則以自己偏好的語言收聽：在大螢幕、手機網頁或 YouTube 直播字幕上同步看到即時翻譯結果。

典型使用情境：研討會、黑客松、公聽會、社群 meetup、線上直播演講等需要把單一語音來源即時翻譯給跨語言聽眾的場合。觀眾端不需要註冊、不需要登入，也沒有人數上限——只有負責產出字幕的講者／字幕員需要連線送出音訊。

語言：繁體中文（[English](README.en.md)）

## 功能特色

- **即時語音轉錄**：支援多種轉錄引擎 (WhisperX、OpenAI、Groq、ElevenLabs Scribe、Google Speech-to-Text)
- **多語言翻譯**：使用 LLM 自動翻譯成多種語言，支援上下文感知翻譯
- **使用者帳號系統**：Email OTP 登入、管理員後台、即時轉錄權限管理、session co-owner
- **Session 控制台**：`/panel/{session_id}` 提供語言、Scribe 語言、語氣、關鍵字與文字字典設定
- **歷史字幕編輯**：`/edit/{session_id}` 可修改 / 刪除已儲存片段並更新所有翻譯
- **觀眾廣播**：觀眾頁 (`/rt`、`/yt`) 透過 SSE 接收字幕，免登入、無人數上限
- **YouTube 整合**：`/yt/{session_id}` 可與 YouTube 直播或影片時間軸同步
- **匯出**：JSON 全紀錄與單一語言 SRT 匯出
- **資料庫**：MongoDB 持久化，Redis 提供快取與多伺服器擴展

## 專案結構

```
opentranslive/
├── live_server/            # FastAPI + Socket.IO 網頁伺服器
│   ├── app/                # 主應用程式
│   │   ├── __init__.py     # FastAPI app、路由、Socket.IO handler
│   │   ├── config.py       # 設定檔（從 config.example.py 複製）
│   │   ├── database.py     # MongoDB 整合
│   │…
