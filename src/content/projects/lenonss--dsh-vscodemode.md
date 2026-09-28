---
repo: "Lenonss/DSH_VsCodeMode"
name: "DSH_VsCodeMode"
description: "VSCode-style coding for DeepSeek Harness: Monaco editor (tabs/QuickOpen), agent edit-diff review (keep/reject/archive/rollback), LSP intelligence with VSIX installs"
originalDescription: "VSCode-style coding for DeepSeek Harness: Monaco editor (tabs/QuickOpen), agent edit-diff review (keep/reject/archive/rollback), LSP intelligence with VSIX installs"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Lenonss/DSH_VsCodeMode"
homepage: "https://www.npmjs.com/package/dsh-vscode-mode"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["deepseek-harness", "deepseek-harness-plugin", "deepseek-harness-plugins", "code-review", "diff", "dsh", "dsh-plugin", "editor", "monaco", "monaco-editor"]
stars: 13
forks: 0
openIssues: 1
closedIssues: 6
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-08-20T04:07:27Z"
lastCommitAt: "2026-09-28T10:06:07Z"
lastReleaseAt: "2026-08-21T03:59:10Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 86
undervaluedScore: 57
maintainers: ["Lenonss"]
openGraphImageUrl: "https://opengraph.githubassets.com/df76511c867044a28de51912588baf61cf56355d9777eee4199aa20994213bb7/Lenonss/DSH_VsCodeMode"
---

# dsh-vscode-mode

> **VSCode-like coding experience** on DSH: Monaco file editor + Agent diff review + LSP intelligence.
> Refactored from `@dsh-external/dsh-edit-review`.

- 📝 **Side-by-side editing**: DSH 0.1.5+ official right Sidebar, AI conversation and file editing on the same screen
- 🔍 **Diff review**: Keep / Undo / Rollback / Archive, state persists across restarts
- 🧠 **LSP intelligence**: Go to definition / Find references / Peek multiple results / Smart completion (comment indexing) / Signature help
- ⌨️ **Command palette**: `Ctrl+Shift+P`, 19 commands out of the box, programmable extensions

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage Guide](#usage-guide)
- [Configuration](#configuration)
- [Screenshots](#screenshots)
- [Development](#development)
- [FAQ](#faq)
- [Changelog](#changelog)

## Features

### 1. Sidebar file editing (recommended mode)

When DSH 0.1.5+ official right Sidebar is detected (`ctx.sidebarRightTabs` / `ctx.sidebarRight`), the editor is registered as an official Sidebar Tab, with AI conversation (center) and file editing (right) displayed on the same screen, supporting official multi-tabs / split panes…
