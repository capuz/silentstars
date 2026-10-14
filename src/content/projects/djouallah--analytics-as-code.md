---
repo: "djouallah/analytics-as-code"
name: "analytics-as-code"
description: "https://nemtracker.github.io/"
readmeQualityOk: true
url: "https://github.com/djouallah/analytics-as-code"
language: "HTML"
languages: ["HTML"]
languagePcts: [86]
stars: 34
forks: 3
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-03-08T23:33:16Z"
lastCommitAt: "2026-10-14T08:57:26Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 44
maintainers: ["djouallah", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/353332f4ce2bd3f3a44c31c8ec8bcf97ef9af2832454140a06e48d36d21f7a03/djouallah/analytics-as-code"
---

# Analytics as Code

An example of AI-driven analytics: every line here — ingestion, models, tests, pipelines,
semantic model, dashboards — was written by AI. The data is the Australian electricity
market (AEMO).

- **dbt + DuckDB** on GitHub Actions load the data into **Iceberg** tables, every hour.
- **One Power BI semantic model** ([`semantic_model/`](https://github.com/djouallah/analytics-as-code/blob/HEAD/semantic_model/)) describes those
  tables: their relationships and the measures, in DAX.
- **Its clients** ([`dashboard/`](https://github.com/djouallah/analytics-as-code/blob/HEAD/dashboard/)):
  - **GitHub Pages** ([live](https://nemtracker.github.io/), public,
    [`dashboard/github/`](https://github.com/djouallah/analytics-as-code/blob/HEAD/dashboard/github/)) and a **Microsoft Fabric app** (Fabric
    sign-in, [`dashboard/fabric_app/wasm/`](https://github.com/djouallah/analytics-as-code/blob/HEAD/dashboard/fabric_app/wasm/)): the same page. No
    server: the browser runs the queries itself (DuckDB-WASM) on a cached copy of the tables.
  - a **Power BI report**…
