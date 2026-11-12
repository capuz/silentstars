---
repo: "ParsaAzima/HakuKernel"
name: "HakuKernel"
description: "An independent operating system built from scratch, powered by HakuKernel. Independent by Design."
readmeQualityOk: true
url: "https://github.com/ParsaAzima/HakuKernel"
language: "C"
languages: ["C"]
languagePcts: [78]
topics: ["assembly", "bootloader", "c", "kernel", "kernel-source", "nasm", "nasm-assembler", "nasm-assembly", "nasm-language", "opreating-system"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-10-12T14:33:30Z"
lastCommitAt: "2026-11-12T11:38:26Z"
lastReleaseAt: "2026-10-20T16:26:56Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 53
maintainers: ["ParsaAzima", "Dev-vesper"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1415721260/7a3485dd-b80d-4b29-bb01-478f1fd98832"
---

Haku v0.2.0 — a tiny x86 operating system in C

A NASM bootloader loads a C kernel and switches the CPU to 32-bit protected
mode. The kernel sets up paging, interrupts, and a GDT/TSS, then runs ELF32
programs from a FAT12 volume on an ATA disk at ring 3 behind an i386-style
syscall gate. There is no C runtime inside the kernel and no hosted library
under it: MSVC (or clang-cl) and NASM produce freestanding objects that
`link.exe`/`lld-link` combine into a flat boot image, and QEMU boots it.

The practical target is a small, honest POSIX-*inspired* subset that a real
static Linux binary can use. The strongest evidence for that is the CI job
that boots static musl programs, and the `python build.py shell` target, which
brings up a 1 MiB static **busybox** as PID 1 and lands in `ash` with job
control and pipelines working.

## Status

- **Boot** — BIOS floppy image, two-stage 16-bit loader (Linux-style A20, GDT,
  protected mode), E820 map, 448 KiB kernel window.
- **Memory** — paging with a supervisor direct map, E820-sized frame allocator
  and bitmaps, 4 KiB pages, `kmalloc`/`kfree` heap, copy-on-write `fork`, W^X
  enforced by the loader on i386 without PAE.
- **Processes** — 100…
