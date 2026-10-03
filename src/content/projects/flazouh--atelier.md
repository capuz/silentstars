---
repo: "flazouh/atelier"
name: "atelier"
description: "A native code editor for work with coding agents: sessions next to your code, review of each turn, and pull requests."
readmeQualityOk: true
url: "https://github.com/flazouh/atelier"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["acp", "agent", "ai", "developer-tools", "ide", "open-source", "rust", "svelte", "tauri", "typescript"]
stars: 90
forks: 7
openIssues: 0
closedIssues: 106
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2026-03-22T22:07:52Z"
lastCommitAt: "2026-10-03T22:04:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 34
maintainers: ["flazouh"]
openGraphImageUrl: "https://opengraph.githubassets.com/36a2d160541b3658f34cce912421c73d2644358abdf266346e3c670f05e904d1/flazouh/atelier"
discussionCount: 1
---

# atelier

A native code editor on GPUI, made for work with coding agents. It runs agent sessions next to your code,
shows what each turn changed for review, and opens pull requests, on a local folder or over SSH.

Agents plug in through one model of atelier's own (`crates/agents`): Claude Code, Cursor (over the Agent Client
Protocol), and atelier's own agent.

## Build and run

Rust 2024 (stable). macOS and Linux.

```sh
cargo run -p atelier-app       # the editor
cargo run -p atelier-gallery   # every component in each state
tools/check.sh                 # every check a change needs: tests, clippy, the gallery, the vendored crates
```

An agent runs as its own program on the project's host, so install and sign in to the agent you want there
(for example `claude` for Claude Code, `agent` for Cursor).

## Layout

The UI is built from [atelier-ui](https://github.com/flazouh/atelier-ui), the design system, which lives in its
own repo.

| Path | What it holds |
| --- | --- |
| `crates/app` | The window: projects, sessions, review, PR view, tasks, settings. |
| `crates/agents` | Agent sessions: the model, and a backend for each agent. See…
