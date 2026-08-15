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
stars: 63
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2026-06-05T10:28:59Z"
lastCommitAt: "2026-08-15T04:02:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 32
maintainers: ["mahmut-Abi"]
openGraphImageUrl: "https://opengraph.githubassets.com/088814de6e2ae91a50e01fc0b22b24a7dff2d28de9c447d699a3318cea641538/nantian-gw/gateway"
---

# Nantian Gateway

  <strong>Kubernetes Gateway API control plane with a built-in AI gateway — no separate AI proxy needed.</strong>
</p>

</p>

## Performance

Nightly conformance + load test results (600s vegeta, via Gateway → dataplane):

| Metric | Value |
|--------|-------|
| Throughput | 900–1,060 RPS |
| P50 latency | 3–7 ms |
| P99 latency | 12–20 ms |
| CPU (dataplane) | ~236m |
| Memory (dataplane) | ~90 Mi |
| Success rate | 100% |

> See [platform-release](https://github.com/nantian-gw/platform-release) for full nightly history.

## Why Nantian Gateway?

| | Nantian Gateway | Envoy Gateway | Istio | Traefik |
|---|---|---|---|---|
| **Control plane** | Go | Go | Go | Go |
| **Data plane** | Rust (Pingora) | Envoy (C++) | Envoy (C++) | Traefik (Go) |
| **AI Gateway** | Yes (native) | — | — | — |
| **Wasm plugins** | Yes (wasmtime) | Yes (proxy-wasm) | Yes (proxy-wasm) | Yes (yaegi) |
| **Gateway API** | v1.5.1 | v1.2+ | v1.2+ | v1.2+ |
| **L4 (TCP/UDP)** | Yes | Yes | Yes | Yes |
| **Dashboard** | Yes (Next.js) | — | Kiali | Yes |
| **License** | Apache 2.0 | Apache 2.0 | Apache 2.0 | MIT |

> [Chinese…
