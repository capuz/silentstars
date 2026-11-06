---
repo: "itsdezen/tili"
name: "tili"
description: "A tiling window manager for macOS, built for speed."
readmeQualityOk: true
url: "https://github.com/itsdezen/tili"
homepage: "https://tili.dezen.me"
language: "Rust"
languages: ["Rust"]
languagePcts: [90]
topics: ["i3", "macos", "rust", "tiling", "window-manager"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-13T09:31:15Z"
lastCommitAt: "2026-11-06T13:20:07Z"
lastReleaseAt: "2026-07-16T11:29:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 46
maintainers: ["itsdezen", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1299106067/e1c165d6-1864-43d4-aa80-81681cb2155c"
discussionCount: 1
---

# tili

**A tiling window manager for macOS, built for speed.**

i3-style workflow · public Accessibility API only · Rust · no SIP disable

[Website](https://tili.dezen.me) · [Getting started](#getting-started) · [Commands](#commands) · [Roadmap](https://github.com/itsdezen/tili/blob/HEAD/ROADMAP.md) · [Contributing](#contributing) · [Architecture](#architecture)

### Install tili

```sh
brew install itsdezen/tap/tili
```

---

## Why tili

Most tiling window managers on macOS force a trade-off: either they poll the
screen and burn CPU doing it, or they reach for private, undocumented APIs
that break every time Apple ships a system update. tili takes neither
shortcut.

- **Event-driven, not polling.** The daemon subscribes to Accessibility and
  workspace notifications and reacts to them — it does no work while your
  windows aren't changing. That's the whole idea behind lower idle CPU/RAM
  than the alternatives.
- **Public API only.** Exactly one narrowly-scoped private call is used
  anywhere in the codebase (to resolve a window's real `CGWindowID`) —
  everything else is the public Accessibility API. You never disable System
  Integrity Protection to run tili.
- **A config…
