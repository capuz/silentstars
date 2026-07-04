---
repo: "Dicklesworthstone/frankenlibc"
name: "frankenlibc"
description: "Rust interposition layer for glibc: transparent safety membrane that incrementally replaces C library functions with memory-safe Rust implementations"
readmeQualityOk: true
url: "https://github.com/Dicklesworthstone/frankenlibc"
language: "Rust"
languages: ["Rust"]
languagePcts: [83]
topics: ["libc", "linux", "memory-safety", "rust", "systems-programming"]
stars: 48
forks: 2
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-02-09T02:49:58Z"
lastCommitAt: "2026-07-04T22:20:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 37
maintainers: ["Dicklesworthstone"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1153199323/d9d8dc1e-3b76-4458-a3cf-0a9bc8556e52"
---

# FrankenLibC

</div>

</div>

**A clean-room, memory-safe Rust reimplementation of glibc.** FrankenLibC produces a glibc-shaped `libc.so` that real Linux binaries can load with `LD_PRELOAD`, classifies every exported symbol as native Rust, a direct Linux syscall, host-backed wrapper, call-through, or stub, and runs every entrypoint through a **Transparent Safety Membrane** that validates, sanitizes, repairs, denies, and audits unsafe operations at the ABI boundary.

```bash
git clone https://github.com/Dicklesworthstone/frankenlibc.git
cd frankenlibc
cargo build -p frankenlibc-abi --release
LD_PRELOAD="$PWD/target/release/libfrankenlibc_abi.so" /bin/echo "hello from FrankenLibC"
```

Deployment details, runtime knobs, and Gentoo/Portage operations are collected in [`DEPLOYMENT.md`](DEPLOYMENT.md).

---

## TL;DR

### The Problem

glibc is enormous, security-critical, and written in a language that cannot enforce memory safety at the ABI boundary. Existing Linux software expects glibc-compatible symbols, calling conventions, version tags, `errno` discipline, and process-level semantics. Throwing those compatibility constraints away to "rewrite libc safely" is not a real option.…
