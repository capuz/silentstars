---
repo: "shuhao1022/Navi-Link"
name: "Navi-Link"
description: "增强版高德导航伴侣"
readmeQualityOk: true
url: "https://github.com/shuhao1022/Navi-Link"
language: "Java"
languages: ["Java"]
languagePcts: [90]
stars: 10
forks: 5
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 7
createdAt: "2026-06-11T06:42:10Z"
lastCommitAt: "2026-07-29T06:10:10Z"
lastReleaseAt: "2026-07-22T06:24:49Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 89
undervaluedScore: 58
maintainers: ["shuhao1022", "zuo-qirun"]
openGraphImageUrl: "https://opengraph.githubassets.com/da909c4262babf02c987273dc5661992e2c5b01cf6704d1e4363c024a09d69c7/shuhao1022/Navi-Link"
---

# Navi-Link 项目说明文档

## 项目概述

**Navi-Link**（内部代号 ShadowMap）是一款 Android 悬浮窗导航应用。它通过监听高德地图（Amap/AutoNavi）的标准广播，将导航信息以悬浮窗形式实时叠加显示在其他应用之上，让用户在使用其他应用时也能看到导航指引。

| 项目属性 | 值 |
|---------|---|
| 包名 | `com.navi.link` |
| 最低 SDK | Android 5.0 (API 21) |
| 目标 SDK | Android 14 (API 34) |
| 编译 SDK | 34 |
| 版本 | 2.5.5 (versionCode 255) |
| 开发语言 | Java |
| 构建工具 | Gradle + AGP 8.5.0 |

---

## 项目结构

```
Navi-Link/
├── app/
│   ├── src/main/
│   │   ├── java/com/navi/link/
│   │   │   ├── RouterActivity.java          # 透明路由入口（应用启动分发器）
│   │   │   ├── MainActivity.java            # 主界面（配置页面）
│   │   │   ├── AutoMapService.java          # 前台服务（维持悬浮窗生命周期）
│   │   │   ├── AmapNaviReceiver.java        # 广播接收器（解析高德导航数据）
│   │   │   ├── FloatingWindowManager.java   # 悬浮窗管理器（窗口调度 + 生命周期）
│   │   │   ├── FloatingWindowFactory.java   # 窗口工厂（按模式+样式创建具体窗口）
│   │   │   ├── BaseFloatingWindow.java      # 窗口抽象基类（公共方法 + 接口定义）
│   │   │   ├── MinimalCruiseWindow.java     # 灵动岛巡航窗口实现
│   │   │   ├── NormalCruiseWindow.java      # 常规巡航窗口实现
│   │   │   ├── NormalNaviWindow.java        # 常规导航窗口实现
│   │   │   ├── MinimalNaviWindow.java       # 灵动岛导航窗口实现
│   │   │   ├── FullNaviWindow.java          # 全数据导航窗口实现
│   │   │…
