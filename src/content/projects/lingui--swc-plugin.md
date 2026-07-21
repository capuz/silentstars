---
repo: "lingui/swc-plugin"
name: "swc-plugin"
description: "Lingui Rust Tooling"
readmeQualityOk: true
url: "https://github.com/lingui/swc-plugin"
homepage: "https://www.npmjs.com/package/@lingui/swc-plugin"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["i18n", "icu", "internationalization", "lingui", "messageformat", "swc", "swc-plugin", "hacktoberfest"]
stars: 77
forks: 33
openIssues: 4
closedIssues: 66
watchers: 2
contributors: 20
recentReleases: 0
createdAt: "2022-12-15T15:20:37Z"
lastCommitAt: "2026-07-21T06:12:30Z"
lastReleaseAt: "2023-03-17T12:31:49Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "funded"]
healthScore: 92
undervaluedScore: 55
maintainers: ["timofei-iatsenko", "andrii-bodnar", "mogelbrod"]
openGraphImageUrl: "https://opengraph.githubassets.com/416df22c7e50e444fc4e810b3a618efda5818bd14e7ce9f0d31df01cf1a29cc8/lingui/swc-plugin"
fundingLinks: ["GITHUB:https://github.com/timofei-iatsenko", "GITHUB:https://github.com/vonovak"]
---

# <div align="center">Lingui Rust Tooling</div>

Rust tooling for [Lingui](https://lingui.dev) i18n - compiles to WebAssembly and runs inside SWC, Next.js, and Vite build pipelines.

</div>

## Overview

This monorepo hosts the Rust-based tooling for [Lingui](https://lingui.dev). Its flagship is an SWC plugin that transforms `@lingui/macro` and `@lingui/react/macro` calls into optimized i18n runtime code at build time - a faster, Rust-powered alternative to the Babel macro.

## Packages

### [`@lingui/swc-plugin`](https://github.com/lingui/swc-plugin/blob/HEAD/packages/lingui-macro/)

SWC macro transform plugin for Lingui. Transforms `@lingui/macro` and `@lingui/react/macro` calls into optimized i18n runtime code. Compiles to WebAssembly (`wasm32-wasip1`).

#### Documentation

- Installation, usage & options - [`@lingui/swc-plugin` README](https://github.com/lingui/swc-plugin/blob/HEAD/packages/lingui-macro/README.md)
- `swc_core` compatibility table - [Compatibility](https://github.com/lingui/swc-plugin/blob/HEAD/packages/lingui-macro/README.md#compatibility)
- [Lingui macro reference](https://lingui.dev/ref/macro)

## Contributing

Contributions are welcome! See…
