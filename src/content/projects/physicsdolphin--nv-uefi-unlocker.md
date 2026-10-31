---
repo: "physicsdolphin/nv-uefi-unlocker"
name: "nv-uefi-unlocker"
description: "UEFI pre-driver NVIDIA GPU unlocker for Windows Linux Hackintosh and all EFI-bootable system (Rust): SEC2 scrubber -> FWSEC/WPR2 -> signed Booter -> V67 four-write payload, read-back verified. Verified on most RTX 20 30 40 Series."
originalDescription: "UEFI pre-driver NVIDIA GPU unlocker for Windows Linux Hackintosh and all EFI-bootable system (Rust): SEC2 scrubber -> FWSEC/WPR2 -> signed Booter -> V67 four-write payload, read-back verified. Verified on most RTX 20 30 40 Series."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/physicsdolphin/nv-uefi-unlocker"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
stars: 426
forks: 39
openIssues: 22
closedIssues: 37
watchers: 2
contributors: 9
recentReleases: 10
createdAt: "2026-10-26T06:22:24Z"
lastCommitAt: "2026-10-31T15:59:15Z"
lastReleaseAt: "2026-10-28T05:49:46Z"
status: "newborn"
tags: ["needs_contributors", "release_machine"]
healthScore: 88
undervaluedScore: 26
maintainers: ["physicsdolphin", "Catnip202X", "steppergg"]
openGraphImageUrl: "https://opengraph.githubassets.com/f7412e43656947f12987671d8d60979867aae5cbef0ecf95a43db886b31c0c62/physicsdolphin/nv-uefi-unlocker"
discussionCount: 2
---

# nv-uefi-unlocker

[Chinese](https://github.com/physicsdolphin/nv-uefi-unlocker/blob/HEAD/README.md) | [English](https://github.com/physicsdolphin/nv-uefi-unlocker/blob/HEAD/README.en.md)

**A UEFI pre-driver NVIDIA GPU unlocker compatible with the GTX 16, RTX 20, RTX 30, and RTX 40 series.**

Removes the Tensor compute performance limit on NVIDIA graphics cards. Boot from a USB drive; after unlocking, it automatically enters Windows, Linux, or any other operating system. No VBIOS flashing is required, and powering off restores the card to its original state.

[Watch the project promo video ↗](https://www.bilibili.com/video/BV1d6xN66ECM/)

## Compatibility at a glance

| Series | Support status |
| --- | --- |
| GTX 16 · Turing | Theoretically compatible; real-hardware testing welcome |
| RTX 20 · Turing | Fully compatible; some models have known issues, see the full matrix |
| RTX 30 · Ampere GA10x | Fully compatible, including laptops and desktops |
| RTX 40 · Ada | Fully compatible, including laptops and desktops |
| Pascal and older / GA100 / RTX 50 | Not supported |

[Full compatibility matrix and per-card test…
