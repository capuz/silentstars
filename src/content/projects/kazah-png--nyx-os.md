---
repo: "kazah-png/nyx-os"
name: "nyx-os"
description: "x86_64 higher-half kernel with multitasking, GUI compositor, TCP/IP networking, EXT2 filesystem, ELF userspace and full app suite"
readmeQualityOk: true
url: "https://github.com/kazah-png/nyx-os"
homepage: "https://kazah-png.github.io/nyx-os/"
language: "C"
languages: ["C"]
languagePcts: [98]
topics: ["assembly", "c", "kernel", "operating-system", "os", "x86"]
stars: 12
forks: 4
openIssues: 1
closedIssues: 14
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-06-20T23:04:23Z"
lastCommitAt: "2026-08-03T06:44:32Z"
lastReleaseAt: "2026-06-25T23:08:00Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 99
undervaluedScore: 64
maintainers: ["kurawi-debug", "Voliox86"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/1275602726/9ae6a1c1-6c22-4f07-8f37-023d09f800e1?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260803%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260803T064613Z&X-Amz-Expires=300&X-Amz-Signature=35aca99de95801e964297ebcb0f3031a18867134e7db2b5c7fdcaa8b435ed2e5&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTczOTg3MywibmJmIjoxNzg1NzM5NTczLCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.SRFzeTtVXWqRa6SJJ4ioulgbn3mn1mkljNP9V8AxWdY"
fundingLinks: ["GITHUB:https://github.com/kazah-png", "OPEN_COLLECTIVE:https://opencollective.com/NyxOSdev", "KO_FI:https://ko-fi.com/nyxos"]
discussionCount: 0
---

</div>

  &nbsp;
  &nbsp;
  &nbsp;
</p>

  &nbsp;
  &nbsp;
</p>

---

## About

**NyxOS** is a from-scratch x86_64 operating system written in C and x86_64 Assembly, with no external libraries. It boots via Multiboot (GRUB) into long mode with 4-level paging and full user/kernel isolation, and provides a preemptive multitasking kernel, a ring-3 POSIX-style userspace, a real TCP/IP network stack, a windowed desktop, and an in-OS C compiler that builds — and rebuilds itself — entirely inside the running system.

  <p><em>The NyxOS desktop — the Selene web browser, app icons, the Nightfall wallpaper, and the taskbar</em></p>
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
 .#o:.   :.                 Kernel:     NyxOS 6.4.54
 #:::....:                  Uptime:     00:00:11
o#::. . o.                  Resolution: 1024 x 768
o#.o:   :o                  CPU:        QEMU Virtual CPU (1)
o###o   o#                  Memory:     255 MiB
:#oo::…
