---
repo: "KellerKev/duckicelake"
name: "duckicelake"
description: "Iceberg v3 REST Catalog proxy on top of DuckLake"
url: "https://github.com/KellerKev/duckicelake"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 19
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-22T16:07:33Z"
lastCommitAt: "2026-07-03T12:40:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 35
maintainers: ["KellerKev"]
openGraphImageUrl: "https://opengraph.githubassets.com/0c8227cdd198f8f848a7c1e19d1933a3c63204ce4e5e3d01687fa73ac922b7a2/KellerKev/duckicelake"
---

# duckicelake

</p>

An **Iceberg REST Catalog** proxy on top of **DuckLake**, backed by
**S3 object storage with real STS credential vending**. Materialises
DuckLake's snapshot / schema / stats state into Iceberg-spec manifests on
demand, so standard Iceberg clients (PyIceberg, DuckDB's `iceberg`
extension, Trino, Spark) read rows directly from S3 — and write back via
register-in-place commits that DuckLake atomically records.

> duckicelake also ships a tag-based **governance layer** — object tags,
> RBAC, column masking and row-access policies, enforced on *both* read
> paths (Iceberg REST and DuckLake-direct) and aimed squarely at the "LLM
> agents must never see PII" use case — and a **multi-catalog registry**
> that serves many isolated per-tenant catalogs from one proxy. See the
> Governance and Multi-catalog sections below.

## ⭐ Hybrid write model — write via either path, read from anywhere

The defining feature: **clients can write via the Iceberg REST path
*or* via DuckLake-direct, and Iceberg readers see both within ~1s**.
No "sync job", no manual rewrite step, no second-class write path.

- **Iceberg REST writes** (PyIceberg / Trino / Spark `commit-table`):
  manifest…
