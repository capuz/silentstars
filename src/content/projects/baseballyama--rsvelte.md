---
repo: "baseballyama/rsvelte"
name: "rsvelte"
description: "Rust-powered Svelte ecosystem"
readmeQualityOk: true
url: "https://github.com/baseballyama/rsvelte"
homepage: "https://baseballyama.github.io/rsvelte/"
language: "Rust"
languages: ["Rust"]
languagePcts: [88]
topics: ["compiler", "formatter", "language-server", "linter", "svelte", "svelte3", "svelte5", "sveltejs"]
stars: 202
forks: 9
openIssues: 4
closedIssues: 1134
watchers: 1
contributors: 8
recentReleases: 0
createdAt: "2026-01-04T00:35:25Z"
lastCommitAt: "2026-08-28T12:23:05Z"
lastReleaseAt: "2026-05-30T11:18:27Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 34
maintainers: ["baseballyama"]
openGraphImageUrl: "https://opengraph.githubassets.com/738041fec031f9c44847ca3c5f378327a760dae9ea3c5d0b285081c8188237db/baseballyama/rsvelte"
---

# rsvelte

rsvelte is a Rust port of the official Svelte 5 compiler and related developer
tools. It aims to match the official compiler output and work directly with the
[OXC](https://oxc.rs/) toolchain.

[Website](https://baseballyama.github.io/rsvelte/) |
[Playground](https://baseballyama.github.io/rsvelte/playground) |
[Compatibility](https://baseballyama.github.io/rsvelte/progress) |
[Benchmarks](https://baseballyama.github.io/rsvelte/benchmark)

> [!WARNING]
> rsvelte passes all in-scope fixtures in the official Svelte 5 test suite, but
> it is still pre-1.0. APIs and behavior may change. Test it carefully before
> using it in production.

## Why rsvelte

Most native JavaScript tools only understand JavaScript and TypeScript files.
They must call the JavaScript-based Svelte compiler to work with `.svelte`
files. rsvelte implements the compiler and related tools in Rust.

This lets tools such as oxlint, oxfmt, Rolldown, and tsgo add Svelte support
without starting the JavaScript compiler.

## Quick start

Use the Vite plugin in a standard Vite and Svelte project:

```bash
npm install -D @rsvelte/vite-plugin-svelte
```

```js
// vite.config.js
import { svelte } from…
