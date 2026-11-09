---
repo: "puzige/vega"
name: "vega"
description: "WIP Vega - Native AI Agent Desktop (Rust + GPUI)"
readmeQualityOk: true
url: "https://github.com/puzige/vega"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 5
forks: 1
openIssues: 48
closedIssues: 320
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-08-28T16:18:30Z"
lastCommitAt: "2026-11-09T04:35:22Z"
lastReleaseAt: "2026-09-25T08:26:27Z"
status: "thriving"
tags: ["solo_builder", "release_machine", "under_pressure"]
healthScore: 97
undervaluedScore: 65
maintainers: ["puzige"]
openGraphImageUrl: "https://opengraph.githubassets.com/d1ea61f6167b7902374448ae5be5856921d6679050b066a95b7526af9b4584df/puzige/vega"
---

# ✦ Vega

**Native AI Agent Desktop** — Rust + GPUI 原生 Agent 工作台

Vega 将模型对话、编码任务、工具执行和改动审阅放进同一个 macOS 原生工作台。界面使用 Rust + [GPUI](https://www.gpui.rs/) 和 Metal 渲染，不依赖 Electron；自研 Vega Runtime 直连模型 API，也支持通过 ACP 接入 Codex。

- **围绕项目工作**：管理项目与会话，引用文件，查看工具活动、Git Diff 和生成的产物。
- **自主选择模型与扩展**：配置 Provider、模型与推理偏好，通过 MCP 和 Skills 扩展任务能力。
- **掌握执行边界**：区分询问、规划与执行，选择权限策略，查看 Token 用量与费用信息。

[安装与上手](#安装与上手) · [配置与扩展](#配置与扩展) · [开发](#开发) · [文档导航](#文档导航)

## 状态

Vega 正在持续开发。以下能力概览描述当前 `master` 源码，不表示任意旧版安装均已具备；可下载版本及变更记录以 [GitHub Releases](https://github.com/puzige/vega/releases) 为准。

目前发布面向 **macOS Apple Silicon（arm64）**，不在此承诺 Intel Mac、Windows 或 Linux 桌面版支持。原生渲染是技术选择，不代表已经达到特定帧率、启动耗时或相对内存指标；历史 Sprint 报告和测试数字也不代表当前版本的验收结果。

## 核心能力

| 能力 | 使用方式与边界 |
|---|---|
| 多模型对话 | 在设置中管理 Provider、模型、推理偏好与能力配置；Native 运行时适配模型 API 差异。实际能力取决于所选模型与服务。 |
| 项目与编码任务 | 引用项目文件和图片，读写文件、执行命令，结合工具活动、Diff 与产物检查结果。工具执行受当前模式和权限约束。 |
| 长任务与上下文 | 流式 Markdown、代码高亮和可展开的执行过程；支持上下文压缩、停止任务及中断后的显式续接，不因重启自动恢复执行。 |
| 会话分支 | 从符合条件的 Native 历史回复创建新分支，保留原会话；分支不继承活跃执行权或旧权限批准。 |
| Skills 与 MCP | 管理技能并在单条消息中引用；连接 MCP 服务扩展工具。服务启用、认证和执行授权是不同步骤。 |
| 桌面操作 | 观察 macOS 窗口、截图及受控操作，支持暂停和用户接管；需要相应系统权限，不等于可绕过应用或系统限制。 |
| Codex 接入 | 通过 ACP 在项目中使用外部…
