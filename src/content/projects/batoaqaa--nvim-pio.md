---
repo: "batoaqaa/nvim-pio"
name: "nvim-pio"
description: "Neovim plugin to integrate PlatformIO framework with Clangd LSP"
readmeQualityOk: true
url: "https://github.com/batoaqaa/nvim-pio"
language: "Lua"
languages: ["Lua"]
languagePcts: [100]
topics: ["clangd", "lua", "neovim", "platformio", "plugin"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-02T21:49:36Z"
lastCommitAt: "2026-07-19T06:11:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 47
maintainers: ["batoaqaa"]
openGraphImageUrl: "https://opengraph.githubassets.com/2c7041ad2f1583d72185eed56936af77d3468493fc0a5d40b85f8eed1cc05a7b/batoaqaa/nvim-pio"
---

# 🚀 nvim-pio

A high-performance, asynchronous embedded development framework for Neovim. It bridges **PlatformIO** project structures with **`clangd`** language servers, managing include file mappings and cross-compiler parameter translations on Windows, Linux, and macOS.

---

## ✨ Features

- **Automated Code Insights Mapping:** Discovers and binds toolchain include vectors, firmware library locations, and environment frameworks to your language server.
- **Compiler Flags Neutralization:** Intercepts and strips non-standard bare-metal toolchain argument options (such as `-mlongcalls`) that destabilize desktop language servers.
- **Diagnostic Filtration Interface:** Provides a dynamic selecting utility via `:ClangdFilter` to instantly toggle specific syntax warnings or static alerts.
- **Self-Healing Persistent Configuration:** Workspace options are bound to local context directories, ensuring layout rules persist across cold reboots.

---

## 🛠️ Installation & Setup

### Prerequisites

- **Neovim** $\ge$ 0.11.0
- **PlatformIO Core CLI** (`pio`) installed and available in system PATH variable.

### 📦 Package Integration (`lazy.nvim`)

```lua
return {
  'batoaqaa/nvim-pio',…
