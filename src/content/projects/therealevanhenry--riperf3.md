---
repo: "therealevanhenry/riperf3"
name: "riperf3"
description: "Rust implementation of iperf3"
readmeQualityOk: true
url: "https://github.com/therealevanhenry/riperf3"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 7
forks: 2
openIssues: 15
closedIssues: 188
watchers: 1
contributors: 2
recentReleases: 9
createdAt: "2024-08-29T13:18:16Z"
lastCommitAt: "2026-07-08T05:41:54Z"
lastReleaseAt: "2026-05-30T18:28:12Z"
status: "thriving"
tags: ["solo_builder", "release_machine", "under_pressure"]
healthScore: 97
undervaluedScore: 87
maintainers: ["therealevanhenry"]
openGraphImageUrl: "https://opengraph.githubassets.com/2050ac83bf77ae2bb511e6ed90a7ecde3f1142d6e3a90a9f06b174608406b1f6/therealevanhenry/riperf3"
---

# riperf3

A ground-up, idiomatic Rust implementation of [iperf3](https://github.com/esnet/iperf), the standard network performance measurement tool — not a C port or a binding, but a faithful reimplementation in safe, async Rust.

riperf3 speaks iperf3's exact wire protocol: a riperf3 client interoperates with an iperf3 server, and vice versa, across every mode. Fidelity is the guiding principle — riperf3 matches iperf3 flag for flag and quirk for quirk rather than reinventing the interface. Where iperf3 accepts an option, riperf3 implements it to behave the same way; it does not reject, rename, or work around iperf3's semantics. The goal is a drop-in you can swap in without your scripts, dashboards, or muscle memory noticing.

## Highlights

- **Wire-protocol compatible** with iperf3. Passes interchange tests in both directions across all modes.
- **Comprehensive flag support** — 60+ flags covering TCP, UDP, parallel streams, reverse/bidir, zerocopy, GSO/GRO, RSA authentication, IPv6, MPTCP, and more.
- **Safe Rust** — `unsafe` is used only for platform-specific kernel syscalls (`setsockopt`/`getsockopt`) with no safe wrapper. No unsafe in any application logic or public API.…
