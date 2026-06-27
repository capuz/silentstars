---
repo: "Dicklesworthstone/frankenlibc"
name: "frankenlibc"
description: "Rust interposition layer for glibc: transparent safety membrane that incrementally replaces C library functions with memory-safe Rust implementations"
url: "https://github.com/Dicklesworthstone/frankenlibc"
language: "Rust"
languages: ["Rust"]
languagePcts: [83]
topics: ["libc", "linux", "memory-safety", "rust", "systems-programming"]
stars: 48
forks: 3
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-02-09T02:49:58Z"
lastCommitAt: "2026-06-27T00:35:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 37
maintainers: ["Dicklesworthstone"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1153199323/d9d8dc1e-3b76-4458-a3cf-0a9bc8556e52"
---

# FrankenLibC

</div>

![version](https://img.shields.io/badge/version-0.1.0-2f6feb)
![rust](https://img.shields.io/badge/rust-nightly-f74c00)
![platform](https://img.shields.io/badge/platform-linux-181717)
![arch](https://img.shields.io/badge/arch-x86__64%20%7C%20aarch64-005f87)
![coverage](https://img.shields.io/badge/native_coverage-68.2%25-2ea043)
![license](https://img.shields.io/badge/license-MIT%20with%20rider-8a2be2)

</div>

**A clean-room, memory-safe Rust reimplementation of glibc.** FrankenLibC produces a glibc-shaped `libc.so` that real Linux binaries can load with `LD_PRELOAD`, classifies every exported symbol as native Rust, a direct Linux syscall, host-backed wrapper, call-through, or stub, and runs every entrypoint through a **Transparent Safety Membrane** that validates, sanitizes, repairs, denies, and audits unsafe operations at the ABI boundary.

```bash
git clone https://github.com/Dicklesworthstone/frankenlibc.git
cd frankenlibc
cargo build -p frankenlibc-abi --release
LD_PRELOAD="$PWD/target/release/libfrankenlibc_abi.so" /bin/echo "hello from FrankenLibC"
```

Deployment details, runtime knobs, and Gentoo/Portage operations are collected in…
