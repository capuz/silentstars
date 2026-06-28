---
repo: "IRodriguez13/IR0"
name: "IR0"
description: "Monolithic &  UNIX/MULTICS based OS kernel. Upstream repo."
url: "https://github.com/IRodriguez13/IR0"
homepage: "https://ir0-wiki.netlify.app/"
language: "C"
languages: ["C"]
languagePcts: [83]
topics: ["c", "iot", "kernel", "server", "asm", "operating-system", "operating-system-kernel", "operating-systems", "os", "osdev"]
stars: 41
forks: 2
openIssues: 10
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2025-08-02T06:07:26Z"
lastCommitAt: "2026-06-28T06:58:59Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 76
undervaluedScore: 42
maintainers: ["IRodriguez13", "mgb-dev"]
openGraphImageUrl: "https://opengraph.githubassets.com/bb76f7405925b90bc184dd23da45390452c0717be0728d2e69456c918a74d4bd/IRodriguez13/IR0"
discussionCount: 1
---

# IR0 Kernel

IR0 is a monolithic x86-64 operating system kernel under active development. The tree is organized around narrow interfaces between subsystems, Kconfig-driven feature selection, and deterministic serial diagnostics. It is a research and bring-up codebase, not a general-purpose production OS.

Approximate size of in-tree kernel sources (C, assembly, and Python build tooling), excluding vendored BusyBox and Doom upstream trees: **~61,000 lines** across **~280 files**.

For build steps, QEMU usage, and userspace bootstrap, see **[SETUP.md](SETUP.md)**.

Further subsystem notes live under **[Documentation/](Documentation/README.md)**.

## Introduction

IR0 targets **x86-64** with Multiboot boot, GRUB, ELF64 userspace binaries, and ring 0 / ring 3 separation. The default configuration builds a single linked kernel image (`kernel-x64.bin`) with optional ISO packaging.

**Goals:**

- Monolithic kernel with explicit facades (`includes/ir0/`*) between portable code and arch/drivers
- Incremental POSIX/Linux-ABI compatibility for musl-linked userspace (partial, not complete)
- Repeatable QEMU bring-up with serial logging
- VFS-backed root on MINIX with block storage via ATA…
