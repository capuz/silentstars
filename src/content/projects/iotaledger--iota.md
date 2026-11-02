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
openIssues: 243
closedIssues: 5532
watchers: 13
contributors: 91
recentReleases: 0
createdAt: "2024-02-20T09:06:36Z"
lastCommitAt: "2026-11-02T14:28:34Z"
lastReleaseAt: "2024-10-22T15:53:30Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 99
undervaluedScore: 53
maintainers: ["muXxer", "alexsporn", "VorobyevIlya"]
openGraphImageUrl: "https://opengraph.githubassets.com/6c9a4554c866a20993748a2704548bf84a0fd75f55b76bc4e8c62e500f57dde0/iotaledger/iota"
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
