---
repo: "nyxos-dev/nyx-os"
name: "nyx-os"
description: "x86_64 higher-half kernel with multitasking, GUI compositor, TCP/IP networking, EXT2 filesystem, ELF userspace and full app suite"
readmeQualityOk: true
url: "https://github.com/nyxos-dev/nyx-os"
homepage: "https://nyxos.cc"
language: "C"
languages: ["C"]
languagePcts: [92]
topics: ["assembly", "c", "kernel", "operating-system", "os", "x86", "bare-metal", "hobby-os", "nyxos", "osdev"]
stars: 35
forks: 7
openIssues: 2
closedIssues: 46
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-06-20T23:04:23Z"
lastCommitAt: "2026-10-25T08:32:36Z"
lastReleaseAt: "2026-06-25T23:08:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 96
undervaluedScore: 44
maintainers: ["Voliox86", "kurawi-debug"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1275602726/f8dc932e-acdf-4112-aed6-c471d158ddbd"
fundingLinks: ["GITHUB:https://github.com/kazah-png", "KO_FI:https://ko-fi.com/nyxos", "LIBERAPAY:https://liberapay.com/kazah", "OPEN_COLLECTIVE:https://opencollective.com/NyxOSdev", "CUSTOM:https://nyxos.cc/support.html", "CUSTOM:https://nyxosdev.itch.io/nyxos"]
discussionCount: 1
---

&nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;

  &nbsp;

  &nbsp;
  &nbsp;
  &nbsp;

---

## About

**NyxOS** is a from-scratch x86_64 operating system written in C and x86_64 Assembly, with no external libraries. It boots via Multiboot (GRUB) into long mode with 4-level paging and full user/kernel isolation, and provides a preemptive multitasking kernel, a ring-3 POSIX-style userspace, a real TCP/IP network stack, a windowed desktop, and an in-OS C compiler that builds — and rebuilds itself — entirely inside the running system.

Development targets a dependable daily workspace in a documented VM first, then
qualified physical hardware. The [daily-use roadmap](https://github.com/nyxos-dev/nyx-os/blob/HEAD/docs/DAILY_USE.md) defines
workflow, data-integrity, language and desktop-personalization acceptance criteria,
with the current limits kept separate from planned work.

---

## See it in action

```
nyx:root$ nyxfetch

       .:::o:o#:.            nyx@nyxos
    .:oo.. :o.               ---------
  :oo:.oo.o:                 OS:         NyxOS x86_64
 .#o:.   :.                  Host:       QEMU Standard PC
 #:::....:                   Kernel:     NyxOS 6.5.248 (GUI Suite)
o#::. . o.…
