---
repo: "gfazioli/amiga-assembly-library"
name: "amiga-assembly-library"
description: "A Motorola 68020 shared library for Commodore Amiga — 50+ functions for graphics, file I/O, memory management, UI and more. KickStart 3.0+ compatible. Public Domain."
readmeQualityOk: true
url: "https://github.com/gfazioli/amiga-assembly-library"
homepage: "https://amiga-assembly-library.vercel.app/"
language: "MDX"
languages: ["MDX", "Assembly", "C"]
languagePcts: [45, 27, 20]
topics: ["68k", "amiga", "amigaos", "assembly", "assembly-library", "commodore", "kickstart", "motorola-68020", "public-domain", "retro-computing"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 3
createdAt: "2025-10-26T11:30:16Z"
lastCommitAt: "2026-07-10T07:02:09Z"
lastReleaseAt: "2026-07-10T07:02:26Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 85
undervaluedScore: 39
maintainers: ["gfazioli"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1083609340/4e1d3d37-ddfd-44cd-ae4f-9f9751cdcf6b"
---

# Amiga Assembly Library

  
  
  
  

---

[<kbd> <br/> ❤️ If this project has been useful to you, please consider becoming a sponsor <br/> </kbd>](https://github.com/sponsors/gfazioli?o=esc)  

</div>

## Overview

A shared library for **Commodore Amiga** written in **Motorola 68020 assembly language**. It provides 50+ high-level functions organized into specialized modules, callable from both Assembly and C programs. Compatible with **KickStart 3.0+** (AmigaOS V39 and above).

> [!note]
>
> [Documentation](https://amiga-assembly-library.vercel.app/) | [Download (ZIP)](https://github.com/gfazioli/amiga-assembly-library/blob/HEAD/download.zip)

## Features

- Written in optimized 680x0 assembly (68020+)
- Public Domain Software — free to use and distribute
- Dual API: call from Assembly or C with full type safety
- Auto-opens 12+ system libraries via `AssemblyBase`
- Comprehensive documentation with original source code

## Modules

| Module | Description |
|--------|-------------|
| **Exec** | Memory management, linked lists, node operations (`AllocNewList`, `ReAllocVec`, `FreeList`...) |
| **DOS** | File I/O, disk info, checksums (`Load`, `Save`, `FileInfo`, `CheckFile`...) |
|…
