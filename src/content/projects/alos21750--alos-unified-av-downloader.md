---
repo: "Alos21750/ALOS-Unified-AV-Downloader"
name: "ALOS-Unified-AV-Downloader"
description: "Unified Windows AV/JAV downloader for JableTV, MissAV, SupJav & Hanime1 — browse on demand or auto-download new releases unattended, with Docker/CLI and local AI subtitles."
readmeQualityOk: true
url: "https://github.com/Alos21750/ALOS-Unified-AV-Downloader"
homepage: "https://github.com/Alos21750/ALOS-Unified-AV-Downloader/releases/latest"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ffmpeg", "jabletv", "missav", "missav-downloader", "python", "video-downloader", "windows", "jav-downloader", "supjav", "supjav-downloader"]
stars: 308
forks: 42
openIssues: 1
closedIssues: 39
watchers: 12
contributors: 4
recentReleases: 0
createdAt: "2026-04-15T09:44:24Z"
lastCommitAt: "2026-08-19T04:06:51Z"
lastReleaseAt: "2026-04-19T22:12:11Z"
status: "thriving"
tags: []
healthScore: 89
undervaluedScore: 29
maintainers: ["Alos21750", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/63be5cf8f852f31178a5027b126265bdf7d4ce0cd1ffbb63bd66d9bebf6525fc/Alos21750/ALOS-Unified-AV-Downloader"
discussionCount: 1
---

<strong>繁體中文</strong> · <a href="./README.zh-CN.md">简体中文</a> · <a href="./README.en.md">English</a> · <a href="./README.ja.md">日本語</a>
</p>

<h1 align="center">ALOS Unified AV Downloader</h1>

  JableTV、MissAV、SupJav、Hanime1 的桌面下載器與自動監控工具，內建 <strong>AI 生成字幕</strong>。<br />
  <strong>下載完成，自動補上 AI 字幕：</strong>日語音軌在本機辨識，可輸出日文、英文與繁中 SRT。<br />
  想自己瀏覽挑片，用 <strong>ALOS Browse</strong>；想依分類持續追新，用 <strong>ALOS Watch</strong>。<br />
  <strong>真正的核心是無人值守：</strong>選好分類與排程後，自動找新片、跨站去重、下載並補上字幕。
</p>

</p>

  <strong><a href="https://github.com/Alos21750/ALOS-Unified-AV-Downloader/releases/latest/download/ALOS_Browse.exe">下載 ALOS Browse</a></strong>
  ·
  <strong><a href="https://github.com/Alos21750/ALOS-Unified-AV-Downloader/releases/latest/download/ALOS_Watch.exe">下載 ALOS Watch</a></strong>
  ·
  ·
</p>

> [!TIP]
> **預設完全本地，不用 API Key，也不會上傳內容。** ALOS Browse 與 ALOS Watch 可在影片下載完成後，自動建立播放器可切換的 `.ja.srt`、`.en.srt`、`.zh-TW.srt`，且不修改 MP4。需要時也可自行接入常見 LLM API；雲端模式只會把辨識後的字幕文字作為影音內容送出，另含必要的 API 驗證與一般連線資訊，絕不傳送影片或音訊。

</p>

## 三種工作模式，一個下載核心

| 需求 | 建議 | 操作方式 |
|---|---|---|
| 想瀏覽、搜尋、逐片挑選 | **ALOS_Browse.exe** | 看片卡、複選、加入佇列或直接下載 |
| 想讓電腦無人值守自動追新 | **ALOS_Watch.exe** |…
