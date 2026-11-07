---
repo: "gardenlinux/FeOS"
name: "FeOS"
description: "MicroVM pods for agent sandboxes and containers as a service: FeOS, the node layer in Rust, and FeRun, its control plane"
readmeQualityOk: true
url: "https://github.com/gardenlinux/FeOS"
language: "Go"
languages: ["Go", "Rust"]
languagePcts: [53, 33]
topics: ["firecracker", "kubernetes", "microvm", "rust", "sandbox"]
stars: 25
forks: 9
openIssues: 11
closedIssues: 13
watchers: 4
contributors: 13
recentReleases: 0
createdAt: "2023-11-12T15:37:52Z"
lastCommitAt: "2026-11-07T09:30:47Z"
lastReleaseAt: "2025-09-19T16:40:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 81
undervaluedScore: 58
maintainers: ["MalteJ"]
openGraphImageUrl: "https://opengraph.githubassets.com/f2b3b414ecb31ad7f933be8a713fba885671e6aa18d864f90c060218d76a6e20/gardenlinux/FeOS"
---

# FeOS

FeOS runs untrusted code of many tenants in **pods**: Firecracker microVMs
with containers in them, which cost no memory while they are idle and are
back in under a second, on the same node or another one. On top of it,
**FeRun**, a replicated control plane, offers two products:

- **Agent sandboxes**: workspaces in which an LLM agent runs commands and
  tools for a user, often for days, with exec, file tools, file watches,
  ports and credentials it can use but never sees.
- **Container as a service** (CaaS): customers run their own images as
  services, jobs and addons in environments, with deployments, routes and
  scale to zero, without operating a cluster.

FeOS is written in Rust, statically linked against musl; FeRun in Go.

> **Status:** FeOS 0.6.1 is in development and changes quickly. The node
> layer and the agent sandboxes run; CaaS is partly built. What is built and
> what is not is in [docs/overview.md](https://github.com/gardenlinux/FeOS/blob/HEAD/docs/overview.md)
> and in the [ADR index](https://github.com/gardenlinux/FeOS/blob/HEAD/docs/adr/README.md#index).

## How it fits together

```
     clients: agents (MCP), apps (REST), users (HTTP to their ports)…
