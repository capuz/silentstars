---
repo: "pg-cuvs/pg_cuvs"
name: "pg_cuvs"
description: "⚡ Blazing-fast GPU vector search for PostgreSQL powered by NVIDIA cuVS."
readmeQualityOk: true
url: "https://github.com/pg-cuvs/pg_cuvs"
language: "C"
languages: ["C", "Python"]
languagePcts: [47, 24]
topics: ["approximate-nearest-neighbor", "cuda", "cuvs", "gpu", "nvidia", "pgvector", "postgresql", "postgresql-extension", "rag", "similarity-search"]
stars: 7
forks: 0
openIssues: 4
closedIssues: 49
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-05-24T14:53:14Z"
lastCommitAt: "2026-08-07T05:15:33Z"
lastReleaseAt: "2026-05-24T14:53:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 54
maintainers: ["ysys143"]
openGraphImageUrl: "https://opengraph.githubassets.com/d7c7915f80801ac149be40d5e4b44e449c613b606e0ebdbeae499e7b6da52302/pg-cuvs/pg_cuvs"
---

# pg_cuvs

GPU-accelerated vector search for PostgreSQL via NVIDIA cuVS — a heterogeneous acceleration path that keeps Postgres as the control plane.

**Built on** [pgvector](https://github.com/pgvector/pgvector) and [RAPIDS cuVS](https://github.com/rapidsai/cuvs).

## What it is

pg_cuvs is **not** a replacement for pgvector. It is a GPU acceleration layer that sits on top of pgvector's interface. SQL syntax, transaction semantics, MVCC, and planner decisions remain entirely within PostgreSQL.

It supports two complementary modes:

- **GPU search tier**: keep CAGRA indexes resident in GPU VRAM and use the GPU as a candidate generator.
- **GPU build accelerator tier**: use nearby GPUs to build indexes quickly, then convert the result into a standard pgvector HNSW index (`USING pg_cuvs_hnsw`) and serve queries on CPU.

```sql
-- No query changes required. pg_cuvs accelerates this transparently.
SELECT * FROM items ORDER BY embedding <=> $1 LIMIT 10;
```

The GPU acts as a **candidate generator** — returning the top-K TID candidates and distances — and PostgreSQL handles heap access, visibility checks, joins, and filters as usual.

For on-prem or private RAG systems, this is useful…
