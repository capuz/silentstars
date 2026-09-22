---
repo: "cshaxu/nxvm"
name: "nxvm"
description: "An integral x86 PC emulator with built-in debugger"
readmeQualityOk: true
url: "https://github.com/cshaxu/nxvm"
language: "C"
languages: ["C"]
languagePcts: [93]
stars: 218
forks: 47
openIssues: 2
closedIssues: 1
watchers: 32
contributors: 1
recentReleases: 0
createdAt: "2013-08-27T04:22:47Z"
lastCommitAt: "2026-09-22T08:44:55Z"
lastReleaseAt: "2014-05-10T06:32:52Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 86
undervaluedScore: 36
maintainers: ["cshaxu"]
openGraphImageUrl: "https://opengraph.githubassets.com/984e4ddd085133e2f863d809e0c4a8ba23d2cb0cabae545e2d9579b9c3abd60a/cshaxu/nxvm"
---

# NXVM

Neko's x86 Virtual Machine is a portable x86 PC emulator with an integrated
debugger. NXVM is the repository's current, bootable whole-machine product.
The approved direction is one build-fixed executable per machine: IBM 5160 XT,
IBM 5170 AT, DeskPro 386, default PC/AT, and later IBM Palm Top PC 110.
They share an extensible architecture and one NXVM.ini configuration format.
CPU-family implementations remain reusable. This is the target, not a claim
that the INI/fixed-build cutover is implemented. All implemented machines remain
supported; the former NXVDM plan is withdrawn.

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

NXVM provides Console and…
