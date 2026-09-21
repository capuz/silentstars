---
repo: "DeepSQLAI/deepsql"
name: "deepsql"
description: "The database agent for Postgres and MySQL - Point it at PostgreSQL or MySQL and ask questions in plain English — schema exploration, query generation, slow query analysis, index recommendations, generated dashboards. Self-hosted and air-gapped."
readmeQualityOk: true
url: "https://github.com/DeepSQLAI/deepsql"
homepage: "https://deepsql.ai/"
language: "Java"
languages: ["Java", "JavaScript"]
languagePcts: [65, 27]
topics: ["ai", "database", "database-performance", "llm", "mcp-server", "mysql", "pgvector", "postgresql", "query-optimization", "react"]
stars: 28
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 8
recentReleases: 5
createdAt: "2026-08-02T15:21:36Z"
lastCommitAt: "2026-09-21T09:15:06Z"
lastReleaseAt: "2026-09-01T15:24:14Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 75
undervaluedScore: 38
maintainers: ["venkateshsakamuri-lab", "geekypunk", "cursoragent"]
openGraphImageUrl: "https://opengraph.githubassets.com/70c59628b40c5c3fa00185cd403c509e0f4db7a27b612088633701c1a2491feb/DeepSQLAI/deepsql"
---

# DeepSQL

**The database agent for Postgres and MySQL.** Point it at PostgreSQL or MySQL and ask
questions in plain English — schema exploration, query generation, slow query analysis,
index recommendations, generated dashboards.

**You bring the model.** DeepSQL ships with no model provider of its own and no vendor
account to sign up for. You point it at OpenAI, Azure OpenAI, a LiteLLM proxy, or a model
running on your own hardware, and it uses that. Everything else runs in your environment:
database credentials are encrypted in a local vault, and nothing leaves the machines you
control except the prompts you send to the endpoint you chose.

📄 **[Read the whitepaper](https://deepsql.ai/whitepaper)** — the architecture and the
reasoning behind it.

📦 **Latest release: [v1.3.0](https://github.com/DeepSQLAI/deepsql/releases/tag/v1.3.0)** —
DeepSQL Desktop first ship + Agent/Brain/Editor hardening. Notes:
[`docs/releases/RELEASE_NOTES-v1.3.0.md`](https://github.com/DeepSQLAI/deepsql/blob/HEAD/docs/releases/RELEASE_NOTES-v1.3.0.md).

---

## Quick start

### One-liner install

```bash
curl -fsSL…
