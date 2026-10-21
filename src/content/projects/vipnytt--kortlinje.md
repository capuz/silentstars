---
repo: "VIPnytt/Kortlinje"
name: "Kortlinje"
description: "RP2350 mod for IKEA Kortlinje LED matrix alarm clock"
readmeQualityOk: true
url: "https://github.com/VIPnytt/Kortlinje"
language: "C++"
languages: ["C++", "TypeScript"]
languagePcts: [43, 33]
topics: ["arduino", "ikea", "rp2350", "kortlinje"]
stars: 112
forks: 1
openIssues: 4
closedIssues: 15
watchers: 4
contributors: 1
recentReleases: 0
createdAt: "2026-10-01T19:22:44Z"
lastCommitAt: "2026-10-21T17:31:46Z"
status: "newborn"
tags: []
healthScore: 91
undervaluedScore: 27
maintainers: ["JanPetterMG", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7808bdd8919dd272b30252f2c0e5d4ef9c7403aea54a52dbb21140fb61650246/VIPnytt/Kortlinje"
discussionCount: 2
---

# 💡 Kortlinje

An open-source firmware port for the IKEA Kortlinje LED display alarm clock.

This project is built upon the architecture of the [Frekvens](https://github.com/VIPnytt/Frekvens) framework. With the hardware interface and communication protocols fully solved, core subsystems, graphics pipelines, and connectivity modules are being incrementally ported over to bring up the custom firmware.

> [!WARNING]
> **Developer Early Access / Experimental State:** All hardware interfaces are now solved and operational, and an initial [hardware modding guide](https://github.com/VIPnytt/Kortlinje/wiki) is available for early contributors and makers. However, the firmware remains in an active experimental stage with core features pending.

## Subsystem Status

| Subsystem | Status | Details |
| :--- | :--- | :--- |
| **Audio** | Partial | Buzzer driver verified with test beeps on alarm button; dedicated sound and alarm manager pending. |
| **Buttons** | Operational | All buttons are mapped to available functionality; behavior currently constrained pending core features. |
| **Display** | Operational | Fully solved driver with 8-step brightness control. |
| **Networking** | Work in…
