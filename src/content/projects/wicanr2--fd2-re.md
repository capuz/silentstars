---
repo: "wicanr2/fd2_re"
name: "fd2_re"
description: "炎龍騎士團2 反組譯研究"
readmeQualityOk: true
url: "https://github.com/wicanr2/fd2_re"
language: "Go"
languages: ["Go"]
languagePcts: [90]
stars: 49
forks: 7
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2026-06-27T15:35:03Z"
lastCommitAt: "2026-08-27T14:30:11Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 32
maintainers: ["codex"]
openGraphImageUrl: "https://opengraph.githubassets.com/7cc608fd11616edf8c6619b6a88f10ffd4aa80b487370964a3476ae14dea0c9a/wicanr2/fd2_re"
---

# 炎龍騎士團 2 反向工程與重製

## 引言

本專案以合法原版《炎龍騎士團 2：黃金城傳說》作為行為基準，保存它在 DOS
年代的資料格式、介面、音訊與遊戲機制，並以 Go／Ebiten 建立可編輯、可擴充的
潔淨室重製引擎。

我們要做的是重現經典，而不是把玩家困在永無止境的考古工作裡。原版戰役仍是
忠實模式的基準；對話、事件、戰鬥、城鎮、商店、教會、整備、隊伍與存檔則逐步
脫離寫死程式，成為日後能延伸新戰役的資料與規則。

原版程式及美術、文字、音樂等受著作權保護的資產不包含在本倉庫中。玩家必須
自備合法原版；本專案不代表原開發商或權利人。

## 遊戲介紹

《炎龍騎士團 2》是 1990 年代華文單機戰略角色扮演遊戲（SRPG）的代表作之一。
玩家在格狀戰場上指揮各具職業、裝備與法術的角色，並在戰鬥之間經歷劇情、城鎮、
商店、教會、轉職、整備及持續成長的隊伍。

它真正難以取代的地方，不只是三十場戰役，而是戰場、人物、音樂與戰間生活共同
形成的節奏。多數戰鬥結束後並非直接跳到下一戰；補給、交易、復活、轉職、存檔與
部署同樣是戰役的一部分。重製因此不能只還原戰鬥公式，也必須保留這條玩家路徑。

## 開發歷史

### 為台灣留一份技術紀念

逆向動畫資料時，我們在原版檔案裡找到一段幾乎被時間掩埋的署名：

> AFM — Animation File Manager Version 1.00<br>
> Copyright (C) 1993 Lo Yuan Tsung

這套由漢堂程式設計師自製的動畫工具，比遊戲發售早兩年。原始碼與說明書如今都
已不可得，但它設計的資料仍在遊戲裡運作。本專案把破解出的技術整理成可重現文件，
不只為了重製，也為了記錄 1995 年台灣團隊如何在 DOS 的限制下完成一款大型戰棋
角色扮演遊戲。

完整總覽：
[`1995 年怎麼做出《炎龍騎士團 2》`](https://github.com/wicanr2/fd2_re/blob/HEAD/docs/knowledge-base/15-how-fd2-was-made-1995.md)

### DOS 上的中文

DOS 本身不會替遊戲顯示中文。原版自帶點陣字型，文本也不是 Big5 字串：
`FDTXT.DAT` 保存的是 `uint16` 字模索引序列，共 1016 條字串、約 5.8 萬字；
`FDOTHER.DAT` 資源 #4 則包含 1824 個 16×16、1bpp 字模。索引 0–35 是數字與
英文字母，其後才是漢字。

| 字模解碼研究圖 | 對話解碼研究圖 |
|---|---|
|  |  |

以上兩圖是原版資料解碼研究產物，不是重製執行期畫面。格式與控制碼詳見…
