---
repo: "nantian-gw/gateway"
name: "gateway"
description: "Nantian Gateway — Kubernetes Gateway API implementation with AI proxy, WASM plugin system, split control plane (Go) and data plane (Rust)"
readmeQualityOk: true
url: "https://github.com/nantian-gw/gateway"
homepage: "https://nantian.dev"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["ai-gateway", "gateway-api", "go", "ingress", "kubernetes", "proxy", "rust", "wasm"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-06-05T10:28:59Z"
lastCommitAt: "2026-07-08T05:42:27Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 53
maintainers: ["mahmut-Abi"]
openGraphImageUrl: "https://opengraph.githubassets.com/7d101ac390453e19c9b5c68429315f930f2f9ca3cc7f92c52f21bf0a77670475/nantian-gw/gateway"
---

# Nantian Gateway

  <strong>A Kubernetes Gateway API control plane for split-plane ingress, API routing, and AI gateway workloads.</strong>
</p>

</p>

## Performance

Nightly conformance + load test results (600s vegeta, via Gateway → dataplane):

| Metric | Value |
|--------|-------|
| Throughput | 7,800–9,400 RPS |
| P50 latency | 3–4 ms |
| P99 latency | 13–15 ms |
| CPU (dataplane) | ~1,100m |
| Success rate | 100% |

> See [platform-release](https://github.com/nantian-gw/platform-release) for full nightly history.

## Why Nantian Gateway?

| | Nantian Gateway | Envoy Gateway | Istio | Traefik |
|---|---|---|---|---|---|
| **Control plane** | Go | Go | Go | Go |
| **Data plane** | Rust (Pingora) | Envoy (C++) | Envoy (C++) | Traefik (Go) |
| **AI Gateway** | Yes (native) | — | — | — |
| **Wasm plugins** | Yes (wasmtime) | Yes (proxy-wasm) | Yes (proxy-wasm) | Yes (yaegi) |
| **Gateway API** | v1.5.1 | v1.2+ | v1.2+ | v1.2+ |
| **L4 (TCP/UDP)** | Yes | Yes | Yes | Yes |
| **Dashboard** | Yes (Next.js) | — | Kiali | Yes |
| **License** | Apache 2.0 | Apache 2.0 | Apache 2.0 | MIT |

> [Chinese README](https://github.com/nantian-gw/gateway/blob/HEAD/README.zh-CN.md)

## What Is…
