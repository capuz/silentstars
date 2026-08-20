---
repo: "cshaxu/nxvm"
name: "nxvm"
description: "An integral x86 PC emulator with built-in debugger"
readmeQualityOk: true
url: "https://github.com/cshaxu/nxvm"
language: "C"
languages: ["C"]
languagePcts: [94]
stars: 218
forks: 47
openIssues: 2
closedIssues: 1
watchers: 32
contributors: 1
recentReleases: 0
createdAt: "2013-08-27T04:22:47Z"
lastCommitAt: "2026-08-20T04:07:55Z"
lastReleaseAt: "2014-05-10T06:32:52Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 87
undervaluedScore: 36
maintainers: ["cshaxu"]
openGraphImageUrl: "https://opengraph.githubassets.com/07d30ec98ae1c8ce4eae06634df0856e88e4d73fc3a5b0ddc030c57530b267a6/cshaxu/nxvm"
---

# NXVM

Neko's x86 Virtual Machine is a portable x86 PC emulator with an integrated
debugger. NXVM is the repository's current, bootable whole-machine product.
Its codebase is also being evolved into a shared, evidence-led machine
foundation for the future NXVDM DOS application product; NXVDM is not yet a
runnable release product.

## Introduction

NXVM emulates an Intel 80386 PC with the machine services needed for the
current product: RAM, DMA, PIC, floppy and hard disks, keyboard, display, BIOS
behavior, and a debugger. It is useful both as a bootable virtual machine and
as a controlled environment for examining legacy x86 software.

The screenshots below are historical NXVM product captures retained from the
original project README. They illustrate the product's lineage; they are not
current compatibility claims and include no guest media or executables.

## Platform

### Windows

NXVM provides Console and application-window presentation paths. The windowed
path keeps the NXVM control Console separate from the guest display.

### Linux

Linux support uses the terminal presentation path. It remains a development
and verification surface; see the project documentation for…
