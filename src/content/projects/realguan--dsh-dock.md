---
repo: "realguan/dsh-dock"
name: "dsh-dock"
description: "A cross-platform desktop control center built specifically for DeepSeek Harness (DSH): multi-workbench management, a marketplace of 3,400+ community plugins, session self-healing, credentials and system diagnostics. Tauri v2 + Rust + React 19, supports macOS / Windows / Linux."
originalDescription: "专为 DeepSeek Harness (DSH) 打造的跨平台桌面控制中心：多工作台管理、3,400+ 社区插件市场、会话自愈、凭据与系统诊断。Tauri v2 + Rust + React 19，支持 macOS / Windows / Linux。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/realguan/dsh-dock"
homepage: "https://dsh-dock-c3gibghk4ea.qoder.zone"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [50, 44]
topics: ["cross-platform", "deepseek", "deepseek-harness", "desktop-app", "dsh", "plugin-manager", "dsh-plugin", "dsh-plugins"]
stars: 21
forks: 2
openIssues: 1
closedIssues: 6
watchers: 2
contributors: 4
recentReleases: 10
createdAt: "2026-08-23T14:36:27Z"
lastCommitAt: "2026-11-04T02:57:50Z"
lastReleaseAt: "2026-08-26T04:54:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 52
maintainers: ["realguan-superagent", "realguan", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8efe5c41c0d348fa935376809c8819de9f2a438a21ebe6a71fab60bccf568797/realguan/dsh-dock"
---

# DSH Dock

**A cross-platform desktop control center built specifically for DeepSeek Harness (DSH)**
*Desktop Control Center for DeepSeek Harness*

> **"The command line is for geeks; the workbench is for Dock."**

[📥 Download & Install](#-下载与安装) · [🎯 Core Capabilities](#-核心能力) · [🖥️ Runtime & Desktop Integration](#️-运行时与桌面集成) · [⚡ Quick Start](#-快速上手) · [🏛️ Architecture](#️-架构与设计原则) · [🗺️ Roadmap](#️-路线图)

---

## 💡 What is DSH Dock?

[DSH](https://www.npmjs.com/package/@deepseek-ai/dsh) (DeepSeek Harness) is DeepSeek's official agent development toolchain. It provides powerful AI programming and task orchestration capabilities through a file-driven architecture and the Cordis plugin system.

**DSH Dock** is a **cross-platform desktop client and standalone control center** built for DSH (based on Tauri v2 + Rust + React 19). It fills the visual management gap that the official CLI does not yet provide:

- 🪶 **Installers from 22 MB** — Packaged separately for each platform, with a built-in pnpm bootstrapper; Node.js and DSH are not preinstalled
- 🛡️ **Strict Non-Fork principle** — Does not modify any upstream DSH source code; works through the official CLI conventions and…
