---
repo: "RustCFML/RustCFML"
name: "RustCFML"
description: "A CFML interpreter written in RUST"
readmeQualityOk: true
url: "https://github.com/RustCFML/RustCFML"
homepage: "https://rustcfml.github.io/RustCFML/"
language: "Rust"
languages: ["Rust", "ColdFusion"]
languagePcts: [76, 23]
stars: 26
forks: 3
openIssues: 1
closedIssues: 71
watchers: 2
contributors: 4
recentReleases: 2
createdAt: "2026-02-21T01:51:23Z"
lastCommitAt: "2026-07-05T21:00:33Z"
lastReleaseAt: "2026-04-19T00:23:55Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 50
maintainers: ["alexskinner"]
openGraphImageUrl: "https://opengraph.githubassets.com/edd88523659841ce4c060bdd700198d4b6609ff9d8b90a2a0b7a0c9c4d84df70/RustCFML/RustCFML"
---

## RustCFML

A CFML (ColdFusion&reg; Markup Language) interpreter written in Rust — a single, fast, run-anywhere binary with a tiny memory footprint.

> ColdFusion is a registered trademark of Adobe Inc. RustCFML is not affiliated with or endorsed by Adobe.

**[Try RustCFML in your browser](https://rustcfml.github.io/RustCFML/demo/)** — interactive demo running on WebAssembly.

## Project Aims

RustCFML aims to be a **compatible, fast, run-anywhere** CFML engine with a minimal memory footprint and maximum performance. It is deliberately opinionated:

- **A lean, stable core.** We don't add things to the core that are prone to constant churn in the wider ecosystem. Reliability comes first — think of RustCFML as an LTS-style engine. It is already blazingly fast.
- **Libraries over built-ins.** We won't add core functions that are better served by libraries. Instead, where possible, we make the engine compatible enough to *run* those libraries.
- **No administrator, ever.** RustCFML does not have — and never will have — a ColdFusion Administrator. Configuration is file-based via [`.cfconfig.json`](https://github.com/RustCFML/RustCFML/blob/HEAD/docs/configuration.md), with…
