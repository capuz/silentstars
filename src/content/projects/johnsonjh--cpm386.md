---
repo: "johnsonjh/cpm386"
name: "cpm386"
description: "CP/M-386: CP/M for 386 protected mode, derived from CP/M-68K"
readmeQualityOk: true
url: "https://github.com/johnsonjh/cpm386"
homepage: "https://github.com/johnsonjh/cpm386"
language: "C"
languages: ["C"]
languagePcts: [91]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-06-26T04:20:27Z"
lastCommitAt: "2026-07-22T06:12:41Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 48
maintainers: ["johnsonjh"]
openGraphImageUrl: "https://opengraph.githubassets.com/b43582b6504920d68b1c78d0ea9e026ddf3ebd2bf5182bdf44d59c39a8196aff/johnsonjh/cpm386"
---

# CP/M-386

**CP/M‑386** is **CP/M** for 386 protected mode, derived from **CP/M‑68K**.

---

- [Overview](#overview)
- [Hardware support](#hardware-support)
- [CP/M compatibility](#cpm-compatibility)
- [Screenshots](#screenshots)
- [Build requirements](#build-requirements)
- [Compilation](#compilation)
- [Build output](#build-output)
- [QEMU testing](#qemu-testing)
- [QEMU notes](#qemu-notes)
- [Included utilities](#included-utilities)
- [Future plans](#future-plans)
- [Code statistics](#code-statistics)
- [Mirrors](#mirrors)
- [License](#license)

---

## Overview

**CP/M‑386 is currently in the** ***very*** **early development stages.**

* Full 32‑bit [protected mode](https://en.wikipedia.org/wiki/Protected_mode)
  implementation with
  [Ring‑3 TPA](https://en.wikipedia.org/wiki/Protection_ring).
* Bootable via 3.5" 1.44MB floppy disk
  [MBR](https://en.wikipedia.org/wiki/Master_boot_record) or GRUB
  [Multiboot](https://en.wikipedia.org/wiki/Multiboot_specification) kernel.
* Supports [VGA text](https://en.wikipedia.org/wiki/VGA_text_mode) (`0xB8000`)
  and/or [COM1 serial](https://en.wikipedia.org/wiki/Serial_port)
  (9600/N/8/1, `0x3F8`) consoles.
* **No floppy/hard…
