---
repo: "takehaya/Vinbero"
name: "Vinbero"
description: "A complete subset of SRv6 local function & transit written in XDP"
readmeQualityOk: true
url: "https://github.com/takehaya/Vinbero"
language: "Go"
languages: ["Go"]
languagePcts: [85]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 9
createdAt: "2026-01-05T09:43:45Z"
lastCommitAt: "2026-07-04T22:19:08Z"
lastReleaseAt: "2026-07-03T05:58:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 59
maintainers: ["takehaya", "takehaya-release-please-use-app[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bbfe7d6966cfffb0b10172cd6158ca15e666097a955c0686856a79cf3c5b1f99/takehaya/Vinbero"
---

# Vinbero
Vinbero is a very fast high-performance SRv6 implementation.

</div>

The [previous implementation](
https://github.com/takehaya/Vinbero-legacy/tree/master) has become outdated, so we decided to reimplement it with a new codebase.

## Highlights

- **eBPF/XDP + TC fast path** — kernel-resident packet forwarding, the only open-source SRv6 stack that does EVPN L2VPN on eBPF.
- **In-process BGP** — GoBGP v4 inside `vinberod`, no sidecar. VPNv4/VPNv6, EVPN (SRv6), MUP, SR Policy.
- **Unified VRF binding** — one `vbctl vrf-bgp bind --rt FAMILY:RT:DIRECTION` drives import/export policy and auto-advertise across every AF.
- **Interop tested** — FRR (L3VPN/EVPN) in CI under `examples/interop-clab/scenarios/`; MUP additionally validated against a third-party commercial router.
- **Custom XDP plugins** — reserved tail-call slots, runtime register via `vinbero plugin`. SDK in `sdk/`.
- **Connect RPC + gRPC** — every primitive reachable over HTTP/2.

## Quickstart

### Install (prebuilt binaries)

The fastest way to get `vinberod` and `vinbero` is the one-liner installer,
which pulls the latest GitHub release and drops both binaries into
`/usr/local/bin`. It needs `curl`, `jq`, and…
