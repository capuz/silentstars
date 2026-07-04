---
repo: "donovan-yohan/relay-ide"
name: "relay-ide"
description: "Remote web interface for interacting with Claude Code CLI sessions from any device"
readmeQualityOk: true
url: "https://github.com/donovan-yohan/relay-ide"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
stars: 7
forks: 1
openIssues: 48
closedIssues: 486
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-21T23:42:08Z"
lastCommitAt: "2026-07-04T22:53:43Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 54
maintainers: ["donovan-yohan"]
openGraphImageUrl: "https://opengraph.githubassets.com/4f00678b928a0891c901112214e08c3c97a109514de62b1a2c5e48e584b748f7/donovan-yohan/relay-ide"
---

# relay-ide

Relay IDE is an agentic development environment for running AI coding agents and terminals from a browser or CLI. A Relay hub hosts the web UI and stable JSON gateway; local or remote nodes provide shells, agent CLIs, repo inventory, and `relay-pty`/libghostty-vt terminal session execution. `relay-pty` is the only supported terminal backend; legacy `tmux-compat` state is unsupported and not restored. Repos and worktrees are first-class development context, but they are optional bindings on sessions/tabs rather than the definition of a workspace.

## Current model

Relay's current direction uses this IA vocabulary:

- View — a UI mode or surface.
- Workspace — a saved grouping/config layer for related projects, repos, defaults, and visual organization. It is not synonymous with one repo.
- Project — product/work scope, usually represented by issue/PR/docs context.
- Instance — a concrete local or remote node/repo/worktree occurrence.
- Bench — an arrangement of working surfaces.
- Tab — the leaf working surface: terminal, agent session, file/diff/html surface, PR view, or other active context.

Current docs and UI copy should use these nouns for product IA.…
