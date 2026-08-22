---
repo: "the-ak-foundation/mcu-bare-metal"
name: "mcu-bare-metal"
description: "Learning bare-metal programming on ARM Cortex-M microcontrollers from scratch."
readmeQualityOk: true
url: "https://github.com/the-ak-foundation/mcu-bare-metal"
homepage: "https://epcb.vn/products/ak-embedded-base-kit-lap-trinh-nhung-vi-dieu-khien-mcu"
language: "C"
languages: ["C"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-04-08T03:54:21Z"
lastCommitAt: "2026-08-22T04:06:03Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 76
undervaluedScore: 51
maintainers: ["caotrongphuoc"]
openGraphImageUrl: "https://opengraph.githubassets.com/38a8cffdccb4b3e0d245f0fb15fa55fa879be015f3d6560eb20b077cc6372236/the-ak-foundation/mcu-bare-metal"
---

</div>

# Embedded MCU Bare Metal

Bare-metal microcontroller examples in three topics: compiler and linker, ARM Cortex-M core, and driver patterns (raw registers, CMSIS, HAL).

Every example blinks the same LED. Each one changes exactly one technique, so the diff between two examples in the same topic shows the new concept.

## Demo

  <video src="https://github.com/user-attachments/assets/39f845b1-70a8-48ca-bb93-bfc019553a98" controls width="480"></video>
</div>

</div>

The result is the same across every example - this single clip shows what "it works" looks like for every example. Each example's own README focuses on the code change, not the video.

## Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│ APPLICATION LAYER                                                   │
│                                                                     │
│ main() · interrupt handlers · helper routines                       │
└─────────────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────────────┐
│ STARTUP                                                             │
│…
