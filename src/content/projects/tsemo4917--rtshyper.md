---
repo: "tsemo4917/rtshyper"
name: "rtshyper"
description: "An Rust hypervisor for mixed-critical system"
readmeQualityOk: true
url: "https://github.com/tsemo4917/rtshyper"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 30
forks: 4
openIssues: 5
closedIssues: 4
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2023-08-28T06:08:50Z"
lastCommitAt: "2026-11-07T15:51:12Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 79
undervaluedScore: 27
maintainers: ["tsemo4917"]
openGraphImageUrl: "https://opengraph.githubassets.com/6d395bf2cf57fffd970353990564738e676fe0b73f8f9a9e9943bfbb45d53269/tsemo4917/rtshyper"
---

# RT-Shyper

forked form [Rust-Shyper](https://gitee.com/openeuler/rust_shyper)

An embedded hypervisor for mixed-critical system.
- Fully based on Rust.
- High performance and reliability.
- Virtio (blk, net and console) support.
- Supporting strong memory isolation (LLC isolation based on coloring and memory bandwidth control).

## Supported Platform

The list of supported (and work in progress) platforms is presented below:

**aarch64**
- [x] NVIDIA Jetson TX2
- [ ] (work-in-progress) Raspberry Pi 4 Model B
- [ ] (work-in-progress) QEMU

## Build Dependencies

First, install the [Rust](https://www.rust-lang.org/tools/install) toolchain. 

For cross-compiling, install the gcc-multilib (on Ubuntu)

Install **clang** and **LLVM** toolchain. 

Install u-boot-tools to use `mkimage`

```bash
sudo apt install gcc-multilib u-boot-tools clang llvm
```

If you want to build the C library with other cross compiling toolchain, for example, [aarch64-none-elf toolchain](https://developer.arm.com/downloads/-/gnu-a), you can add it to **PATH** and set the **CROSS_COMPILE** on the command line.

## How to Build

Simply run `make`

```bash
make [LLVM=1] [CARGO_ACTION=build|clippy|fix|...]…
