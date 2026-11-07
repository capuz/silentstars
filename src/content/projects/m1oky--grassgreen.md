---
repo: "m1oky/GrassGreen"
name: "GrassGreen"
description: "High-performance bytecode programming language with C++ syntax, stack VM, PE .exe packer, and built-in GUI engine."
originalDescription: "High-performance bytecode programming language with C++ syntax, stack VM, PE .exe packer, and built-in GUI engine."
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/m1oky/GrassGreen"
language: "C++"
languages: ["C++"]
languagePcts: [98]
stars: 5
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-06-19T09:00:22Z"
lastCommitAt: "2026-11-07T16:11:30Z"
lastReleaseAt: "2026-11-07T10:41:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 69
undervaluedScore: 37
maintainers: ["m1oky"]
openGraphImageUrl: "https://opengraph.githubassets.com/50ac36f28e5b21ead0779275cf62482125c3176ea7453244ca2812d11fa70600/m1oky/GrassGreen"
---

# GrassGreen (G&G) — Version 4.2

GrassGreen is a compiled systems-level programming language with C++-style syntax. The project includes the compiler and the `grg` virtual machine (formerly `grassc`), support for direct bytecode execution, generation of standalone executables (`.exe` for Windows and ELF binaries for Linux), a native JIT compiler for the x86_64 architecture, the modern VD+ vector graphical interface, a built-in audio engine, multithreading, a networking stack, and tools for direct memory access (MMIO and Port I/O).

Official website: [grassgreen.info](https://grassgreen.info)  
Repository: [github.com/m1oky/GrassGreen](https://github.com/m1oky/GrassGreen)

---

## Key changes in version 4.2.0 (Bare-Metal & OS Edition)

This update is fully focused on low-level development and building custom operating systems: GrassGreen now covers the entire bare-metal development cycle, from inline assembly and drivers to generating a ready-to-boot disk image.

- **1. Built-in assembler (`!asm!`):**
  - Support for low-level assembly inserts and processor instructions without third-party assemblers (NASM and GAS are no longer…
