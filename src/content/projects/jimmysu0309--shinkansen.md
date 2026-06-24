---
repo: "jimmysu0309/shinkansen"
name: "shinkansen"
description: "快速、流暢的網頁及 YouTube 字幕翻譯擴充功能。支援 8 種目標語言與多種 AI 引擎，資料不經過第三方"
url: "https://github.com/jimmysu0309/shinkansen"
homepage: "https://jimmysu0309.github.io/shinkansen/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [88]
stars: 419
forks: 51
openIssues: 0
closedIssues: 45
watchers: 2
contributors: 4
recentReleases: 10
createdAt: "2026-04-10T16:35:02Z"
lastCommitAt: "2026-06-24T00:20:41Z"
lastReleaseAt: "2026-04-16T14:43:11Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 93
undervaluedScore: 31
maintainers: ["jimmysu0309", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/96e8545c385645b4976d5b958a44a9b047cdefbab733cb42d855ad379aa0b10a/jimmysu0309/shinkansen"
discussionCount: 2
---

[English](README.en.md) | **繁體中文**

# Shinkansen 🚄

快速、私密的網頁、YouTube 字幕翻譯擴充功能，支援 8 種目標語言與多種 AI 引擎（Google Gemini、Google Translate、OpenAI 相容自訂模型），原地替換網頁文字保留原始排版，瀏覽資料不經過第三方伺服器。

名稱「新幹線」象徵快速、平穩、流暢的閱讀體驗。

> [從 Chrome Web Store 安裝](https://chromewebstore.google.com/detail/shinkansen/pnhmlecoofeoofajcjenndnimhbodhlg) · [從 Firefox Add-ons 安裝](https://addons.mozilla.org/firefox/addon/shinkansen/) · [從 Mac App Store 安裝](https://apps.apple.com/tw/app/shinkansen-translator/id6768586680) · [下載最新版本 zip](https://github.com/jimmysu0309/shinkansen/releases/latest) · 安裝教學與產品介紹見 [官方網頁](https://jimmysu0309.github.io/shinkansen/) · [更新紀錄](https://jimmysu0309.github.io/shinkansen/release-notes.html)

## 近期重大更新

- 新增**懸浮按鈕**，點選即翻譯頁面，長按可切換翻譯引擎或叫出選單
- 新增**送到 Instapaper**，把翻譯後的整篇文章一鍵存進 Instapaper，日後可以重讀
- **iOS / iPadOS 版**即將登陸 App Store，敬請期待

## 為什麼做這個專案

既有的網頁翻譯工具大多需要將個人瀏覽內容傳送到第三方伺服器處理，隱私權難以掌控。Shinkansen 的設計從一開始就以隱私為核心：所有設定與資料都只存在你自己的電腦上；除了你自備的 Gemini API Key 直接連線 Google 之外，不會將任何資料外傳給其他第三方；原始碼完全公開，任何人都可以檢視它的安全性。

## 效能實測

我們拿英文維基百科的 Taiwan 條目（超過一千段文字）做壓力測試：記憶體不增反減（中文比英文精簡）、翻譯過程中網頁不會變卡（95% 以上的時間在等 API 回應，電腦幾乎不做額外運算）、翻完後頁面結構維持乾淨不留痕跡。用最便宜的模型翻完整頁，API 費用不到 0.08 美元（約台幣 2.5 元），翻過的內容自動快取，下次再開不用重新花錢。完整測試數據見…
