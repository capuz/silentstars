---
repo: "stephaneweg/Onyx"
name: "Onyx"
description: "Onyx operating system for Raspbery pi"
readmeQualityOk: true
url: "https://github.com/stephaneweg/Onyx"
language: "C++"
languages: ["C++"]
languagePcts: [68]
stars: 7
forks: 1
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-06-23T21:45:28Z"
lastCommitAt: "2026-10-09T10:49:45Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 54
maintainers: ["claude", "stephwegener-crypto"]
openGraphImageUrl: "https://opengraph.githubassets.com/72df3a13379d2eb9ddd1e4af77e33ea9bb421dc1ce7d0c57f2180a0ccc5c0adc/stephaneweg/Onyx"
---

# Onyx — a multi-process operating system for the Raspberry Pi 4

**Onyx** is a homemade, **preemptive, multi-process operating system** for the **Raspberry
Pi 4** (AArch64, also the Pi 400), built on [Circle](https://github.com/rsta2/circle) as its
hardware layer (our fork, `circle/`). It loads **ELF programs from the SD card** and runs each
as an **isolated process at EL0** — its own page table and ASID, calling the kernel by
**system calls** through a stable, append-only ABI (`kapi`, v74). An app that crashes is
killed; the system goes on. It runs on real hardware, with a full graphical desktop.

*Onyx* is the name of the OS, its kernel and its GUI. The repository folder is historically
named `Zircon` (a legacy name, no relation to Google's Fuchsia); some in-OS strings and
screenshots still say *Zircon* — renaming them is a separate, pending task.

## What it has

- **Kernel**: per-process address spaces (64 KB pages, ASID), apps at EL0 with every kapi
  pointer checked and per-process handles; a preemptive scheduler for the apps (100 Hz, a
  non-preemptive kernel), threads (mutexes, events, a futex, real-time priority); streams,
  pipes and stdio; a software compositor and…
