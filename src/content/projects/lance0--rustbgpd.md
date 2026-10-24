---
repo: "lance0/rustbgpd"
name: "rustbgpd"
description: "An API-first BGP daemon in Rust for programmable route-server and control-plane use cases"
readmeQualityOk: true
url: "https://github.com/lance0/rustbgpd"
homepage: "https://rbgp.rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [84]
topics: ["bgp", "grpc", "networking", "route-server", "rust", "bgp-daemon", "bmp", "flowspec", "mrt", "network-automation"]
stars: 66
forks: 3
openIssues: 0
closedIssues: 41
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2026-02-27T13:35:52Z"
lastCommitAt: "2026-10-24T08:21:36Z"
lastReleaseAt: "2026-04-30T20:01:31Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 100
undervaluedScore: 42
maintainers: ["lance0", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/55981fc1c0367f1e6fe7519263acad734c2047a2b7bd9341eda67796e427ff74/lance0/rustbgpd"
fundingLinks: ["KO_FI:https://ko-fi.com/lance0"]
---

# rustbgpd

**An API-first BGP daemon in Rust for route servers, route reflectors, and network automation.**

Manage peers, apply policy, and inject routes through gRPC or the `rbgp` CLI.
Inspect unicast route decisions from the live RIB, test policies before applying
them, and stream routing events to your own tools.

[Documentation](https://github.com/lance0/rustbgpd/blob/HEAD/docs/README.md) · [Install](#install) ·
[Releases](https://github.com/lance0/rustbgpd/releases) · [Website](https://rbgp.rs)

**Stability:** inventoried route-server, route-reflector, and scoped FlowSpec
controller surfaces have a [narrow v1 compatibility contract](https://github.com/lance0/rustbgpd/blob/HEAD/docs/reference/v1-stable-contract.md),
with release baseline v0.79.0. The project remains alpha overall; unlisted surfaces,
EVPN outside scoped Types 1–5 reflection, and Linux dataplane features are
outside that promise.
[Stability and compatibility](https://github.com/lance0/rustbgpd/blob/HEAD/docs/reference/stability.md) explains the boundaries.

## Choose your path

### IXP route server

IPv4/IPv6 unicast, per-member policy, RPKI, and Add-Path. Inventoried surfaces
are covered by the narrow v1…
