---
repo: "krshforever/bwb-browser"
name: "bwb-browser"
description: "Browser Without Bloat — 30KB MCP browser automation server. Raw CDP, zero bloat, works on any platform (Termux, Linux, macOS, Windows). The only MCP browser with live console/network event capture."
readmeQualityOk: true
url: "https://github.com/krshforever/bwb-browser"
homepage: "https://www.npmjs.com/package/bwb-browser"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 19
forks: 4
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-07-28T11:33:13Z"
lastCommitAt: "2026-11-10T11:38:05Z"
lastReleaseAt: "2026-09-10T16:10:58Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 84
undervaluedScore: 42
maintainers: ["krshforever"]
openGraphImageUrl: "https://opengraph.githubassets.com/9fb0f7a564e7b37138001d516bdbd0b6fca402f8f1ff7f3c458db771e0f1ae8a/krshforever/bwb-browser"
fundingLinks: ["GITHUB:https://github.com/krshforever"]
---

# bwb-browser

**Browser Without Bloat** — ~173KB of source, 65 kB tarball. 26 tools. Static-first. Runs on your phone, survives it too.

A lightweight MCP server that gives any AI agent browser superpowers. Written by a guy in India on Termux because the existing tools were 200MB of "why" — then rewritten when Android kept killing those tools mid-run.

---

## v4: The Browser Starts Only When It Must

v1–v3 made the server light but spawned Chromium for everything — including reading a README. Android's out-of-memory killer ate whole Termux sessions for that. v4 inverts the default:

- **Static-first fetch ladder** — plain pages are fetched + extracted with zero Chromium. `browser_goto` returns `mode: "static"` in milliseconds. JS pages escalate to CDP automatically (`mode: "browser"` + reason). Dead URLs error without spawning anything.
- **Vigilance system** — every tool response carries a `[bwb resources]` footer. On critical pressure bwb hibernates tabs itself, tears down at one tab, journals everything, and tells the agent what it did.
- **Survival profile** — `--lean` auto-enables on Termux (capped renderers, 3-tab cap, 5-minute mayfly teardown, 256MB JS heap). Runs on a…
