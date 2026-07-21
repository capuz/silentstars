---
repo: "aannoo/hcom"
name: "hcom"
description: "Let AI agents message, watch, and spawn each other across terminals. Claude Code, Codex, Antigravity CLI, Cursor CLI, OpenCode, Kilo, Pi, Kimi"
readmeQualityOk: true
url: "https://github.com/aannoo/hcom"
homepage: "https://pypi.org/project/hcom/"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["claude", "cli", "agent", "ai", "claude-code", "terminal", "ai-tools", "claude-code-hooks", "automation", "codex"]
stars: 393
forks: 55
openIssues: 13
closedIssues: 17
watchers: 7
contributors: 14
recentReleases: 0
createdAt: "2025-07-21T02:32:38Z"
lastCommitAt: "2026-07-21T06:10:47Z"
lastReleaseAt: "2026-02-11T23:57:28Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 83
undervaluedScore: 34
maintainers: ["aannoo", "azkore", "zane668"]
openGraphImageUrl: "https://opengraph.githubassets.com/3331840f57d2340d48216859e8fcea58ae0fb782ca95fd95de1248824662431b/aannoo/hcom"
---

# hcom

> **Hook your coding agents together**

`hcom` is a CLI that agents can use to message, watch, and spawn each other across terminals. It integrates with Claude Code, Gemini, Codex, OpenCode, Kilo Code, Pi, Oh My Pi, Antigravity, Cursor, Kimi and Copilot without changing how you use them.

Use it to coordinate pipelines, run different AI CLIs as each other's subagents, or just instead of copy-paste.

Single Rust binary, no background services. Start an agent with `hcom` in front, then prompt normally.

https://github.com/user-attachments/assets/1ce23ed9-f529-4be0-8124-816aa4c2fd43

---

## Install

```bash
brew install aannoo/hcom/hcom
```

<details><summary>Other install options</summary>

```bash
# Shell installer for macOS, Linux, Android (Termux), and WSL
curl -fsSL https://github.com/aannoo/hcom/releases/latest/download/hcom-installer.sh | sh
```

```powershell
# PowerShell installer for Windows
irm https://github.com/aannoo/hcom/releases/latest/download/hcom-installer.ps1 | iex
```

```bash
# With PyPI
uv tool install hcom  # or: pip install hcom
```

```bash
# Update any existing install to latest hcom version
hcom update
```

</details>

---

## Quickstart

Terminal…
