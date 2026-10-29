---
repo: "GitVoltApp/gitvolt"
name: "gitvolt"
description: "A fast desktop Git client"
readmeQualityOk: true
url: "https://github.com/GitVoltApp/gitvolt"
homepage: "https://gitvolt.com"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [60, 36]
stars: 30
forks: 3
openIssues: 0
closedIssues: 10
watchers: 2
contributors: 4
recentReleases: 10
createdAt: "2026-10-05T22:57:34Z"
lastCommitAt: "2026-10-29T21:23:38Z"
lastReleaseAt: "2026-10-18T15:30:21Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 51
maintainers: ["francislavoie", "github-actions[bot]", "Steven-Cleys"]
openGraphImageUrl: "https://opengraph.githubassets.com/edf6646bdeb978217362cfaddcc135b09254371bd38f4c8d6926bb0eba124027/GitVoltApp/gitvolt"
---

---

GitVolt is a graphical Git client inspired by [GitKraken](https://www.gitkraken.com/). If you've
used GitKraken, it'll feel familiar on purpose: the lane graph down the middle, the branch and
remote sidebar, the commit details on the right, and workflows driven from context menus and
the keyboard. GitVolt is an independent project, not affiliated with or endorsed
by GitKraken / Axosoft.

**Formerly GitBolt.** Renamed in 0.7.0. **On GitBolt?** Install GitVolt fresh from
[GitVoltApp/gitvolt releases](https://github.com/GitVoltApp/gitvolt/releases): GitBolt's settings
aren't moved over.

It's built with a Rust core (using [gitoxide](https://github.com/GitoxideLabs/gitoxide) for most reads
and the `git` CLI for writes, so your hooks, config and credentials behave exactly as they do in a
terminal), a React UI, and [Tauri](https://tauri.app/) with the Chromium (CEF) runtime.

> **Status:** used day to day on Linux and Windows; newer on macOS.

## Platforms

| Platform | Status |
|---|---|
| Linux | Supported: `.deb`, `.rpm` and Arch Linux packages |
| Windows | Supported (10 and 11): an installer (per user) and an MSI (per machine) |
| macOS | Supported (12 or later, Apple…
