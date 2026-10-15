---
repo: "get-dst/dst"
name: "dst"
description: "dst (data serve tool) — open-source semantic layer and MCP server between the AI your team uses and your data warehouse. Governed answers with the SQL, a grade and a receipt."
readmeQualityOk: true
url: "https://github.com/get-dst/dst"
homepage: "https://www.dataservetool.com"
language: "Python"
languages: ["Python"]
languagePcts: [92]
topics: ["analytics", "bigquery", "data-governance", "duckdb", "llm", "mcp", "semantic-layer", "snowflake", "text-to-sql", "ai-agents"]
stars: 15
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-08-24T17:53:48Z"
lastCommitAt: "2026-10-15T08:32:01Z"
lastReleaseAt: "2026-09-25T12:24:24Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 67
undervaluedScore: 39
maintainers: ["AntonHeikinheimo"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1345249784/6bdeae37-0cb4-4c97-98ad-f6dbae3425b7"
discussionCount: 0
---

# data serve tool (dst)

**dst serves your warehouse to AI, and brings engineering best practice to
the whole lifecycle of doing it.** The AI asks in plain language; dst answers
from definitions your team wrote down, with the SQL that produced the answer,
a confidence grade, and a receipt attached.

In one line: dst (data serve tool) is an open-source semantic layer and MCP
server between the AI your team uses (Claude, ChatGPT, Copilot, your own
agents) and your warehouse (Snowflake, BigQuery, Postgres, DuckDB). It is
the serve stage of the stack: dlt loads, dbt transforms, dst serves.

The shape of it: one governed interface between the AI your team uses and
your warehouse — four questions answered on every call, and a receipt to
prove it:

       alt="The full picture: the AI your team uses calls dst over one governed interface — who may ask, what do words mean, which tables, answer composed — and every data answer keeps a receipt citing the definition it stood on">

In use, from the seat most of your company sits in — their own AI, answering
through that interface:

       alt="A chat with the AI your team uses: the person asks where to look for growth, the AI makes several…
