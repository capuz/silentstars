---
repo: "djouallah/dbt_fabric_python_iceberg"
name: "dbt_fabric_python_iceberg"
description: "https://djouallah.github.io/dbt_fabric_python_iceberg/#!/overview"
readmeQualityOk: true
url: "https://github.com/djouallah/dbt_fabric_python_iceberg"
language: "Python"
languages: ["Python"]
languagePcts: [83]
stars: 15
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-02T04:03:06Z"
lastCommitAt: "2026-07-22T06:09:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 74
undervaluedScore: 31
maintainers: ["djouallah"]
openGraphImageUrl: "https://opengraph.githubassets.com/0f0df75fe87df3fe0d16ff0f4996c2e2b0b153ae948c90a9a9e007dea2a55893/djouallah/dbt_fabric_python_iceberg"
---

# ⚠️ Experimental 🦆

> [!CAUTION]
> **This is not for production systems. Experimental and educational purposes only.**
>
> _Also requires OneLake Iceberg write (private preview, limited access)._
>
> OneLake Iceberg write is mainly for third-party interoperability — think Snowflake, etc.
>
> That said, DuckDB's Iceberg support is maturing fast: **1.4.5** was the first release that
> basically works, **1.5.3** added `MERGE INTO` (and `ALTER TABLE`), and **2.0** is set to add
> table maintenance, retries, and more. Run the latest.

---

# dbt + DuckDB + OneLake Iceberg REST Catalog

Iceberg is cool. The whole pipeline runs anywhere Python runs — your laptop, a GitHub Actions runner, a container, an AI agent. The Delta Lake version of this pipeline lives at <https://github.com/djouallah/analytics-as-code>; this repo is the Iceberg variant — it writes to the OneLake Iceberg REST catalog, which is what enables Power BI Direct Lake via OneLake's Iceberg→Delta virtualization.

**Contents:** [The data](#the-data) · [OneLake connection](#onelake-connection) · [Prerequisites](#prerequisites) · [dbt Iceberg configuration](#dbt-iceberg-configuration) · [Schema layout](#schema-layout) ·…
