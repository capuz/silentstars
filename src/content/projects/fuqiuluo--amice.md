---
repo: "fuqiuluo/amice"
name: "amice"
description: "🍂 Rust LLVM obfuscation framework with instruction-level VMP/code virtualization for Android, C/C++ and Rust. Supports LLVM 11–23."
originalDescription: "🍂 Rust LLVM obfuscation framework with instruction-level VMP/code virtualization for Android, C/C++ and Rust. Supports LLVM 11–23."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/fuqiuluo/amice"
homepage: "https://deepwiki.com/fuqiuluo/amice"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
topics: ["llvm-pass", "llvm-plugins", "obfuscation", "obfuscator", "ollvm", "llvm-ir", "ndk", "android", "control-flow", "protection"]
stars: 225
forks: 43
openIssues: 7
closedIssues: 52
watchers: 4
contributors: 15
recentReleases: 2
createdAt: "2025-08-02T13:24:29Z"
lastCommitAt: "2026-10-10T10:05:15Z"
lastReleaseAt: "2026-10-03T02:37:07Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 91
undervaluedScore: 40
maintainers: ["fuqiuluo", "Monster-GM", "yujincheng08"]
openGraphImageUrl: "https://opengraph.githubassets.com/c1b410b39f185735c6c5c1d76521d9a1b71e58eff73e8e3f16da810cf3887abe/fuqiuluo/amice"
discussionCount: 2
---

# Amice

[English](https://github.com/fuqiuluo/amice/blob/HEAD/README_en_US.md) | Simplified Chinese

Amice is a code obfuscation tool that works as an LLVM Pass plugin, providing string encryption, control-flow obfuscation, and instruction-level VMP virtualization for C/C++, Rust, and Android native code. After downloading a prebuilt plugin, a single `-fpass-plugin` argument plugs it into an existing build. There is no need to recompile LLVM, and no need to modify the compiler or project source.

> **Status**: currently beta (v0.1.5-beta.5). Configuration options and behavior may change between versions. Prebuilt plugins cover LLVM/Clang 18–23 on Linux/macOS, and Android NDK r27d–r30 (r29/r30 provide a full bundle including the NDK and runtime libraries; r27d/r28c provide the plugin only). There are no prebuilt packages for Windows yet; you can [build from source](https://github.com/fuqiuluo/amice/blob/HEAD/docs/LLVMSetup_zh_CN.md).

## Features

- **Plug and play** — loaded into clang as a dynamic library, no LLVM rebuild needed; existing Clang projects only need one compiler flag to integrate
- **String encryption** — `xor` / `simd_xor` algorithms, supporting lazy decryption…
