---
repo: "cus45/ccg-switch"
name: "ccg-switch"
description: "管理您的 Claude · Codex · Gemini 配置"
url: "https://github.com/cus45/ccg-switch"
homepage: "https://cus45.github.io/ccg-switch/"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [56, 20]
stars: 42
forks: 7
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-03-03T07:48:27Z"
lastCommitAt: "2026-06-27T00:17:30Z"
lastReleaseAt: "2026-03-10T23:15:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 39
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/e0463252fa25cc944b76795d5dbcc849eae0ff5940c65b9504cad793e45bc4b4/cus45/ccg-switch"
---

# CCG Switch

  **Claude · Codex · Gemini 统一配置管理与增强工具**

  [English](#english) | [简体中文](#简体中文)

</div>

---

## 📝 简介 (Introduction)

**CCG Switch** 是一个强大的跨平台桌面级配置管理工具。它最初设计为 `Claude Code` 的辅助管理器，现已扩展支持管理 Claude、Codex、Gemini 等主流大模型 CLI 工具的环境配置、服务商切换、系统级本地代理与 Prompt 预设。

无论你是独立开发者还是多项目维护者，CCG Switch 都能让你无缝切换 API 密钥环境，彻底告别频繁手动修改终端环境变量的痛苦。

## ✨ 核心特性 

- 🚀 **零配置切换**: 一键在多个服务商（如 Anthropic 官方、Azure、第三方中转）之间切换 API Keys 和代理地址。
- 🔌 **系统级本地代理**: 内置 Rust 编写的轻量级本地代理转发服务器 (HTTP Proxy Server)，支持自动拦截、替换和测速 API 请求，专为国内受限网络环境设计。
- 🧩 **MCP 服务器集成**: 支持图形化添加并配置 MCP (Model Context Protocol) 插件，可视化管理上下文能力。
- 🔮 **Prompt 预设池**: 预置多种角色 Prompt，并支持工作区级别的快速分发与应用。
- 📊 **可视化数据面板**: 统一监控 Tokens 消耗、工具调用次数与接口响应延迟。
- 🎨 **极致的 UI/UX**: 全面响应式设计，支持系统跟随的暗黑模式，并可自由配置顶栏/侧栏导航布局。

## 📦 安装与下载

前往 [GitHub Releases](https://github.com/cus45/ccg-switch/releases) 页面下载适合你系统的安装包：

- **Windows**: 下载 `.exe` (NSIS安装向导) 或 `.msi`
- **macOS**: 下载 `.dmg` (支持 Apple Silicon & Intel)
- **Linux**: 下载 `.deb` 或 `.AppImage`

## 🛠️ 技术栈

本项目基于业内最前沿的跨平台技术栈构建：

* **Frontend**: [React 19](https://react.dev/), [Vite](https://vitejs.dev/), [Tailwind CSS](https://tailwindcss.com/)
* **Backend**: [Rust](https://www.rust-lang.org/), [Tauri…
