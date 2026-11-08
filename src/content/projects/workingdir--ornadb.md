---
repo: "workingdir/ornadb"
name: "ornadb"
description: "The Object-Relational Native Application Database"
readmeQualityOk: true
url: "https://github.com/workingdir/ornadb"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 5
forks: 0
openIssues: 700
closedIssues: 4615
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-07T22:22:03Z"
lastCommitAt: "2026-11-08T10:41:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 97
undervaluedScore: 53
maintainers: ["kierandrewett"]
openGraphImageUrl: "https://opengraph.githubassets.com/25a60d8bd922d524006404e9da67d6ca1ede2f0889bcf2782a124ea3edc09b6e/workingdir/ornadb"
---

# OrnaDB

OrnaDB is a Git-backed database platform for typed applications. The current
implementation work targets the Orna 1.1.0 language, local repository, embedded
runtime, and command-line workflows. The workspace package version is still 1.0.0.

## Current local CLI

The active local binary is `orna`. It works with a local Git-backed
project and keeps source checking, execution, and interactive evaluation on
the same Orna 1.1.0 path.

### Build

Use a Rust 1.95 (or newer) toolchain and Git:

```sh
cargo fetch --locked
cargo build --locked -p orna-cli
```

### Initialize and check a project

Initialize a repository in the current directory or at an explicit path, then
check its reachable Orna source modules:

```sh
cargo run --locked -p orna-cli -- init
cargo run --locked -p orna-cli -- init ./my-project
cargo run --locked -p orna-cli -- check
cargo run --locked -p orna-cli -- status
```

`init` preserves existing source and repository metadata. `check` reports
source, resolution, and type failures without replacing the working tree.

### Run and invoke

Run a reachable project entry point, or invoke a reachable zero-argument pure
function:

```sh
cargo run --locked -p…
