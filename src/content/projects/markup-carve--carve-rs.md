---
repo: "markup-carve/carve-rs"
name: "carve-rs"
description: "Rust implementation of Carve - a lightweight markup language for documents and the web: parser, HTML renderer, and carve CLI."
readmeQualityOk: true
url: "https://github.com/markup-carve/carve-rs"
homepage: "https://markup-carve.github.io/carve/"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["carve", "djot", "html", "markup", "markup-language", "parser", "rust"]
stars: 5
forks: 4
openIssues: 12
closedIssues: 1577
watchers: 1
contributors: 1
recentReleases: 5
createdAt: "2026-05-13T21:15:38Z"
lastCommitAt: "2026-11-26T23:10:38Z"
lastReleaseAt: "2026-10-14T15:05:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 100
undervaluedScore: 82
maintainers: ["dereuromark", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/601ac10a850a1bb4e5917ff10e4bd93037cc43318194462b396f987dec8fcf58/markup-carve/carve-rs"
---

# carve-rs

The Rust engine of the [Carve](https://markup-carve.github.io/carve/) markup language, version 0.2: parse, resolve, render HTML, format, lint and import. The crate is published as `carve-lang` and imported as `carve`; it also builds the `carve` command.

Carve 0.2 requires Rust 1.88 or newer.

Its public library is the module `carve::api`. The rest of the crate is engine internals: those modules are hidden from rustdoc and may change in any commit.

The calls follow `spec/0.2/tooling.md` (C2-T-005), spelled the Rust way (C2-T-001): `parseWithDiagnostics` becomes `parse_with_diagnostics`, `strictLosses` becomes `strict_losses`. Run `cargo doc --open` for the full reference.

## Install

```toml
[dependencies]
carve = { package = "carve-lang", version = "0.2" }
```

The `fs` feature (on by default) holds every code path that opens a file: the include resolver `carve::include::fs`, the `includes.root` option of the JSON boundary and the `carve` command. With `default-features = false` the library opens no file, for sandboxed, WASM and browser hosts; a host then passes its own `Resolver`.
