---
repo: "eddie772tw/FH6-HorizonTuner"
name: "FH6-HorizonTuner"
description: "一款立志滿足調校以及推秒需求的賽用儀表&調校工具程式"
readmeQualityOk: true
url: "https://github.com/eddie772tw/FH6-HorizonTuner"
homepage: "https://forum.gamer.com.tw/Co.php?bsn=07697&sn=27644"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [47, 20]
stars: 10
forks: 0
openIssues: 5
closedIssues: 19
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-25T08:11:11Z"
lastCommitAt: "2026-11-09T03:30:16Z"
lastReleaseAt: "2026-08-05T02:36:31Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 96
undervaluedScore: 51
maintainers: ["eddie772tw", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a8f1ed3a5658a185ff5b78ba781f5f7727d5833965e54d13df6bf17040b9973f/eddie772tw/FH6-HorizonTuner"
---

觀察車輛動態、用實測資料調校，打造自己的賽車儀表。

FH6-HorizonTuner 透過遊戲的 **Data Out UDP 遙測**接收車輛資料，整合即時儀表、四步調校流程、賽事紀錄與分析。Windows 版另提供可自訂的透明 HUD 覆蓋層，使用獨立視窗呈現，不注入遊戲程序。

桌面介面使用 Tauri、React 與 TypeScript；遙測接收、資料儲存與調校計算由 Rust 後端負責。

## 畫面預覽

**即時遙測**把駕駛輸入和車身反應放在同一頁。看油門與煞車曲線時，可以同時對照轉速、G 值、四輪胎溫與懸吊行程。

以下工作區與上方儀表板皆擷取自 [`main` 的網頁介面](https://github.com/eddie772tw/FH6-HorizonTuner/commit/be2158d630884e786398cef2e94acc583e1e6df7)，遙測與圈速使用示範資料。

| 四步調校 | 賽後分析 |
| --- | --- |
|  |  |
| 從車輛與調校目標開始，量測引擎後可檢查升檔後的轉速是否落在有效動力帶。[查看六檔 AEGO 齒比圖](https://github.com/eddie772tw/FH6-HorizonTuner/blob/HEAD/docs/frontend/assets/rhine-lab/gearing-rhine-light.png) | 熱力圖標出單圈中較快和較慢的路段。選另一圈疊上車速曲線，就能對照同一路段的速度差。[賽事分析指南](https://github.com/eddie772tw/FH6-HorizonTuner/blob/HEAD/docs/guides/race-analysis.md) |

| 直線加速測試 | Android Companion（Beta） |
| --- | --- |
|  |  |
| 加速曲線上的每次轉速下降都對應一次升檔，可對照右側的換檔前後轉速。 | 切換駕駛、軌跡、動態、輪胎或懸吊卡片，把想看的數據放到第二個螢幕。圖為瀏覽器橫向預覽。[Companion 連線說明](https://github.com/eddie772tw/FH6-HorizonTuner/blob/HEAD/companion/README.md) |

### Windows HUD

主儀表、輔助儀表和車用音響可以搭配使用。下圖並列三種 HUD 元件的離線預覽，由左至右為 NFSU2 主儀表、五款輔助表頭，以及 Pioneer 與 Panasonic 音響面板。

各款式的設定與原始截圖見 [NFSU2…
