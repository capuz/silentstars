---
repo: "p14c31355/fullerene"
name: "fullerene"
description: "A full-stack OS written in Rust (WIP)"
readmeQualityOk: true
url: "https://github.com/p14c31355/fullerene"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 9
forks: 3
openIssues: 31
closedIssues: 92
watchers: 2
contributors: 2
recentReleases: 2
createdAt: "2024-01-02T04:43:28Z"
lastCommitAt: "2026-08-12T05:15:04Z"
lastReleaseAt: "2026-07-27T11:46:28Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 95
undervaluedScore: 78
maintainers: ["p14c31355"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/737963427/468e42a7-d8ca-4067-9c35-c01f0f10d08d"
discussionCount: 0
---

# Fullerene

> A Rust operating system for x86_64 UEFI with a graphical desktop, a multitasking kernel, an interactive shell, and experimental native/Linux application support.

[Development history](https://github.com/p14c31355/fullerene/blob/HEAD/docs/history) · [Discord community](https://discord.gg/FfAbRaUA26)

Fullerene is a `no_std` Rust operating system under active development. It boots through UEFI, runs a kernel with process/thread scheduling and system calls, provides a Lattice-based desktop, and exposes a Nozzle shell through both the graphical terminal and the serial console.

The project is developed against QEMU and selected real hardware. Hardware and ABI support is still evolving; see the [support matrix](https://github.com/p14c31355/fullerene/blob/HEAD/docs/SUPPORT_MATRIX.md) and [hardware notes](https://github.com/p14c31355/fullerene/blob/HEAD/docs/HARDWARE.md) for the current status rather than treating every driver or syscall as production-ready.

## What is implemented

- **Boot and kernel:** Bellows loads the UEFI kernel and framebuffer configuration. Fullerene Kernel owns memory management, interrupts, process and thread lifecycle, scheduling, system calls,…
