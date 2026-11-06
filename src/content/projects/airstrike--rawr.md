---
repo: "airstrike/rawr"
name: "rawr"
description: "Rust Augmented With Rust: a Rust-shaped scripting language"
readmeQualityOk: true
url: "https://github.com/airstrike/rawr"
homepage: "https://rawr.airstrike.fyi"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
stars: 6
forks: 0
openIssues: 548
closedIssues: 492
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-22T11:34:10Z"
lastCommitAt: "2026-11-06T12:17:19Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 79
undervaluedScore: 49
maintainers: ["airstrike"]
openGraphImageUrl: "https://opengraph.githubassets.com/3d9cc3b7c5da60223655d15d73430fa8f26a45b4a5d0595140457141f2c472f1/airstrike/rawr"
---

# rawr

rawr is rust augmented with rust: a Rust interpreter for your dev builds.

Site: <https://rawr.airstrike.fyi>
Docs: <https://rawr.airstrike.fyi/docs>

## What is rawr?

Put `// rawr` on the first line of a file in your Cargo crate. `rawr run`
checks the marked files and then interprets them. Cargo compiles the same
crate for release. The marker is a comment, so the release build has no
interpreter in it.

rawr checks names, types, traits and `match` arms before anything runs. Its
errors use rustc's codes and point to your source. `rawr check` also runs
`cargo check`, so rustc has the final word on whether the code is valid Rust.

An app can also embed the `rawr` crate to run Rust scripts. That is a second,
separate use, described [below](#can-my-app-run-rust-scripts).

## What does it look like?

This is `src/main.rs` of a Cargo crate:

```rust
// rawr
enum Item {
    Book { price: f64 },
    Coffee { cups: i64 },
}

trait Priced {
    fn price(&self) -> f64;
}

impl Priced for Item {
    fn price(&self) -> f64 {
        match self {
            Item::Book { price } => *price,
            Item::Coffee { cups } => 3.5 * (*cups as f64),
        }
    }
}

fn total(items:…
