---
repo: "pablof7z/nostr-multi-platform"
name: "nostr-multi-platform"
description: "NostrMultiPlatform"
url: "https://github.com/pablof7z/nostr-multi-platform"
homepage: "https://chirp-sable-alpha.vercel.app"
language: "Rust"
languages: ["Rust"]
languagePcts: [90]
stars: 5
forks: 0
openIssues: 46
closedIssues: 726
watchers: 0
contributors: 2
recentReleases: 6
createdAt: "2026-05-17T12:43:11Z"
lastCommitAt: "2026-07-04T06:11:45Z"
lastReleaseAt: "2026-06-27T15:45:54Z"
status: "thriving"
tags: ["release_machine", "under_pressure"]
healthScore: 99
undervaluedScore: 67
maintainers: ["pablof7z"]
openGraphImageUrl: "https://opengraph.githubassets.com/422f34db2f43ec7d2f9ddcd199c0675f33119d24be3d2e1a2daa89e5104ede18/pablof7z/nostr-multi-platform"
---

# NMP — Nostr Multi-Platform

A Rust framework for building Nostr apps. One Rust core, native shells for v1
(iOS SwiftUI, Android Compose, desktop egui), and a browser/wasm runtime whose
per-NIP support is tracked in the v1 support matrix. The core owns everything
that touches the protocol — relays, state, subscriptions, signing, decryption,
replaceable-event resolution, time. The shells render. That's it.

Most cross-platform Nostr clients fragment into incompatible bugs because protocol logic gets reimplemented per platform. Three times. Badly. NMP writes it once, tests it once, and ships it everywhere. The division between protocol and presentation is absolute. That's not a guideline. That's the framework.

## The core idea

You don't pick relays per operation. NIP-65 outbox routing is on by default — posts go where they should, reads come from where they live. You don't handle stale replaceable events; the store will not let you hold a stale kind:0, kind:3, or parameterized-replaceable version. You don't write subscription cleanup; when a view goes away, so do its subscriptions. For the NIP-17 private-message paths that are enabled, plaintext stays in the Rust kernel; Swift,…
