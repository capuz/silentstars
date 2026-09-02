---
repo: "lance0/rustbgpd"
name: "rustbgpd"
description: "An API-first BGP daemon in Rust for programmable route-server and control-plane use cases"
readmeQualityOk: true
url: "https://github.com/lance0/rustbgpd"
homepage: "https://rbgp.rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [86]
topics: ["bgp", "grpc", "networking", "route-server", "rust", "bgp-daemon", "bmp", "flowspec", "mrt", "network-automation"]
stars: 60
forks: 3
openIssues: 0
closedIssues: 41
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2026-02-27T13:35:52Z"
lastCommitAt: "2026-09-02T08:05:03Z"
lastReleaseAt: "2026-04-30T20:01:31Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 100
undervaluedScore: 39
maintainers: ["lance0"]
openGraphImageUrl: "https://opengraph.githubassets.com/25800cb88c98ee1ef2ee7034aef2d42b8d83482c5cb4278966bed19ccf82b3ab/lance0/rustbgpd"
fundingLinks: ["KO_FI:https://ko-fi.com/lance0"]
---

</p>

# rustbgpd

Project site: <https://rbgp.rs>

An API-first BGP daemon in Rust for IXP route servers, route reflectors, and
automation-heavy control planes. gRPC is the primary interface for all peer
lifecycle, routing, and policy operations — the config file bootstraps initial
state, then gRPC owns the truth. No restarts to add peers, change policy, or
inject routes. And every route decision can explain itself from the live RIB:
per-peer received / best / advertised views, best-path and export-gate
explain, opt-in import-decision explain, retained rejected routes with
reasons, BMP/MRT/metrics — with receipt-backed interop behind each claimed
behavior.

## Choose your path

| I want to… | Start here |
|------------|------------|
| Run a local demo | [Try it in 60 seconds](#try-it-60-seconds) |
| Evaluate rustbgpd for an IXP route server | [IXP evaluation](https://github.com/lance0/rustbgpd/blob/HEAD/docs/ixp-evaluation.md) |
| Deploy a proven topology | [Scenario cookbook](https://github.com/lance0/rustbgpd/blob/HEAD/docs/cookbook/README.md) |
| Operate or troubleshoot a daemon | [Operations reference](https://github.com/lance0/rustbgpd/blob/HEAD/docs/OPERATIONS.md) |
| Build…
