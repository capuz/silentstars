---
repo: "intent-hq/cloudlands-fe"
name: "cloudlands-fe"
description: "Electron + SvelteKit frontend for the intentd daemon"
readmeQualityOk: true
url: "https://github.com/intent-hq/cloudlands-fe"
homepage: "https://intentapp.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [80]
topics: ["ai-agents", "desktop-app", "electron", "sveltekit", "typescript"]
stars: 7
forks: 5
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 8
recentReleases: 10
createdAt: "2026-06-29T06:35:38Z"
lastCommitAt: "2026-09-27T09:12:52Z"
lastReleaseAt: "2026-07-29T06:25:55Z"
status: "thriving"
tags: ["hidden_gem", "release_machine", "fork_magnet"]
healthScore: 90
undervaluedScore: 68
maintainers: ["panghy", "wookiehangover", "Wattenberger"]
openGraphImageUrl: "https://opengraph.githubassets.com/b4b6bfa7af5c5000b561bc1a3e716ac86e9d94fd61a684f1dfeb0f282c58dbd7/intent-hq/cloudlands-fe"
---

# cloudlands-fe

Electron + SvelteKit + TypeScript desktop frontend for **Intent** that talks to
the `intentd` daemon. It is consumed as the `packages/cloudlands-fe` git
submodule of [intent-hq/intent](https://github.com/intent-hq/intent).

## Architecture

The renderer is a SvelteKit application running inside Electron. It never talks
to the backend directly. Instead, all backend access flows through a single
seam:

```
SvelteKit renderer  <->  AppClient (JSON-RPC boundary)  <->  intentd daemon
```

- **AppClient (`src/lib/client`)** is the only boundary the renderer uses to
  reach "the backend". Each domain exposes async query methods, reactive
  `subscribe()` streams, and mutation methods. It ships with two
  implementations behind the same contract:
  - a **live** implementation (`src/lib/client/live`) that speaks JSON-RPC to
    the `intentd` daemon over the IPC bridge, and
  - a **mock** implementation (`src/lib/client/mock`) backed by in-memory
    fixtures, so the app runs standalone without a daemon.
- **Shared / domain state uses Redux + redux-saga** under
  `src/store/renderer`. Svelte 5 runes are used for UI rendering only; they are
  not a home for shared or durable…
