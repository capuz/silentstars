---
repo: "AndreZiviani/odi-oss"
name: "odi-oss"
description: "Open firmware for the ODI DFP-34X-2C2 GPON SFP stick: Linux 6.18, own drivers and userland"
readmeQualityOk: true
url: "https://github.com/AndreZiviani/odi-oss"
language: "C"
languages: ["C", "Shell"]
languagePcts: [69, 21]
stars: 13
forks: 1
openIssues: 2
closedIssues: 2
watchers: 3
contributors: 2
recentReleases: 10
createdAt: "2026-09-25T07:07:43Z"
lastCommitAt: "2026-10-13T10:57:50Z"
lastReleaseAt: "2026-09-29T11:59:15Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 85
undervaluedScore: 47
maintainers: ["AndreZiviani", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ca8214077fb1921c29fc9496ace89cecdbf7a8db76b707563c9ad65c901ef6b3/AndreZiviani/odi-oss"
---

# odi-oss

Open firmware for the **ODI DFP-34X-2C2** GPON SFP ONU stick (Realtek
RTL9602C SoC, Lexra RLX5281 CPU, 32 MB RAM, 8 MB NOR flash), built from
source: a current mainline Linux kernel, our own userland, and our own
toolchain.

> [!WARNING]
> **For the ODI DFP-34X-2C2 only** (see "Supported hardware").
>
> **This repository was written with AI assistance ("vibecoded") and
> validated on real hardware, with no warranty of any kind.** Flashing a
> stick with the wrong image, or interrupting a flash, can brick the stick
> or take down the fiber (GPON) service it is carrying. Read "Safety model"
> below and "Quick start" before you flash anything, and never flash a
> stick that is your only connection to the Internet without a way back.

## Supported hardware

**Only the ODI DFP-34X-2C2.** It is the one device this firmware was written
for and the only one it has been tested on. The image drives the board
directly (GPIO numbers, I2C wiring of the optics, flash layout, switch and
PON registers), so on any other stick it will at best not boot and at worst
leave it unreachable.

- **DFP-34X-2C3:** as far as we know it differs from the 2C2 only in the
  polish of the fiber…
