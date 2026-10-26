---
repo: "NextgCoreLab/nextgcore"
name: "nextgcore"
description: "NextG Core epc"
readmeQualityOk: true
url: "https://github.com/NextgCoreLab/nextgcore"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 19
forks: 10
openIssues: 8
closedIssues: 551
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-12-30T21:58:03Z"
lastCommitAt: "2026-10-26T09:18:09Z"
lastReleaseAt: "2026-07-02T23:22:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 100
undervaluedScore: 62
maintainers: ["parlakisik"]
openGraphImageUrl: "https://opengraph.githubassets.com/7a9d46e12909cc004c0a225f9e6fb171cf2bc3a7ab23d8b6c31872849854e2db/NextgCoreLab/nextgcore"
---

# NextGCore - Pure Rust 5G/LTE Core Network

NextGCore is a Rust implementation of a 5G/LTE mobile core network, derived from the Open5GS project. It provides a 5G Standalone (SA) core and a 4G EPC, validated end-to-end against the companion [nextgsim](https://github.com/NextgCoreLab/nextgsim) gNB/UE and eNB/UE simulators: 5G registration, PDU session, paging, Service Request and de-registration with user-plane pings, and LTE attach with a ping through the default bearer. It is a research/interop implementation, not a production-certified core.

## Key Features

- **Rust** - every NF is Rust. The default build still compiles one C library, `aws-lc-sys` (the rustls crypto provider), so a C compiler and `cmake` are needed; the optional kernel-SCTP backend also needs `libsctp`
- **Cross-Platform** - Build for Linux (x86_64, ARM64), macOS, and more
- **Two SCTP backends** - userspace SCTP over UDP (`sctp-proto`, the default, which nextgsim speaks) and native Linux kernel SCTP for a standard RAN (`--features kernel-sctp`; the AMF selects it with `--sctp-backend kernel`, and the MME's S1-MME is kernel SCTP only)
- **Generated ASN.1 codecs** - NGAP, S1AP, NRPPa, LPP, NR RRC and LTE RRC…
