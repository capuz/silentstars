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
stars: 81
forks: 10
openIssues: 3
closedIssues: 17
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-04-01T19:13:42Z"
lastCommitAt: "2026-09-23T08:47:02Z"
lastReleaseAt: "2026-04-21T12:11:08Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 97
undervaluedScore: 35
maintainers: ["arthjean"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1198799207/f2a2a8ab-7e68-4f94-957b-9f804f7e9b4a"
discussionCount: 7
---

The workspace where your coding agents work, and where you read what they changed.

Paneflow is a native workspace for coding agents. The Workspaces rail lists every repository you have open; each tab is an agent session bound to its own branch or worktree, named after its work, with the agent's live state: thinking, waiting, failed, or done. Inside a session, the agent runs in a real Ghostty terminal pane you can read, interrupt, and take over. A dock beside the session holds Changes (the checkout's diff against its base branch), Files (a code editor with git markers in the gutter and the file tree), and a terminal.

Works with any CLI agent - Claude Code, Codex, Gemini, opencode, Pi, Hermes, you name it.

Everything runs locally: agents are ordinary CLI processes in ordinary terminals, there is no hosted runtime and no proxy in front of your model. Prompts are pre-filled and you press Enter; auto-submit is explicit and gated.

Written in Rust on [Zed's GPUI](https://github.com/zed-industries/zed/tree/main/crates/gpui), with panes emulated by [Ghostty](https://github.com/ghostty-org/ghostty): the same `libghostty-vt` engine, statically linked, on every target and with no…
