---
repo: "nieldk/ChameleonUltra"
name: "ChameleonUltra"
description: "The new generation chameleon based on NRF52840 makes the performance of card emulation more stable. And gave the chameleon the ability to read, write, and decrypt cards."
readmeQualityOk: true
url: "https://github.com/nieldk/ChameleonUltra"
language: "C"
languages: ["C"]
languagePcts: [95]
stars: 10
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 72
recentReleases: 1
createdAt: "2026-04-03T06:11:07Z"
lastCommitAt: "2026-10-05T10:47:09Z"
lastReleaseAt: "2026-09-28T09:45:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 90
undervaluedScore: 48
maintainers: ["nieldk"]
openGraphImageUrl: "https://opengraph.githubassets.com/e52ad471149217870453bf00d7beebac583e6e6919fc6b8985118ba646c4a9e6/nieldk/ChameleonUltra"
fundingLinks: ["GITHUB:https://github.com/nieldk", "CUSTOM:https://paypal.me/nieldk"]
---

# Phreakbyte

**Phreakbyte edition** is an independent firmware and tooling distribution for the
ChameleonUltra hardware, focused on fast, frictionless flashing and iteration.

It is a standalone project with its own roadmap. It is derived from
[RfidResearchGroup/ChameleonUltra](https://github.com/RfidResearchGroup/ChameleonUltra)
and remains GPLv3. See [Credits and license](#credits-and-license).

- **Maintainer:** [nieldk](https://github.com/nieldk) at [sec1.dk](https://sec1.dk)
- **Hardware:** ChameleonUltra / ChameleonLite (unmodified)

## Why Phreakbyte

The stock firmware ships a signed Nordic Secure DFU bootloader, so every update
means `nrfutil`, signed packages, and driver handling. Phreakbyte replaces that
with a UF2 drag-and-drop bootloader. Day-to-day updates become "copy a `.uf2`
onto a USB drive." That is the whole point: shorter build-flash-test loops.

## What is different from stock

- **UF2 bootloader.** Firmware is flashed by copying a `.uf2` file onto the
  `CHAMELEON` mass-storage drive. No `nrfutil`, no signed packages, no driver
  install for routine updates.
- **Multi-image DFU flashing.** Combined images can be pushed in a single pass.
-…
