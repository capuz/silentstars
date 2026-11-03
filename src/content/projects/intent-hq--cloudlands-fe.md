---
repo: "intent-hq/cloudlands-fe"
name: "cloudlands-fe"
description: "Electron + SvelteKit frontend for the intentd daemon"
readmeQualityOk: true
url: "https://github.com/intent-hq/cloudlands-fe"
homepage: "https://intentapp.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [81]
topics: ["ai-agents", "desktop-app", "electron", "sveltekit", "typescript"]
stars: 9
forks: 6
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 11
recentReleases: 0
createdAt: "2026-06-29T06:35:38Z"
lastCommitAt: "2026-11-03T12:04:04Z"
lastReleaseAt: "2026-07-29T06:25:55Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 90
undervaluedScore: 57
maintainers: ["panghy", "intent-hq-ci", "Wattenberger"]
openGraphImageUrl: "https://opengraph.githubassets.com/44a7e59d7c3d3d15458c31fc508b78640b561e7da173534590d38bb3129a892c/intent-hq/cloudlands-fe"
---

# cloudlands-fe

Electron + SvelteKit + TypeScript desktop frontend for **Intent** that talks to
the `intentd` daemon. It is consumed as the `packages/cloudlands-fe` git
submodule of [intent-hq/intent](https://github.com/intent-hq/intent).

## CI

PR updates run Linux metadata, static consumer contracts, workflow policy checks,
type/lint checks, and unit tests. The merge queue reruns type/lint and unit tests
and adds builds, integration tests, and relevant browser/native fixture suites
against the merged tree. Browser suites also retain complete nightly/manual runs.
Release-only diffs keep their validated exemptions; the required CI Gate rejects
unexpected PR or queue skips and failed jobs.

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
  implementations…
