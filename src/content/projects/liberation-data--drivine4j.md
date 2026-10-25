---
repo: "liberation-data/drivine4j"
name: "drivine4j"
description: "Graph database client for Kotlin & Java — composable object views, type-safe Cypher DSL, zero impedance mismatch"
readmeQualityOk: true
url: "https://github.com/liberation-data/drivine4j"
homepage: "https://medium.com/embabel/the-very-slowly-ticking-time-bomb-in-your-graph-persistence-stack-6da1a8da9515"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [95]
topics: ["cypher", "dsl", "graph-database", "java", "kotlin", "neo4j", "orm", "spring-boot"]
stars: 12
forks: 1
openIssues: 30
closedIssues: 96
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2025-03-23T02:12:12Z"
lastCommitAt: "2026-10-25T22:11:35Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 71
maintainers: ["jasperblues", "johnsonr"]
openGraphImageUrl: "https://opengraph.githubassets.com/71c79c07f3b10ac2fde34a53d0efbfc0cf7c2ad7c360ac536111abfdfdd4058f/liberation-data/drivine4j"
---

# Drivine4j

**Docs: [drivine.org](https://drivine.org/jvm/)**, for Kotlin & Java, TypeScript, and Python.

A graph database client library for Java and Kotlin supporting **Neo4j**, **FalkorDB**, **Amazon Neptune**, **Memgraph**, **Oracle** (SQL/PGQ), **Postgres** (plain SQL, with pgvector for vector search) and **SQLite** (a file, no server) with two approaches to graph mapping:

1. **PersistenceManager** - Low-level API with manual Cypher queries (classic Drivine approach)
2. **Object manager** (`StatelessGraphObjectManager`) - High-level API with annotated models and type-safe DSL.

Drivine4j is the graph database client library for [Embabel](https://hub.embabel.com) - Agentic AI for the JVM. 

> **On Node.js or Python?** [Drivine](https://github.com/liberation-data/drivine) (`npm install @liberation-data/drivine`)
> and [drivine-python](https://github.com/liberation-data/drivine-python) (`pip install drivine`) are drivine4j's
> TypeScript and Python twins, with the same object manager, query DSL, schema management and engines. The three share
> a storage format: a store written from any of them is read, stamped and checked alike by the others.

## Philosophy

### Composition…
