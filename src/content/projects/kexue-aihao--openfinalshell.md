---
repo: "kexue-aihao/openfinalshell"
name: "openfinalshell"
description: "开源finalshell"
readmeQualityOk: true
url: "https://github.com/kexue-aihao/openfinalshell"
language: "TypeScript"
languages: ["TypeScript", "C#"]
languagePcts: [51, 24]
stars: 9
forks: 5
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-25T10:33:49Z"
lastCommitAt: "2026-11-09T03:30:46Z"
lastReleaseAt: "2026-07-28T04:39:54Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 77
undervaluedScore: 52
maintainers: ["kexue-aihao"]
openGraphImageUrl: "https://opengraph.githubassets.com/39caa0e8c87ce1631cb1712dd3a9c36319400ce4d8a77d0fafc3b47bce7dde14/kexue-aihao/openfinalshell"
---

# OpenFinalShell

OpenFinalShell 是一个开源、跨平台的远程运维工作台，集成 SSH 终端、SFTP 文件管理、嵌入式 RDP 远程桌面、AI 助手、在线编辑、服务器监控和端口转发。你可以在同一应用中管理 Linux 服务器和 Windows 远程桌面，传输文件、修改配置、查看运行状态，并按需调用自己的 AI API 辅助排障。

项目由两部分组成：

- **桌面端**：基于 Electron、React 和 TypeScript，提供 Windows x86/x64/ARM64、macOS Intel x64 / Apple Silicon ARM64、Linux x64/ARM64 安装包；Flatpak 目前仅提供 x64。
- **Android 端**：独立的 Kotlin 原生客户端，使用 Jetpack Compose、Apache MINA SSHD、Room 和 Android Keystore，支持 API 26 及以上的常见 CPU 架构。

核心能力：

- **SSH / SFTP**：多标签终端、搜索与命令历史、拖拽上传、文件冲突处理、传输队列和断点续传，支持独立窗口编辑远程文件。
- **RDP 远程桌面**：在标签页内连接远程桌面，支持键鼠操作和窗口自适应；Windows x64 支持原生文件双向复制粘贴、本地文件拖入远程桌面和远程音频播放。
- **AI 助手**：接入 OpenAI、DeepSeek 或第三方兼容 API，获取模型列表、检测图片输入、选择流式或非流式回答，将回答中的命令复制或手动填入 SSH。
- **服务器监控与转发**：CPU、内存、磁盘、网络、进程、连接数、双延迟和端口流量视图；支持本地、远程及动态 SOCKS5 转发。
- **Windows 多实例**：在设置中开启多个独立窗口，连接配置和凭据共享，会话、传输和窗口退出互相隔离。
- **数据与界面**：系统安全存储、加密导入导出、局域网配对传送、10 种界面语言、主题和缩放设置。

桌面端与 Android 的功能范围不同。下表按当前代码和发布配置列出支持情况；构建通过不等于已完成所有远程服务器、文件管理器和显示环境的实机验收。

| 平台 | SSH / SFTP | 嵌入式 RDP | RDP 原生双向文件粘贴 | AI 助手 | 独立多实例窗口 |
| --- | --- | --- | --- | --- | --- |
| Windows x64 | 支持 | 支持 | Windows Explorer | 支持 | 支持，设置中开启 |
| Windows x86 / ARM64 | 支持 | 未打包 Worker，可使用系统 RDP | 由系统 RDP 客户端提供 | 支持 | 支持，设置中开启 |…
