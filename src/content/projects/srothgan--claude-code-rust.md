---
repo: "srothgan/claude-code-rust"
name: "claude-code-rust"
description: "A native Rust terminal interface for Claude Code"
url: "https://github.com/srothgan/claude-code-rust"
homepage: "https://srothgan.github.io/claude-code-rust/"
language: "Rust"
languages: ["Rust"]
languagePcts: [82]
topics: ["ai", "claude", "cli", "ratatui", "rust", "terminal", "tui", "agent-sdk", "anthropic", "claude-code"]
stars: 163
forks: 46
openIssues: 0
closedIssues: 39
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2026-02-08T08:35:24Z"
lastCommitAt: "2026-07-03T12:40:10Z"
lastReleaseAt: "2026-03-03T23:00:25Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 34
maintainers: ["srothgan", "dependabot[bot]", "TomasWeisss"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1152671435/e0b318ab-5c6f-4bca-a1a9-ebbb7db584a0"
discussionCount: 1
---

# Claude Code Rust

A native Rust terminal interface for Claude Code. Drop-in replacement for Anthropic's stock Node.js/React Ink TUI, built for performance and a better user experience.

</p>

## About

Claude Code Rust replaces the stock Claude Code terminal interface with a native Rust binary built on [Ratatui](https://ratatui.rs/). It connects to the same Claude API through a local Agent SDK bridge. Core Claude Code functionality - tool calls, file editing, terminal commands, and permissions - works unchanged.

## Requisites

- Node.js 18+ (for the Agent SDK bridge)
- Existing Claude Code authentication (`~/.claude/config.json`)

## Install

### npm (global, recommended)

```bash
npm install -g claude-code-rust
```

The npm package installs a small launcher plus a platform-specific optional dependency containing the prebuilt Rust binary for your OS and architecture.

If `claude-rs` reports a missing platform package, check whether optional dependencies were omitted:

```bash
npm config get omit
npm install -g claude-code-rust
```

If `claude-rs` resolves to an older global shim, ensure your npm global bin directory comes first on `PATH` or remove the stale shim before…
