---
repo: "kirmisaki/FrameFilm"
name: "FrameFilm"
description: "帧影（FrameFilm）全彩墨水屏冰箱贴"
readmeQualityOk: true
url: "https://github.com/kirmisaki/FrameFilm"
homepage: "https://kirmisaki.github.io/FrameFilm/"
language: "C"
languages: ["C", "Dart"]
languagePcts: [35, 28]
topics: ["esp-idf", "esp32s3", "ink"]
stars: 111
forks: 27
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 6
createdAt: "2026-04-27T07:24:19Z"
lastCommitAt: "2026-11-09T11:59:37Z"
lastReleaseAt: "2026-11-09T08:56:40Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 90
undervaluedScore: 37
maintainers: ["kirmisaki", "Rafael-Ikaros", "RANH-F"]
openGraphImageUrl: "https://opengraph.githubassets.com/dd6c5fe5f5dd665adc776e5d934c010a2c9c20aefe9ec5cbcc86144677b2ab51/kirmisaki/FrameFilm"
---

# 帧影（FrameFilm）

*彩色电子纸显示 × 低功耗 × 多端传输*

---

## 项目概述

帧影（FrameFilm）是一套彩色电子纸系列产品及其配套工具。

硬件包括冰箱贴（基础版 / Pro）、桌面电子相册 Max、通行证版 Ark 和充电底座 Dock。各产品均使用彩色电子纸屏幕，可断电保留画面，支持蓝牙、WiFi 或 USB 连接，接收来自手机、网页或云端服务的图片并显示。

"帧影"取"一帧一影，定格时光"之意，英文名 FrameFilm 由"帧"（frame）与"胶片"（film）组成。

配套软件包括设备端 app（图片 / 模板 / 时钟 / 动图 / 通行证）、Web 工具 ForFilm、微信小程序、Flutter 手机 App，以及局域网部署的 Film-hub 云服务。

## 产品线

| 产品 | 固件目录 | 屏幕 | 特点 |
|------|---------|------|------|
| 冰箱贴 基础版 | `firmware/frame_film`（`FRAMEFILM_STD`） | 3.6" 600×400 | 旋转编码器（带按键）、WS2812 灯 |
| 冰箱贴 Pro 版 | `firmware/frame_film`（`FRAMEFILM_PRO`） | 3.68" 792×528 | 三按键、WiFi、无线充电 |
| 电子相册 Max 版 | `firmware/frame_film`（`FRAMEFILM_MAX`） | 7.09" 1200×1600 双面板 | 大屏电子相册、三按键、无 LED |
| 通行证版 Ark | `firmware/frame_film_ark` | 3.70" 720×480 | 单机型；含 app 框架与 LVGL UI 层 |
| 充电底座 Dock | `firmware/frame_film_dock` | 3.64" 760×568 | USB 复合设备：声卡 + HID 键盘 + CDC 串口 |

> 基础版 / Pro / 电子相册 Max 三机型共用同一套固件，靠机型宏 + `sdkconfig` 编译隔离；屏幕可在 `hal_epd.h` 中按机型自由选择（见下方「可选屏幕」）。

## 核心功能

- **彩色电子纸显示**：断电保留画面，无背光、低功耗。
- **图像转换**：多种抖动算法，将照片转换为六色画面，支持单图、多帧与动画。
- **多种连接方式**：手机 / 网页走蓝牙；Pro 与 Ark 支持 WiFi；底座可用 USB。
- **安装方式**：冰箱贴为背部磁吸，电子相册 Max 桌面摆放。
- **设备端 UI 与内容 app**（仅通行证版 Ark）：图片、模板、时钟、动图、通行证五个内容…
