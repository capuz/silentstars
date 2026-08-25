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
lastCommitAt: "2026-08-25T04:10:32Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 32
maintainers: ["codex"]
openGraphImageUrl: "https://opengraph.githubassets.com/d299a7ab9dee19413e39d5c7e66d9b2bd9a8b5ff796a944452e95b90cba8b9b9/wicanr2/fd2_re"
---

# 炎龍騎士團 2 反向工程與重製

本專案以合法原版《炎龍騎士團 2：黃金城傳說》作為行為基準，保存 DOS
程式的資料格式、介面與遊戲機制，並以 Go／Ebiten 建立可編輯、可擴充的
潔淨室重製引擎。《炎龍騎士團 2》是 1990 年代華文單機戰略角色扮演遊戲
（SRPG）的代表作之一；本專案也希望為 1995 年的台灣遊戲留下可重現的技術紀錄。

目前已有多個可操作、可比較的垂直切片，但**尚未達成 30 章原版等價通關**。
原版程式與美術、文字、音樂等受著作權保護的資產不包含在本倉庫中；使用者
必須自備合法原版。

## 目前進度

| 領域 | 已驗證成果 | 主要缺口 |
|---|---|---|
| 資產與格式 | `.DAT`、RLE 圖像、FDTXT／字型、AFM／FIGANI、XMIDI、地圖與部分 EXE 資料表可重現解析 | 部分執行期改寫、合成器與音訊播放尚未完整接入 |
| 反向工程 | 資產格式與多個底層原語已高度閉合；24 個標準戰後節點已全部接入正式執行期，戰鬥規則、敵方 AI、戰間服務、存檔與終局也都有具位址的窄切片 | 目前不能誠實換算成整支 EXE 百分比；已接入不等於已完成一般玩家 E2，完整指令／法術／物品交易與終局仍未閉合，詳見[反組譯覆蓋矩陣](https://github.com/wicanr2/fd2_re/blob/HEAD/docs/knowledge-base/58-fd2-exe-re-coverage.md) |
| Go／Ebiten 重製 | 地圖、對話與部分戰鬥可操作；城鎮、商店、教會、整備、自有 JSON 存檔及場景 BGM 已有窄切片；戰鬥曲與城鎮曲已有原版表格回歸；正式第30戰勝利路徑現以來源約束 E1 播放 `0x2BCE5` 前綴、原資源角色最終狀態蒙太奇、20 組尾段與 `FDOTHER#59` 終局定格 | 尚缺完整原版戰間流程、30 章一般玩家 E2、終局呼叫時 records／globals 連續性、3% RNG、精確音訊／輸入與跨平台驗收 |
| 原版視覺比對 | ch02 城鎮 variant0 六項、variant1 正常五項、variant2 正常五項（後兩者為修改 LOAD 路徑），以及部分商店、讀檔選單已有整幀 RGB 相同證據 | 尚無可靠的全介面百分比；祕密選項、一般玩家城鎮路徑、戰場、整備、教會與其餘章節仍需同狀態比較，詳見[介面證據矩陣](https://github.com/wicanr2/fd2_re/blob/HEAD/docs/knowledge-base/57-ui-evidence-matrix.md) |

### 距離完整重製還有多遠

> **評估快照：2026-08-25。** 本節依目前正式執行期、介面證據矩陣與一般玩家…
