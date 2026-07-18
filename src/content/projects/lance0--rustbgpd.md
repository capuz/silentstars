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
openIssues: 1
closedIssues: 39
watchers: 2
contributors: 1
recentReleases: 4
createdAt: "2026-02-27T13:35:52Z"
lastCommitAt: "2026-07-18T05:46:24Z"
lastReleaseAt: "2026-04-30T20:01:31Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 99
undervaluedScore: 41
maintainers: ["lance0"]
openGraphImageUrl: "https://opengraph.githubassets.com/26c68fe25a32f7b17a4dea13706bc6e6c40ffa196998eff67290ec2f2cfd292f/lance0/rustbgpd"
fundingLinks: ["KO_FI:https://ko-fi.com/lance0"]
---

</p>

# rustbgpd

An API-first BGP daemon in Rust, built for programmable data-center fabric,
route-server, and automation-heavy control-plane use cases. gRPC is the primary
interface for all peer lifecycle, routing, and policy operations. The config
file bootstraps initial state; after startup, gRPC owns the truth. No restarts
to add peers, change policy, or inject routes.

The practical beachhead is explainable route-server and route-reflector
operation: per-peer received / best / advertised views, policy and export-gate
explain output, BMP/MRT/metrics, and receipt-backed interop around those roles.

**Status: public alpha.** Feature-complete for the initial programmable
control-plane target and expanding toward cloud / AI-scale data-center
fabric use.

- **Implemented:** dual-stack BGP/MP-BGP, Add-Path, GR/LLGR, RPKI/RTR, ASPA
  path verification, FlowSpec, BMP, MRT, BFD, EVPN/VXLAN (alpha), and full
  gRPC/CLI management. Linux FIB integration is default-off and scoped to
  RFC 7999 discard routes and configured unicast tables (including ECMP and
  weighted multipath); broader routing-suite features remain future work.
- **Validated** with a workspace test suite, fuzz targets,…
