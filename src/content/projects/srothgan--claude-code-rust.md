---
repo: "srothgan/claude-code-rust"
name: "claude-code-rust"
description: "A native Rust terminal interface for Claude Code"
readmeQualityOk: true
url: "https://github.com/srothgan/claude-code-rust"
homepage: "https://srothgan.github.io/claude-code-rust/"
language: "Rust"
languages: ["Rust"]
languagePcts: [75]
topics: ["ai", "claude", "cli", "ratatui", "rust", "terminal", "tui", "agent-sdk", "anthropic", "claude-code"]
stars: 177
forks: 48
openIssues: 0
closedIssues: 44
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2026-02-08T08:35:24Z"
lastCommitAt: "2026-08-04T06:11:29Z"
lastReleaseAt: "2026-03-03T23:00:25Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 33
maintainers: ["srothgan", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/1152671435/e0b318ab-5c6f-4bca-a1a9-ebbb7db584a0?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260804%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260804T061331Z&X-Amz-Expires=300&X-Amz-Signature=b97cb230a69417a40268820fb6cb13782be9349f47d4498d6585c3fb0edffca0&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTgyNDMxMSwibmJmIjoxNzg1ODI0MDExLCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.AQBSMLu9pw_pFeo6EpVIMWbK15q0lnsDfelFnO80_xY"
discussionCount: 2
---

# Claude Code Rust

A native Rust terminal interface for Claude Code. Drop-in replacement for Anthropic's stock Node.js/React Ink TUI, built for performance and a better user experience.

</p>

## About

Claude Code Rust replaces the stock Claude Code terminal interface with a native Rust binary built on [Ratatui](https://ratatui.rs/). It connects to the same Claude API through a local Agent SDK bridge. Core Claude Code functionality - tool calls, file editing, terminal commands, and permissions - works unchanged.

## Prerequisite

- The Claude Code CLI must be installed as fallback for some SDK-unsupported features.

## Install

### Install script (recommended, v0.14.0+)

**macOS/Linux:**

```bash
curl -fsSL https://raw.githubusercontent.com/srothgan/claude-code-rust/main/scripts/install/install.sh | sh
```

**Windows PowerShell:**

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -Command "irm 'https://raw.githubusercontent.com/srothgan/claude-code-rust/main/scripts/install/install.ps1' | iex"
```

### npm (global)

```bash
npm install -g claude-code-rust
```

See the [installation guide](https://srothgan.github.io/claude-code-rust/installation.html) for release…
