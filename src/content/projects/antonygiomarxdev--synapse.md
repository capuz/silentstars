---
repo: "antonygiomarxdev/synapse"
name: "synapse"
description: "Decentralized inference protocol for Mixture-of-Experts (MoE) models. Turns thousands of consumer GPUs into a distributed swarm to run frontier AI like Kimi K3 without gatekeepers, rate limits, or datacenters."
readmeQualityOk: true
url: "https://github.com/antonygiomarxdev/synapse"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [60, 34]
topics: ["ai", "infrastructure"]
stars: 8
forks: 0
openIssues: 5
closedIssues: 21
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-28T05:30:03Z"
lastCommitAt: "2026-07-31T06:27:44Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 43
maintainers: ["antonygiomarxdev"]
openGraphImageUrl: "https://opengraph.githubassets.com/51e98bb6e99fb8b7c7b39b6bd34d13b3ffaa3a542cdb3b2a2bb501a76ae4a289/antonygiomarxdev/synapse"
---

</p>

# Synapse

**Decentralized inference for Mixture-of-Experts models — validating the thesis.**

> *Can a small network of heterogeneous GPUs complete inference jobs reliably, verifiably, and more affordably than a centralized alternative? We're testing that.*

---

## Where we are (July 2026)

Synapse has pivoted to **V0: a permissioned async job network for batch inference**. The original P2P vision is deferred until the core coordination is validated. See [ADR-0001](https://github.com/antonygiomarxdev/synapse/blob/HEAD/docs/adr/0001-v0-permissioned-async-job-network.md).

### V0 Progress

| Issue | Status | Description |
|---|---|---|
| #20 | ✅ Closed | Native MoE forward pass — correlation 0.999 with llama.cpp |
| #21 | ✅ Closed | Job Model + Async API — POST/GET /v1/jobs, 60 tests |
| #22 | ✅ Closed | Scheduler Mínimo — round-robin, leases (30s), retries (max 3), 44 tests |
| #23 | ✅ Closed | Multi-Worker + Crash Recovery — OllamaWorkerPort, MetricsCollector, 7 integration tests |
| #24 | ✅ Closed | Métricas E2E — benchmark binary, scripts/bench.sh, p50/p95/p99 report |
| #25 | Next | Native MoE Runtime — InferencePort Validation |

### Validated (pre-pivot)

| Claim |…
