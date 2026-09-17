---
repo: "netcanon/netcanon"
name: "netcanon"
description: "Multi-vendor network config translator — Cisco / Juniper / Fortinet / Aruba / Arista / MikroTik / OPNsense. Cross-mesh audit catches silent translation errors before they ship. Live demo: demo.netcanon.net"
readmeQualityOk: true
url: "https://github.com/netcanon/netcanon"
homepage: "https://demo.netcanon.net"
language: "Python"
languages: ["Python"]
languagePcts: [92]
topics: ["arista", "aruba", "cisco", "config-migration", "fastapi", "fortinet", "juniper", "mikrotik", "network-automation", "network-configuration"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-13T06:20:23Z"
lastCommitAt: "2026-09-17T08:51:03Z"
lastReleaseAt: "2026-06-16T14:02:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 48
maintainers: ["netcanon", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/db1ecdd7f74d30c4dc79e2093fadaffc17971d4e26c2f9522f8835839c8fb62e/netcanon/netcanon"
discussionCount: 1
---

# Netcanon

**Multi-vendor network config translator with a verifiable cross-vendor audit.**

**Built for switches and routers.**  Translates running-config across
Cisco (IOS-XE, NX-OS, IOS-XR), Juniper Junos, Arista EOS, Aruba
(AOS-S, AOS-CX), MikroTik RouterOS, and VyOS.

**Fortinet FortiGate and OPNsense are supported at the L2/L3 layer
only:** that covers interface addressing, VLAN interfaces and local
users; the policy table, NAT, VPN and UTM are out of scope in either
direction.  See [`docs/CAPABILITIES.md`](https://github.com/netcanon/netcanon/blob/HEAD/docs/CAPABILITIES.md) for the
full per-codec list.
You point Netcanon at a config from one vendor and it renders the
equivalent config for another — through a shared canonical model, with
every translatable field declared as supported, lossy, or unsupported.

What sets it apart is the audit underneath.  Every supported vendor
pair × every field gets classified into one of eight variance classes
(`ALIGNED` / `CODEC_BUG` / `EXPECTED_LOSSY` / `EXPECTED_UNSUPPORTED` /
`METHODOLOGY_ISSUE_under` / `METHODOLOGY_ISSUE_over` / `STRUCTURAL_ONLY`
/ `TRIVIAL_EMPTY`).  The cross-mesh audit catches silent translation
errors — the kind…
