---
repo: "dividebysandwich/rust-dos"
name: "rust-dos"
description: "A fast DOS Emulator with comprehensive sound (SB16, GUS, MT32 etc), graphics (Hercules/CGA/EGA/VGA/SVGA/S3/Voodoo), Windows (3.x and 95) and networking support, written in Rust."
readmeQualityOk: true
url: "https://github.com/dividebysandwich/rust-dos"
homepage: "https://rust-dos.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["adlib", "dos", "dos-emulation", "dos-emulator", "dos-games", "emulator", "gravis-ultrasound", "rust-lang", "soundblaster", "486"]
stars: 5
forks: 0
openIssues: 1
closedIssues: 7
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2025-12-22T22:06:54Z"
lastCommitAt: "2026-10-01T10:10:37Z"
lastReleaseAt: "2026-09-27T22:15:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 78
maintainers: ["dividebysandwich"]
openGraphImageUrl: "https://opengraph.githubassets.com/c68cd952b57092591c9793ae2734fd3b1676273fa76bef06220bf2dac27ec93c/dividebysandwich/rust-dos"
---

<center><img width="467" height="173" alt="image" src="https://github.com/user-attachments/assets/eea40654-bd61-4251-b377-13c28ee5724f" /></center>
<br/>
<hr/>
<br/>
<center><img width="640" height="400" alt="image" src="https://rust-dos.com/assets/images/rust-dos-descent-tour.gif" /></center>

## Introduction

Rust-DOS is a DOS emulator aimed at the golden age of DOS gaming from the early days up to the dawn of Windows95. It is a work in progress and some games and programs may not run yet.

*Rust-DOS is looking for contributors!*

## Why

I wanted to learn more about the nuances of DOS emulation. Also, there's only one other DOS emulator written in Rust, and that one hasn't seen any development in 5 years and was using lots of unsafe{} code blocks.

## Features

* **CPU:** 386, 486, Pentium and Pentium MMX with FPU, protected mode, paging and
  virtual-8086 mode for DOS extenders such as DOS/4GW (Descent, Heretic),
  and a dynamic recompiler for x86-64 and ARM64 hosts (see
  [docs/dynrec.md](https://github.com/dividebysandwich/rust-dos/blob/HEAD/docs/dynrec.md))
* **DOS built in:** no DOS or BIOS images needed. XMS, EMS, a DPMI host
  for DOS extenders, upper memory…
