---
repo: "go-gost/x"
name: "x"
description: "Extended (may be experimental) features outside the main gost tree."
readmeQualityOk: true
url: "https://github.com/go-gost/x"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 79
forks: 120
openIssues: 5
closedIssues: 32
watchers: 3
contributors: 38
recentReleases: 0
createdAt: "2021-12-19T08:02:12Z"
lastCommitAt: "2026-10-11T10:15:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 96
undervaluedScore: 57
maintainers: ["ginuerzh", "iBug", "lueyoung"]
openGraphImageUrl: "https://opengraph.githubassets.com/4750b512354c89d85bddf66796e7bb0b508d98363b62fadd9eef8c7dd9063a7a/go-gost/x"
---

# x

The implementation layer for the GOST proxy framework. Every interface defined in [core/](https://github.com/go-gost/x/blob/HEAD/../core/) is implemented here — handlers, listeners, dialers, connectors, plus config parsing, registries, and all cross-cutting concerns.

## Package layout

| Directory | Purpose |
|-----------|---------|
| `handler/` | Protocol handlers (http, socks4/5, ss, ssh, tunnel, tun, dns, redirect, etc.) |
| `listener/` | Protocol listeners (tcp, tls, ws, http2/3, quic, kcp, icmp, tun, udp, etc.) |
| `dialer/` | Outbound dialers (tcp, tls, ws, http2/3, quic, grpc, ssh, wg, kcp, icmp, etc.) |
| `connector/` | Destination connectors (http, socks4/5, ss, ssh, relay, tunnel, direct, etc.) |
| `config/` | Config struct, YAML/JSON parsing, and service construction |
| `registry/` | Typed global registries for all component types |
| `service/` | Accept loop wiring listener + handler |
| `chain/` | Multi-hop forwarding chain and route implementation |
| `router/` | Route table router (destination-based routing) |
| `hop/` | Node group with load-balanced selection |
| `selector/` | Load-balancing strategies (round-robin, random, weighted, hash) |
| `auth/`,…
