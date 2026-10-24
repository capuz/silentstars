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
openIssues: 91
closedIssues: 352
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-12-30T21:58:03Z"
lastCommitAt: "2026-10-24T00:15:41Z"
lastReleaseAt: "2026-07-02T23:22:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 94
undervaluedScore: 59
maintainers: ["parlakisik"]
openGraphImageUrl: "https://opengraph.githubassets.com/50e0ce6061d7c01f729391413f4b7114523678ac8f6169611285ff57886e6ae1/NextgCoreLab/nextgcore"
---

# NextGCore - Pure Rust 5G/LTE Core Network

NextGCore is a Rust implementation of a 5G/LTE mobile core network, derived from the Open5GS project. It provides a 5G Standalone (SA) core and a 4G EPC, validated end-to-end against the companion [nextgsim](https://github.com/NextgCoreLab/nextgsim) gNB/UE and eNB/UE simulators: 5G registration, PDU session, paging, Service Request and de-registration with user-plane pings, and LTE attach with a ping through the default bearer. It is a research/interop implementation, not a production-certified core.

## Key Features

- **Rust** - every NF is Rust. The default build still compiles one C library, `aws-lc-sys` (the rustls crypto provider), so a C compiler and `cmake` are needed; the optional kernel-SCTP backend also needs `libsctp`
- **Cross-Platform** - Build for Linux (x86_64, ARM64), macOS, and more
- **Two SCTP backends** - userspace SCTP over UDP (`sctp-proto`, the default, which nextgsim speaks) and native Linux kernel SCTP for a standard RAN (`--features kernel-sctp`; the AMF selects it with `--sctp-backend kernel`, and the MME's S1-MME is kernel SCTP only)
- **Generated ASN.1 codecs** - NGAP, S1AP, NRPPa, LPP, NR RRC and LTE RRC…
