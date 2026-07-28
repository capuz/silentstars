---
repo: "l0ng-ai/tty7"
name: "tty7"
description: "A terminal workbench in pure Rust: shells, persistent sessions, SSH, coding agents. GPU-rendered on Zed's gpui, VT core from Alacritty."
readmeQualityOk: true
url: "https://github.com/l0ng-ai/tty7"
homepage: "https://github.com/l0ng-ai/tty7/releases/latest"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["alacritty", "cross-platform", "daemon", "developer-tools", "gpu", "gpu-acceleration", "gpui", "linux", "macos", "pty"]
stars: 360
forks: 20
openIssues: 14
closedIssues: 45
watchers: 1
contributors: 9
recentReleases: 10
createdAt: "2026-07-06T12:51:10Z"
lastCommitAt: "2026-07-28T14:54:48Z"
lastReleaseAt: "2026-07-10T10:40:04Z"
status: "newborn"
tags: ["release_machine"]
healthScore: 94
undervaluedScore: 30
maintainers: ["l0ng-ai", "asdwadr", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4d8424b8a8c010edecfc822fa806f1eea14d5ea66668afd049a0cbc177786ffd/l0ng-ai/tty7"
---

### tty7

**A terminal workbench: shells, sessions, SSH, coding agents.**

<sub>Pure Rust · GPU rendering on Zed's gpui · VT core from Alacritty</sub>

<br />

<sub>English · [简体中文](https://github.com/l0ng-ai/tty7/blob/HEAD/README.zh-CN.md)</sub>

</div>

## Why

- **Fast** — ~2× the throughput of Alacritty, Ghostty, or Kitty ([benchmarks](#benchmarks))
- **Sessions persist** — quit or reboot; your shells keep running, no tmux
- **Editor-grade input** — completion, syntax highlighting, history search built in; zero config for zsh, bash, fish, PowerShell
- **Agent-aware** — recognizes Claude Code & co. in a pane: status, notifications, session resume

## Install

Native builds for each platform on [**Releases**](https://github.com/l0ng-ai/tty7/releases):

| | | |
|---|---|---|
| **macOS** | `…-macos-arm64.dmg` · `…-x86_64.dmg` | drag into Applications |
| **Windows** | `…-setup.exe` · portable `….zip` | |
| **Linux** | `…-x86_64.AppImage` | `chmod +x` and run — x11/wayland libs bundled |

## What's inside

| | |
|---|---|
| **Input** | ghost suggestions from history · explained tab completion · syntax highlighting · multi-line editing · click places the caret · <kbd>⌃ R</kbd> fuzzy…
