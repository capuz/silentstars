---
repo: "ridi-oss/proxy-monster"
name: "proxy-monster"
description: "Self-hosted database access-control proxy for MySQL and PostgreSQL: lineage-aware column masking, Cedar policy, fail-closed deny, tamper-evident audit trail."
readmeQualityOk: true
url: "https://github.com/ridi-oss/proxy-monster"
language: "Kotlin"
languages: ["Kotlin", "Go"]
languagePcts: [52, 37]
topics: ["access-control", "audit-log", "cedar", "data-masking", "data-security", "database", "golang", "kotlin", "mysql", "postgresql"]
stars: 14
forks: 7
openIssues: 4
closedIssues: 8
watchers: 1
contributors: 8
recentReleases: 10
createdAt: "2026-07-29T09:28:48Z"
lastCommitAt: "2026-08-20T04:07:54Z"
lastReleaseAt: "2026-08-03T10:07:39Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 91
undervaluedScore: 56
maintainers: ["sjincho", "ridi-oss-release[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b85e3dc734aa8a0405695f9e06bab80c29aafa3cbf82efac818463722849d2a8/ridi-oss/proxy-monster"
---

# proxy-monster

A self-hosted, open-source database access-control proxy for MySQL and
PostgreSQL. Clients connect with their normal tools over the native wire
protocol; proxy-monster enforces column-level access control per role —
deterministic, lineage-aware masking and deny — and records every decision to a
tamper-evident audit trail.

## What it does

- **Transparent proxy.** Speaks the native MySQL and PostgreSQL wire protocols,
  so `psql`, `mysql`, JDBC, and application drivers connect unchanged. It
  authenticates the client to a principal, authorizes each statement, applies
  masking, and brokers to the target DB with a per-datasource service account —
  users never hold database credentials.
- **Column-level access control.** Deterministic, role-based masking and deny,
  driven by [Cedar](https://www.cedarpolicy.com/) policy over per-column tags.
- **Lineage-aware.** It parses each query and follows sensitive values through
  expressions, functions, subqueries, joins, and `SELECT *`, so a masked column
  stays masked wherever it flows. Anything it cannot prove safe is denied by
  default through Cedar (fail-closed) — a policy decision, not a hardcoded
  error.
-…
