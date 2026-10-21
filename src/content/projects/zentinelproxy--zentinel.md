---
repo: "zentinelproxy/zentinel"
name: "zentinel"
description: "A security-first reverse proxy built to guard the free web."
readmeQualityOk: true
url: "https://github.com/zentinelproxy/zentinel"
homepage: "https://zentinelproxy.io"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
topics: ["gateway", "pingora", "proxy", "rust", "api-gateway", "cloudflare", "edge", "infrastructure", "load-balancer", "reverse-proxy"]
stars: 119
forks: 24
openIssues: 13
closedIssues: 95
watchers: 4
contributors: 8
recentReleases: 0
createdAt: "2025-12-23T06:42:16Z"
lastCommitAt: "2026-10-21T08:49:14Z"
lastReleaseAt: "2025-12-30T08:24:22Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 95
undervaluedScore: 42
maintainers: ["raffaelschneider", "dependabot[bot]", "Curious-r"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1121540314/a381a151-f05d-48b0-9b5a-fe4bda5de393"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/zentinelproxy", "KO_FI:https://ko-fi.com/raskell", "CUSTOM:https://zentinelproxy.io/support"]
discussionCount: 9
---

Zentinel

---

Zentinel is a high-performance reverse proxy built on [Cloudflare Pingora](https://github.com/cloudflare/pingora). It provides explicit limits, predictable behavior, and production-grade defaults for environments where operators need to sleep.

**Performance:** Lowest p99 latency in [benchmarks](https://zentinelproxy.io/benchmarks/) against Envoy, HAProxy, Nginx, and Caddy. 1M-request soak tests with 99.95% success rate and zero memory leaks. Pure Rust WAF engine processes clean traffic at 912K req/s — 30x faster than the C++ ModSecurity reference.

## Status

Production-ready core (proxy, routing, TLS, caching, load balancing). Agents are individually versioned — WAF, Auth, and AI Gateway are stable; others are beta or alpha. See [zentinelproxy.io/agents](https://zentinelproxy.io/agents/) for per-agent status.

## Request Flow

```
   ┌────────┐                                       ┌──────────┐
   │ Client │                                       │ Upstream │
   └────┬───┘                                       └─────▲────┘
        │                                                 │
        ▼                                                 │
   ╔═══════════ Zentinel…
