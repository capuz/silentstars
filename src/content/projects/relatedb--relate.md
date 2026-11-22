---
repo: "relatedb/relate"
name: "relate"
description: "An embedded local, agent-native graph database supporting Cypher 25 written in Rust. Memory or transactional filesystem."
readmeQualityOk: true
url: "https://github.com/relatedb/relate"
homepage: "https://relatedb.ai"
language: "Rust"
languages: ["Rust"]
languagePcts: [87]
topics: ["agent-memory", "agent-sandbox-tools", "agentic-ai", "cypher", "graph-database", "graphdb", "neo4j", "emedded-database", "relate", "relatedb"]
stars: 425
forks: 39
openIssues: 3
closedIssues: 10
watchers: 6
contributors: 14
recentReleases: 10
createdAt: "2026-11-04T15:55:34Z"
lastCommitAt: "2026-11-22T11:54:21Z"
lastReleaseAt: "2026-11-12T13:32:04Z"
status: "newborn"
tags: ["release_machine"]
healthScore: 95
undervaluedScore: 29
maintainers: ["jexp", "oskarhane", "actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/4a495b5a7e551639c1e695527a7a9b756024376ca86668416fb3cacd8b68dba2/relatedb/relate"
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
