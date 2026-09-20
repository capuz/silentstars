---
repo: "mbm110/MSN-GUARD"
name: "MSN-GUARD"
description: "High-performance Rust-powered Android VPN — Full-device tunneling via SHARD (Custom Protocol), MASQUE/HTTP-3, WireGuard, WARP-on-WARP, Psiphon, and Tor."
originalDescription: "High-performance Rust-powered Android VPN — Full-device tunneling via SHARD (Custom Protocol), MASQUE/HTTP-3, WireGuard, WARP-on-WARP, Psiphon, and Tor."
descriptionLang: "fa"
readmeQualityOk: true
url: "https://github.com/mbm110/MSN-GUARD"
homepage: "https://t.me/MSN_GUARD"
language: "Kotlin"
languages: ["Kotlin", "Rust"]
languagePcts: [56, 30]
topics: ["android", "censorship-circumvention", "dpi-bypass", "http3", "iran", "kotlin", "masque", "psiphon", "quic", "rust"]
stars: 478
forks: 70
openIssues: 6
closedIssues: 8
watchers: 2
contributors: 3
recentReleases: 10
createdAt: "2026-08-06T14:32:50Z"
lastCommitAt: "2026-09-20T08:47:13Z"
lastReleaseAt: "2026-08-22T08:39:57Z"
status: "newborn"
tags: ["release_machine"]
healthScore: 81
undervaluedScore: 28
maintainers: ["mbm110", "Rafa-Ross"]
openGraphImageUrl: "https://opengraph.githubassets.com/4b3be007f5aa064ef7c0377e47b7734d46f8b7adf25ddeecf40881981a53801a/mbm110/MSN-GUARD"
---

# MSN-GUARD

**Full-device tunneling for censored networks — Five transport routes, Rust core, native Android interface**

**Persian** · [English](https://github.com/mbm110/MSN-GUARD/blob/HEAD/README.en.md)

</div>

---

## Introduction

MSN-GUARD is a native Android VPN client that routes all device traffic through five independent paths. The difference from proxy apps is that they typically only cover the browser; here the work is done at the level of Android's own `VpnService`. In other words, a TUN interface is created and every TCP, UDP, and QUIC packet — from any app installed on the phone — passes through the tunnel.

The application structure has two components. A network core written in Rust that implements the protocols itself and negotiates with the gateway, and a Kotlin layer that handles the VPN lifecycle, user interface, and platform-specific tasks. The last two routes — Psiphon and Tor — have their own cores and connect to the same TUN through local SOCKS. There is no intermediary server on our side in the middle; the phone communicates directly with the upstream gateway.

What sets this project apart from a general app is this: it was designed for Iranian networks,…
