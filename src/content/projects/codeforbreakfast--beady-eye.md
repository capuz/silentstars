---
repo: "CodeForBreakfast/beady-eye"
name: "beady-eye"
description: "Shows you, live, what every agent is doing across your projects, and tells agents and scripts when the beads they wait on change. One watcher reads every beads tracker you configure, and feeds a terminal view, Claude Code sessions and JSON for scripts."
readmeQualityOk: true
url: "https://github.com/CodeForBreakfast/beady-eye"
homepage: "https://codeforbreakfast.co/beady-eye"
language: "Rust"
languages: ["Rust"]
languagePcts: [89]
topics: ["agents", "beads", "herdr", "issue-tracker", "rust", "terminal", "tui", "herdr-plugin", "claude-code", "claude-code-plugin"]
stars: 21
forks: 1
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-09-06T08:56:38Z"
lastCommitAt: "2026-10-20T08:49:52Z"
lastReleaseAt: "2026-09-15T06:08:13Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 48
maintainers: ["GraemeF", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9f7cea3365057a0b1c44bd5556a360fa3797b1cf9a8708d87087d2a2137388a9/CodeForBreakfast/beady-eye"
---

# beady-eye

`bdi` is one unblinking eye over every [beads](https://github.com/gastownhall/beads)
tracker you point it at. It shows you, live, what every agent is doing across
your projects, and it tells agents and scripts when the beads they wait on
change. `bd` is all it needs. It will also look at whatever else you leave
lying about, and each thing you let it see gives it more to do.

- **It shows you the work.** Each tracker's work is drawn as a tree, and a
  bead waiting on another project's work has that work drawn beneath it,
  whichever tracker holds it. Add [herdr](https://herdr.dev), and beside every
  bead an agent has claimed sits the live pane that agent is in.
- **It tells whoever is watching.** `bdi watch` keeps watch over every tracker
  at once, and tells anything connected to it the moment a bead it watches
  changes. Add Claude Code with the beady-eye plugin, and a session is told
  when the bead it waits on changes, whether it is idle or busy. A script on
  the watcher's socket is sent each bead it watches as a line of JSON, and
  again each time it changes.
- **It settles waits on pull requests, issues and releases.** Add `gh`, and
  `bdi gates` asks GitHub…
