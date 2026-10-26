---
repo: "indexable-inc/blaze"
name: "blaze"
description: "Incremental rust builds up to 92x faster than cargo/rustc"
readmeQualityOk: true
url: "https://github.com/indexable-inc/blaze"
homepage: "https://ra-jit.ix.dev"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [74, 22]
topics: ["cargo", "compiler", "cranelift", "developer-tools", "hot-reload", "incremental-compilation", "jit", "live-coding", "rust", "rust-analyzer"]
stars: 469
forks: 18
openIssues: 95
closedIssues: 67
watchers: 0
contributors: 12
recentReleases: 2
createdAt: "2026-10-19T23:31:09Z"
lastCommitAt: "2026-10-26T09:17:32Z"
lastReleaseAt: "2026-10-21T16:16:42Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 87
undervaluedScore: 25
maintainers: ["andrewgazelka", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0f7d4b80ce9803ad56ab97e3d87d7c1ae2f97ec723efd88fbb694b0e45f54c54/indexable-inc/blaze"
---

## Install

```sh
curl -fsSL https://raw.githubusercontent.com/indexable-inc/blaze/main/install.sh | sh
```

For macOS on Apple silicon and Linux, with or without Rust installed: blaze downloads the Rust it
builds with once (about 100 to 135 MB), or uses rustup's. Rather use crates.io or Nix?
[Other ways to install](https://github.com/indexable-inc/blaze/blob/HEAD/docs/install.md).

## Try it

In any Rust project:

```text
blaze run     # like cargo run
blaze test    # like cargo test
blaze build   # like cargo build
```

The first build runs cargo, then waits a few seconds for blaze to load your project. Then change
a function and build again: it's back in milliseconds, and the `Finished` line says `[ra-jit]`
(blaze's engine). Every other cargo command passes straight through to cargo. Where cargo is
installed, `cargo blaze run` is the same as `blaze run`.

## How fast

- Edits rebuild **10× faster** on macOS arm64, **24× faster** on Linux aarch64 and **11× faster** on Linux x86-64 than with `cargo build`, on average over real projects.
- **About 20 ms** from saving a file to a running program using the new code, with
  [live…
