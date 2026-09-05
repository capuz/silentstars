---
repo: "arthjean/paneflow"
name: "paneflow"
description: "Cross-platform GPUI app for parallel coding agents."
readmeQualityOk: true
url: "https://github.com/arthjean/paneflow"
homepage: "https://paneflow.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
topics: ["ai-agents", "claude-code", "codex", "coding-agents", "cross-platform", "developer-tools", "gpui", "opencode", "rust", "terminal"]
stars: 68
forks: 9
openIssues: 3
closedIssues: 4
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-04-01T19:13:42Z"
lastCommitAt: "2026-09-05T07:48:57Z"
lastReleaseAt: "2026-04-21T12:11:08Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 91
undervaluedScore: 34
maintainers: ["arthjean", "oliviermattei"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1198799207/71fe266a-5eed-479e-af42-b1ca53d508bf"
discussionCount: 7
---

Your agents work in parallel, this keeps them in sight.

Paneflow is a native terminal workspace for running coding agents side by side. Each agent lives in a real PTY pane you can read, interrupt, and take over, while the app tracks which one is thinking, waiting, stalled, failed, or done, and keeps every task tied to its workspace and branch.

Works with any CLI agent - Claude Code, Codex, Gemini, opencode, Pi, Hermes, you name it.

Everything runs locally: agents are ordinary CLI processes in ordinary terminals, there is no hosted runtime and no proxy in front of your model. Prompts are pre-filled and you press Enter; auto-submit is explicit and gated.

Written in Rust on [Zed's GPUI](https://github.com/zed-industries/zed/tree/main/crates/gpui), with panes emulated by [Ghostty](https://github.com/ghostty-org/ghostty): the same `libghostty-vt` engine, statically linked, on every target and with no fallback. Native builds for Linux, macOS Apple Silicon, and Windows x64. No Electron, no WSL.

[Website →](https://paneflow.dev)

## Install

### 1. Quick start

On macOS:

```bash
brew install --cask arthjean/paneflow/paneflow
```

Everywhere else, take the build for your machine from…
