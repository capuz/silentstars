---
repo: "po4yka/RIPDPI"
name: "RIPDPI"
description: "Android tool for faster, unrestricted internet: bypass DPI on-device, connect to a VPN relay server you control, and diagnose what is blocking each connection. Powered by in-repo Rust native modules."
readmeQualityOk: true
url: "https://github.com/po4yka/RIPDPI"
language: "Kotlin"
languages: ["Kotlin", "Rust"]
languagePcts: [59, 30]
topics: ["android", "anti-censorship", "dpi", "vpn", "proxy", "android-vpn", "deep-packet-inspection", "network-diagnostics", "network-privacy", "censorship-circumvention"]
stars: 85
forks: 4
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2026-03-08T07:59:00Z"
lastCommitAt: "2026-11-03T12:47:38Z"
lastReleaseAt: "2026-06-04T15:47:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 32
maintainers: ["po4yka", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/dffd3898596a0b81251d4778e7c0684fffb5e61928d77a203cf7359493ac81bd/po4yka/RIPDPI"
---

&nbsp;

> [!WARNING]
> **The project is in an active phase of development.** New features are being added and large refactorings are frequently performed to improve the quality of the code base. Coding agents are used heavily for this work, so **breaking changes, schema migrations, and partially broken functionality are currently possible on `main`**. If you hit a regression, please [open an issue](https://github.com/po4yka/RIPDPI/issues) — your feedback helps stabilise the project.

RIPDPI is an Android network-path diagnostics and optimization toolkit. It measures why a target is failing or degrading, applies configurable packet strategies on-device, and can connect through relay servers you control. Each capability works independently or in combination.

## Screenshots

Instead of a single global policy, RIPDPI classifies each target and network separately, remembers validated outcomes, and makes its failure verdicts visible. Start locally; introduce a relay only when the direct path cannot be recovered.

## Quick start

Prepare the [build prerequisites](#build-requirements), including the real libXray AAR toolchain, before running these commands.

Build the Android debug APK…
