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
stars: 121
forks: 24
openIssues: 9
closedIssues: 121
watchers: 4
contributors: 9
recentReleases: 0
createdAt: "2025-12-23T06:42:16Z"
lastCommitAt: "2026-10-31T15:58:55Z"
lastReleaseAt: "2025-12-30T08:24:22Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 96
undervaluedScore: 43
maintainers: ["raffaelschneider", "dependabot[bot]", "dai-yamashita"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1121540314/a381a151-f05d-48b0-9b5a-fe4bda5de393"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/zentinelproxy", "KO_FI:https://ko-fi.com/raskell", "CUSTOM:https://zentinelproxy.io/support"]
discussionCount: 9
---

Zentinel is a reverse proxy built on [Cloudflare Pingora](https://github.com/cloudflare/pingora).
It ships bounded resources, deterministic timeouts and an explicit fail-open or
fail-closed choice per route, and keeps parsing-heavy or risky security logic
(WAF, auth, policy) out of the dataplane in external agents, so a buggy agent
cannot take the proxy down with it.

In the [benchmarks on zentinelproxy.io](https://zentinelproxy.io/benchmarks/)
Zentinel had the lowest p99 of five proxies (Zentinel, Envoy, HAProxy, Nginx,
Caddy) at 10,000 req/s, and a 1-hour, 1,000,000-request soak test finished with
a 99.95% success rate and no memory leak detected.

The core (proxy, routing, TLS, caching, load balancing) is production-ready.
Agents are versioned separately; each one's status is on its
[registry page](https://registry.zentinelproxy.io/).

## Quick start

```bash
curl -fsSL https://get.zentinelproxy.io | sh
```

Save this as `zentinel.kdl`. It proxies `localhost:8080` to a backend on port `8081`:

```kdl
system {
    worker-threads 0  // auto-detect CPU cores
}

listeners {
    listener "http" {
        address "0.0.0.0:8080"
        protocol "http"
    }
}

routes {
    route…
