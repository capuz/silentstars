---
repo: "99apps-id/nesarouter"
name: "nesarouter"
description: "Next Smart Adaptive (Nesa) Router - Local-first OpenAI-compatible AI gateway with smart routing, budget controls, encrypted OAuth, and token savers."
readmeQualityOk: true
url: "https://github.com/99apps-id/nesarouter"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
stars: 10
forks: 2
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-07-13T11:22:32Z"
lastCommitAt: "2026-09-28T10:06:01Z"
lastReleaseAt: "2026-07-13T13:32:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 61
maintainers: ["naracitrasolusindo", "99apps-id"]
openGraphImageUrl: "https://opengraph.githubassets.com/14925f772ff604ec4ecef605bf16fb1325c7a7ef99353c7d526ae478b5054591/99apps-id/nesarouter"
---

# NesaRouter

**Next Smart Adaptive Router**. A local-first, OpenAI-compatible AI gateway that routes requests across providers, controls budgets, tracks usage, and keeps provider credentials in one encrypted local store.

NesaRouter is designed for a laptop or small VPS. It runs as one Next.js service with SQLite by default and exposes one endpoint for apps and CLI tools.

## What It Does

- Serves OpenAI-compatible chat, responses, messages, embeddings, image, audio, search, and web-fetch endpoints.
- Routes by mode: auto, free-first, cheapest, best, or manual.
- Supports fallback chains, combos, model aliases, and round-robin across API keys or OAuth accounts.
- Supports **multi-account OAuth** per provider (add / remove / use; round-robin; skip fatal-error accounts).
- Shows per-account connection health on the provider detail page (green / red, with periodic status probe).
- Enforces a daily budget, warning thresholds, provider and per-key token quotas, and paid-provider blocking.
- Caches equivalent requests and records routing reason, usage, and estimated or provider-reported cost.
- Encrypts provider API keys, OAuth tokens, client `/v1` keys, MCP env values, and…
