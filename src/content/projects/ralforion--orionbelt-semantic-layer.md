---
repo: "ralforion/orionbelt-semantic-layer"
name: "orionbelt-semantic-layer"
description: "Source-available semantic and context layer, rule engine, and semantic sidecar for agentic AI and governed analytics. Compiles declarative YAML models into optimized SQL, KPIs, and semantic context across 8 SQL dialects."
readmeQualityOk: true
url: "https://github.com/ralforion/orionbelt-semantic-layer"
homepage: "https://ralforion.com/orionbelt-semantic-layer/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["clickhouse", "databricks", "dremio", "mcp", "postgresql", "semantic-layer", "snowflake", "yaml", "mcp-server", "business-intelligence"]
stars: 101
forks: 11
openIssues: 0
closedIssues: 57
watchers: 4
contributors: 2
recentReleases: 0
createdAt: "2026-02-10T16:10:48Z"
lastCommitAt: "2026-10-28T09:57:44Z"
lastReleaseAt: "2026-04-17T07:26:17Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 40
maintainers: ["ralfbecher", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4306d3a87fca53c1ad676fe9fd50d55b0ea83233b094367432e54761473081ac/ralforion/orionbelt-semantic-layer"
---

---

Ask an LLM to write SQL against a raw star schema and sooner or later it joins two fact tables and hands you a revenue number inflated by a factor of eight. It looks right. Nobody catches it.

OrionBelt is a **semantic and context layer** with a **rule engine**, and it runs as a **[semantic sidecar](https://ralforion.com/semantic-sidecar.html)**. You or an agent declare dimensions, measures, metrics, and joins in YAML, scoped to one task or maintained as a shared model. OrionBelt compiles them into dialect-specific SQL through a real AST, and routes multi-fact queries through a Composite Fact Layer planner that [blocks the join paths that produce fan traps](https://ralforion.com/text-to-sql.html). Queries ask for `"Total Revenue" by "Country"`; physical table and column mappings live in the model.

No BI tool in the middle. No runtime lock-in. Point it at what you already have.

## Model the questions

**An agent can model just the questions it needs to answer.** With `POST /v1/oneshot/batch`, it submits a task-specific OBML model and several independent queries in one request. OBSL validates the model, compiles or executes the queries, and returns separately identified…
