---
repo: "zaxified/zig-libs"
name: "zig-libs"
description: "Foundational Zig modules — pure-Zig, no C/libc/external deps. Compression (zstd, Brotli), protocols (HTTP/1.1+2, SSH, TLS, ACME, DNS, MQTT, CoAP, SNMPv3, WireGuard), crypto (post-quantum, BLS12-381, ZK, FHE), Bitcoin/Lightning, industrial OT (Modbus, DNP3, IEC 61850, OPC UA), Linux netlink/eBPF/XDP."
readmeQualityOk: true
url: "https://github.com/zaxified/zig-libs"
language: "Zig"
languages: ["Zig"]
languagePcts: [96]
topics: ["acme", "dns", "http2", "mqtt", "pure-zig", "wireguard", "zero-dependency", "zig", "ziglang", "bitcoin"]
stars: 11
forks: 0
openIssues: 1
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 8
createdAt: "2026-07-10T05:07:23Z"
lastCommitAt: "2026-11-18T11:53:42Z"
lastReleaseAt: "2026-11-02T14:23:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 53
maintainers: ["zaxified"]
openGraphImageUrl: "https://opengraph.githubassets.com/981807db95071aac3215f16e9c070e329bcb48943a4704c232d6b6c12b3b5b52/zaxified/zig-libs"
---

# zig-libs

A curated collection of **foundational Zig modules** — performance-minded, universal where
possible, and built against something that already exists: a published specification, a set of
released test vectors, or a proven implementation in another language, rather than invented from
scratch. Which of those a module was built against is stated in its own README's `Provenance:`
line, and they are not interchangeable — many modules here are clean-room from a spec and studied
no third-party implementation at all.

Not a dumping ground: ship **solid, not many**. Every member is a foundational,
cross-project-reusable capability — a production-grade implementation of a protocol/format/algorithm,
or a fill for a genuine gap in the Zig ecosystem. zig-libs is the canonical home for these; the
authors' other projects depend on it, not the reverse.

**Status:** 265 modules (Zig 0.17.1, tests green in `ReleaseSafe` and `ReleaseFast`)
· **MIT** (see `LICENSE`). `NOTICE` answers one question —
whether consuming zig-libs obliges you to anything beyond MIT — and lists the modules that
carry their own attribution; it does not catalogue provenance.
