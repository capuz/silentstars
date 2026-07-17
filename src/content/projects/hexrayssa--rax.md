---
repo: "HexRaysSA/rax"
name: "rax"
description: "rax is a CPU emulator that checks its own work."
readmeQualityOk: true
url: "https://github.com/HexRaysSA/rax"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 197
forks: 9
openIssues: 0
closedIssues: 175
watchers: 1
contributors: 26
recentReleases: 0
createdAt: "2025-12-19T13:22:53Z"
lastCommitAt: "2026-07-17T05:48:32Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 30
maintainers: ["19h"]
openGraphImageUrl: "https://opengraph.githubassets.com/8c3fb8fb08d3923b7c6e8c33f93272e1b2f1883d3271c612423c0a1386caa8ba/HexRaysSA/rax"
---

<h1 align="center">
    rax
</h1>

<h5 align="center">
rax is a CPU emulator that checks its own work. It implements four instruction sets in software<br/>
(x86-64, AArch64, Hexagon, and RISC-V) and validates each instruction against an authoritative<br/>
reference: real silicon (KVM) for x86-64, and QEMU for the rest. The x86-64 core boots Linux, and<br/>
a shared IR (SMIR) JITs hot loops to native code.
</h5>

<br/>

rax is a research project, not an official Hex-Rays product. It is already useful in practice: point
IDA Pro's GDB debugger at rax's built-in GDB stub (the `--gdb` option) and you can debug a full kernel
running under the emulator.

---

## Quick start

Build it, then run a Linux kernel, on hardware or one instruction at a time:

```bash
cargo build --release

# 1. Boot a Linux kernel on hardware virtualization (Linux + KVM).
./target/release/rax --kernel bzImage --initrd initrd.img

# 2. Boot it on the software CPU instead: slower, but every instruction is observable, and it
#    boots to a BusyBox shell. (Use an ELF vmlinux; bzImage real-mode boot is still in progress.)
./target/release/rax --backend emulator --kernel vmlinux --initrd initrd.cpio

# 3. Trace every…
