---
repo: "SegMind25/SegOS"
name: "SegOS"
description: "Best Distro Lightweight For Gaming For Low End PC's "
readmeQualityOk: true
url: "https://github.com/SegMind25/SegOS"
homepage: "https://seglinux.vercel.app"
language: "Rust"
languages: ["Rust"]
languagePcts: [87]
topics: ["archlinux", "artix-linux", "distro", "gaming", "linux", "rust", "steam", "windows", "open-source", "operating-system"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-12T11:31:45Z"
lastCommitAt: "2026-11-14T10:47:18Z"
lastReleaseAt: "2026-10-13T08:27:11Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 90
undervaluedScore: 27
maintainers: ["claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/becf5e28f51ba32836e46498dda2d1d73f95ada4ff03de1639f5ce4bb3e1338c/SegMind25/SegOS"
---

# SegOS

An operating system written from scratch in Rust, aiming to run **unmodified
Linux applications** (and, through Wine/Proton, Windows ones) by implementing
the Linux system call interface in a new kernel.

Status: **Phase 1 (multitasking) done**. The kernel boots on UEFI and BIOS,
prints to the serial port and the screen, handles CPU exceptions, manages
physical memory, page tables and a kernel heap, starts every CPU, and runs
kernel threads on all of them with a preemptive scheduler. It does not run
programs yet; that is Phase 2.

The whole roadmap, from here to Steam: [docs/plan.md](https://github.com/SegMind25/SegOS/blob/HEAD/docs/plan.md).

*The kernel today, booted in QEMU: all 4 CPUs started, each timer ticking
100 times a second, threads scheduled across them.*

## How SegOS works

### The idea: speak Linux, run everything

Steam, Firefox, Discord, Blender and Wine are already built as Linux
programs. Nobody will rewrite them for a new OS, so SegOS does the opposite:
its kernel answers the **same system calls as Linux** (same numbers, same
data structures, same error codes) and provides the same `/proc`, `/sys` and
`/dev` files. A program cannot tell it is not on…
