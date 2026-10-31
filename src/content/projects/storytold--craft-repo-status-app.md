---
repo: "storytold/craft-repo-status-app"
name: "craft-repo-status-app"
description: "See the status of PRs, builds, etc. "
readmeQualityOk: true
url: "https://github.com/storytold/craft-repo-status-app"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [64, 29]
stars: 141
forks: 247
openIssues: 1
closedIssues: 0
watchers: 4
contributors: 2
recentReleases: 0
createdAt: "2026-10-09T13:24:17Z"
lastCommitAt: "2026-10-31T19:01:08Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 66
undervaluedScore: 24
maintainers: ["echelon"]
openGraphImageUrl: "https://opengraph.githubassets.com/793a8c65b6e670d4a63371934c1879b99f0cc2fb5ec07ede72e2c746647c54de/storytold/craft-repo-status-app"
---

Craft Repo Status App
=====================

Find out the status of the craft apps: a tray dashboard ("Craft Status") that
polls the storytold `*craft` repositories on GitHub every 30 minutes, keeps a
cache, and tells you what to fix first. Everything runs locally: no server.

- **Rust workspace**
  - `craft-core`: the model, release/download accounting, the urgency
    heuristic, config, cache and window state. No network or UI dependencies,
    and it is unit-tested.
  - `craft-github`: the GitHub GraphQL/REST fetcher, plus a `craft-fetch` CLI
    that prints a table, for debugging.
  - `craft-status-app`: the Tauri 2 shell (poll thread, tray, global
    shortcut, window).
- **TypeScript, HTML and CSS** in `ui/`, with no framework or bundler. `tsc`
  compiles `ui/src/` to `ui/build/`, which `index.html` loads; the app's
  `build.rs` runs it, so building the app needs Node.js 24+ and `npm ci`.
  `ui/src/model.ts` is pure; it and the UI itself (in happy-dom) are tested
  with `node --test`. No JavaScript is committed: see `CLAUDE.md`.

## What it shows

Every column sorts. Click a header; click it again to reverse the order. Repos
with no data always sort last. Or drag rows into…
