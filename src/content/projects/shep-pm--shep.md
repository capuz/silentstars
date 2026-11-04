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
stars: 16
forks: 9
openIssues: 46
closedIssues: 582
watchers: 1
contributors: 11
recentReleases: 10
createdAt: "2026-08-08T23:02:33Z"
lastCommitAt: "2026-11-04T02:57:52Z"
lastReleaseAt: "2026-08-27T12:25:36Z"
status: "thriving"
tags: ["solo_builder", "funded", "release_machine", "fork_magnet"]
healthScore: 98
undervaluedScore: 63
maintainers: ["TurtIeSocks", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ee81f3ce0011063ea2dbbc3136f25b692ce2a722ba8f57ec891bb1c8fd573c2a/shep-pm/shep"
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
