---
repo: "eddie772tw/FH6-HorizonTuner"
name: "FH6-HorizonTuner"
description: "一款立志滿足調校以及推秒需求的賽用儀表&調校工具程式"
readmeQualityOk: true
url: "https://github.com/eddie772tw/FH6-HorizonTuner"
homepage: "https://forum.gamer.com.tw/Co.php?bsn=07697&sn=27644"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [54, 20]
stars: 6
forks: 0
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-06-25T08:11:11Z"
lastCommitAt: "2026-08-21T04:10:27Z"
lastReleaseAt: "2026-08-05T02:36:31Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 66
maintainers: ["eddie772tw", "google-labs-jules[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/97023fd118036595cdc3d1d3fe7197dac8e6b146115174f30e0d5257da940a4d/eddie772tw/FH6-HorizonTuner"
---

# FH6-HorizonTuner 🏎️
> **Forza Horizon 6 Real-Time Telemetry Analyzer, Vehicle Tuning Workbench & Custom Racing Dashboard Overlay**
> **《極限競速：地平線 6》即時遙測分析、車輛調校工作台與賽車客製化儀表覆蓋層**

---

## 簡介 / Introduction

`FH6-HorizonTuner` 是一款專為《極限競速：地平線 6》開發的專屬遙測資料分析與車輛調校輔助工具。此專案整合了高效能的 Python FastAPI 後端封包監聽服務、現代化的 Tauri 桌面端圖形介面，以及完全免注入的 HTML5 Canvas / Tauri 透明儀表覆蓋層引擎。

目前此專案提供**即時遙測面板**、**自定義賽車儀表覆蓋層 (含視覺化編輯器)**、**車輛調校輔助**與**彈射起步測試**等核心功能，幫助玩家在操駕時即時監控車輛物理與動態反饋。

---

## 核心功能 / Core Features

* **即時遙測與物理動態分析 (60Hz Live Telemetry & Dynamics)**:
  - 60Hz 高頻 UDP 遙測封包接收與極致效能視效渲染。
  - 包含車速、轉速 (RPM)、馬力/扭力雙曲線、渦輪增壓值 (Boost) 與油門/煞車/方向盤輸入即時圖表。
  - 2D G-Force 運動雷達圖、4 輪獨立表面胎溫 (Tire Temp)、熱胎壓 (Hot Pressure) 與 4 輪正規化懸吊行程 (Suspension Travel)。
  - 後端提供有界的 pipeline metrics，並將 dyno profile 的首次讀取與持久化移出即時遙測迴圈。
* **5 步驟公式化車輛調校工作台 (5-Step Physics Tuning Workbench)**:
  - **Step 1 賽事目標 (Goal Setup)**：支援公路環道 (Road)、甩尾 (Drift)、越野拉力 (Rally) 與直線加速 (Drag) 四大賽事取向及空力效率配比。
  - **Step 2 AEGO 齒比 (AEGO Gearing)**：獨家 AEGO 齒比演算法與動力帶 (Powerband) 分析，支援 4-Speed Drag Meta、軟上限 (Soft Cap) 與極速閉環幾何二次修正。
  - **Step 3 底盤懸吊 (Chassis Tuner)**：防傾桿 (ARB 1/65 Meta 策略)、彈簧剛性、前傾姿態 (Forward Rake) 車高、黃金比例阻尼 (60% Bump Ratio) 與差速器鎖定率。
  - **Step 4…
