---
repo: "suiyuebaobao/C-SSH"
name: "C-SSH"
description: "Native cross-platform SSH ops: persistent tmux sessions × always-on monitoring × built-in AI assistant. Windows/Android, free forever, open-source soon. 原生跨平台 SSH 运维 · tmux 持久化 · 常驻监控 · 内置 AI 助手"
readmeQualityOk: true
url: "https://github.com/suiyuebaobao/C-SSH"
homepage: "https://github.com/suiyuebaobao/C-SSH/releases/latest"
language: "Rust"
languages: ["Rust"]
languagePcts: [80]
topics: ["ai", "ai-assistant", "android", "cross-platform", "devops", "docker", "file-manager", "monitoring", "port-forwarding", "rust"]
stars: 148
forks: 11
openIssues: 3
closedIssues: 34
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-07-06T11:18:21Z"
lastCommitAt: "2026-07-29T06:13:56Z"
lastReleaseAt: "2026-07-09T13:41:54Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 88
undervaluedScore: 36
maintainers: ["codex", "claude", "suiyuebaobao"]
openGraphImageUrl: "https://opengraph.githubassets.com/91a88f71f6b7deacbe753b4e97bbf2093e715004d75c84983cd74fa553e0351f/suiyuebaobao/C-SSH"
---

**中文** | [English](https://github.com/suiyuebaobao/C-SSH/blob/HEAD/README_EN.md)

# Creation-SSH（C-SSH）

### 手机上也能接着运维：持久化终端、常驻监控、文件管理与 AI 助手

</div>

Creation-SSH 是一套跨平台 SSH 运维客户端。Android 不是只读遥控器：它可以直接管理主机、恢复服务端 tmux 持久化会话、查看监控、处理文件、调用 AI 助手和进入系统管理；Windows 与 Linux 桌面端负责更完整的日常运维工作流。

当前提供 Agent 与原生 SSH 两种主机模式：Agent 模式负责 tmux 持久终端与服务端持续监控；SSH 模式无需安装 agent，可使用终端、端口转发、SFTP 文件管理、在线监控、系统管理、应用中心和 SSH AI 工具。当前公开稳定版为 **`v7.0.0`**；旧版本继续保留为历史记录。

> Android 升级提示：每次安装或覆盖安装后的首次启动都会清除上一安装代本地数据库并建立新的 schema 9 数据库；旧主机、设置、凭据引用和 AI 数据不会保留。

## v7.0.0 更新重点

- Windows、Linux 与 Android 的服务器业务统一进入共享 Rust `client-runtime`，三端平台层只保留平台适配。
- 新增 Agent/SSH 两种明确主机模式；SSH 模式无需安装 agent，也可使用原生终端、SFTP 文件管理、在线监控、系统管理和 AI 工具。
- 主机列表统一显示连接模式、架构与最近采集的 CPU、内存、磁盘、负载和运行时长。
- 三端主机选择器统一为单选下拉或选择面板，并强化异步切换、删除和页面返回时的 owner 隔离。
- 修复 SSH 终端退出时丢失尾部输出、忽略扩展数据或重复终态，以及 SSH 监控解析和系统管理兼容问题。
- AI 保持本地 SQLite 原始事件、五层派生记忆、模型硬窗口编译和每 10 秒真实阶段进度。

## 先看 Android

同一套主机和 tmux 会话可以在桌面与手机之间继续使用。Android `v7.0.0` 只发布 arm64 APK；从本版起不再生成或上传 AAB，公开 Release 也不提供 x86_64 模拟器测试包。

## 下载

| 平台 | 推荐下载 | 其他正式资产 |
| --- | --- | --- |
| Android arm64 | [APK](https://github.com/suiyuebaobao/C-SSH/releases/download/v7.0.0/C-SSH_7.0.0_android-arm64.apk) | 本版不提供…
