---
repo: "PhotonMC/photon-client"
name: "photon-client"
description: "A high-performance Minecraft client written from scratch in Rust, focused on performance, extensibility, and built-in modding and shader support."
readmeQualityOk: true
url: "https://github.com/PhotonMC/photon-client"
language: "Rust"
languages: ["Rust"]
languagePcts: [87]
stars: 6
forks: 1
openIssues: 50
closedIssues: 86
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-09-09T05:09:27Z"
lastCommitAt: "2026-10-26T20:58:49Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 93
undervaluedScore: 51
maintainers: ["BatuhanAksoyy", "Haume0"]
openGraphImageUrl: "https://opengraph.githubassets.com/5a2f3a645f6dee19f6814ece4b654c029fb0dcd8852f3ebaca1b01f3ef565219/PhotonMC/photon-client"
---

# Photon

**A from-scratch Minecraft: Java Edition client in Rust: the same game, on a faster engine.**

-3c8527)

[Progress](#progress) · [Priorities](#priorities) · [Build and run](#build-and-run) · [How parity works](#how-parity-works) · [Docs](https://github.com/PhotonMC/photon-client/blob/HEAD/docs/README.md)

---

Photon reimplements the Java client's behaviour exactly: packets, physics, timing, camera, animation, UI and sound. Every behaviour is proven against the real Java client by a headless oracle, never by eye. Internally it is a new engine: Vulkan rendering, multi-threaded meshing and a Rust codebase with a strict quality gate.

Photon is one client. Out of the box it behaves as the Java client does; planned extras (mods, joining servers of other versions, social features) are opt-in and change nothing when off ([ADR 0010](https://github.com/PhotonMC/photon-client/blob/HEAD/docs/adr/0010-one-product.md)).

> Photon is **not affiliated with, endorsed by, or connected to Mojang or Microsoft**. "Minecraft" is a trademark of Mojang Synergies AB.

## At a glance

| | |
| --- | --- |
| **Reference** | Java Edition 26.2, protocol 776 |
| **Parity cases** | 4,600+ scenarios…
