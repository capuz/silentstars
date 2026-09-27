---
repo: "xssl9/dunit-os"
name: "dunit-os"
description: "Dunit OS (Green Tea) - Microkernel OS with GUI and Terminal modes"
readmeQualityOk: true
url: "https://github.com/xssl9/dunit-os"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2026-05-05T14:18:54Z"
lastCommitAt: "2026-09-27T09:28:09Z"
lastReleaseAt: "2026-05-25T08:50:54Z"
status: "thriving"
tags: []
healthScore: 75
undervaluedScore: 43
maintainers: ["xssl9", "coreformdev"]
openGraphImageUrl: "https://opengraph.githubassets.com/79316283c87c29aa0d06e94a495917e63320901ca83dd0640163b386ed73a571/xssl9/dunit-os"
---

</p>

# Dunit OS

Dunit OS is a small x86_64 hobby operating system built around a Rust kernel,
a C/NASM hardware layer, a Limine boot flow, and a growing userspace runtime.

It is not a polished desktop OS yet. The current system is a terminal-first OS
prototype with real userspace ELF execution, a memory-backed filesystem,
syscalls, process records, recoverable userspace faults, and cooperative
userspace child scheduling.

## Current State

What works today:

- Limine boot with Terminal Mode first and GUI Mode still available.
- HAL in C/NASM: GDT, IDT, interrupt entry, syscall entry, context switch stubs,
  port I/O, and low-level boot handoff.
- Rust `no_std` kernel with PMM, VMM, heap, address-space setup, and basic fault
  recovery for userspace.
- Framebuffer-backed kernel terminal with command parsing, history, autocomplete,
  and honest system commands.
- VFS with MemFS as the root filesystem.
- `/app` userspace ELF binaries embedded into MemFS.
- `/assets` mirrors the repository asset tree, including images, icons, GUI files,
  wallpapers, fonts, and boot art.
- Userspace syscall ABI for read/write/open/close, framebuffer drawing,
  spawn/wait, pid, cwd/chdir, sleep,…
