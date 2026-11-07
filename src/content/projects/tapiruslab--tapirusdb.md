---
repo: "tapiruslab/TapirusDB"
name: "TapirusDB"
description: "The 100% Safe-Rust Embedded Quad-Model AI Database & Cognitive Memory Engine (SQL, Vectors, GraphRAG, Documents)"
readmeQualityOk: true
url: "https://github.com/tapiruslab/TapirusDB"
homepage: "https://tapirusdb.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [87]
topics: ["ai-memory", "database", "graph-vector-hybrid", "graphrag", "local-first", "rag", "rust", "sovereign-ai", "sqlite", "vector-database"]
stars: 9
forks: 27
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 2
createdAt: "2026-09-24T06:27:09Z"
lastCommitAt: "2026-11-07T10:36:57Z"
lastReleaseAt: "2026-09-26T07:49:13Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 89
undervaluedScore: 67
maintainers: ["tapiruslab"]
openGraphImageUrl: "https://opengraph.githubassets.com/c2eac7b6fdeae8fbbd2cb7fb8de0374ea4ffa70381c33eb2fa9ef882cd2a16a8/tapiruslab/TapirusDB"
---

# TapirusDB

TapirusDB is an embedded Rust database for local applications that need SQL, vector search and AI document memory in one runtime. Store text and embeddings, retrieve sources for an LLM, and keep SQL and memory changes in the same transaction.

Build local AI products with a data layer that runs inside your application.
Start with the [web tutorials](https://tapirusdb.com/tutorial), explore the
[API cookbook](https://tapirusdb.com/cookbook), or
[try the Rust browser workspace](https://tapirusdb.com/studio/).

The default branch includes storage corrections, transactional AI memory and
native SDK integration coverage. Published release archives may predate these
changes; see [release validation](https://github.com/tapiruslab/TapirusDB/blob/HEAD/docs/RELEASE_VALIDATION.md) for evidence and
the distinction between current source and published packages.

## Highlights

- Local, in-process database with a `.tapir` file and a write-ahead log.
- SQL support is a documented subset; TapirusDB is not a SQLite drop-in or a claim of full SQL conformance.
- Vector, graph, and JSON document APIs are available alongside relational tables.
- AI source retrieval combines BM25, supplied…
