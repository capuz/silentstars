---
repo: "nicia-ai/typegraph"
name: "typegraph"
description: "The Knowledge Graph for TypeScript"
url: "https://github.com/nicia-ai/typegraph"
homepage: "https://typegraph.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 56
forks: 2
openIssues: 3
closedIssues: 40
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-02-08T18:37:50Z"
lastCommitAt: "2026-07-04T19:19:42Z"
lastReleaseAt: "2026-02-24T06:18:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 38
maintainers: ["pdlug", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/781f00b66388e9d81dd0acf5fd4655ccc817c3cede72ae06618457c2a8cb1abd/nicia-ai/typegraph"
---

</p>

<h1 align="center">TypeGraph</h1>

</p>

TypeScript-first embedded knowledge graph library.

TypeGraph brings property graph modeling and practical ontology support to your existing SQLite or PostgreSQL
database. Define nodes and edges with Zod, query with a fluent TypeScript API, and keep graph + app data in one
deployment.

## Why teams use it

- Keep graph data in your existing SQL database (no separate graph service)
- Model richer semantics with `subClassOf`, `implies`, `inverseOf`, and `disjointWith`
- Traverse relationships with compile-time type safety
- Run vector and hybrid search across every backend — pgvector, sqlite-vec, and libSQL/Turso native vectors
- Start with SQLite, move to PostgreSQL without changing your graph definition
- Evolve the schema at runtime from agent-proposed JSON — no redeploy
  ([Graph Extensions](https://typegraph.dev/graph-extensions))
- Reconstruct valid-time and recorded-time history with bitemporal reads
  ([Temporal queries](https://typegraph.dev/queries/temporal))

## Best fit

TypeGraph works well for:

- Knowledge graphs and RAG context modeling
- Auditable agent memory, decision replay, and bitemporal forensics
-…
