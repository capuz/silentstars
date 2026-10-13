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
stars: 12
forks: 8
openIssues: 261
closedIssues: 105
watchers: 1
contributors: 6
recentReleases: 10
createdAt: "2026-08-08T23:02:33Z"
lastCommitAt: "2026-10-13T10:58:37Z"
lastReleaseAt: "2026-08-27T12:25:36Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "funded", "release_machine", "fork_magnet"]
healthScore: 85
undervaluedScore: 58
maintainers: ["TurtIeSocks"]
openGraphImageUrl: "https://opengraph.githubassets.com/014ea24f9e98f8425a97633162495156de1e074462d81e74fd62fd0ae0c5c99f/shep-pm/shep"
fundingLinks: ["GITHUB:https://github.com/TurtIeSocks"]
discussionCount: 0
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
