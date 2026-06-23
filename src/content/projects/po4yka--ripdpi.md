---
repo: "po4yka/RIPDPI"
name: "RIPDPI"
description: "Android tool for faster, unrestricted internet: bypass DPI on-device, connect to a VPN relay server you control, and diagnose what is blocking each connection. Powered by in-repo Rust native modules."
url: "https://github.com/po4yka/RIPDPI"
language: "Kotlin"
languages: ["Kotlin", "Rust"]
languagePcts: [56, 37]
topics: ["android", "anti-censorship", "dpi", "vpn", "proxy", "android-vpn", "deep-packet-inspection", "network-diagnostics", "network-privacy", "censorship-circumvention"]
stars: 47
forks: 4
openIssues: 1
closedIssues: 5
watchers: 3
contributors: 3
recentReleases: 10
createdAt: "2026-03-08T07:59:00Z"
lastCommitAt: "2026-06-23T06:41:21Z"
lastReleaseAt: "2026-06-04T15:47:21Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 97
undervaluedScore: 41
maintainers: ["po4yka", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/fe2a8145c1aa8405c7fd546dd21b518e3a316d514a09a2988786ee459a0e881c/po4yka/RIPDPI"
---

</p>

<h1 align="center">RIPDPI</h1>

  &nbsp;
</p>

> [!WARNING]
> **The project is in an active phase of development.** New features are being added and large refactorings are frequently performed to improve the quality of the code base. Coding agents are used heavily for this work, so **breaking changes, schema migrations, and partially broken functionality are currently possible on `main`**. If you hit a regression, please [open an issue](https://github.com/po4yka/RIPDPI/issues) — your feedback helps stabilise the project.

RIPDPI is an Android network-path diagnostics and optimization toolkit. It applies configurable packet strategies on-device, can connect to relay servers you control, and runs per-connection diagnostics to identify why each target is failing or degrading. The three capabilities work independently or in combination.

## Three pillars

### On-device packet strategies

Applies configurable packet-level transformations on-device without routing traffic to a relay server. No root is required for the core path.

Supported techniques: TCP segment splitting and disorder, fake packet injection, OOB (urgent pointer), TLS record fragmentation, fake TLS first-flight,…
