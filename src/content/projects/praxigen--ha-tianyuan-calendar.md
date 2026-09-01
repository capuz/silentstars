---
repo: "PraxiGEN/ha_tianyuan_calendar"
name: "ha_tianyuan_calendar"
description: "天元历法 - 为 Home Assistant 提供最精准的农历历法、法定节假日、二十四节气，以及深度整合的周易术数与中医养生集成。"
readmeQualityOk: true
url: "https://github.com/PraxiGEN/ha_tianyuan_calendar"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["hacs", "home-assistant", "home-assistant-integration"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 4
createdAt: "2026-05-16T10:12:03Z"
lastCommitAt: "2026-09-01T08:48:35Z"
lastReleaseAt: "2026-07-09T04:40:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 57
maintainers: ["PraxiGEN"]
openGraphImageUrl: "https://opengraph.githubassets.com/c0fd6fe6e61780da6684efc2e8da6a4262c42ee5bd3f0e0a44bbaa08052318eb/PraxiGEN/ha_tianyuan_calendar"
---

# <img src="custom_components/tianyuan_calendar/brand/icon.png" width="64"> 🌙天元历法 (TianYuan Calendar)

## 天元历法不再仅仅是历法传感器，它是一个深度整合中国传统“天文、术数、医学”的智能引擎。通过真太阳时修正，为用户提供精确的排盘、取穴与卦象预测。

## ✨ 核心特性

### 系统使用本地数据库作为数据源，所有逻辑均在本地离线计算完成。

### 📅 基础历法 (Foundation)
- **精准农历**：支持完整的农历日期、闰月提醒、月相信息。🌙
- **二十四节气**：提供节气倒计时、精确交节时刻及物候描述。🍂
- **法定节假日**：实时同步国家放假安排，包含加班调休提醒、最近节日预报。🏮

### 🔭 天文授时 (Accuracy)  
- **真太阳时 (TST)**：基于地理经度自动修正均时差，提供真正意义上的“地方时”，是术数推算与子午流注的灵魂。☀️

### ☯️ 术数与预测 (Advanced Shushu)
-  **全功能八字**：显示四柱干支、五行纳音、十神、长生十二神及生肖动合关系（三合/六合/冲刑害破）。🪵

- **周易卦象引擎**：
    - **梅花易数**：基于实时真太阳时起卦，提供体用分析、卦辞与象曰。
    - **皇极经世**：精准推算元、会、运、世大周期，并提供值年卦与动态值月卦。
    - **易经查阅器**：内置64 卦详注库，支持“实时随动”与“手动检索”双模式。
    - **马前课小六壬**：集成传统“诸葛马前课”，实时推算大安、留连、速喜等即时吉凶。

- **中医时间医学**
    - **子午流注**：集成纳甲法、纳子法、灵龟八法、飞腾八法、迎随补泻，实时提醒经络循行与开穴建议。🌿
    - **五运六气**：集成六步气机，年度总览。

### ⚙️ 逻辑化架构
- **多设备管理**：默认添加天元农历设备，岐黄和术数子设备，可按需开启。
- **动态清理**：关闭功能开关后，系统会自动清理注册表，不留“幽灵实体”。
  
## 📦 安装

### 通过HACS安装（推荐）

1. 在HACS的"集成"部分，点击右上角的三点菜单
2. 选择"自定义存储库"
3. 在存储库字段输入：
```yaml
https://github.com/PraxiGEN/ha_tianyuan_calendar
```
4. 类别选择"集成"
5. 点击"添加"保存
6. 在HACS中找到"天元历法"集成并点击安装
7. 重启Home Assistant

### 手动安装

1. 下载最新的:
```yaml…
