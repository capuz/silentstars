---
repo: "HexRaysSA/rax"
name: "rax"
description: "rax is a CPU emulator that checks its own work."
readmeQualityOk: true
url: "https://github.com/HexRaysSA/rax"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 238
forks: 11
openIssues: 9
closedIssues: 235
watchers: 1
contributors: 4
recentReleases: 3
createdAt: "2025-12-19T13:22:53Z"
lastCommitAt: "2026-11-03T11:15:14Z"
lastReleaseAt: "2026-09-16T18:06:16Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 92
undervaluedScore: 39
maintainers: ["19h"]
openGraphImageUrl: "https://opengraph.githubassets.com/5fbac8dc15b2dd849c3646304e1e9339d8f278fe6118303d5f58d3d4fc8eb8f4/HexRaysSA/rax"
---

rax

  A Rust CPU emulator and virtual-machine monitor for inspecting guest execution across x86-64, Arm, Qualcomm Hexagon, RISC-V, and eBPF / Solana SBPF.

`rax` contains software execution engines for x86-64, AArch64/AArch32, Qualcomm Hexagon, RV64, and eBPF / Solana SBPF (`V0`–`V4`). Its x86-64 and AArch64 machines have Linux boot paths; Hexagon and RISC-V currently run bare-metal programs; eBPF and Solana SBPF programs execute in direct and SMIR-lifted VM/contract contexts. Supported regions can be lifted into SMIR and, when an exact host-specific admission contract is satisfied, executed as native code on x86-64 or AArch64 hosts.

`rax-user` runs Linux user-space ELF programs on Linux or macOS without booting a guest kernel. The Linux personality implements process and thread creation, signals, file and socket I/O, IPC, memory controls, and guest process tracing for x86-64, AArch64, and RV64. ELF32 i386 compatibility tasks use the x86 core in compatibility mode with a partial 32-bit syscall table. This process execution path is independent of the machine boot paths.

Windows and Unix hosts can run PE programs through `rax-user`. Windows hosts
select installed system DLLs by…
