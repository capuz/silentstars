---
repo: "mvoof/Marble-Trace"
name: "Marble-Trace"
description: "iRacing telemetry overlay"
readmeQualityOk: true
url: "https://github.com/mvoof/Marble-Trace"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [64, 21]
topics: ["iracing-telemetry", "overlay", "race", "reactjs", "rust", "tauri", "tauri2", "typescript"]
stars: 7
forks: 0
openIssues: 6
closedIssues: 123
watchers: 0
contributors: 1
recentReleases: 7
createdAt: "2026-03-23T09:54:23Z"
lastCommitAt: "2026-07-25T06:02:07Z"
lastReleaseAt: "2026-05-08T19:38:31Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 60
maintainers: ["mvoof"]
openGraphImageUrl: "https://opengraph.githubassets.com/4cdd69c75f00506cc1f85812c47a7f03a885e4aec280fab10e794b1d80fd4e34/mvoof/Marble-Trace"
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="docs/assets/logo-light.svg">
  </picture>
</p>

<h1 align="center">Marble Trace</h1>

  <strong>Open-source iRacing telemetry overlay — beautiful, lightweight, always on top.</strong>
</p>

  

</div>

  Marble Trace is actively developed — new widgets, fixes, and features land regularly.<br>
  Got a bug, an idea, or just want to share your setup? Join the community on Discord.
</p>
  </a>
</p>

---

## Why Marble Trace?

Most iRacing overlays are either bloated desktop apps or locked behind subscriptions. **Marble Trace** is different:

- **Zero overhead** — a tiny Rust backend reads telemetry directly via [kerb](https://github.com/mvoof/kerb), our own multi-sim shared-memory telemetry library; the UI is a transparent frameless window that floats above the sim.
- **Fully modular** — enable only the widgets you need. Each widget lives in its own transparent window and can be repositioned independently.
- **Open source** — MIT licensed. Extend it, theme it, submit a PR.
- **Modern stack** — Tauri v2 + React 19 + MobX + Ant Design. Fast and type-safe.

---

## Widgets

Every widget is independently positioned,…
