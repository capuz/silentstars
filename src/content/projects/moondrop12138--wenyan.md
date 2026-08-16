---
repo: "moondrop12138/wenyan"
name: "wenyan"
description: "狗头军师：以 goutoujunshi 知识库为内核的恋爱决策支持安卓 App（BYOK / 纯本地 / 双通道截图分析）"
readmeQualityOk: true
url: "https://github.com/moondrop12138/wenyan"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [89]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-08-03T01:05:47Z"
lastCommitAt: "2026-08-16T04:07:47Z"
lastReleaseAt: "2026-08-05T09:32:24Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 46
maintainers: ["moondrop12138"]
openGraphImageUrl: "https://opengraph.githubassets.com/c04fa0c55038b809021f078c24b2361b312c55c9be5c78f22007f95dc0e7e0af/moondrop12138/wenyan"
---

# 温言 · 恋爱决策支持 App

> 先接住情绪，再分清事实，最后给出能执行的下一步。

「温言」是一款纯本地运行的恋爱决策支持应用，支持 **Android** 与 **Windows 桌面**：以开源项目 [goutoujunshi（狗头军师）](https://github.com/powerycy/goutoujunshi) 的知识库为内核，用**四段式回答结构**（接住你 → 先分清事实 → 军师建议 → 现在可以做什么）帮你梳理关系、拆解事实与推测、给出可执行的话术与行动。

它不是虚拟恋人，也不替你读心——它帮你把"凭感觉"变成"看证据"。

> 📥 **下载**：两端独立发布、互不影响——Android 见 [v 系列 Release](https://github.com/moondrop12138/wenyan/releases) 装 `.apk`；Windows 桌面版见 [desktop-v 系列 Release](https://github.com/moondrop12138/wenyan/releases?q=desktop) 装 `*-windows.exe`（内嵌运行环境，双击即装，无需单独装 Java）。两端数据各自本地存储，互不同步。

> ⚠️ **非商业使用声明**：本仓库知识库部分衍生自 [powerycy/goutoujunshi](https://github.com/powerycy/goutoujunshi)（PolyForm Noncommercial 1.0.0），因此**本仓库整体采用非商业许可**，详见 [LICENSE](https://github.com/moondrop12138/wenyan/blob/HEAD/LICENSE) 与 [NOTICE](https://github.com/moondrop12138/wenyan/blob/HEAD/NOTICE)。

## 平台

| | Android | Windows 桌面 |
|---|---|---|
| 形态 | 原生 App（Jetpack Compose） | 本地服务 + 网页前端（exe 安装包，内嵌裁剪 JRE） |
| 界面 | Compose 液态玻璃 | 纯静态 HTML/CSS/JS 液态玻璃 |
| 数据 | Room SQLite，本机 | Room KMP SQLite，本机 `%APPDATA%\Wenyan` |
| Key 加密 | Android Keystore + AES-GCM | 机器指纹派生 AES-256-GCM |
| 业务逻辑 | 两端共享 `:shared` KMP 模块（llm / domain / prompt / knowledge / data 纯逻辑） |…
