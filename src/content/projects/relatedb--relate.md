---
repo: "relatedb/relate"
name: "relate"
description: "An embedded local, agent-native graph database supporting Cypher 25 written in Rust. Memory or transactional filesystem."
readmeQualityOk: true
url: "https://github.com/relatedb/relate"
homepage: "https://relatedb.ai"
language: "Rust"
languages: ["Rust"]
languagePcts: [88]
topics: ["agent-memory", "agent-sandbox-tools", "agentic-ai", "cypher", "graph-database", "graphdb", "neo4j", "emedded-database", "relate", "relatedb"]
stars: 302
forks: 28
openIssues: 2
closedIssues: 8
watchers: 4
contributors: 12
recentReleases: 10
createdAt: "2026-11-04T15:55:34Z"
lastCommitAt: "2026-11-17T14:06:39Z"
lastReleaseAt: "2026-11-12T13:32:04Z"
status: "newborn"
tags: ["release_machine"]
healthScore: 95
undervaluedScore: 31
maintainers: ["jexp", "oskarhane", "johnymontana"]
openGraphImageUrl: "https://opengraph.githubassets.com/0e23291825c22224edb987cc40ff7aa3376d5e4a55e09f6102005a1933039e07/relatedb/relate"
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
not do is [`docs/limitations.md`](https://github.com/relatedb/relate/blob/HEAD/docs/limitations.md). Several entries there
are deliberate scope, not missing features: the working set fits in memory,
one graph per store, a single user or agent per process — Relate is not a
larger-than-memory warehouse, an…
