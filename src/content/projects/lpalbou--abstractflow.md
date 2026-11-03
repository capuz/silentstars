---
repo: "lpalbou/AbstractFlow"
name: "AbstractFlow"
description: "Diagram-based, durable AI workflows for AbstractFramework. A visual editor inspired by UE4 Blueprints with drag-and-drop nodes, portable .flow bundles, recursive subflows, and multi-agent orchestration. Gateway-first architecture."
readmeQualityOk: true
url: "https://github.com/lpalbou/AbstractFlow"
homepage: "https://abstractframework.ai/flow"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [66, 26]
topics: ["abstractframework", "agent", "ai", "blueprint", "diagram", "durable", "editor", "flow", "harness", "llm"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-12-14T18:07:27Z"
lastCommitAt: "2026-11-03T11:15:16Z"
lastReleaseAt: "2026-05-31T09:34:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 68
maintainers: ["lpalbou"]
openGraphImageUrl: "https://opengraph.githubassets.com/5fbac8dc15b2dd849c3646304e1e9339d8f278fe6118303d5f58d3d4fc8eb8f4/lpalbou/AbstractFlow"
---

# AbstractFlow

AbstractFlow is the visual workflow editor for AbstractFramework.

It is a web package (`@abstractframework/flow`). It runs a browser editor and a small Node server that serves the built UI and forwards `/api/*` to AbstractGateway. The server runs on its own (`http://127.0.0.1:3003/`) or behind the Gateway at `/apps/flow/`, where the Gateway console opens it signed in. AbstractGateway owns users, sessions, runtime routing, provider configuration, workflow storage, run execution, ledgers, artifacts, and media catalogs.

## What's New In 0.14.0

- A value typed on an unwired input takes the input's type: `5` next to a wired number is the number 5, and a tag says the type.
- The Run window picks a decision model for an input that feeds Decision nodes, and a fast run shows its real result.
- The "Decision triage" example opens with every wire drawn.

See the [changelog](https://github.com/lpalbou/AbstractFlow/blob/HEAD/CHANGELOG.md#0140---2026-11-03) for details.

## Install

```bash
npx @abstractframework/flow --gateway-url http://127.0.0.1:8080
```

For a local checkout, clone [AbstractUIC](https://github.com/lpalbou/AbstractUIC)
next to this repository…
