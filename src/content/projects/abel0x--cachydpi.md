---
repo: "abel0x/cachydpi"
name: "cachydpi"
description: "You would like to use DPI (Deep Packet Inspection) on CachyOS (Arch) Linux as well, wouldn't you?"
readmeQualityOk: true
url: "https://github.com/abel0x/cachydpi"
language: "Rust"
languages: ["Rust"]
languagePcts: [86]
topics: ["anti-censorship", "arch-linux", "aur", "cachyos", "censorship", "censorship-circumvention", "deep-packet-inspection", "dpi", "dpi-bypass", "goodbyedpi"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 4
createdAt: "2026-04-06T17:46:33Z"
lastCommitAt: "2026-11-16T11:52:38Z"
lastReleaseAt: "2026-11-15T20:34:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 52
maintainers: ["abel0x"]
openGraphImageUrl: "https://opengraph.githubassets.com/da8eb03d8c52c4dba51c93664c020f6308fe4648bd61e909b4eaedd5d39158fd/abel0x/cachydpi"
---

# CachyDPI

**System-wide DPI bypass for Linux — a native [GoodbyeDPI](https://github.com/ValdikSS/GoodbyeDPI) alternative.**

- **Whole system, no proxy.** Every application is covered; nothing to configure per browser or per app.
- **Seven modes**, from passive defence alone to an adaptive mode that adds techniques per destination when it sees the DPI interfere.
- **Fails open.** If the daemon stops or falls behind, traffic passes through unmodified instead of dropping.
- **Hardened service.** A dedicated non-root user that keeps only `CAP_NET_ADMIN`; addresses are redacted from its logs and kept in its tables only as hashed tags.
- **Measured, not guessed.** 1.9.0 was checked mode by mode against 100 sites; the [results](#field-results) are below.

CachyDPI is a Rust daemon that intercepts outgoing TCP/UDP traffic through **nftables + NFQUEUE** and applies packet-manipulation techniques (fragmentation, fake-packet injection, passive-defense drops) to defeat the Deep Packet Inspection (DPI) systems that some ISPs use for censorship. It was developed and tested primarily against **Turkish ISP DPI**, but the techniques apply to any DPI that inspects HTTP `Host` headers or TLS SNI…
