---
repo: "apitap/apitap-lib"
name: "apitap-lib"
description: "Move whole tables between databases fast — Postgres, MySQL, ClickHouse, BigQuery. Rust engine, one-line Python API, bounded memory."
readmeQualityOk: true
url: "https://github.com/apitap/apitap-lib"
homepage: "https://apitap.dev"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [63, 23]
topics: ["data-engineering", "data-ingestions", "data-pipeline", "data-transfer", "python", "rust", "benchmark", "bigquery", "clickhouse", "mysql"]
stars: 53
forks: 6
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-07-11T23:21:13Z"
lastCommitAt: "2026-10-07T10:31:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 40
maintainers: ["AbdulDjafarPaysera"]
openGraphImageUrl: "https://opengraph.githubassets.com/c64f6ccc41e8dee2dc155317ca95ef8268c4576254296a112369ae51d5052ce9/apitap/apitap-lib"
---

# apitap

**Move whole tables between databases at wire speed, in bounded memory.**

Despite the name, this is not an API-client library: apitap is a Rust
transfer engine that speaks the databases' own wire formats — binary
`COPY`, RowBinary, `LOAD DATA`, logical replication. How it compares to
Airbyte-class tools, CDC daemons and Python pipelines, with measured
numbers: [docs/vs.md](https://github.com/apitap/apitap-lib/blob/HEAD/docs/vs.md).

apitap is the open-source transfer engine behind [apitap cloud](https://apitap.dev) — a
Rust core with Python bindings, in the spirit of Polars. It moves data the way the
databases themselves would: raw wire-format streams, parallel range pipes, atomic swaps,
and memory that stays flat no matter how big the table is.

```python
pip install apitap
```

```python
import apitap

report = apitap.transfer(
    "postgres://user:pass@src-host/db",
    "postgres://user:pass@dst-host/db",
    table="public.events",
)
print(f"{report.rows:,} rows in {report.elapsed_ms} ms over {report.parallel} pipes")
```

The same call does batch CDC — logical replication on a schedule, no daemon —
and mixes modes per table:

```python
apitap.transfer(src, dst,…
