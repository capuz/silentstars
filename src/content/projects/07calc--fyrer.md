---
repo: "07CalC/fyrer"
name: "fyrer"
description: "soon to be a monorepo tool"
readmeQualityOk: true
url: "https://github.com/07CalC/fyrer"
homepage: "https://crates.io/crates/fyrer"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 6
forks: 0
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-10-22T07:45:34Z"
lastCommitAt: "2026-08-08T04:35:44Z"
lastReleaseAt: "2026-03-01T12:15:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 60
maintainers: ["07CalC"]
openGraphImageUrl: "https://opengraph.githubassets.com/b30eac1d8993f7d12bce03266cf87dfcb7f761d4ef4a25711054343313634830/07CalC/fyrer"
---

# fyrer

A declarative, fast and lightweight monorepo tool that runs multiple dev
servers and build tasks concurrently.

`fyrer` reads a `fyrer.yml` file describing projects and their tasks, resolves
the dependency graph between tasks, runs each level of the graph concurrently,
and streams every task's output through a colorized, prefixed logger.
Long-running tasks can be restarted automatically when their watched input
files change.

## Installation

### Install using cargo

```bash
cargo install fyrer
```

### Build from source

```bash
git clone https://github.com/07calc/fyrer
cd fyrer
cargo build --release
cargo install --path .
```

## Usage

`fyrer` looks for a `fyrer.yml` file in the current directory. A full example
is available at [`fyrer.example.yml`](https://github.com/07CalC/fyrer/blob/HEAD/fyrer.example.yml).

```bash
# Run every task
fyrer run

# Run a single task or every task with a given name
fyrer run web:dev
fyrer run build

# Show the execution plan without running anything
fyrer run dev --dry-run

# List every project and its tasks
fyrer list

# Point at a different configuration file
fyrer --config path/to/fyrer.yml run
```

## Configuration

```yaml
version:…
