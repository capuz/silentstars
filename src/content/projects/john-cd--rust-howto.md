---
repo: "john-cd/rust_howto"
name: "rust_howto"
description: "John's Rust How-To Book"
readmeQualityOk: true
url: "https://github.com/john-cd/rust_howto"
homepage: "https://john-cd.com/rust_howto/"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["rust", "rust-cheat", "rust-cheats", "rust-lang", "book", "cookbook", "how-to", "howto", "mdbook"]
stars: 13
forks: 5
openIssues: 12
closedIssues: 1565
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2023-09-24T17:40:12Z"
lastCommitAt: "2026-11-16T04:11:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 100
undervaluedScore: 78
maintainers: ["john-cd"]
openGraphImageUrl: "https://opengraph.githubassets.com/c6d1d7ee34d967eb77e65b21906162cf7828e30b12b1d52e8bb5d7fe12a4187d/john-cd/rust_howto"
fundingLinks: ["GITHUB:https://github.com/john-cd"]
discussionCount: 1
---

# The Rust How-To Book

**A documentation summary and a compendium of recipes for the Rust language and ecosystem.**
**Everything you need for day-to-day Rust coding, all in one place.**

Point your browser to [`https://john-cd.com/rust_howto`][rust-howto~website]↗ to read the [Rust How-to][rust-howto~website]↗ book.

## Local Rust checks

Install the toolchain from `rust-toolchain.toml` with `rustup show` in the checkout. From the repository root, run `just check` and `just test`. For targeted Cargo work, use `bk/crates`, `playground`, `publish`, `tools`, `xmpl`, or `later/crates` for deferred examples. For formatting, use the nightly pin in `rustfmt-toolchain.toml`.

## Work In Progress

This book is going through _heavy edits_. Pardon the dust.

## Contributing

Contributions are most welcome! Please review the [contributing][rust-howto~contributing~website]↗ section of the book and peruse the book's [GitHub repo][rust-howto~repo]↗.

## Rust tooling

Use the pinned Rust 1.100.0 toolchain from [rust-toolchain.toml](https://github.com/john-cd/rust_howto/blob/HEAD/rust-toolchain.toml) with
`just` for build, lint, and test tasks. Install Rust, sccache, and Just. Windows recipes…
