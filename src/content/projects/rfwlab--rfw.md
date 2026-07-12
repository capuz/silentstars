---
repo: "rfwlab/rfw"
name: "rfw"
description: "rfw (Reactive Framework) is a Go-based reactive framework for building web applications using WebAssembly, with future plans to support native applications and the use of GL libraries."
readmeQualityOk: true
url: "https://github.com/rfwlab/rfw"
homepage: "http://rfw.bromb.in/"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["framework", "go", "go-framework", "golang", "reactive", "reactive-framework", "wasm", "webassembly"]
stars: 13
forks: 1
openIssues: 26
closedIssues: 2
watchers: 2
contributors: 2
recentReleases: 7
createdAt: "2024-09-11T22:00:46Z"
lastCommitAt: "2026-07-12T06:16:46Z"
lastReleaseAt: "2026-07-10T14:54:09Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 76
undervaluedScore: 67
maintainers: ["mirkobrombin", "GabsEdits"]
openGraphImageUrl: "https://opengraph.githubassets.com/50461c0d9c321917bc1c8a62f37e4ca989066f870d718cf9009b43644b653d23/rfwlab/rfw"
---

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/rfwlab/brandbook/refs/heads/main/logos/full/png/light-full.png">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/rfwlab/brandbook/refs/heads/main/logos/full/png/dark-full.png">
</picture>

<hr />

### Real-time dashboards and internal tools, written entirely in Go. No JavaScript. No glue code.

[Documentation](https://github.com/rfwlab/rfw/blob/HEAD/docs/articles/index.md)
</div>

rfw is "Phoenix LiveView for Go". It lets you build interactive, real-time web apps using Server Side Computed (SSC) components. 

Instead of writing a REST API and a frontend framework, you write Go. rfw handles the WebSocket synchronization and DOM updates for you. It is ideal for:
- Real-time dashboards
- Internal admin tools
- Control planes
- Any app where server state needs to reflect instantly in the UI

## Why rfw?

If you are using `templ` + `htmx` (or `datastar`), you are already moving toward server-driven UI. rfw takes this further by providing a full state-synchronization engine. You get the productivity of a frontend framework (like React or Vue) but…
