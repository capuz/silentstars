---
repo: "baseballyama/rsvelte"
name: "rsvelte"
description: "Rust-powered Svelte ecosystem"
readmeQualityOk: true
url: "https://github.com/baseballyama/rsvelte"
homepage: "https://baseballyama.github.io/rsvelte/"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
stars: 126
forks: 2
openIssues: 13
closedIssues: 265
watchers: 0
contributors: 5
recentReleases: 9
createdAt: "2026-01-04T00:35:25Z"
lastCommitAt: "2026-07-23T06:16:26Z"
lastReleaseAt: "2026-05-30T11:18:27Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 99
undervaluedScore: 39
maintainers: ["baseballyama", "renovate[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b42df30746063a61dbce35800546068810e0bbaaa4a9b174c66098c3dec2b5a1/baseballyama/rsvelte"
---

</p>

<h1 align="center">rsvelte</h1>

  <strong>A Rust port of the official Svelte 5 compiler — and the ecosystem around it — built to slot natively into the <a href="https://oxc.rs/">OXC</a> toolchain.</strong>
</p>

</p>

</p>

> **⚠️ Early stage** — rsvelte passes 100% of the in-scope fixtures in the official Svelte 5 test suite, but it's pre-1.0: APIs and behaviour may change without notice. Use in production at your own risk.

## Why rsvelte exists

The native JS toolchain growing around OXC — `oxlint`, `oxfmt`, [Rolldown](https://rolldown.rs/), [`tsgo`](https://github.com/microsoft/typescript-go) — can only see `.js` / `.ts` / `.jsx` / `.tsx`. `.svelte` files are invisible to it, because parsing Svelte means running the JavaScript-based Svelte compiler, which native tools can't link against. Svelte developers are locked out of the order-of-magnitude speed-ups the rest of the ecosystem is starting to take for granted.

rsvelte fixes that at the source: it ports the compiler — and the ecosystem hot paths around it (`svelte2tsx`, `svelte-check`, `vite-plugin-svelte`, formatting) — to Rust on top of OXC's parser, codegen, and semantic stack. The end goal is upstream…
