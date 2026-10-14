---
repo: "HexRaysSA/rax"
name: "rax"
description: "rax is a CPU emulator that checks its own work."
readmeQualityOk: true
url: "https://github.com/HexRaysSA/rax"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 223
forks: 11
openIssues: 9
closedIssues: 235
watchers: 1
contributors: 4
recentReleases: 3
createdAt: "2025-12-19T13:22:53Z"
lastCommitAt: "2026-10-14T08:57:24Z"
lastReleaseAt: "2026-09-16T18:06:16Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 92
undervaluedScore: 39
maintainers: ["19h"]
openGraphImageUrl: "https://opengraph.githubassets.com/099299df889a2eb32f2f14606cca8580cafacb720a71bb26022367ebc9433119/HexRaysSA/rax"
---

rax

  A Rust CPU emulator and virtual-machine monitor for inspecting guest execution across x86-64, Arm, Qualcomm Hexagon, and RISC-V.

`rax` contains software execution engines for x86-64, AArch64/AArch32, Qualcomm Hexagon, and RV64. Its x86-64 and AArch64 machines have Linux boot paths; Hexagon and RISC-V currently run bare-metal programs. Supported regions can be lifted into SMIR and, when an exact host-specific admission contract is satisfied, executed as native code on x86-64 or AArch64 hosts.

`rax-user` runs Linux user-space ELF programs on Linux or macOS without booting a guest kernel. The Linux personality implements process and thread creation, signals, file and socket I/O, IPC, memory controls, and guest process tracing for x86-64, AArch64, and RV64. ELF32 i386 compatibility tasks use the x86 core in compatibility mode with a partial 32-bit syscall table. This process execution path is independent of the machine boot paths.

Windows PE programs select an additional [Windows personality](https://github.com/HexRaysSA/rax/blob/HEAD/docs/architecture/user-mode/windows.md)
for x86, x64, and ARM64 guests on Unix hosts. The current surface covers PE
loading, process startup,…
