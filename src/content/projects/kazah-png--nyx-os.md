---
repo: "kazah-png/nyx-os"
name: "nyx-os"
description: "x86_64 higher-half kernel with multitasking, GUI compositor, TCP/IP networking, EXT2 filesystem, ELF userspace and full app suite"
readmeQualityOk: true
url: "https://github.com/kazah-png/nyx-os"
homepage: "https://nyxos.cc"
language: "C"
languages: ["C"]
languagePcts: [98]
topics: ["assembly", "c", "kernel", "operating-system", "os", "x86"]
stars: 24
forks: 5
openIssues: 5
closedIssues: 28
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2026-06-20T23:04:23Z"
lastCommitAt: "2026-08-20T04:07:50Z"
lastReleaseAt: "2026-06-25T23:08:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 97
undervaluedScore: 53
maintainers: ["Voliox86"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1275602726/f8dc932e-acdf-4112-aed6-c471d158ddbd"
fundingLinks: ["GITHUB:https://github.com/kazah-png", "KO_FI:https://ko-fi.com/nyxos", "OPEN_COLLECTIVE:https://opencollective.com/NyxOSdev", "CUSTOM:https://nyxos.cc/support.html"]
discussionCount: 0
---

</div>

  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
</p>

  &nbsp;
</p>

  &nbsp;
  &nbsp;
  &nbsp;
</p>

---

## About

**NyxOS** is a from-scratch x86_64 operating system written in C and x86_64 Assembly, with no external libraries. It boots via Multiboot (GRUB) into long mode with 4-level paging and full user/kernel isolation, and provides a preemptive multitasking kernel, a ring-3 POSIX-style userspace, a real TCP/IP network stack, a windowed desktop, and an in-OS C compiler that builds — and rebuilds itself — entirely inside the running system.

  <p><em>The NyxOS desktop — the terminal running <code>nyxfetch</code>, the Nightfall wallpaper, and the taskbar</em></p>
</div>

---

## See it in action

<table>
<tr>
<td width="50%" valign="top">
</td>
<td width="50%" valign="top">
</td>
</tr>
</table>

```
nyx:root$ nyxfetch

       .:::o:o#:.           nyx@nyxos
    .:oo.. :o.              -----------------
  :oo:.oo.o:                OS:         NyxOS x86_64
 .#o:.   :.                 Kernel:     NyxOS 6.4.278
 #:::....:                  Uptime:     00:00:11
o#::. . o.                  Resolution: 1024 x 768
o#.o:   :o                  CPU:        QEMU Virtual CPU (1)
o###o…
