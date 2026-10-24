---
repo: "link-foundation/link-cli"
name: "link-cli"
description: "A CLI tool to manipulate links."
readmeQualityOk: true
url: "https://github.com/link-foundation/link-cli"
homepage: "https://link-foundation.github.io/link-cli/"
language: "Rust"
languages: ["Rust", "C#"]
languagePcts: [48, 39]
stars: 8
forks: 2
openIssues: 12
closedIssues: 54
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2024-11-30T17:46:38Z"
lastCommitAt: "2026-10-24T08:07:30Z"
lastReleaseAt: "2026-05-12T09:50:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 79
maintainers: ["konard", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3444ef9574afe5c016f69788fa85ef28912cba13e03621c7cab57a0aff5c2d44/link-foundation/link-cli"
---

# link-cli

`clink` (`CLInk` `cLINK`), a CLI tool to manipulate links using single substitution operation.

It is based on [associative theory](https://habr.com/ru/articles/895896) (also in [ru](https://habr.com/ru/articles/804617)) and [Links Notation](https://github.com/linksplatform/Protocols.Lino) (also in [ru](https://github.com/linksplatform/Protocols.Lino/blob/main/README.ru.md))

It includes a production C# CLI/library pair on NuGet, a Rust CLI/library
crate on Crates.io, and a Rust-powered WebAssembly browser workbench built on
[links data store](https://github.com/linksplatform?view_as=public)
concepts (see also in [ru](https://github.com/linksplatform/.github/blob/main/profile/README.ru.md)).
Both ecosystems ship a runnable CLI and a reusable public library with full
auto-generated API documentation (DocFX for C#, `cargo doc`/docs.rs for Rust)
so external projects can embed the parser, query processors, decorators,
named/pinned types, persistent transformation triggers, and LiNo I/O without
re-implementing any of the internals.

## WebAssembly Browser Workbench

`clink` can run in the browser through the Rust query processor compiled to
WebAssembly. The React workbench…
