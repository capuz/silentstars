---
repo: "vcqr/ashell"
name: "ashell"
description: "Lightweight, visually polished, AI-enhanced cross-platform SSH client with SFTP, port forwarding, and serial support"
originalDescription: "轻量高颜值AI化的跨平台SSH客户端，支持SFTP、端口转发、串口"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/vcqr/ashell"
homepage: "https://vcqr.github.io/ashell/"
language: "Vue"
languages: ["Vue", "Rust", "TypeScript"]
languagePcts: [39, 32, 28]
topics: ["ai-assistant", "claude-code", "terminal", "xterm", "xtermjs", "ssh", "ssh-client"]
stars: 16
forks: 4
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 6
createdAt: "2026-07-02T13:34:04Z"
lastCommitAt: "2026-10-26T09:02:41Z"
lastReleaseAt: "2026-08-02T06:01:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 60
maintainers: ["vcqr"]
openGraphImageUrl: "https://opengraph.githubassets.com/84b88b8d5e630ee1982ecf91e3cf813fe0f3ae6c28e132141189aa559aa9bf52/vcqr/ashell"
---

# AShell

[English](https://github.com/vcqr/ashell/blob/HEAD/README.en.md) | Simplified Chinese

> A modern, cross-platform terminal / SSH client that integrates local terminals, remote SSH, SFTP, host monitoring, port forwarding, and an AI assistant into a single desktop app.

AShell focuses on performance, privacy, and customizability. All SSH credentials are stored locally and encrypted. The AI assistant runs on your own machine, and keys never leave your device.

> 💡 The same core also ships as a **web server mode**: deploy with one Docker command, then use SSH / SFTP / terminal and the AI assistant from a browser. See [Web server mode](#web-服务器模式浏览器访问) for details.

---

## Features

### 🖥 Terminal
- **Cross-platform**: macOS / Windows / Linux, covering x86_64 and ARM64.
- **Multiple tabs and windows**: drag to reorder tabs; right-click menu (Reconnect / Disconnect / Copy connection / New window / Copy SSH address / Rename / Export session), with seamless operation across windows.
- **Local terminal**: Windows ConPTY / Unix forkpty, supporting PowerShell, cmd, Git Bash, Bash, Zsh, and Fish.
- **Remote SSH**: PTY + binary-safe frame passthrough, with color control codes…
