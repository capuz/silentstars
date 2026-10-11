---
repo: "flazouh/atelier"
name: "atelier"
description: "A native code editor for work with coding agents: sessions next to your code, review of each turn, and pull requests."
readmeQualityOk: true
url: "https://github.com/flazouh/atelier"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["acp", "agent", "ai", "developer-tools", "ide", "open-source", "rust", "svelte", "tauri", "typescript"]
stars: 91
forks: 8
openIssues: 0
closedIssues: 106
watchers: 2
contributors: 5
recentReleases: 10
createdAt: "2026-03-22T22:07:52Z"
lastCommitAt: "2026-10-11T10:15:15Z"
lastReleaseAt: "2026-10-09T13:41:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 40
maintainers: ["flazouh"]
openGraphImageUrl: "https://opengraph.githubassets.com/77323e583b6bc0934772a802457f2443500c589d106368fba998207aa4c9f49a/flazouh/atelier"
discussionCount: 1
---

# atelier

A native code editor on GPUI, made for work with coding agents. It runs agent sessions next to your code,
shows what each turn changed for review, and opens pull requests, on a local folder or over SSH.

Agents plug in through one model of atelier's own (`crates/agents`): Claude Code, Cursor and Codex (over the Agent
Client Protocol), and atelier's own agent.

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
