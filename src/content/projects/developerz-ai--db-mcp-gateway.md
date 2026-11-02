---
repo: "developerz-ai/db-mcp-gateway"
name: "db-mcp-gateway"
description: "Self-hosted MCP gateway: AI agents get audited, SSO-gated, read-only database access without ever holding a DB credential."
readmeQualityOk: true
url: "https://github.com/developerz-ai/db-mcp-gateway"
homepage: "https://developerz-ai.github.io/db-mcp-gateway/"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["ai-agents", "audit-log", "claude-code", "database", "mcp", "model-context-protocol", "oidc", "postgres", "rust", "security"]
stars: 5
forks: 0
openIssues: 2
closedIssues: 68
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-05-27T04:10:03Z"
lastCommitAt: "2026-11-02T11:36:20Z"
lastReleaseAt: "2026-07-21T20:34:50Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 59
maintainers: ["awaismehr", "sebyx07", "ivndev001"]
openGraphImageUrl: "https://opengraph.githubassets.com/48c01c7583fcadb3722115651ee610cd1a0fdc0ccaeb24d059f9368f392d5961/developerz-ai/db-mcp-gateway"
discussionCount: 0
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

**v1.6.0 — stable, in production use.** One image, one YAML file, and one Postgres for the gateway's own state:

```bash
docker pull ghcr.io/developerz-ai/db-mcp-gateway:1.6.0
```

Public on GHCR, no auth needed to pull. Multi-arch (`linux/amd64`,
`linux/arm64`), built reproducibly from a `v*` git tag. `:latest` tracks the
newest release; pin the version in production. Compatibility policy in
[`website/docs/deployment/releasing.md`](https://github.com/developerz-ai/db-mcp-gateway/blob/HEAD/website/docs/deployment/releasing.md),
deployment in…
