---
repo: "jeweledtech/bare-metal-forth"
name: "bare-metal-forth"
description: "Boots into a Forth-83 environment on x86 hardware. No Linux, no Windows, no abstraction layers — just Forth running on the machine. The dictionary *is* the system. Load a different dictionary, you have a different system. There is no kernel/user split, no syscall boundary, no permission model"
readmeQualityOk: true
url: "https://github.com/jeweledtech/bare-metal-forth"
homepage: "https://jeweledtech.github.io/bare-metal-forth/"
language: "Python"
languages: ["Python", "Forth", "Assembly"]
languagePcts: [46, 27, 21]
stars: 10
forks: 4
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2026-02-08T04:34:54Z"
lastCommitAt: "2026-07-16T05:55:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 89
undervaluedScore: 58
maintainers: ["jeweledtech"]
openGraphImageUrl: "https://opengraph.githubassets.com/c8c6759d36d7f9c684b9bfd8cf82187e59f325343d38fe80a23aa6130dcc851d/jeweledtech/bare-metal-forth"
fundingLinks: ["GITHUB:https://github.com/jeweledtech", "PATREON:https://patreon.com/JeweledTechbyJollyGenius", "CUSTOM:https://shop.jollygeniusinc.com"]
---

# ForthOS

No Linux. No Windows. No HAL. No story. Just the machine.

ForthOS is a bare-metal Forth-83 operating system written from BIOS entry
in x86 NASM and Forth. It boots in under a second on a USB stick, talks
to your hardware directly, and gives you a REPL on the bare metal of
a real computer — the way programmers worked before vendors decided
you weren't allowed to anymore.

This repo contains the kernel and the free vocabulary set. Paid
vocabulary packs (hardware drivers, binary translation tools, the
metacompiler) live in a separate repository and are available at
[shop.jollygeniusinc.com](https://shop.jollygeniusinc.com).

This project is in active development. Features may change, and some
things might break. If you run into a problem or have an idea,
[open an issue](https://github.com/jeweledtech/bare-metal-forth/issues).
Contributions are welcome!

## What you get for free

The kernel and the public vocabularies build into two images:

- **`bmforth.img`** — full developer build (requires paid vocabs on disk)
- **`bmforth-free.img`** — free-tier build, kernel plus 18 public vocabularies

The free image gives you:

- A Forth-83 REPL on bare metal, ~115 KB total
-…
