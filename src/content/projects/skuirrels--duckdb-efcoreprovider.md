---
repo: "skuirrels/DuckDB.EFCoreProvider"
name: "DuckDB.EFCoreProvider"
description: "DuckDB, DuckLake & Parquet EF Core Provider for analytics at cloud scale, for .NET 10 / EF Core 10 and .NET 11 / EF Core 11"
readmeQualityOk: true
url: "https://github.com/skuirrels/DuckDB.EFCoreProvider"
homepage: "https://lakehold.dev/provider/docs"
language: "C#"
languages: ["C#"]
languagePcts: [99]
topics: ["data-lake", "dotnet", "duckdb", "ducklake", "ef-core", "entity-framework-core", "object-storage", "olap", "parquet", "tiered-storage"]
stars: 20
forks: 2
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-07-01T07:22:53Z"
lastCommitAt: "2026-11-14T21:56:41Z"
lastReleaseAt: "2026-07-12T20:50:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 33
maintainers: ["skuirrels", "OneCyrus"]
openGraphImageUrl: "https://opengraph.githubassets.com/63a379e61745c418eb2e8358a8510f6fefd0cce2bdee30271edd8c4b4775689e/skuirrels/DuckDB.EFCoreProvider"
---

# DuckDB.EFCoreProvider

**An Entity Framework Core provider for EF10 and EF11 preview with first-class support for [DuckDB](https://duckdb.org) and [DuckLake](https://ducklake.select), designed for analytical .NET workloads.**

[DuckDB.EFCoreProvider](https://www.nuget.org/packages/DuckDB.EFCoreProvider) provides LINQ queries, `SaveChanges`, native-DuckDB migrations, high-throughput ingestion, DuckLake catalogs, and Parquet-backed data lifecycle management through EF Core.

## Core capabilities

| Capability | Support |
|---|---|
| Application persistence | LINQ, `SaveChanges`, transactions, migrations, scaffolding, and optimistic concurrency |
| High-throughput ingestion | Write batching, appender-backed `BulkInsert`, and selectable-key `Upsert` |
| Open-format analytics | Direct Parquet, CSV, and JSON queries, plus typed Parquet export |
| Lakehouse persistence | First-class DuckLake profile with tracked writes, transactions, appender ingestion, and `MERGE` upsert |
| Data lifecycle | Hot DuckDB tables with relational aggregates archived to partitioned Parquet |
| Encryption at rest | AES-256-GCM database, WAL, and spilled-temporary-file encryption with application-supplied…
