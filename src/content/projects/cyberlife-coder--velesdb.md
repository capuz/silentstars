---
repo: "cyberlife-coder/VelesDB"
name: "VelesDB"
description: "VelesDB is a local‑first AI data engine written in Rust that unifies vectors, full‑text and graph in a single file with a familiar SQL‑like language.  Instead of sending every RAG or semantic search query to a remote cluster, VelesDB runs directly on your server, laptop, browser, mobile or edge device — no cloud dependency, no external services, .."
url: "https://github.com/cyberlife-coder/VelesDB"
homepage: "https://velesdb.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [86]
topics: ["ai", "embeddings", "hnsw", "local-first", "machine-learning", "rag", "rust", "search-engine", "vector-database", "graph-database"]
stars: 71
forks: 8
openIssues: 0
closedIssues: 179
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2025-12-17T18:01:02Z"
lastCommitAt: "2026-06-24T00:21:09Z"
lastReleaseAt: "2026-01-01T10:39:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 38
maintainers: ["cyberlife-coder", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4ace87b517fe678d212033be262989ed6b5b1d66d8c9ab211c0819f72ba2a891/cyberlife-coder/VelesDB"
discussionCount: 2
---

</p>
<h1 align="center">
</h1>
<h3 align="center">
  Your AI agents forget everything. VelesDB fixes that.
</h3>
  <strong>One ~9 MB binary. Three engines. One query language. Zero cloud dependency.</strong><br/>
  <em>Vector + Graph + ColumnStore — unified under <a href="docs/VELESQL_SPEC.md">VelesQL</a></em>
</p>
</p>
</p>

---

> **Every AI agent today stitches together 3 databases for memory — vectors for "what feels similar", a graph for "what is connected", and SQL for "what I know for sure". That's 3 deployments, 3 configs, 3 query languages, and a pile of glue code.**
>
> **VelesDB replaces all of that with a single Rust binary — smaller than a single smartphone photo.**

---

## The Story Behind VelesDB

VelesDB was born in France out of a simple observation: **EU data sovereignty is an architectural problem, not a legal one.**

The US Cloud Act, FISA 702, and PATRIOT Act give US authorities multiple legal paths to reach data held by any US company — regardless of where the servers are. Hosting on AWS `eu-west-1` is a latency decision, not a sovereignty decision. The EU's Data Privacy Framework has been invalidated twice (Schrems I, Schrems II), and a third challenge is…
