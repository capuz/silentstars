---
repo: "ccpopy/cc-sessions"
name: "cc-sessions"
description: "Session management for Codex, Claude, and OpenCode, supporting Windows, Linux, macOS, and SSH environments"
originalDescription: "支持codex、claude及opencode的会话管理，支持windows、linux、macos以及ssh环境"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/ccpopy/cc-sessions"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [75, 22]
stars: 283
forks: 18
openIssues: 4
closedIssues: 43
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2026-05-07T03:34:46Z"
lastCommitAt: "2026-11-12T05:40:48Z"
lastReleaseAt: "2026-05-19T03:46:33Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 27
maintainers: ["ccpopy", "github-actions[bot]", "firesahc"]
openGraphImageUrl: "https://opengraph.githubassets.com/9a06707e347fdd18a7dd3b6e8bf65ce48202ef02d52842fddad16da2d5e3eeaf/ccpopy/cc-sessions"
---

# CC Sessions

CC Sessions manages the sessions that Codex, Claude Code, OpenCode, and Cursor save on your machine. In one interface you can search conversations, preview content, back up and restore them, move session directories, and repair some index and visibility issues.

[Download the latest version](https://github.com/ccpopy/cc-sessions/releases/latest) · [View features](#功能模块) · [Advanced features](#进阶功能) · [FAQ](#常见问题) · [Development & packaging](#开发与打包)

## Who it's for

| Your situation | Recommended approach | Where to start |
| --- | --- | --- |
| You use Codex, Claude Code, OpenCode, or Cursor on your computer | Desktop app | [Installation](#安装) |
| You manage sessions in WSL, on a server, or over SSH | `cc-sessions` command line or the built-in web interface | [Command line & WSL](#命令行与-wsl) |
| You want to modify the source code or build your own installer | Run from source | [Development & packaging](#开发与打包) |

Reading, searching, editing, and backing up sessions all happen locally. The app contacts GitHub Releases when it checks for updates.

## Feature modules

| Module | What it can do | Codex | Claude Code | OpenCode | Cursor |
| --- | --- | --- | --- | --- |…
