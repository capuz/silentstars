---
repo: "raine/aven"
name: "aven"
description: "A local-first task manager for power users and agents"
readmeQualityOk: true
url: "https://github.com/raine/aven"
homepage: "https://aven.raine.dev/"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
stars: 81
forks: 3
openIssues: 2
closedIssues: 9
watchers: 2
contributors: 4
recentReleases: 10
createdAt: "2026-06-21T13:04:53Z"
lastCommitAt: "2026-08-30T06:02:09Z"
lastReleaseAt: "2026-07-15T13:05:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 39
maintainers: ["raine", "xe6", "seungjuchoi"]
openGraphImageUrl: "https://opengraph.githubassets.com/a2c9778160df2b0b0bf08542a48dab51dea236b7fa1f6214aa8dc551d02ca9fa/raine/aven"
discussionCount: 1
---

# aven

`aven` is a local-first task manager for power users and agents. It gives you one overview across
projects, task capture from wherever work appears, first-class agent workflows, workspace isolation,
and a polished terminal UI.

It is currently under active development, but already works really well and I use it as my daily
driver.

If you've tried aven, feedback is welcome! Please
[open an issue](https://github.com/raine/aven/issues) to share it.

If you find aven useful, consider sharing it with others who might benefit from it.

Docs: <https://aven.raine.dev>

## Why aven?

The CLI is agent-first, while the [power-user TUI](https://aven.raine.dev/tui/) gives humans a
keyboard-driven path to every action.

The [queue view](https://aven.raine.dev/concepts/#queue) brings together tasks from every project
and shows what needs action, what is blocked, and what to focus on next.

Aven keeps tasks in a local SQLite database instead of tracked files inside each project repo. You
and your agents can capture and update tasks offline, independent of git state, branches, worktrees,
or checkouts. If you need the same tasks on more than one device, you can
[sync them through a server…
