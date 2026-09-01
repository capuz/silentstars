---
repo: "prosperity-solutions/veld"
name: "veld"
description: "Like if Kubernetes and localhost had a magic, agentic baby — with a gorgeous UI."
readmeQualityOk: true
url: "https://github.com/prosperity-solutions/veld"
homepage: "https://veld.oss.life.li"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [65, 24]
topics: ["claude-code", "cli", "developer-tools", "https", "local-development", "monorepo", "rust", "vibe-coded"]
stars: 12
forks: 2
openIssues: 15
closedIssues: 48
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-03-11T07:53:30Z"
lastCommitAt: "2026-09-01T08:47:25Z"
lastReleaseAt: "2026-03-11T18:38:06Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 51
maintainers: ["peter-adam-dy", "semantic-release-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/7c721bdbc04393b3bec37e4f8ad85d9f69bd96e6ac2ad3d54103f00fbfc09f0c/prosperity-solutions/veld"
---

# Veld

> **Like if Kubernetes and localhost had a magic, agentic baby — with a gorgeous UI.**

Real HTTPS URLs for every service you run — one command, no YAML, no cloud bill. Then you and your coding agent build on it, together.

veld is a local development environment orchestrator — for a monorepo, a pile of separate repos, or any set of services you run together. Declare them in one `veld.json`; veld resolves the dependency graph, starts everything, runs health checks, and hands you clean, stable HTTPS URLs.

```sh
veld start frontend:local --name my-feature
# => https://frontend.my-feature.myproject.localhost
# => https://backend.my-feature.myproject.localhost
```

No port numbers. No manual wiring. Just clean, stable, human-readable URLs.

> This thing is 100% vibe coded with [Claude Code](https://claude.com/claude-code).

## Features

- **No port numbers** — work with stable HTTPS URLs instead of `localhost:3847`
- **Dependency graph** — resolves node dependencies, parallelizes startup, reverse-order teardown
- **TLS by default** — Caddy's internal CA handles TLS termination, auto-trusted during setup
- **Health checks** — readiness probes (two-phase: TCP port +…
