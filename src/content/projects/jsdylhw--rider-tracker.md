---
repo: "jsdylhw/rider-tracker"
name: "rider-tracker"
description: "A web project for virtual ride"
url: "https://github.com/jsdylhw/rider-tracker"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [91]
topics: ["cycling", "garmin", "zwift"]
stars: 10
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-08T11:17:50Z"
lastCommitAt: "2026-06-25T06:42:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 45
maintainers: ["jsdylhw"]
openGraphImageUrl: "https://opengraph.githubassets.com/c43d2a3590fd13b57d373c18fdd304b228fb52d2d3f7a41b85704d24761adcef/jsdylhw/rider-tracker"
---

# Rider Tracker

Rider Tracker 是一个本地运行的虚拟骑行与 FIT 活动分析工具。它可以导入 GPX 路线、连接蓝牙骑行设备、按路线进行实时骑行或离线模拟，也可以导入/导出 FIT 文件并保存本地活动历史。

## 怎么用

Windows 用户可以直接双击：

```text
start-windows.bat
```

它会检查 Node.js 版本、安装依赖、启动本地服务，并自动打开浏览器。

先安装依赖：

```bash
npm install
```

启动本地服务：

```bash
npm start
```

打开浏览器：

```text
http://127.0.0.1:8787
```

停止服务：

```text
Ctrl + C
```

运行测试：

```bash
npm test
```

注意：不要直接双击 `index.html`。Web Bluetooth、本地活动历史、FIT 文件保存和 Strava 上传都依赖 `npm start` 启动的本地服务。

## 主要功能

### FIT 活动导入与分析

- 首页可以导入本地 `.fit` 文件。
- 导入后会进入活动详情页。
- 原始 FIT 文件会保存到 `data/files/fit/`。
- 数据库只保存活动摘要和 FIT 文件路径。
- 打开详情时会从 FIT 文件解析 records，再展示图表和分析结果。

### 活动历史

- 首页显示最近活动。
- 支持打开详情、改名、删除。
- 删除活动时会同步删除对应的本地 FIT 文件。
- 活动摘要保存在 SQLite：

```text
data/rider-tracker.db
```

### GPX 路线

- 支持手工分段路线。
- 支持导入 GPX。
- 会基于路线生成距离、海拔、坡度数据。
- 实时骑行时可以按路线推进位置。

### 离线模拟

- 输入骑手参数和恒定功率。
- 按整条路线模拟速度、时间、距离、爬升。
- 生成 session records 和 summary。
- 支持导出 JSON / FIT。

### 实时虚拟骑行

- 支持连接心率带。
- 支持连接功率计。
- 支持连接 FTMS 骑行台。
- 支持固定阻力、ERG 固定功率、路线坡度模拟。
- 支持自定义 ERG 分段训练目标。

### Dashboard / PiP / 街景

- 实时 Dashboard 展示功率、速度、心率、踏频、坡度等数据。
- 支持 PiP 悬浮窗。
- 支持 Google Street View 沉浸模式。

### FIT 导出与 Strava 上传

- 模拟或实时骑行结束后可以导出 FIT。
- 可以连接 Strava 后上传 FIT。…
