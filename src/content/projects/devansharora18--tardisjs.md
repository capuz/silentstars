---
repo: "devansharora18/tardisjs"
name: "tardisjs"
description: "A compiler-driven frontend framework built around a blueprint DSL.  TardisJS compiles .tardis files to plain JavaScript modules plus a small runtime (~5KB). It uses Proxy-based reactivity with direct DOM bindings (no virtual DOM reconciliation).  This project is experimental and blueprint-first by design."
readmeQualityOk: true
url: "https://github.com/devansharora18/tardisjs"
homepage: "https://tardisjs.devansharora.in"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [58, 35]
topics: ["frontend", "javascript", "web-development"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-17T17:33:28Z"
lastCommitAt: "2026-11-26T23:38:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 60
maintainers: ["devansharora18"]
openGraphImageUrl: "https://opengraph.githubassets.com/a41a5ccf851c9359182b62ca9702ab676aed2b6e7125d1c01ef82e20e09b1198/devansharora18/tardisjs"
---

# TardisJS

**TSX-native UI framework for Linux, macOS, Windows, and the web.**

Pre-alpha. One TSX entry runs in a native window (Rust renderer, embedded
QuickJS) or in a browser (DOM host). Mobile is deferred.

## Targets

| Target | Status |
|---|---|
| Linux (X11/Wayland) | Verified here: window, headless PNG, click e2e |
| macOS | CI build/test path; GUI smoke is a host check |
| Windows | CI build/test path; GUI smoke is a host check |
| Web | Verified in Chrome and jsdom; `dev`/`build`/`preview` |
| Mobile | Deferred |

## Quick start

```sh
npx @devansharora18/tardisjs create
```

The scaffolder asks for platforms (native, web, or both), styling (Tardis style
objects or Tailwind on web), a template (counter, form, or 100k-row sheet), the
package manager, dependency install, and git initialization. Every prompt has
a non-interactive flag:

```sh
npx @devansharora18/tardisjs create my-app \
  --platform both --styling default --template sheet --pm npm --yes
```

Then:

```sh
cd my-app
npm install
npm run dev        # native, if selected
npm run dev:web    # browser, if selected
```
