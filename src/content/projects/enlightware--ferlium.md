---
repo: "enlightware/ferlium"
name: "ferlium"
description: "A small, statically-typed functional scripting language for Rust hosts. Whole-module type inference, Rust-style syntax, no ambient I/O. "
readmeQualityOk: true
url: "https://github.com/enlightware/ferlium"
homepage: "https://ferlium.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 14
forks: 2
openIssues: 25
closedIssues: 146
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2025-01-22T10:42:13Z"
lastCommitAt: "2026-09-29T07:45:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 71
maintainers: ["stephanemagnenat", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/018d112cd6d8af0ab7cbf1383522924a93f1c4deeee2e880348e6fc7fb5d7dc5/enlightware/ferlium"
---

# Ferlium

[ci-badge]: https://github.com/enlightware/ferlium/actions/workflows/ci.yml/badge.svg
[ci-url]: https://github.com/enlightware/ferlium/actions

**A small, statically-typed functional scripting language for Rust hosts. Whole-module type inference, Rust-style syntax, no ambient I/O.**

Created by [Enlightware GmbH](https://enlightware.ch) for use in [Candli](https://cand.li), an educational game engine that teaches children STEAM through visual programming.
Ferlium powers Candli's advanced script blocks: end users write logic the game engine loads, compiles, and runs.

## Quick look

A small Ferlium program:

```ferlium
fn classify(n) {
    if n < 0 {
        "negative"
    } else if n == 0 {
        "zero"
    } else {
        "positive"
    }
}

[-1, 0, 1, 2] |> map(classify)
```

`classify` has no type annotations; Ferlium infers `(int) -> string`, generalising or specialising as needed.
The `|>` operator pipes the array into `map`.
`map` lives in the pre-imported `std` module.

Embedding it from a Rust host (see [minimal example](https://github.com/enlightware/ferlium/blob/HEAD/examples/minimal.rs)):

```rust
use ferlium::{CompilerSession, Path, run_fn_native};

let…
