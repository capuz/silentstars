---
repo: "shreeve/duckdb-harbor"
name: "duckdb-harbor"
description: "Many clients, one DuckDB — Harbor serves your database over plain HTTP (one small binary: server + modern shell); DuckTable is its native macOS desktop client."
readmeQualityOk: true
url: "https://github.com/shreeve/duckdb-harbor"
homepage: "https://shreeve.github.io/duckdb-harbor/"
language: "Rust"
languages: ["Rust"]
languagePcts: [78]
stars: 12
forks: 0
openIssues: 0
closedIssues: 4
watchers: 2
contributors: 3
recentReleases: 10
createdAt: "2026-08-11T12:49:49Z"
lastCommitAt: "2026-10-03T22:05:17Z"
lastReleaseAt: "2026-09-03T07:01:49Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 58
maintainers: ["shreeve"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1330919288/c79e4c44-24f2-4cd8-b951-db4c08103e8e"
---

One small binary that serves a DuckDB file to everything, and is its own modern shell.
  Query, browse, and edit your data. Nothing else.

---

Two products, one repo. DuckTable requires Harbor and builds Harbor's protocol
crates from the tree beside it, so the wire contract is checked on both sides
of every commit. Each directory is its own Cargo workspace with its own
version and releases: harbor tags are `v*`, DuckTable tags are `ducktable-v*`.

Install harbor:

```sh
curl -fsSL https://raw.githubusercontent.com/shreeve/duckdb-harbor/main/install.sh | bash
```

Install DuckTable (macOS, Apple Silicon) with Homebrew or one command:

```sh
brew install --cask shreeve/tap/ducktable
curl -fsSL https://raw.githubusercontent.com/shreeve/duckdb-harbor/main/ducktable/scripts/install.sh | bash
```

Uninstall either with `... | bash -s -- --uninstall` — your databases,
state, and settings stay.

MIT.
