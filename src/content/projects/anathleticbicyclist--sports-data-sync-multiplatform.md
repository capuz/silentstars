---
repo: "Anathleticbicyclist/sports-data-sync-multiplatform"
name: "sports-data-sync-multiplatform"
description: "鸡翅幸哲迈进OB(开发体验版) - iGPSPORT/行者/迈金/黑鸟/百锐腾/Outbase/佳明(CN/COM)/高驰(CN/INT)/Wahoo 十一平台运动数据自由互传工具，支持国内区与国际区互传。让运动数据自由流动。支持FIT/GPX格式，后台自动同步。"
readmeQualityOk: true
url: "https://github.com/Anathleticbicyclist/sports-data-sync-multiplatform"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [96]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-27T09:36:58Z"
lastCommitAt: "2026-09-02T08:03:27Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 47
maintainers: ["Anathleticbicyclist"]
openGraphImageUrl: "https://opengraph.githubassets.com/4b15f7b861da0c9e02de44ba96a57bdb23e1b16b5f851abf902c79be28f93651/Anathleticbicyclist/sports-data-sync-multiplatform"
---

# 🚴 鸡翅幸哲迈进OB(开发体验版)

**让运动数据自由流动 — 十一平台运动数据互传工具**

一款 Android 运动数据迁移工具，支持在 **iGPSPORT / 行者 / 迈金 / 黑鸟单车 / 百锐腾 / Outbase / 佳明国际 / 佳明中国 / 高驰中国 / 高驰国际 / Wahoo** 十一平台之间自由同步运动记录（FIT/GPX），支持国内区与国际区互传。

> ⚠️ **开发版不稳定且用且珍惜**，仅供测试体验。

---

## 📱 应用信息

| 项目 | 内容 |
|------|------|
| 应用名称 | 鸡翅幸哲迈进OB(开发体验版) |
| 包名 | `com.jichi.ob.dev` |
| 当前版本 | v7.0.0 |
| 最低系统 | Android 8.0 (API 26) |
| 目标系统 | Android 16 (API 36) |
| 开发语言 | Kotlin |

---

## 📱 软件界面

| 登录页 | 同步设置 | 运行日志 |
|:---:|:---:|:---:|
| <img src="screenshots_login.webp" width="280"/> | <img src="screenshots_sync.webp" width="280"/> | <img src="screenshots_log.webp" width="280"/> |

- **登录页**：十一平台登录卡片，两列布局，已登录状态一目了然
- **同步设置**：数据来源/同步目标四列网格，Outbase独占一行，开发中按钮两行显示
- **运行日志**：后台自动同步、开始同步、测试下载、运行日志实时输出

---

## ✨ 功能特性

### 十一平台数据互传

| 平台 | 下载(源) | 上传(目标) | 说明 |
|------|:---:|:---:|------|
| **iGPSPORT** | ✅ | ✅ | 迹驰码表数据，OSS直传上传 |
| **行者** | ✅ | ✅ | 行者APP数据，官方开放API |
| **迈金** | ✅ | 🚧 开发中 | 支持GCJ-02→WGS84坐标转换 |
| **黑鸟单车** | ✅ | ✅ | 仅接受FIT，GPX自动转换 |
| **百锐腾** | ⚠️ | 🚧 开发中 | 官方未开放FIT下载接口 |
| **Outbase** | ❌ | ✅ | 仅目标平台，聚合上传 |
| **佳明国际** | ✅ | ✅ | Garmin Connect国际区，mobile SSO认证 |
| **佳明中国** | ✅ | ✅ | Garmin Connect中国区，JWT_WEB+session认证 |
|…
