---
repo: "Lanternko/ARAM-Mayhem-Database"
name: "ARAM-Mayhem-Database"
description: "查詢 大亂鬥 的英雄和增幅裝置！"
url: "https://github.com/Lanternko/ARAM-Mayhem-Database"
homepage: "https://lanternko.github.io/ARAM-Mayhem-Database/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 23
forks: 2
openIssues: 4
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-05-13T01:05:37Z"
lastCommitAt: "2026-06-25T01:31:16Z"
lastReleaseAt: "2026-05-26T08:45:13Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 73
undervaluedScore: 39
maintainers: ["Lanternko"]
openGraphImageUrl: "https://opengraph.githubassets.com/d614fe46ab1097d9dc990d4f75c375980acc5e089bf1b91881d67c467c88e087/Lanternko/ARAM-Mayhem-Database"
discussionCount: 1
---

# ARAM Mayhem Database

> ARAM Mayhem 英雄勝率 tier list + Augment推薦 — 資料來自台服真實對局。

🔗 **Tier List 網站**: **<https://lanternko.github.io/ARAM-Mayhem-Database/>**

⭐ **覺得有用請按 Star ↗ 讓更多人看到**。

---

## 為什麼這個專案存在

Riot 公開 API 從 patch 14.x 開始**整場移除 Mayhem (queueId 2400)**，dev key 完全拿不到對戰資料。OP.GG / U.GG 之類網站也因此沒有 Mayhem 統計。

但 League 客戶端的本機 LCU API 還能查到自己 + 最近對手的 match 詳細資料（類似戰績稽查）。本專案：

1. 跑一個本機 collector 從你的 LCU snowball 擴張（self → 好友 → 對手 → 對手的對手 …）（橫向搜索BFS）
2. 把每場 大亂鬥 對局的 10 位玩家英雄 + augment + 勝負存進 Database

---

## 網站功能

- **英雄分 tier**（OP / T1–T5）按 Bayesian smoothed 勝率
- **點英雄**展開該英雄最適配 / 最不適配的 augment：
  - 彩色（Prismatic）/ 金色 / 銀色 各取 5 個最佳 + 5 個最差
  - 每張 augment hover 顯示中文效果敘述
- **角色 filter**（刺客 / 戰士 / 法師 / 射手 / 輔助 / 坦克）即時過濾
- **搜尋框**支援中文、英文 alias、角色關鍵字
- **手機 layout** 自動切換成單欄

---

## 怎麼貢獻 Mayhem 對局資料

整個流程設計成**只送出無 PUUID 的安全檔**、**全程在 GitHub Issue 公開稽核**。多人貢獻同場會自動以 Riot `game_id` 去重，所以不用擔心重複。

### 一次性安裝

```powershell
git clone https://github.com/Lanternko/ARAM-Mayhem-Database.git
cd ARAM-Mayhem-Database
python -m pip install -e .   # 需要 Python 3.13+
```

### 每次貢獻（2 步）

**步驟 1 — 跑 collector**

打開 League 客戶端（**不需要在玩**，登入在線即可），再開一個 PowerShell 視窗依序貼上兩行：

```powershell
python…
