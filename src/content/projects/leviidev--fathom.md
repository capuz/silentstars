---
repo: "Leviidev/Fathom"
name: "Fathom"
description: "PC Emulator for iOS"
readmeQualityOk: true
url: "https://github.com/Leviidev/Fathom"
language: "C++"
languages: ["C++"]
languagePcts: [70]
stars: 11
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 1
createdAt: "2026-09-14T22:18:04Z"
lastCommitAt: "2026-09-17T08:51:33Z"
lastReleaseAt: "2026-09-14T23:13:23Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 44
maintainers: ["Leviidev"]
openGraphImageUrl: "https://opengraph.githubassets.com/45ec1bca5140036f1bf58d40393950d3dd85f24c4bb60cb5ccc1df671ff4d507/Leviidev/Fathom"
---

# Fathom

An x86-64 PC emulator for iOS. Fathom runs x86-64 Linux programs on an iPhone or iPad by
translating them to ARM64 as they execute, using [FEXCore](https://github.com/FEX-Emu/FEX)
— the dynamic recompiler behind FEX-Emu — with a native SwiftUI front end.

## What it does

Import an x86-64 Linux executable, open it, press Run. Fathom maps it into a guest
address space, hands its instructions to FEXCore's JIT, answers its Linux syscalls, and
shows you its output.

The emulator core is genuinely doing the work: FEXCore compiles the guest's x86-64 basic
blocks into ARM64 at runtime, and Fathom supplies the kernel half — an ELF loader, a
guest address space, and a Linux syscall layer covering files, memory, time, and process
basics.

## What runs

| Program shape | Status |
| --- | --- |
| Statically linked, position independent (`-static-pie`) | Runs |
| Statically linked, non-PIE (`-static`) | Loads only if the device permits low fixed mappings — see below |
| Dynamically linked | Not yet: needs a guest root filesystem with the interpreter and libraries |
| 32-bit x86 | No — x86-64 only |

The non-PIE case is a real constraint rather than an oversight. A classic Linux…
