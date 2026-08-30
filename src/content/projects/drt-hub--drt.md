---
repo: "drt-hub/drt"
name: "drt"
description: "Reverse ETL for the code-first data stack"
readmeQualityOk: true
url: "https://github.com/drt-hub/drt"
homepage: "https://drt-hub.github.io/drt-web/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["bigquery", "cli", "data-engineering", "dbt", "duckdb", "etl", "postgres", "python", "reverse-etl", "data-activation"]
stars: 28
forks: 38
openIssues: 43
closedIssues: 382
watchers: 1
contributors: 33
recentReleases: 0
createdAt: "2026-03-27T00:00:35Z"
lastCommitAt: "2026-08-30T00:44:10Z"
lastReleaseAt: "2026-04-02T01:07:54Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 97
undervaluedScore: 55
maintainers: ["masukai", "dependabot[bot]", "Pawansingh3889"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1193163237/b8d67d82-7289-4f4a-987c-0bd6392bfb29"
discussionCount: 6
---

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/drt-hub/.github/main/profile/assets/logo-dark.svg">
</picture>

# drt — data reverse tool

### The reverse leg of your data stack.

dlt loads data in, dbt transforms it, and **drt** activates it back out — reverse ETL from your warehouse to the tools your team works in, as YAML in your own repo. No dashboard to babysit, no audience builder duplicating what dbt already does, no hosted runtime billing you per row. Your data goes straight from your warehouse to the destination — never through a drt-hosted intermediary.

  <code>dlt</code> <sub>load</sub> &nbsp;→&nbsp; <code>dbt</code> <sub>transform</sub> &nbsp;→&nbsp; <b><code>drt</code></b> <sub>activate</sub>
</p>

</div>

</p>

```bash
pip install drt-core          # core (DuckDB included)
drt init && drt run
```

</p>

---

## Why drt?

<table>
<tr>
<td width="50%">

**Same DX as dbt.** If you know `dbt run`, you already know `drt run` — declarative YAML, versioned in Git, reviewed in PRs.

</td>
<td width="50%">

**CI-native.** Exit codes and `--output json` drop straight into GitHub Actions, cron, or Dagster / Airflow / Prefect —…
