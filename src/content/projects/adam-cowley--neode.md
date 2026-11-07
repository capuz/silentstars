---
repo: "adam-cowley/neode"
name: "neode"
description: "Neo4j OGM for Node.js"
readmeQualityOk: true
url: "https://github.com/adam-cowley/neode"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["nodejs", "neo4j", "cypher-query", "cypher", "neo4j-ogm", "hacktoberfest"]
stars: 400
forks: 68
openIssues: 6
closedIssues: 112
watchers: 13
contributors: 17
recentReleases: 0
createdAt: "2017-06-29T15:01:01Z"
lastCommitAt: "2026-11-07T22:52:11Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero"]
healthScore: 98
undervaluedScore: 37
maintainers: ["adam-cowley", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f31520e2d8911541e30a10e03a44c267b07e9a59350ff86427164901f706f114/adam-cowley/neode"
---

# neode

neode is a Neo4j OGM for Node.js designed to take care of the CRUD boilerplate involved with setting up a graph database project. Just install, define your models and go.

It runs against any Cypher-compatible engine: **Neo4j** (Community, Enterprise, Aura) and **Memgraph** over Bolt, or the embedded [Relate](https://github.com/relateapp/relate) engine in-process.

Coming from [neode](https://github.com/adam-cowley/neode) 0.4.9? Your existing map-based schemas keep working — read the [migration guide](https://github.com/adam-cowley/neode/blob/HEAD/docs/migration-guide.md).

> **1.0 alpha.** This branch is the `1.0.0-alpha.0` prerelease line. Install it with the `next` dist-tag — `npm install neode` still gives you 0.4.9 until 1.0 goes stable.

## Quickstart

Four steps: install, connect, define a model, round-trip.

### 1. Install

```bash
npm install neode@next
```

Requires Node.js 20 or newer (Neo4j 5.x / 2025.x servers, `neo4j-driver` 6).

### 2. Connect

```typescript
// index.ts
import { fromEnv } from 'neode'

// Reads NEO4J_URI, NEO4J_USERNAME, NEO4J_PASSWORD, NEO4J_DATABASE (and the
// rest of the NEO4J_* set) — or from a .env file
const neode = fromEnv()
```…
