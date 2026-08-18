---
repo: "keboola/agnes-the-ai-analyst"
name: "agnes-the-ai-analyst"
description: "Agnes — self-hosted AI harness for organizations: governed data access, agents as an API, a skills marketplace, corporate memory, and hosted data apps — one RBAC/audit spine behind web chat, Slack, MCP, and CLI"
readmeQualityOk: true
url: "https://github.com/keboola/agnes-the-ai-analyst"
language: "Python"
languages: ["Python"]
languagePcts: [82]
topics: ["agnes"]
stars: 8
forks: 5
openIssues: 51
closedIssues: 289
watchers: 0
contributors: 66
recentReleases: 0
createdAt: "2026-04-08T16:22:40Z"
lastCommitAt: "2026-08-18T04:09:08Z"
lastReleaseAt: "2026-04-29T05:17:11Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 97
undervaluedScore: 59
maintainers: ["ZdenekSrotyr", "Jakuboola", "jordanrburger"]
openGraphImageUrl: "https://opengraph.githubassets.com/693eb22bf17911d5d7ad894b530e9ffb88563b99dc68aa6ac4ca900c97ba54d1/keboola/agnes-the-ai-analyst"
---

# Agnes — AI Harness

Agnes is a source-available, self-hosted AI harness for organizations: one governed home for the data, agents, skills, memory, and apps your organization's AI works with. Every surface — web chat, Slack, Telegram, MCP, CLI, and a public agent API — runs through the same RBAC, audit, and credential-brokering spine.

- **Data** — extracts data from configured sources into DuckDB, serves it via a FastAPI backend, and distributes RBAC-filtered Parquet files to analysts who query them locally using Claude Code and DuckDB. A semantic layer (canonical metrics, glossary) keeps agents computing business numbers the same way humans do.
- **Agents** — named, scoped agent profiles with their own tokens, pinned models, monthly token budgets, and private memory — callable one-shot or as streaming multi-turn sessions over a public REST/SSE API, with webhooks, artifacts, and structured JSON output. Agent scope is enforced at request time; an agent can never exceed its owner's grants.
- **Skills & plugins** — aggregates curated Claude Code marketplaces into one RBAC-filtered feed, with a store for publishing skills (static + LLM security review) and an in-product Studio for…
