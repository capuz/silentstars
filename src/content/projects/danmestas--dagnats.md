---
repo: "danmestas/dagnats"
name: "dagnats"
description: "DAG-based workflow engine built on NATS for autonomous LLM coding pipelines"
readmeQualityOk: true
url: "https://github.com/danmestas/dagnats"
homepage: "https://dagnats-docs.daniel-mestas.workers.dev"
language: "Go"
languages: ["Go"]
languagePcts: [95]
stars: 5
forks: 1
openIssues: 6
closedIssues: 241
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-29T18:31:25Z"
lastCommitAt: "2026-10-31T15:59:22Z"
lastReleaseAt: "2026-07-17T21:24:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 67
maintainers: ["danmestas", "dependabot[bot]", "calionauta"]
openGraphImageUrl: "https://opengraph.githubassets.com/8bf0af30c7e67383b4bcefa474e248572d9d11701fda2e8e85fe22a923be5ed8/danmestas/dagnats"
---

# DagNats

DAG-based workflow engine built on NATS for autonomous LLM coding pipelines.

Combines Hatchet-style DAG orchestration with Temporal-style durable execution, using NATS JetStream as the sole infrastructure dependency. Define workflows as directed acyclic graphs, register worker handlers, and let the engine handle task distribution, retries, event sourcing, and state recovery. Gated tasks can also **author and launch workflows at runtime** (agent runtimes), and the internal control plane is discoverable via nats-micro.

## Quick Start

### Install

```bash
# From source
go install github.com/danmestas/dagnats/cmd/dagnats@latest

# From a release tarball (linux/darwin, amd64/arm64)
# https://github.com/danmestas/dagnats/releases/latest
```

Or run the official Docker image:

```bash
docker build -t dagnats:latest .  # build locally; published image pending
docker run --rm -p 8080:8080 -e DAGNATS_HTTP_ADDR=0.0.0.0:8080 dagnats:latest
```

The HTTP listener binds to loopback by default, so inside a container it needs `DAGNATS_HTTP_ADDR` before the published port reaches it. On a non-loopback bind the console refuses requests until you set an auth mode (see…
