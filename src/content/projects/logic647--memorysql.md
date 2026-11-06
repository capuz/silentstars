---
repo: "Logic647/MemorySQL"
name: "MemorySQL"
description: "A local-first knowledge base for individual developers: agent session capture, memory profile, MCP \"connect to resume\". Built with Electron + TypeScript, with data stored purely locally."
originalDescription: "面向个人开发者的本地优先知识库:agent 会话捕获、记忆画像、MCP「连接即续接」。Electron + TypeScript,数据纯本地化存储"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Logic647/MemorySQL"
homepage: "https://github.com/Logic647/MemorySQL/releases"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [81]
stars: 6
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-08-30T08:24:20Z"
lastCommitAt: "2026-11-06T13:20:29Z"
lastReleaseAt: "2026-09-23T07:13:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 69
undervaluedScore: 50
maintainers: ["Logic647"]
openGraphImageUrl: "https://opengraph.githubassets.com/62866ca691f431a1d0ee24f3c30e46622ab9dabc0d56bb14236d9739a03adef4/Logic647/MemorySQL"
---

# MemorySQL

**A local-first knowledge base for individual developers. Agents pick up where they left off via MCP "connect to resume".**

[Download installers](https://github.com/Logic647/MemorySQL/releases/latest) · [Quick start](#-快速开始) · [Plugin development](#-插件开发规范) · [Docs](#-文档)

---

> [!NOTE]
> **macOS builds are unsigned**: on first launch, Gatekeeper will block the unverified app. Choose "**Right-click → Open**" and confirm once. After that, double-clicking launches it normally.
> If you don't want to do this every time, run this once in Terminal:
> ```bash
> xattr -dr com.apple.quarantine /Applications/MemorySQL.app
> ```
> There are installers for both Apple Silicon and Intel Macs. Look for `arm64` / `x64` in the filename.

You use three or four AI agents at once (Codex / ZCode / Claude Code / Hermes …). Every time you switch, you have to rebuild the background: how far the project got, your preferences, the pitfalls you already hit. All of it starts over.

**MemorySQL solves this.** It automatically captures sessions from all your agents, maintains your memory profile and project status, and runs an MCP server on your machine. Once any agent connects, a single…
