---
repo: "baseballyama/rsvelte"
name: "rsvelte"
description: "Rust-powered Svelte ecosystem"
url: "https://github.com/baseballyama/rsvelte"
homepage: "https://baseballyama.github.io/rsvelte/"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
stars: 89
forks: 1
openIssues: 6
closedIssues: 217
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-01-04T00:35:25Z"
lastCommitAt: "2026-06-24T00:22:58Z"
lastReleaseAt: "2026-05-30T11:18:27Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 40
maintainers: ["baseballyama", "renovate[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/af1c6c7d8ebadd6e755776432b2a9e04d603b957b311587548784275315a56c8/baseballyama/rsvelte"
---

</p>

<h1 align="center">rsvelte</h1>

  <strong>A Rust port of the official Svelte 5 compiler, built to slot natively into the <a href="https://oxc.rs/">OXC</a> ecosystem.</strong>
</p>

</p>

> **⚠️ Early Stage Project** — rsvelte already passes the official Svelte 5 compiler test suite end-to-end, but it's still pre-1.0. APIs, output, and behaviour may change without notice. Use it in production at your own risk.

## Why rsvelte exists

The end goal isn't "another Svelte compiler" — it's making Svelte a first-class citizen of OXC's Rust-native JavaScript/TypeScript toolchain.

Today, the native JS toolchain that has grown up around OXC — `oxlint`, `oxfmt`, [Rolldown](https://rolldown.rs/), and [`tsgo`](https://github.com/microsoft/typescript-go) (wired into `oxlint` via [`tsgolint`](https://github.com/oxc-project/tsgolint)) — can only see `.js` / `.ts` / `.jsx` / `.tsx` files. `.svelte` files are invisible to them because parsing Svelte requires running the JavaScript-based Svelte compiler, which native tools can't and won't link against. The result: Svelte developers don't get the order-of-magnitude speed-ups that the rest of the JS ecosystem is starting to take for granted.…
