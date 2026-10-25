---
repo: "anzellai/sky"
name: "sky"
description: "Sky — an Elm-inspired language that compiles to Go. Hindley-Milner types, server-driven UI (Sky.Live), single binary output."
readmeQualityOk: true
url: "https://github.com/anzellai/sky"
language: "Rust"
languages: ["Rust", "Go"]
languagePcts: [34, 33]
topics: ["compiler", "fullstack", "functional-programming", "go", "liveview", "lsp", "programming-language", "server-driven-ui", "sse", "type-inference"]
stars: 436
forks: 11
openIssues: 3
closedIssues: 37
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2026-03-10T18:45:31Z"
lastCommitAt: "2026-10-25T22:11:13Z"
lastReleaseAt: "2026-03-21T23:57:39Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 27
maintainers: ["anzellai", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/eaf01131477c91b3b13f6f94d28ad62b414f9ed599b29ff383d9ecb3a0f19817/anzellai/sky"
discussionCount: 16
---

# Sky

[sky-lang.org](https://sky-lang.org) · [Docs & tour](https://anzellai.github.io/sky/) · [Examples](https://github.com/anzellai/sky/blob/HEAD/examples/)

> **Status: v0.27.x — pre-1.0 (0.x).** Sky is on its way to v1 and the API is
> not frozen yet: a minor version **may include breaking changes**, each
> documented under a **`⚠ Breaking`** heading in
> [CHANGELOG.md](https://github.com/anzellai/sky/blob/HEAD/CHANGELOG.md) with a concrete migration and surfaced on `sky
> upgrade`. Pin your version and read the notes before moving a minor — see
> [VERSIONING.md](https://github.com/anzellai/sky/blob/HEAD/VERSIONING.md) for the full stability + deprecation policy.
> The compiler is written in
> Rust (cargo workspace at `rust/`) — the typed-Go output and the
> "if it compiles, it works" guarantee carry over unchanged. The
> retired Haskell compiler stays under `legacy-haskell-compiler/` as
> the differential oracle. **New in v0.24: [automated testing](https://github.com/anzellai/sky/blob/HEAD/docs/tooling/testing.md)**
> — `sky fuzz` (a no-panic model fuzzer; `--target web:app` adds a differential
> split oracle) and mock-by-default test mode — and **audit-grade
> [architecture…
