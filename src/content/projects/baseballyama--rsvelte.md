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
stars: 252
forks: 17
openIssues: 10
closedIssues: 1342
watchers: 2
contributors: 14
recentReleases: 0
createdAt: "2026-01-04T00:35:25Z"
lastCommitAt: "2026-11-14T07:01:50Z"
lastReleaseAt: "2026-05-30T11:18:27Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 37
maintainers: ["renovate[bot]", "baseballyama", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2c3892d715e0da0165d29da3930a85c7cf3f1956f2d64f998ff5ab03e717bc9c/baseballyama/rsvelte"
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
