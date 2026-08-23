---
repo: "Sora-bluesky/winsmux"
name: "winsmux"
description: "Native Windows terminal multiplexer with cross-pane AI agent communication — no WSL2 required."
readmeQualityOk: true
url: "https://github.com/Sora-bluesky/winsmux"
language: "Rust"
languages: ["Rust"]
languagePcts: [55]
topics: ["ai-agents", "claude-code", "cli", "codex", "conpty", "developer-tools", "multi-agent", "orchestration", "powershell", "rust"]
stars: 7
forks: 0
openIssues: 16
closedIssues: 324
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-03-28T08:21:01Z"
lastCommitAt: "2026-08-23T04:07:59Z"
lastReleaseAt: "2026-03-31T07:29:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 52
maintainers: ["Sora-bluesky"]
openGraphImageUrl: "https://opengraph.githubassets.com/6e059e453508f1a94ded1eb048699efc6b7d3d179f8aa4b4e9c9492dac1f4c68/Sora-bluesky/winsmux"
discussionCount: 0
---

[English](https://github.com/Sora-bluesky/winsmux/blob/HEAD/README.md) | [日本語](https://github.com/Sora-bluesky/winsmux/blob/HEAD/README.ja.md)

</p>

# winsmux

`winsmux` is **one control desk for every AI coding agent on Windows** — a single human-run cockpit for people who already run multiple coding CLIs and need to keep the work accountable.

Instead of hiding agents behind a black-box orchestrator, `winsmux` opens each worker in a real pane, keeps file changes isolated in git worktrees, lets you send or interrupt instructions, and compares completed runs with evidence such as changed-file overlap, review state, verification state, and checkpoints before you decide what to keep.

Use it when one Claude Code, Codex, Antigravity CLI, Grok Build, or legacy Gemini session is not enough, but you still want one human operator, local credentials, and a review trail.

For example: run the same task through two agents, watch both panes live, stop the one going off track, then compare the recorded evidence before accepting either result.

`winsmux` does not sign in to AI services for you. Each agent CLI keeps using its own official sign-in or API key setup.

## Why It Exists

Most tools…
