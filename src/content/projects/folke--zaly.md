---
repo: "folke/zaly"
name: "zaly"
description: "Hackable terminal coding agent"
readmeQualityOk: true
url: "https://github.com/folke/zaly"
homepage: "https://zaly.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 133
forks: 11
openIssues: 3
closedIssues: 6
watchers: 1
contributors: 3
recentReleases: 7
createdAt: "2026-04-17T15:40:26Z"
lastCommitAt: "2026-11-07T16:12:13Z"
lastReleaseAt: "2026-10-26T22:55:04Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 88
undervaluedScore: 36
maintainers: ["folke", "zaly-repo-automation[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/abbee8747e1d08885223fd0d5c3ad37bfbeed60172372befb7838646475c3642/folke/zaly"
discussionCount: 2
---

# zaly

Hackable terminal coding agent.

zaly is an AI coding agent with a polished terminal UI, persistent sessions,
flexible model support, explicit permissions, and a resource system built to be
extended.

> [!WARNING]
> zaly is alpha software. It is already useful and fairly polished, but APIs,
> configuration, session formats, and behavior may change before 1.0. Expect
> rough edges.

## ✨ Features

- **Fast by design** — startup and session resume stay fast, even with very large
  histories. Lazy modules, chunked JSONL reads from the end, incremental loading,
  and progressive widget rendering keep work off the path to first render.
- **A terminal UI built for agent work** — use a focused fullscreen interface or
  keep native terminal scrollback. Streaming Markdown, syntax highlighting,
  overlays, mouse support, selection, clipboard integration, themes, and
  terminal images are built in.
- **Choose the right model per task** — authenticate with multiple providers,
  browse available models, switch models mid-session, and tune reasoning effort
  without restarting zaly.
- **Sessions that can keep going** — sessions persist and resume per workspace.
  Inspect the exact…
