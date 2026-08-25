---
repo: "Yoke0/Gainful"
name: "Gainful"
description: "A cross-platform portfolio tracker and financial analytics app with KMP + Compose Multiplatform (Android, iOS, Desktop) and Ktor backend"
readmeQualityOk: true
url: "https://github.com/Yoke0/Gainful"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [99]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 5
createdAt: "2026-06-16T11:20:25Z"
lastCommitAt: "2026-08-25T04:09:46Z"
lastReleaseAt: "2026-07-26T04:50:22Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 88
undervaluedScore: 62
maintainers: ["Yoke0"]
openGraphImageUrl: "https://opengraph.githubassets.com/b4f40a7dfb99298eae382852ba52621e375890a359227350cea472957ee8aa80/Yoke0/Gainful"
---

# Gainful 盈迹

> 让每一次增长，都有迹可循。

[English](https://github.com/Yoke0/Gainful/blob/HEAD/README.en.md)

Gainful 是一款面向个人用户的收益追踪与财务分析工具，基于 Kotlin Multiplatform + Compose Multiplatform 构建，支持 Android、iOS 和 Desktop (JVM) 三端，后端采用 Ktor 提供 RESTful API 与 JWT 认证。

## 架构设计

采用 **MVI (Model-View-Intent)** 架构，单向数据流驱动 UI 更新。

```
User Action → Intent → ViewModel → State → UI
     ↑                                    │
     └────────────────────────────────────┘
```

### 项目结构

采用 **Clean Architecture** 分层架构，参考 [Now in Android](https://github.com/android/nowinandroid) 项目组织：

```
Gainful/
├── shared/                    # 共享 KMP 模块
│   └── src/
│       ├── commonMain/        # 平台无关代码
│       ├── androidMain/       # Android 平台实现
│       ├── iosMain/           # iOS 平台实现
│       └── jvmMain/           # Desktop 平台实现
├── core/                      # 核心模块
│   ├── common/                # 通用工具、扩展函数、常量
│   ├── model/                 # 数据模型（DTO、Entity）
│   ├── ui/                    # 通用 UI 组件、主题
│   ├── designsystem/          # 设计系统 tokens、共享样式
│   ├── data/                  # Repository 接口
│   ├── database/              # 本地数据源（Room + BundledSQLiteDriver）
│   ├── datastore/             # 偏好设置 DataStore
│…
