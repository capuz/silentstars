---
repo: "ClickHouse/dbt-clickhouse"
name: "dbt-clickhouse"
description: "The Clickhouse plugin for dbt (data build tool)"
readmeQualityOk: true
url: "https://github.com/ClickHouse/dbt-clickhouse"
homepage: "https://clickhouse.com/docs/integrations/dbt"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["dbt", "clickhouse", "database"]
stars: 360
forks: 176
openIssues: 118
closedIssues: 260
watchers: 43
contributors: 665
recentReleases: 0
createdAt: "2021-01-29T14:10:43Z"
lastCommitAt: "2026-08-28T15:33:46Z"
lastReleaseAt: "2022-01-01T15:34:48Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 88
undervaluedScore: 40
maintainers: ["koletzilla", "29antonioac", "fallintoplace"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/334164334/4b23b29f-c211-4e52-a85e-e971a5bdb45c"
discussionCount: 0
---

</p>

# dbt-clickhouse

This plugin ports [dbt](https://getdbt.com) functionality to [Clickhouse](https://clickhouse.tech/).

## Documentation

See the [ClickHouse website](https://clickhouse.com/docs/integrations/dbt) for the full documentation entry.

## Installation

Use your favorite Python package manager to install the app from PyPI, e.g.

```bash
pip install dbt-core dbt-clickhouse
```

> **_NOTE:_**  Beginning in v1.8, dbt-core and adapters are decoupled. Therefore, the installation mentioned above
> explicitly includes both dbt-core and the desired adapter.If you use a version prior to 1.8.0 the pip installation
> command should look like this:

```bash
pip install dbt-clickhouse
```

## Supported features

- [x] Table materialization
- [x] View materialization
- [x] Incremental materialization
- [x] Microbatch incremental materialization
- [x] Materialized View materializations (uses the `TO` form of MATERIALIZED VIEW, experimental)
- [x] Seeds
- [x] Sources
- [x] Docs generate
- [x] Tests
- [x] Snapshots
- [x] Most dbt-utils macros (now included in dbt-core)
- [x] Ephemeral materialization
- [x] Distributed table materialization (experimental)
- [x] Distributed…
