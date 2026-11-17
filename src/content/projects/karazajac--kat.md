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
stars: 117
forks: 11
openIssues: 0
closedIssues: 3
watchers: 5
contributors: 3
recentReleases: 2
createdAt: "2026-02-14T23:59:12Z"
lastCommitAt: "2026-11-17T14:35:41Z"
lastReleaseAt: "2026-11-04T22:08:22Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 71
undervaluedScore: 37
maintainers: ["KaraZajac"]
openGraphImageUrl: "https://opengraph.githubassets.com/543d7d9785e39b1c2ec48cfc13f43d9ea4f624d06f2c0cf726994807199356c6/KaraZajac/KAT"
---

# KAT — Keyfob Analysis Toolkit

KAT captures, decodes and retransmits car key fob and garage door, gate and barrier remote signals from a terminal. It works with a **HackRF One** (receive and transmit), an **RTL-SDR** dongle (receive only) and a **Flipper Zero** on USB (receive and transmit through its console), several at once, each on its own frequency, and decodes IQ recordings and Flipper Zero `.sub` files with no radio attached. It is written in Rust, with a [ratatui](https://ratatui.rs) interface.

Its 157 protocol decoders follow [ProtoPirate](https://protopirate.net/ProtoPirate/ProtoPirate), [Flipper-ARF](https://github.com/D4C1-Labs/Flipper-ARF), [doctor-firmware](https://github.com/thedoctorz/doctor-firmware), [Momentum](https://github.com/Next-Flip/Momentum-Firmware), [RogueMaster](https://github.com/RogueMaster/flipperzero-firmware-wPlugins) and FoxFW, with receive-only decoders from [rtl_433](https://github.com/merbanan/rtl_433) for remotes no Flipper firmware reads, and each one is checked against the reference C code compiled on a PC.

**Website: [kat.karazajac.io](https://kat.karazajac.io)**, with a page for every protocol.

---

## Security and legal disclaimer…
