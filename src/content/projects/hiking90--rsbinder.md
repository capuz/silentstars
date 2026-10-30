---
repo: "hiking90/rsbinder"
name: "rsbinder"
description: "rsbinder provides crates implemented in pure Rust that make Binder IPC available on both Android and Linux."
readmeQualityOk: true
url: "https://github.com/hiking90/rsbinder"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["android", "binder", "rust", "linux"]
stars: 76
forks: 17
openIssues: 0
closedIssues: 44
watchers: 6
contributors: 10
recentReleases: 0
createdAt: "2022-03-19T01:38:40Z"
lastCommitAt: "2026-10-30T11:03:15Z"
lastReleaseAt: "2025-06-15T01:13:56Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 51
maintainers: ["hiking90", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7f8ba73f28d66a9669b4fb596e05c39cdd720079c64de3a78e62773034aba1e0/hiking90/rsbinder"
---

# rsbinder

**rsbinder** is a pure Rust implementation of Binder IPC for Linux, Android, and macOS.

It offers two transports behind the same AIDL interfaces:

* **Kernel binder** — the `/dev/binder` driver on Linux and Android, with the same protocol and wire format as Android `libbinder`, so rsbinder talks directly to existing Android services written in C++ or Java.
* **RPC transport** — binder over Unix, vsock, or TLS sockets, with no kernel driver and no root. Wire-compatible with Android `libbinder` RPC, verified against real `libbinder` on Android 13–16.

If you'd rather use C++ on Linux, see [binder-linux](https://github.com/hiking90/binder-linux).

## Crates

* **rsbinder** — the binder library: services, clients, parcels, async.
* **[rsbinder-aidl][rsbinder-aidl-readme]** — AIDL → Rust code generator.
* **[rsbinder-macros][rsbinder-macros-readme]** — `#[rsbinder::interface]`: declare an interface as a Rust trait, without `.aidl`.
* **[rsbinder-fmq][rsbinder-fmq-readme]** — Android's Fast Message Queue (`libfmq`), independent of binder, and the shared-memory primitives under it.
* **[rsbinder-topic][rsbinder-topic-readme]** — one publisher, many subscribers over kernel…
