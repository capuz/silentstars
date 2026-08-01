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
stars: 17
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-02T21:49:36Z"
lastCommitAt: "2026-08-01T06:14:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 38
maintainers: ["batoaqaa"]
openGraphImageUrl: "https://opengraph.githubassets.com/c1f8fd5fb12f312368dd799f643601c4f59dee75c884364bc10193accd371c5a/batoaqaa/nvim-pio"
---

# 🚀 nvim-pio

A high-performance, asynchronous embedded development framework for Neovim. It bridges **PlatformIO** project structures with **`clangd`** language servers, managing include file mappings and cross-compiler parameter translations on Windows, Linux, and macOS.

---

## ✨ Features

- **Zero-Friction Project Scaffolding:** Interactively selects boards and frameworks, auto-installs PlatformIO CLI if missing, fetches board metadata, and generates `src/` and `include/` template files.
- **Automated Code Insights Mapping:** Discovers and binds toolchain include vectors, firmware library locations, and environment frameworks to `clangd` via `compile_commands.json`.
- **Compiler Flags Neutralization:** Intercepts and strips non-standard bare-metal toolchain argument options (such as `-mlongcalls`) that destabilize desktop language servers.
- **Diagnostic Filtration Interface:** Provides a dynamic selecting utility via `:ClangdFilter` to instantly toggle specific syntax warnings or static alerts.
- **Self-Healing Persistent Configuration:** Workspace options are bound to local context directories, ensuring layout rules persist across cold reboots.

---

## ⚡ Quickstart: Zero…
