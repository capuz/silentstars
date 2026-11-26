---
repo: "structured-world/gitlab-mcp"
name: "gitlab-mcp"
description: "GitLab MCP server: 66 tools, 246 typed actions for MRs, pipelines, issues, files. JMESPath, RE2 log search, version-aware catalog."
readmeQualityOk: true
url: "https://github.com/structured-world/gitlab-mcp"
homepage: "https://gitlab-mcp.sw.foundation/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["devops", "gitlab", "mcp", "mcp-server", "model-context-protocol", "typescript", "claude", "codex", "gitlab-api", "gitlab-ci"]
stars: 8
forks: 2
openIssues: 12
closedIssues: 265
watchers: 1
contributors: 42
recentReleases: 0
createdAt: "2025-09-14T03:45:54Z"
lastCommitAt: "2026-11-26T14:32:57Z"
lastReleaseAt: "2025-09-15T15:28:22Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 81
maintainers: ["polaz", "dependabot[bot]", "sw-release-bot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1056419165/31a91542-c6d0-413f-a978-156a69ecdb8a"
discussionCount: 0
---

# Advanced GitLab MCP server

Advanced GitLab MCP server: 66 tools across 27 registry groups, including 60 CQRS tools with 247 typed actions and 6 setup helpers. The tool catalog and parameters are filtered to each instance's GitLab version, tier, and token scopes, detected through version checks and GraphQL schema introspection, so the agent sees only what the connected instance actually supports.

## Packages

This is a monorepo with two npm packages:

- **[`@structured-world/gitlab-mcp`](https://www.npmjs.com/package/@structured-world/gitlab-mcp)** — the MCP server. In-memory and file OAuth-session storage, no database dependency. This is all most users need.
- **[`@structured-world/gitlab-mcp-db`](https://www.npmjs.com/package/@structured-world/gitlab-mcp-db)** — optional PostgreSQL/Prisma OAuth-session backend for running multiple replicas behind a load balancer. Enable it with `OAUTH_STORAGE_TYPE=postgresql`; see the [PostgreSQL deployment guide](https://gitlab-mcp.sw.foundation/deployment/docker-postgres) for the full setup.
