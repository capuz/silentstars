---
repo: "gettori/tori"
name: "tori"
description: "A cockpit for the coding agents you already run."
readmeQualityOk: true
url: "https://github.com/gettori/tori"
homepage: "https://gettori.app"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [57, 37]
topics: ["ai-agents", "claude-code", "developer-tools", "git-worktree", "macos", "rust", "solidjs", "tauri"]
stars: 8
forks: 0
openIssues: 8
closedIssues: 145
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-07-01T21:03:34Z"
lastCommitAt: "2026-11-08T14:14:09Z"
lastReleaseAt: "2026-10-17T08:12:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 63
maintainers: ["skarif2", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1286499914/9bb02a92-8720-4304-8c6f-046ec5cf9d0a"
discussionCount: 1
---

```sh
curl -fsSL https://gettori.app/install | sh
```

Tori is a macOS app for supervising the coding agents you already run. Every
hunk an agent writes traces back to the turn, the reply and the tool call that
wrote it, and every prompt is a checkpoint you can diff or revert on its own.
Nothing leaves the machine without you: an agent's permission prompts stay
yours to answer, and the autopilot stops and asks before it opens a pull
request or sends anything else out. Around that sit a real terminal per
session, an editor with LSP and debuggers, and a git client that stages,
commits and reviews pull requests. Five agents ship with adapters, Claude and
Codex among them, and any other CLI agent is a TOML file away, or a
[pack](https://gettori.app/packs) someone already wrote. No account, no
telemetry.

**Status: alpha.** It is used every day by the person who builds it, it ships
often, and things still move. macOS only, on Apple Silicon and Intel, with a
companion Android app that shows a paired Mac's chats.

## Why

Running one agent in one terminal is fine. Running four, across three
repositories and a couple of worktrees, is a tab-management problem, and the
part you actually…
