---
repo: "bboe/BBoeOS"
name: "BBoeOS"
description: "A minimal x86 operating system: real-mode bootloader, paged 32-bit protected-mode kernel, ring-3 userland, shell, VFS (bbfs + ext2), NE2000 networking, self-hosted assembler, and a custom C subset compiler."
readmeQualityOk: true
url: "https://github.com/bboe/BBoeOS"
homepage: "https://bboeos.bryceboe.com/"
language: "Python"
languages: ["Python"]
languagePcts: [65]
topics: ["hobby-os", "c-compiler", "assembly", "bootloader", "c", "doom", "educational", "ext2", "kernel", "nasm"]
stars: 7
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2012-08-22T20:27:14Z"
lastCommitAt: "2026-08-24T04:20:53Z"
lastReleaseAt: "2026-05-18T05:44:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 88
undervaluedScore: 76
maintainers: ["bboe", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/5514869/c54e1a80-c9dc-4b4e-8c29-7fc32fda50f6"
fundingLinks: ["GITHUB:https://github.com/bboe", "BUY_ME_A_COFFEE:https://buymeacoffee.com/bboe"]
---

# BBoeOS

<p>
</p>

A minimal x86 operating system: a real-mode bootloader hands off to a paged
32-bit protected-mode kernel that runs userland programs at ring 3.  Includes a
shell, VFS with bbfs and ext2 backends, NE2000 networking (ARP / IP / ICMP /
UDP), a self-hosted assembler, and a custom C subset compiler that translates
`user/programs/*.c` to NASM-compatible assembly on the host.

It also runs Doom:

https://github.com/user-attachments/assets/5efa60a4-c948-4552-9903-23a4c69a0282

The Doom port lives in `ports/doom/` and links against a hand-rolled
hand-rolled libbboeos (`user/libbboeos/libbboeos.a`).  Build pipeline:
[`ports/doom/build.py`](https://github.com/bboe/BBoeOS/blob/HEAD/ports/doom/build.py); shareware-WAD provisioning:
[`ports/doom/fetch_wad.sh`](https://github.com/bboe/BBoeOS/blob/HEAD/ports/doom/fetch_wad.sh); one-shot "build + install on a fresh
disk image": [`ports/doom/install.sh`](https://github.com/bboe/BBoeOS/blob/HEAD/ports/doom/install.sh).

The kernel ships as two flat binaries (`boot.bin` + `kernel.bin`) concatenated
on disk.  `boot.bin` is the MBR + post-MBR real-mode bootstrap + 32-bit paging
bring-up; `kernel.bin` is the high-half kernel (`org…
