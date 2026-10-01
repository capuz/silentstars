---
repo: "workingdir/ornadb"
name: "ornadb"
description: "The Object-Relational Native Application Database"
readmeQualityOk: true
url: "https://github.com/workingdir/ornadb"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 5
forks: 0
openIssues: 449
closedIssues: 3024
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-07T22:22:03Z"
lastCommitAt: "2026-10-01T10:23:24Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 97
undervaluedScore: 53
maintainers: ["kierandrewett"]
openGraphImageUrl: "https://opengraph.githubassets.com/c0bb6a21d40a0426fadcbcaed53f8b72c4f703b58029e3a159ade58669b6e98e/workingdir/ornadb"
---

# OrnaDB

OrnaDB is a Git-backed database platform for typed applications. The current
implementation work targets the Orna 1.0.0 language, local repository, embedded
runtime, and command-line workflows.

## Current local CLI

The active local binary is `orna-cli-v1`. It works with a local Git-backed
project and keeps source checking, execution, and interactive evaluation on
the same Orna 1.0 path.

### Build

Use a Rust 1.95 (or newer) toolchain and Git:

```sh
cargo fetch --locked
cargo build --locked -p orna-cli-v1
```

### Initialize and check a project

Initialize a repository in the current directory or at an explicit path, then
check its reachable Orna source modules:

```sh
cargo run --locked -p orna-cli-v1 -- init
cargo run --locked -p orna-cli-v1 -- init ./my-project
cargo run --locked -p orna-cli-v1 -- check
cargo run --locked -p orna-cli-v1 -- status
```

`init` preserves existing source and repository metadata. `check` reports
source, resolution, and type failures without replacing the working tree.

### Run and invoke

Run a reachable project entry point, or invoke a reachable zero-argument pure
function:

```sh
cargo run --locked -p orna-cli-v1 -- run
cargo run…
