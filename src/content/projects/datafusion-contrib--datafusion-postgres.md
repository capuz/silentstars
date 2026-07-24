---
repo: "datafusion-contrib/datafusion-postgres"
name: "datafusion-postgres"
description: "Postgres protocol frontend for DataFusion"
readmeQualityOk: true
url: "https://github.com/datafusion-contrib/datafusion-postgres"
language: "Rust"
languages: ["Rust"]
languagePcts: [90]
topics: ["datafusion", "postgresql", "rust"]
stars: 155
forks: 38
openIssues: 6
closedIssues: 44
watchers: 4
contributors: 28
recentReleases: 0
createdAt: "2024-04-06T04:06:55Z"
lastCommitAt: "2026-07-24T06:07:20Z"
lastReleaseAt: "2025-09-21T14:35:06Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 44
maintainers: ["sunng87", "dependabot[bot]", "mjgarton"]
openGraphImageUrl: "https://opengraph.githubassets.com/e6f47b2620486f4c5e3a372533a69682212f548a9231bcf1ce9ddc4451a84efb/datafusion-contrib/datafusion-postgres"
---

# datafusion-postgres

[crates-badge]: https://img.shields.io/crates/v/datafusion-postgres?label=datafusion-postgres
[crates-url]: https://crates.io/crates/datafusion-postgres
[docs-badge]: https://img.shields.io/docsrs/datafusion-postgres
[docs-url]: https://docs.rs/datafusion-postgres/latest/datafusion_postgres

A PostgreSQL-compatible server frontend for [Apache
DataFusion](https://datafusion.apache.org). Available as both a library and CLI
tool.

Built on [pgwire](https://github.com/sunng87/pgwire) to provide PostgreSQL wire
protocol compatibility for analytical workloads. It was originally an example of
the [pgwire](https://github.com/sunng87/pgwire) project.

## Scope of the Project

- `datafusion-postgres`: Postgres frontend for datafusion, as a library.
  - Serving Datafusion `SessionContext` with pgwire library
  - Customizible/Optional authentication and Permission control
- `datafusion-pg-catalog`: A Postgres compatible `pg_catalog` schema and
  functions for datafusion backend.
- `arrow-pg`: A data type mapping, encoding/decoding library for arrow and
  postgres(pgwire) data types.
- `datafusion-postgres-cli`: A cli tool starts a postgres compatible server for…
