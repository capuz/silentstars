---
repo: "cuihairu/croupier"
name: "croupier"
description: "Croupier is a Server / Agent / SDK platform for game operations and control, designed for multiple games and multiple environments within a single game company."
readmeQualityOk: true
url: "https://github.com/cuihairu/croupier"
homepage: "https://cuihairu.github.io/croupier/"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [56, 29]
topics: ["clickhouse", "game", "game-analytics", "game-backend", "game-telemetry", "golang", "jaeger", "liveops", "logging", "metrics"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 4
recentReleases: 6
createdAt: "2024-07-31T10:19:15Z"
lastCommitAt: "2026-10-24T04:21:55Z"
lastReleaseAt: "2026-06-02T03:06:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 85
maintainers: ["cuihairu"]
openGraphImageUrl: "https://opengraph.githubassets.com/b564bf02cccfe1b4af7b4d7088d7e1cd63650b73c5a71a9bcbb07525b9cfdabc/cuihairu/croupier"
discussionCount: 1
postedAt: "2026-10-04T10:09:15.128Z"
---

Croupier is a Server / Agent / SDK platform for game operations and control, intended by default for multiple games and multiple environments within a single game company. The architecture has converged on a unified session transport:

- `Agent <-> Server`: TCP session by default, with TLS enabled by default
- `SDK <-> Agent`: TCP session by default, TLS off by default and enabled on demand
- Both links share the same session transport foundation and differ only in the first handshake message and business semantics

## Agent Roles

| Role | Responsibility | Delivery status |
| --- | --- | --- |
| sidecar | Game function gateway, task forwarding and game-side observation | `croupier-agent`; supervisor configuration/startup wiring still needs completion |
| devops | Allowlisted internal remote access with audit | `devops-agent` skeleton; real session channels pending |
| capture | Database CDC, change rules and alerts | `capture-agent`; checkpoint and alert delivery reliability still need work |
| synthetics | External game/service checks with developer plugins | `synthetics-agent`; probe plugins included, native probe kernel migration pending |

Each instance explicitly belongs to…
