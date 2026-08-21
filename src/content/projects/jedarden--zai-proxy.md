---
repo: "jedarden/zai-proxy"
name: "zai-proxy"
description: "ZAI LLM reverse proxy and metrics dashboard"
readmeQualityOk: true
url: "https://github.com/jedarden/zai-proxy"
language: "Go"
languages: ["Go"]
languagePcts: [73]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-16T20:06:02Z"
lastCommitAt: "2026-08-21T04:10:23Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 78
undervaluedScore: 43
maintainers: ["jedarden"]
openGraphImageUrl: "https://opengraph.githubassets.com/9dab735cda982ca0bd60cc06e2f2340855c9a85e46d02aa4419238475cb74c7b/jedarden/zai-proxy"
---

# zai-proxy

Production-grade LLM reverse proxy with token counting, adaptive rate limiting, and a real-time metrics dashboard.

## What it is

zai-proxy sits in front of the Z.AI Claude API and adds the observability and reliability layer that bare API access lacks:

- **Token tracking** — counts input and output tokens on every request, using API-reported usage when available and tiktoken estimation as a fallback
- **Adaptive rate limiting** — tracks upstream 429 responses with an EWMA ceiling estimator and automatically holds just below the limit, probing periodically to detect ceiling increases
- **Prometheus metrics** — request counts, latency histograms, token rates, error rates, and rate-limit wait times, all labelled by model and deployment variant
- **Blue/green and canary support** — tag requests by `DEPLOYMENT_VARIANT` to compare proxy versions or model configurations side-by-side in the same metrics namespace
- **SSE streaming** — passes through chunked streaming responses without buffering

## Components

### `proxy/`

Go HTTP reverse proxy. Listens on `:8080`, forwards to the upstream LLM API, and exports Prometheus metrics at `/metrics`.

See…
