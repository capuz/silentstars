---
repo: "shep-pm/shep"
name: "shep"
description: "A process manager written in Rust, and a pm2 alternative: one supervisor daemon keeps a flock of long-running processes alive on Linux, macOS and Windows"
readmeQualityOk: true
url: "https://github.com/shep-pm/shep"
homepage: "https://shep-pm.com/"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
topics: ["cli", "cron", "daemon", "devops", "linux", "logging", "macos", "mcp", "monitoring", "pm2"]
stars: 14
forks: 8
openIssues: 140
closedIssues: 340
watchers: 1
contributors: 7
recentReleases: 10
createdAt: "2026-08-08T23:02:33Z"
lastCommitAt: "2026-10-24T08:07:44Z"
lastReleaseAt: "2026-08-27T12:25:36Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "funded", "release_machine", "fork_magnet"]
healthScore: 94
undervaluedScore: 61
maintainers: ["TurtIeSocks"]
openGraphImageUrl: "https://opengraph.githubassets.com/58559047ee0f72ec8b99af4d0179b0c2faecab5111a0582308484aa19f0be2e2/shep-pm/shep"
fundingLinks: ["GITHUB:https://github.com/TurtIeSocks"]
discussionCount: 1
---

# shep 🐑

A process manager written in Rust. One binary runs a daemon called the
shepherd, which keeps a flock of your long-running processes alive, restarts
them when they die, captures what they print, and says plainly when something
is wrong.

Every command answers with the whole flock, not just the sheep you touched.
The face in the STATUS column is the fastest thing on the page to read:
`(o.o)` online, `(o~o)` starting, `(>_<)` waiting to restart, `(-.-)` stopped,
`(x.x)` errored.

> Status: pre-1.0, so anything can still change. The version badge above is
> the published one. macOS, Linux and Windows. The Windows tier is the newest
> of the three, and the three things it will not do are under
> [Windows](#windows) below.

## Install

```bash
cargo install shep
shep welcome
```

Homebrew, on macOS and Linux:

```bash
brew install shep-pm/shep/shep
```

Scoop, on Windows:

```powershell
scoop bucket add shep https://github.com/shep-pm/scoop-shep
scoop install shep
```

Or take a prebuilt archive off any
[release](https://github.com/shep-pm/shep/releases). Seven targets, each with
its own `.sha256` beside it and all of them in one `SHA256SUMS`.

Notes worth having before you…
