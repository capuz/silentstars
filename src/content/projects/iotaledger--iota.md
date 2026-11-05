---
repo: "iotaledger/iota"
name: "iota"
description: "Bringing the real world to Web3 with a scalable, decentralized and programmable DLT infrastructure."
readmeQualityOk: true
url: "https://github.com/iotaledger/iota"
homepage: "https://docs.iota.org"
language: "Rust"
languages: ["Rust"]
languagePcts: [76]
stars: 112
forks: 72
openIssues: 250
closedIssues: 5537
watchers: 13
contributors: 91
recentReleases: 0
createdAt: "2024-02-20T09:06:36Z"
lastCommitAt: "2026-11-05T09:39:11Z"
lastReleaseAt: "2024-10-22T15:53:30Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 98
undervaluedScore: 53
maintainers: ["muXxer", "VorobyevIlya", "bingyanglin"]
openGraphImageUrl: "https://opengraph.githubassets.com/d50fcf569f26cadd0a81f71763ee91d2e4b2e53cd626049b47b214aef12f63a8/iotaledger/iota"
---

# IOTA

IOTA is a asset-oriented programming model powered by the
[Move programming language](https://move-language.github.io/move/introduction.html). IOTA is a project under active
development by the [IOTA Foundation](https://iota.org).

## Setup

- [Install Rust][install-rust]

### Conventions

The Rust language conventions used in this repository can be found in [Rust Conventions](https://github.com/iotaledger/iota/blob/HEAD/RUST_CONVENTIONS.md).

### Formatting

**Rust**

In order to use the unstable features specified in rustfmt.toml, you must have the correct nightly toolchain component
installed.

```sh
rustup toolchain install nightly --component rustfmt --allow-downgrade
```

This can be used regardless of the default toolchain to format the code using the following command.

```sh
cargo +nightly fmt
```

**TOML**

In order to format `toml` files, we use `dprint`. It can be installed either via `npm` or via `cargo`.

```sh
cargo install dprint
```

or

```sh
npm install -g dprint
```

Simply run `dprint fmt` in the root of the repository to format all applicable files.
Similarly, run `dprint check` to check whether all files are correctly formatted.

#### IDE…
