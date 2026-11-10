---
repo: "topkernel/Rux"
name: "Rux"
description: "Yet another Linux-like kernel in Rust—fully AI-generated.Full POSIX & Linux ABI compatible: run any Linux binary directly, no recompile.Not reinventing the wheel, just a fun experiment to test AI & Rust."
readmeQualityOk: true
url: "https://github.com/topkernel/Rux"
language: "Rust"
languages: ["Rust"]
languagePcts: [89]
stars: 18
forks: 3
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-02-02T02:42:42Z"
lastCommitAt: "2026-11-10T11:37:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 43
maintainers: ["topkernel"]
openGraphImageUrl: "https://opengraph.githubassets.com/2166fb8f5356f19a09fddd195ecb0028217970bddfe983bde18b7fdc593159b6/topkernel/Rux"
---

# Rux

**A Linux-compatible kernel, ~344,000 lines of Rust — written entirely by AI.**

Unmodified Ubuntu 22.04 boots to a GNOME Shell desktop.
Unmodified OpenHarmony boots its full 135+ services.
No userspace patches, rebuilds, or configuration changes.

---

## Overview

- **Developed entirely by AI agents.** All code — scheduler, memory
  management, ext4, binder, the network stack, the verification
  harnesses — was written by AI agents under human direction. Humans
  set objectives, review changes, and hold merge authority; agents
  implement, test, and debug.
- **Linux ABI compatibility.** 345+ system calls with semantics
  matched against the reference implementation; ELF/auxv, futex,
  SysV and POSIX IPC, binder, on-disk ext4, and the `/proc`,
  `/sysfs`, `/debugfs`, tracefs layouts, down to the `uname` strings
  glibc's loader keys on. LTP: **1,005 / 1,869**.
- **The ABI is the contract; the internals are a clean-room design.**
  Where an internal design differs from the mainstream, the
  divergence and its compatibility evidence are recorded in the
  [design-divergence register](https://github.com/topkernel/Rux/blob/HEAD/docs/architecture/design-divergences.md)
  (18…
