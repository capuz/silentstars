---
repo: "hupe1980/rustcdc"
name: "rustcdc"
description: "Change data capture you embed, not deploy. PostgreSQL, MySQL, MariaDB and SQL Server behind one Source trait, one event envelope and one checkpoint model — as an ordinary Rust crate that links into your binary and runs on your Tokio runtime."
readmeQualityOk: true
url: "https://github.com/hupe1980/rustcdc"
homepage: "https://hupe1980.github.io/rustcdc/"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["cdc", "mariadb", "mssql", "mysql", "postgres", "rust"]
stars: 6
forks: 2
openIssues: 1
closedIssues: 11
watchers: 1
contributors: 3
recentReleases: 7
createdAt: "2026-05-15T04:59:04Z"
lastCommitAt: "2026-11-13T05:42:19Z"
lastReleaseAt: "2026-11-10T10:05:57Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 93
undervaluedScore: 69
maintainers: ["hupe1980", "vu2jpr"]
openGraphImageUrl: "https://opengraph.githubassets.com/9511f6a004153407dafc94d1839baa04b299f88ae658d16cc8377868f8eaf091/hupe1980/rustcdc"
---

# rustcdc

**Change data capture in Rust.** PostgreSQL, MySQL, MariaDB, SQL Server and Snowflake
behind one `Source` trait, one event envelope and one checkpoint model — with no JVM, no
sidecar and no control plane.

📖 **[Documentation](https://hupe1980.github.io/rustcdc/)** ·
🚀 **[Server quickstart](https://hupe1980.github.io/rustcdc/docs/getting-started/)** ·
🔧 **[Library guide](https://hupe1980.github.io/rustcdc/docs/embedding/)** ·
📦 **[API reference](https://docs.rs/rustcdc)**

## Two ways to run it

Both are built and tested from this repository, against each other, at one version.

| | | |
|---|---|---|
| **[`rustcdc`](https://github.com/hupe1980/rustcdc/blob/HEAD/crates/rustcdc/)** | A **library** you link into your own binary. You own the loop, the sink and the process. | [crates.io](https://crates.io/crates/rustcdc) · [guide](https://hupe1980.github.io/rustcdc/docs/) · [README](https://github.com/hupe1980/rustcdc/blob/HEAD/crates/rustcdc/README.md) |
| **[`rustcdc-server`](https://github.com/hupe1980/rustcdc/blob/HEAD/crates/rustcdc-server/)** | A configured **binary and container image**: TOML in, Kafka / Iceberg / Snowflake / Databricks / HTTP / files out, with an…
