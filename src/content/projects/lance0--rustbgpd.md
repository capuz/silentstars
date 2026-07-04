---
repo: "lance0/rustbgpd"
name: "rustbgpd"
description: "An API-first BGP daemon in Rust for programmable route-server and control-plane use cases"
readmeQualityOk: true
url: "https://github.com/lance0/rustbgpd"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
topics: ["bgp", "grpc", "networking", "route-server", "rust", "bgp-daemon", "bmp", "flowspec", "mrt", "network-automation"]
stars: 56
forks: 1
openIssues: 2
closedIssues: 38
watchers: 2
contributors: 1
recentReleases: 4
createdAt: "2026-02-27T13:35:52Z"
lastCommitAt: "2026-07-04T22:20:54Z"
lastReleaseAt: "2026-04-30T20:01:31Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 99
undervaluedScore: 41
maintainers: ["lance0", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/08e9df00be1dc42e29712ac7bb93110acbcfc2b72ba05c990261ba0bd29c1620/lance0/rustbgpd"
fundingLinks: ["KO_FI:https://ko-fi.com/lance0"]
---

</p>

# rustbgpd

An API-first BGP daemon in Rust, built for programmable data-center fabric,
route-server, and automation-heavy control-plane use cases. gRPC is the primary
interface for all peer lifecycle, routing, and policy operations. The config
file bootstraps initial state; after startup, gRPC owns the truth. No restarts
to add peers, change policy, or inject routes.

**Status: public alpha.** Feature-complete for the initial programmable
control-plane target and expanding toward cloud / AI-scale data-center fabric
use. Dual-stack BGP/MP-BGP, Add-Path, GR/LLGR, RPKI/RTR, ASPA path
verification, FlowSpec, BMP, MRT, BFD, EVPN/VXLAN alpha, and full gRPC/CLI
management are implemented. Default-off Linux FIB integration exists for RFC
7999 discard routes and configured unicast FIB tables, including ECMP and
weighted multipath; broader routing-suite features remain future work.
Validated with a workspace test suite, fuzz targets, and an automated interop
suite — primarily against FRR 10.3.1, plus GoBGP 3.37.0–4.6.0 across labs and
StayRTR-backed RTR coverage; BIRD 2.0.12 has documented M0 validation and
BIRD 3.2.1 backs the
TCP-AO smoke. A foundation tier runs on every PR, and…
