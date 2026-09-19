---
repo: "milescoviello/OS-DEV"
name: "OS-DEV"
description: "A from-scratch x86_64 OS: kernel, TLS 1.3, a JS engine, and a sandboxed web browser. ~80k lines of from-scratch C (plus DOOM and Quake ported as apps)."
readmeQualityOk: true
url: "https://github.com/milescoviello/OS-DEV"
language: "C"
languages: ["C"]
languagePcts: [93]
topics: ["assembly", "c", "doom", "filesystem", "from-scratch", "hobby-os", "javascript-engine", "kernel", "multiboot", "operating-system"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 5
createdAt: "2026-06-14T00:55:37Z"
lastCommitAt: "2026-09-19T01:37:08Z"
lastReleaseAt: "2026-09-11T02:41:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 56
maintainers: ["milescoviello"]
openGraphImageUrl: "https://opengraph.githubassets.com/4a9b75b6bbed711a87ed773de5755ca783a149f1f89e2dd70afb7251ae61e1da/milescoviello/OS-DEV"
---

# OS-DEV

**A from-scratch x86_64 operating system** — kernel, TLS 1.3, a JavaScript
engine, and a sandboxed web browser — written in C and a little assembly.
Developed under QEMU; boots on real hardware through GRUB.

</div>

## Status

A mature hobby OS that goes from power-on to a graphical, mouse- and
keyboard-driven **desktop** and hosts real **ring-3 programs as windows**. It is
developed and run under QEMU; it also boots via GRUB / Multiboot2 (see the honest
caveats below).

### What's genuinely here — from scratch

- **Kernel:** x86_64 long mode; physical + virtual memory managers; a kernel
  heap; **preemptive** multitasking with a CFS-style weighted scheduler,
  sleep/wake, and **fork + copy-on-write**; per-process address-space isolation;
  ring-3 userspace over a ~280-call syscall layer; an ELF loader (incl. PIE /
  load-time dynamic relocation); and **SMP bring-up** (LAPIC + the ACPI MADT;
  every core trampolines up into long mode).
- **Storage + filesystems:** a read-write **FAT32** driver over ATA / AHCI /
  NVMe / virtio-blk, now with a from-scratch **write-ahead journal** so a file /
  directory create is **crash-atomic** (ext3-style ordered-mode metadata…
