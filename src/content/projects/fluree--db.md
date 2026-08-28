---
repo: "fluree/db"
name: "db"
description: "Fluree database library"
readmeQualityOk: true
url: "https://github.com/fluree/db"
homepage: "https://fluree.github.io/db/"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 448
forks: 39
openIssues: 105
closedIssues: 326
watchers: 21
contributors: 15
recentReleases: 0
createdAt: "2020-10-19T21:06:38Z"
lastCommitAt: "2026-08-28T15:33:44Z"
lastReleaseAt: "2021-03-03T17:08:37Z"
status: "thriving"
tags: ["legacy_hero", "community_hub"]
healthScore: 94
undervaluedScore: 36
maintainers: ["bplatz", "aaj3f"]
openGraphImageUrl: "https://opengraph.githubassets.com/2074325fb46420d4f026666b111a37a72a29b9d7f4d8c8089874e6f857407e2f/fluree/db"
discussionCount: 26
---

# Fluree DB - A graph database for data that matters.

Temporal, verifiable, standards-compliant, git-like branching and merging, and [optimized for AI agents](https://github.com/fluree/db/blob/HEAD/docs/ai/README.md). Integrated vector, text and geo search, and fine-grained access control with no external dependencies.

RDF 1.1 / 1.2, [SPARQL](https://github.com/fluree/db/blob/HEAD/docs/guides/cookbook-sparql.md), [JSON-LD](https://github.com/fluree/db/blob/HEAD/docs/guides/cookbook-query-patterns.md), and [openCypher](https://github.com/fluree/db/blob/HEAD/docs/guides/cookbook-cypher.md) query (includes history query and other Fluree feature extensions).

Billions of graph facts on commodity hardware. Over 2M facts/second bulk import. On the full 21.5-billion-triple Wikidata dump, all 850/850 WGPB graph-pattern queries complete with a 43 ms geometric mean — and on Wikidata-truthy (8.19B triples) the next fastest engine is 10.4x slower. Reproducible head-to-head benchmarks against QLever, Virtuoso, MillenniumDB, Memgraph, Neo4j, FalkorDB and others: **[fluree/benchmark-db](https://github.com/fluree/benchmark-db)**. Why it's fast: **[Performance…
