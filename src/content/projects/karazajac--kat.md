---
repo: "KaraZajac/KAT"
name: "KAT"
description: "Keyfob Analysis Toolkit"
readmeQualityOk: true
url: "https://github.com/KaraZajac/KAT"
homepage: "https://kat.karazajac.io/"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 105
forks: 11
openIssues: 0
closedIssues: 3
watchers: 5
contributors: 3
recentReleases: 2
createdAt: "2026-02-14T23:59:12Z"
lastCommitAt: "2026-11-09T00:54:29Z"
lastReleaseAt: "2026-11-04T22:08:22Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 68
undervaluedScore: 34
maintainers: ["KaraZajac"]
openGraphImageUrl: "https://opengraph.githubassets.com/2c401d9ac5b57cd1eb1b192b804fb829f1a362dfb872402873f63dae00f0a959/KaraZajac/KAT"
---

# KAT — Keyfob Analysis Toolkit

KAT captures, decodes and retransmits car key fob and garage door, gate and barrier remote signals from a terminal. It works with a **HackRF One** (receive and transmit), an **RTL-SDR** dongle (receive only) or a **Flipper Zero** on USB (receive and transmit through its console), and decodes IQ recordings and Flipper Zero `.sub` files with no radio attached. It is written in Rust, with a [ratatui](https://ratatui.rs) interface.

Its 149 protocol decoders follow [ProtoPirate](https://protopirate.net/ProtoPirate/ProtoPirate), [Flipper-ARF](https://github.com/D4C1-Labs/Flipper-ARF), [doctor-firmware](https://github.com/thedoctorz/doctor-firmware), [Momentum](https://github.com/Next-Flip/Momentum-Firmware), [RogueMaster](https://github.com/RogueMaster/flipperzero-firmware-wPlugins) and FoxFW, with receive-only decoders from [rtl_433](https://github.com/merbanan/rtl_433) for remotes no Flipper firmware reads, and each one is checked against the reference C code compiled on a PC.

**Website: [kat.karazajac.io](https://kat.karazajac.io)**, with a page for every protocol.

---

## Security and legal disclaimer

**Use KAT only on systems and vehicles you…
