---
repo: "rolter-ai/rolter"
name: "rolter"
description: "(WIP) High-performance OpenAI/Anthropic-compatible AI gateway + load balancer in Rust (LiteLLM-proxy alternative)"
readmeQualityOk: true
url: "https://github.com/rolter-ai/rolter"
homepage: "https://rolter-ai.github.io/rolter/"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [51, 45]
topics: ["ai", "ai-gateway", "gate", "llm", "load-balancer", "proxy", "wip"]
stars: 9
forks: 0
openIssues: 341
closedIssues: 1104
watchers: 0
contributors: 5
recentReleases: 9
createdAt: "2026-06-30T12:25:58Z"
lastCommitAt: "2026-10-03T22:04:36Z"
lastReleaseAt: "2026-08-13T23:34:41Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 59
maintainers: ["ormeilu", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1bba817504fc40f7126f580f639cb9ad431e5ad29e61429c5266455d6ef8a41b/rolter-ai/rolter"
---

A high-performance, open-source <b>LiteLLM-proxy alternative</b> in Rust —<br>
  an OpenAI/Anthropic-compatible <b>AI gateway</b> and load balancer.

---

rolter proxies commercial providers and load-balances self-hosted OpenAI-compatible fleets (e.g. 20–30 vLLM instances) with **cache-aware routing**, full RBAC, reload-free configuration, and cost/usage tracking.

> **Status:** active development. The gateway, Postgres-backed control plane, reload-free configuration, cost controls, reliability primitives, and core provider surfaces are implemented; remaining work is tracked in [`ROADMAP.md`](https://github.com/rolter-ai/rolter/blob/HEAD/ROADMAP.md), [`TODO.md`](https://github.com/rolter-ai/rolter/blob/HEAD/TODO.md), and [GitHub issues](https://github.com/rolter-ai/rolter/issues).

## Why rolter

- **Fast** — a Rust data plane (Axum/Hyper/Tower on Tokio) with lock-free config reads and minimal-copy streaming.
- **Cache-aware load balancing** — route prefix-heavy traffic to the vLLM replica most likely to have the KV cache warm.
- **Drop-in** — speak the OpenAI and Anthropic APIs your clients already use.
- **Operable** — virtual keys, budgets, rate limits, cost tracking, RBAC, and…
