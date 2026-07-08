---
repo: "impalasys/talon"
name: "talon"
description: "The control plane for cloud native agents. Operate autonomous agent fleets at scale, securely."
readmeQualityOk: true
url: "https://github.com/impalasys/talon"
homepage: "https://impala.systems"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [66, 21]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-05-14T00:56:00Z"
lastCommitAt: "2026-07-08T05:40:21Z"
lastReleaseAt: "2026-06-06T23:35:33Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 54
maintainers: ["ShukantPal"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1238259397/05e3b636-f93d-4bdf-bda7-d42b683e4e9e"
---

# Talon

Talon is the control plane for cloud native agents. It lets teams operate autonomous agent fleets with durable execution, declarative configuration, namespace isolation, and a browser-native fleet view.

Talon gives you the infrastructure long-lived agents were missing: a gateway API, worker runtime, persisted sessions, schedule wakeups, knowledge, namespace-scoped MCP tools, and Sightline for inspecting what is running.

## What ships in this repo

- `talon-server`: gateway process exposing the canonical gRPC and gRPC-Web API
- `talon-worker`: worker runtime that consumes dispatch events and executes agent turns
- `talon-cli`: admin CLI for applying manifests, inspecting resources, and managing knowledge
- `ui/`: Next.js operator UI
- `proto/`: versioned API, config, manifest, event, and model contracts
- `manifests/`: default resources plus end-to-end examples
- `docs/`: concepts, tutorials, operations guides, and generated API reference

## Runtime model

Talon is split into a few explicit roles:

- Gateway: accepts API calls, persists session state, and publishes work
- Worker: consumes work, resolves models and tools, executes turns, and emits step events
- Control…
