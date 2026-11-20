---
repo: "B0yko/pgwarden"
name: "pgwarden"
description: "Give AI assistants access to Postgres with per-user permissions and human approval for writes."
readmeQualityOk: true
url: "https://github.com/B0yko/pgwarden"
homepage: "https://boiko.ai/work/pgwarden/"
language: "Python"
languages: ["Python"]
languagePcts: [92]
topics: ["ai-security", "audit-log", "cloud-run", "data-governance", "fastapi", "llm-security", "mcp", "model-context-protocol", "oauth2", "oidc"]
stars: 22
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-09-28T21:35:31Z"
lastCommitAt: "2026-11-20T12:04:31Z"
lastReleaseAt: "2026-09-29T00:26:14Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 42
maintainers: ["B0yko"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1393868190/f32f906e-fa29-4b74-b543-dc2f31d9d13a"
---

pgwarden is an MCP gateway that lets Claude, ChatGPT, Cursor or any MCP client query
Postgres **as the person asking**. People sign in through your OIDC provider; the gateway
connects as their own Postgres role, and the database decides what they see through your
grants, row-level security and masking views. Reads are read-only by construction, writes
wait for a named approver, and every tool call, sign-in, approval and admin change lands in
an append-only, hash-chained audit log.

> **Why let Postgres decide.** With one shared credential every user gets the union of
> everyone's access, and a prompt injection in a support ticket can make an assistant that
> holds it read a private table
> ([General Analysis, 2025](https://generalanalysis.com/blog/supabase-mcp-blog)). Guards
> bolted on outside the database get bypassed: a reference read-only Postgres MCP server was
> escaped with `COMMIT; <statement>`
> ([Datadog Security Labs, 2025](https://securitylabs.datadoghq.com/articles/mcp-vulnerability-case-study-SQL-injection-in-the-postgresql-mcp-server/)).
