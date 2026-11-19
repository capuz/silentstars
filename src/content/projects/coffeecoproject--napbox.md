---
repo: "coffeecoproject/napbox"
name: "napbox"
description: "Per-worktree dev environments for coding agents on Apple silicon Macs: your existing compose.yaml, no Docker, no port clashes, idle environments sleep and give their memory back."
readmeQualityOk: true
url: "https://github.com/coffeecoproject/napbox"
language: "Swift"
languages: ["Swift", "TypeScript"]
languagePcts: [59, 27]
topics: ["ai-agents", "apple-silicon", "claude-code", "coding-agents", "containerization", "developer-tools", "docker-alternative", "docker-compose", "git-worktree", "local-development"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 9
createdAt: "2026-11-12T06:45:47Z"
lastCommitAt: "2026-11-19T05:05:10Z"
lastReleaseAt: "2026-11-19T04:16:38Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 48
maintainers: []
openGraphImageUrl: "https://repository-images.githubusercontent.com/1454931190/ee347140-30f6-4b7f-aa63-3a2d012cfe99"
---

# napbox

[中文](https://github.com/coffeecoproject/napbox/blob/HEAD/README.zh-CN.md)

Local dev environments for coding agents on Apple silicon Macs, without Docker.

napbox reads a project's compose file and gives every git worktree its own isolated set of services (databases, object storage, backends). Host ports are assigned by napbox and stay fixed for that environment. Idle environments go to sleep and wake up on the next connection. Agents drive it through MCP tools; scripts use the `napbox` command.

It is built on Apple's open-source [Containerization](https://github.com/apple/containerization) framework: one lightweight Linux VM per environment, with all its services in it.

**Status: 0.1.10, early.** Used daily on one machine for several projects (PostgreSQL with PostGIS, Redis, MinIO, Go and Node backends, nginx front ends). Expect rough edges.

## Why

Run a few coding agents in parallel, each in its own worktree, with Docker compose, and you hit three things:
