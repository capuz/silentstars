---
repo: "relatedb/relate"
name: "relate"
description: "An embedded local, agent-native graph database supporting Cypher 25 written in Rust. Memory or transactional filesystem."
readmeQualityOk: true
url: "https://github.com/relatedb/relate"
homepage: "https://relatedb.ai"
language: "Rust"
languages: ["Rust"]
languagePcts: [89]
topics: ["agent-memory", "agent-sandbox-tools", "agentic-ai", "cypher", "graph-database", "graphdb", "neo4j", "emedded-database"]
stars: 106
forks: 7
openIssues: 0
closedIssues: 1
watchers: 3
contributors: 11
recentReleases: 9
createdAt: "2026-11-04T15:55:34Z"
lastCommitAt: "2026-11-12T10:57:55Z"
lastReleaseAt: "2026-11-11T17:50:42Z"
status: "newborn"
tags: ["release_machine"]
healthScore: 99
undervaluedScore: 39
maintainers: ["jexp", "oskarhane", "triha74"]
openGraphImageUrl: "https://opengraph.githubassets.com/db0ad9faf060ba8956055005df769da42a1633af5a486272ed120b6bcefae668/relatedb/relate"
---

# Relate

**A graph database in a single binary — query it in Cypher, embed it anywhere, deploy nothing.**

Relate is an embedded, in-memory property-graph engine written in Rust, with a
command-line shell for interactive and scripted queries. A graph is a single
`.rl` file, a directory, or pure in-memory — durable through a fsync'd
write-ahead log and Parquet checkpoints.
The same engine powers the `relate` CLI, a Python package, Node.js and browser
(WASM) npm packages, a Rust crate, and an optional one-process server speaking
Bolt, HTTP, and MCP. No server to babysit, no infrastructure to operate.

📖 **Documentation: [relatedb.ai](https://relatedb.ai/)** — tutorials, guides,
and the CLI / Cypher / Rust / C API references. The deep references live in
[`docs/`](https://github.com/relatedb/relate/blob/HEAD/docs/) in this repository, and the honest list of what Relate does
not do yet is [`docs/limitations.md`](https://github.com/relatedb/relate/blob/HEAD/docs/limitations.md).

> This is an experimental Neo4j Labs project and not part of Neo4j's supported
> product lineup. See the [Neo4j Labs disclaimer](https://github.com/relatedb/relate/blob/HEAD/LABS_DISCLAIMER.txt).

## Install…
