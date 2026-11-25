---
repo: "developerz-ai/db-mcp-gateway"
name: "db-mcp-gateway"
description: "Self-hosted MCP gateway: AI agents get audited, SSO-gated, read-only access to PostgreSQL, YugabyteDB, MongoDB and Redis/Dragonfly without ever holding a DB credential. AI-maintained by developerz.ai."
readmeQualityOk: true
url: "https://github.com/developerz-ai/db-mcp-gateway"
homepage: "https://developerz-ai.github.io/db-mcp-gateway/"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
topics: ["ai-agents", "audit-log", "claude-code", "database", "mcp", "model-context-protocol", "oidc", "postgres", "rust", "security"]
stars: 5
forks: 0
openIssues: 4
closedIssues: 85
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-05-27T04:10:03Z"
lastCommitAt: "2026-11-25T03:15:23Z"
lastReleaseAt: "2026-07-21T20:34:50Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 59
maintainers: ["sebyx07", "developerz-ai[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/abe896620dc491e852f835806430ad8ec09f6bab28a272feb95cdc59dbe787f0/developerz-ai/db-mcp-gateway"
---

Give an agent a database URL and that credential now lives on a laptop, in a
config file, in shell history, and in whatever the agent decides to echo back.
Rotating it means finding every copy. And every query it runs is attributed to
nobody.

**db-mcp-gateway holds the credential instead.** It is a self-hosted MCP server
your team deploys once. Developers point their agent at one URL. The gateway
authenticates them through the SSO you already run, checks each query against
permissions reviewed by pull request, and commits an append-only audit row
before any result goes back.

## The denial is the product

## Install

**v2.5.0 — stable, in production use.** Upgrading from 1.x: [`website/docs/deployment/upgrading-to-2.md`](https://github.com/developerz-ai/db-mcp-gateway/blob/HEAD/website/docs/deployment/upgrading-to-2.md). One image, one YAML file, and one Postgres for the gateway's own state:

```bash
docker pull ghcr.io/developerz-ai/db-mcp-gateway:2.5.0
```
