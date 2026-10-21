---
repo: "storytold/craft-libs"
name: "craft-libs"
description: "Rust libraries for the Craft Apps"
readmeQualityOk: true
url: "https://github.com/storytold/craft-libs"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 321
forks: 615
openIssues: 64
closedIssues: 10
watchers: 8
contributors: 28
recentReleases: 0
createdAt: "2026-10-09T15:59:16Z"
lastCommitAt: "2026-10-21T20:00:28Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 67
undervaluedScore: 27
maintainers: ["skylartaylor", "aiongg", "benandez"]
openGraphImageUrl: "https://opengraph.githubassets.com/04d81549805c383390a321c46eaa28c5344b0dd28843905c09a534bf77971235/storytold/craft-libs"
---

Craft App Libraries
===================

This repo contains libraries used by the various Craft Apps. It's a Rust monorepo workspace, and the libraries can be included by any Craft Apps that need them.

In the future this may grow to include non-Rust library code.

If any libraries grow beyond Craft App usage, eg. RAW format support, they may be promoted out and into their own libraries for the broader ecosystem to take advantage of.

## Layout

A Cargo workspace (edition 2024, resolver 3). Each library is a crate under `crates/<name>`, named
`craft-<name>`, with `version`, `edition`, `license` and `repository` inherited from the workspace
(`license.workspace = true`, and so on) and `[lints] workspace = true`. Register each crate in
`[workspace.dependencies]` in the root `Cargo.toml`.

Apps depend on a crate by git:

```toml
craft-<name> = { git = "https://github.com/storytold/craft-libs", rev = "<commit>" }
```

## Libraries

- [`craft-ai-core`](https://github.com/storytold/craft-libs/blob/HEAD/crates/ai-core/README.md): the data model and contract for AI in the Craft Apps (connections, models, tools, requests, jobs, consent, history, route spec). Pure, no I/O, wasm-safe.…
