---
repo: "kirmisaki/FrameFilm"
name: "FrameFilm"
description: "帧影（FrameFilm）全彩墨水屏冰箱贴"
readmeQualityOk: true
url: "https://github.com/kirmisaki/FrameFilm"
homepage: "https://kirmisaki.github.io/FrameFilm/"
language: "C"
languages: ["C", "JavaScript"]
languagePcts: [40, 36]
topics: ["esp-idf", "esp32s3", "ink"]
stars: 59
forks: 11
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 2
createdAt: "2026-04-27T07:24:19Z"
lastCommitAt: "2026-09-11T08:01:59Z"
lastReleaseAt: "2026-08-07T13:32:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 38
maintainers: ["kirmisaki"]
openGraphImageUrl: "https://opengraph.githubassets.com/9aed2be2195930496f09b46cce3848148111dd5f7669a7a55af15aef2d93ee88/kirmisaki/FrameFilm"
---

# 帧影（FrameFilm）电子胶片冰箱贴

*复古胶片质感 × 电子纸显示 × 磁吸安装*

</div>

---

## 项目概述

帧影（FrameFilm）✨ 一款超有氛围感的彩色电子纸冰箱贴！📺

主打胶片复古质感，把家的仪式感拉满～轻轻一贴，定格生活每一帧的美好瞬间。💫

"帧影"寓意"一帧一影，定格时光"，英文名FrameFilm结合"帧"与"胶片"，满满的复古情怀 🎞️

## 核心功能

- 🎞️ **胶片质感呈现**：多种抖动算法加持，颗粒感满满，秒回复古胶片时代！
- 🖼️ **彩色电子纸载体**：低功耗无蓝光，阳光下也清晰，充一次电能用好几个月～
- 📱 **便捷照片传输**：蓝牙秒连手机，一键上传超方便，还能定时轮播生活瞬间！
- 🧲 **磁吸便捷安装**：背部磁铁设计，往冰箱上一贴就搞定，安装 so easy！
- ✨ **简约小巧设计**：轻薄高颜值，适配各种家居风格，摆在哪儿都是风景线！

### 固件组件

| 组件 | 说明 |
|------|------|
| `film_sys` | 系统初始化、日志、配置管理 |
| `film_service` | 核心业务服务（BLE通信、文件管理、照片播放、参数存储） |
| `film_hal` | 硬件抽象层（电子纸、电池、LED、编码器、存储） |

## 硬件规格

### FrameFilm（基础版）

| 参数 | 规格 |
|------|------|
| 主控芯片 | ESP32-S3 WROOM N16R8 |
| 显示屏 | 彩色电子纸 3.6" 600×400 (WFT驱动) |
| 存储 | TF卡 最大32GB 或 内置SDnand |
| 通信 | 蓝牙 BLE 4.2 |
| 交互 | 旋转编码器（带按键） |
| 电池 | 锂电池 304040规格 1.5mm插头 |
| 尺寸 | 约 92 × 60 × 7 mm |
| 安装方式 | 背部磁吸 磁铁 2x12mm-1mm 1x15mm-2mm |

### FrameFilm Pro

| 参数 | 规格 |
|------|------|
| 主控芯片 | ESP32-S3 mini N4R2 |
| 显示屏 | 彩色电子纸 3.68" 792×528 (SE0368-C驱动) |
| 存储 | 内置SDnand |
| 通信 | 蓝牙 BLE 4.2 / WiFi |
| 交互 | 三按键 |
| 电池 | 锂电池 244147规格 |
| 充电 | 支持无线充电（兼容 MagSafe 充电器） |
| 尺寸 | 约 90 × 59 × 5 mm |
| 安装方式 | 背部磁吸 magasafe磁环 |

## 硬件开源

硬件设计已在立创开源硬件平台开源：

👉…
