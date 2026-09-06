---
repo: "Xanxi-Amiga/XACP-ZZ9000"
name: "XACP-ZZ9000"
description: "eXtended ARM coprocessor protocol for the ZZ9000 Amiga RTG board."
readmeQualityOk: true
url: "https://github.com/Xanxi-Amiga/XACP-ZZ9000"
language: "C"
languages: ["C"]
languagePcts: [95]
stars: 8
forks: 0
openIssues: 1
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 8
createdAt: "2026-05-22T18:50:40Z"
lastCommitAt: "2026-09-06T08:03:01Z"
lastReleaseAt: "2026-08-25T12:35:19Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 80
undervaluedScore: 50
maintainers: ["Xanxi-Amiga"]
openGraphImageUrl: "https://opengraph.githubassets.com/cb7a0a86c9f912fd86d43b9d966f296078fc745ab38e85171589b5de11c3833f/Xanxi-Amiga/XACP-ZZ9000"
---

# XACP v1.6

**eXtended ARM Coprocessor Protocol for the MNT ZZ9000 Amiga RTG board.**

XACP is an independent software platform built around the ARM Cortex-A9 processors and DDR memory of the ZZ9000.

It allows Amiga applications to offload CPU-intensive workloads to the ZZ9000 while AmigaOS remains responsible for system integration such as RTG display, input, files, GUI, AHI audio and CAMD MIDI.

The current public baseline is:

```text
Firmware:  XX19a
Protocol:  XACP v1.6
```

Firmware build numbers and XACP versions are deliberately separate.

**XX19a is the firmware build. XACP v1.6 is the protocol, ABI and shared-memory baseline implemented by that firmware.**

---

## XACP architecture

The ZZ9000 contains a Xilinx Zynq-7020 with two ARM Cortex-A9 cores and its own DDR memory.

XACP uses this hardware in two complementary ways.

### Core0 services

Persistent services can run as part of the ZZ9000 firmware and expose operations to Amiga-side applications through XACP commands and shared memory.

Examples include:

```text
MP3 / MP2 decoding
MIDI / SoundFont synthesis
shared audio buffers
firmware-side multimedia services
```

### Core1 applications

The second ARM core…
