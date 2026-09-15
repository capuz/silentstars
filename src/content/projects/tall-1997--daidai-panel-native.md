---
repo: "tall-1997/daidai-panel-native"
name: "daidai-panel-native"
description: "呆呆面板 Android 原生版 - 内置 PRoot + Alpine Linux 终端，脚本执行与任务管理，无需 Root 或 Termux"
readmeQualityOk: true
url: "https://github.com/tall-1997/daidai-panel-native"
homepage: "https://github.com/tall-1997/daidai-panel-native/releases/latest"
language: "Go"
languages: ["Go", "Kotlin"]
languagePcts: [48, 26]
topics: ["android", "arm64", "flutter", "golang", "self-hosted", "task-scheduler", "qinglong", "alpine-linux", "linux-terminal", "proot"]
stars: 12
forks: 2
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-07-27T02:14:12Z"
lastCommitAt: "2026-09-15T08:54:46Z"
lastReleaseAt: "2026-07-28T17:36:31Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 70
undervaluedScore: 47
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/84059a9a45f1d216853e8679e6ef59d5889a09ac4e509037216c73e77eae2564/tall-1997/daidai-panel-native"
---

# 呆呆面板 Android 本机版

呆呆面板 Android 原生版将 upstream `linzixuanzz/daidai-panel` 的任务、脚本、日志、环境变量、订阅、依赖、通知、Open API、安全、备份和监控能力带到非 Root Android，同时保留远程面板连接。内置 NDK 自编译 PRoot（termux/proot 5.1.107.92 fork）+ Ubuntu 24.04 用户空间，提供完整的 Linux 终端、脚本执行和包管理能力，无需依赖 Termux。

当前版本：**v2.0.0**

Android versionCode：**2000000**

默认分支：**main**

## 下载

- 最新版：[GitHub Releases](https://github.com/tall-1997/daidai-panel-native/releases/latest)（当前 `v2.0.0`）
- v2.0.0：[发行说明与附件](https://github.com/tall-1997/daidai-panel-native/releases/tag/v2.0.0)
- ARM64 完整版：`daidai-panel-native-2.0.0-prerelease-arm64.apk`
- x86_64 版（模拟器/云手机）：`daidai-panel-native-2.0.0-prerelease-x86_64.apk`
- 每个 APK 均附带同名 `.sha256` 文件；完整摘要以 Release 附件为准。

正式 Release 同时提供 APK 校验文件、`android-update.json` 和 release evidence 证据包。

## 首次登录

- 默认账号：**`admin`**
- 默认密码：**`admin123`**

首次登录后请及时在「我的 → 个人中心」修改密码，避免安全隐患。

## 核心能力

- 纯原生 Kotlin + Jetpack Compose UI（已去除 Flutter 引擎与 Dart 代码），统一管理 Android 本地实例和远程呆呆面板。
- 本地 Kotlin fallback 运行于 Android `:panel` 独立进程，并监听动态 `127.0.0.1` 端口。
- **内置 Linux 终端**：NDK 自编译 PRoot（termux/proot 5.1.107.92 fork）+ Ubuntu 24.04 用户空间，无需依赖 Termux。
- 支持任务、Cron、脚本、日志、环境变量、订阅、通知、用户、安全、SSH、Open API、平台令牌和备份恢复。
- 包管理：Ubuntu 使用…
