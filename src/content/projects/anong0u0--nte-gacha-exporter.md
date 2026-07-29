---
repo: "Anong0u0/NTE_Gacha_Exporter"
name: "NTE_Gacha_Exporter"
description: "異環抽卡紀錄分析與導出 异环抽卡纪录分析与导出 Nevertheless to Everless gacha record analysis and export"
readmeQualityOk: true
url: "https://github.com/Anong0u0/NTE_Gacha_Exporter"
language: "Rust"
languages: ["Rust"]
languagePcts: [75]
topics: ["neverness-to-everness", "nte", "exporter", "gacha"]
stars: 24
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 10
createdAt: "2026-06-12T10:35:06Z"
lastCommitAt: "2026-07-29T06:14:39Z"
lastReleaseAt: "2026-06-30T17:52:10Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 68
undervaluedScore: 36
maintainers: ["Anong0u0"]
openGraphImageUrl: "https://opengraph.githubassets.com/c90872a95f5697da9212022ae64b7038364794ab52179ac8e0f6a4bbb7cc8063/Anong0u0/NTE_Gacha_Exporter"
---

# NTE Gacha Exporter | 異環抽卡紀錄導出

繁體中文 | [English](https://github.com/Anong0u0/nte_gacha_exporter/blob/master/docs/README.en.md)

使用 Windows pktmon 擷取異環封包，匯出限定棋盤、標準棋盤、弧盤研募紀錄，產生 JSON/CSV。

## 特色

- GUI，紀錄分析、瀏覽、篩選
- 自動翻頁協助擷取抽卡紀錄
- 匯入、合併、備份、匯出 JSON/CSV 格式資料
- 內建多語系輸出名稱：`de`、`en`、`es`、`fr`、`ja`、`ko`、`ru`、`zh-CN`、`zh-Hans`、`zh-Hant`

## 快速開始

1. 從 [GitHub Releases](https://github.com/Anong0u0/nte_gacha_exporter/releases) 下載最新 nte-gacha-exporter-version.zip
2. 解壓縮整個資料夾
3. 開啟 `nte-gacha-exporter.exe`

## UI 預覽

</p>

## 系統需求

- Windows 10 1809+ / Windows 11、WebView 2Runtime
- 需要管理員權限
- 已啟動的 NTE 遊戲
- 自動翻頁需要遊戲視窗處於前台可見、手動 F3 開啟抽卡頁面，建議使用 16:9 / 1920x1080

## 使用方式

開啟 `nte-gacha-exporter.exe` 後，點擊右上角「更新資料」。

右上角「...」可調整更新選項：

- `自動翻頁`：預設增量更新，遇到既有紀錄後跳過該池。
- `完整更新`：重新翻閱全部頁面，匯入前會建立備份；資料仍依紀錄合併。
- `WinDivert 抓包`：改用 WinDivert network layer 擷取，適用於 VPN、代理等 pktmon 無法解碼的網路。

使用自動翻頁前請讓遊戲停在 F3 抽卡主頁，且左下文件圖示與弧盤研募入口可見。
執行時，工具會操作前台遊戲視窗與滑鼠，請避免手動操作干擾。需要中止時可按 Esc。

CLI Examples:

```powershell
.\nte-gacha-exporter-cli.exe capture --output-raw --json .\output\history.json --csv .\output\history.csv
.\nte-gacha-exporter-cli.exe capture --windivert --install-windivert --output-raw --json .\output\history.json --csv…
