---
repo: "cuihairu/croupier"
name: "croupier"
description: "Croupier is a Server / Agent / SDK platform for game operations and control, designed for multiple games and multiple environments within a single game company."
readmeQualityOk: true
url: "https://github.com/cuihairu/croupier"
homepage: "https://cuihairu.github.io/croupier/"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [58, 28]
topics: ["clickhouse", "game", "game-analytics", "game-backend", "game-telemetry", "golang", "jaeger", "liveops", "logging", "metrics"]
stars: 10
forks: 2
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 5
recentReleases: 8
createdAt: "2024-07-31T10:19:15Z"
lastCommitAt: "2026-11-12T22:44:15Z"
lastReleaseAt: "2026-11-12T09:53:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 86
maintainers: ["cuihairu"]
openGraphImageUrl: "https://opengraph.githubassets.com/de8fccbd8a97594fe5b99aed2ce2db2eb8c489fa2bf4a4f2c498216220936083/cuihairu/croupier"
discussionCount: 1
postedAt: "2026-10-04T10:09:15.128Z"
---

Croupier is a Server / Agent / SDK platform for game operations and control, intended by default for multiple games and multiple environments within a single game company. The architecture has converged on a unified session transport:

- `Agent <-> Server`: TCP session by default; TLS is opt-in via `server.toAgentTLS` (server side) / `server` + `outboundTLS` (agent side), and the bundled development templates default to plaintext
- `SDK <-> Agent`: TCP session by default, TLS off by default and enabled on demand
- Both links share the same session transport foundation and differ only in the first handshake message and business semantics

## Agent Roles

| Role | Responsibility | Delivery status |
| --- | --- | --- |
| sidecar | Game function gateway, task forwarding and game-side observation | `croupier-agent`; supervisor wiring, schedule/update lifecycle and function plugins shipped |
| devops | Allowlisted internal remote access with audit | `devops-agent`; SSH sessions with replay archive shipped; RDP/VNC pending |
| capture | Database CDC, change rules and alerts | `capture-agent`; MySQL/Mongo/PostgreSQL connectors and checkpoint/alert reliability shipped; source schema…
