---
repo: "ericmey/musubi"
name: "musubi"
description: "Musubi (結び) — Ai Agent shared memory and thought layer. The braiding of threads between presences."
readmeQualityOk: true
url: "https://github.com/ericmey/musubi"
homepage: "https://github.com/ericmey/musubi"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["ai-memory", "mcp", "python", "qdrant", "ai-agents", "cosign", "fastapi", "grpc", "homelab", "hybrid-search"]
stars: 5
forks: 0
openIssues: 15
closedIssues: 123
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-04-01T16:23:54Z"
lastCommitAt: "2026-07-15T05:58:19Z"
lastReleaseAt: "2026-04-24T17:49:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 95
undervaluedScore: 66
maintainers: ["ericmey"]
openGraphImageUrl: "https://opengraph.githubassets.com/fe7287792613802ae88564492f5a405ba4d661dcf9573e7dd736e9d01377bad3/ericmey/musubi"
discussionCount: 0
---

<h1 align="center">Musubi 結び</h1>
    <em>Shared memory for a small fleet of AI agents — three planes, local inference, a lifecycle engine that matures raw captures into a human-reviewable knowledge base.</em>
  </p>
  </p>
</p>

---

Musubi (結び — *"to tie, to join, to bind"*) is a memory server built for the moment when a single AI assistant is not enough: you're running several, each with its own role — one drafts notes, one answers questions, one cleans up the vault at 3am — and they need a shared substrate so that what one learns, the others can use.

It is a standalone Python service. Every downstream interface (MCP, LiveKit, a CLI, a browser extension) is an adapter that depends on Musubi's SDK. The core owns the memory model and the API; adapters own the surface.

## The three planes

```
  ┌──────────────────────────────────────────────────────────────────────────┐
  │                            MUSUBI CORE                                   │
  │                                                                          │
  │    episodic ──────► concept ──────► curated                              │
  │    (raw captures)   (synthesized    (human-reviewed…
