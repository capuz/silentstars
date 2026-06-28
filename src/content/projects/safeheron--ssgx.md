---
repo: "Safeheron/ssgx"
name: "ssgx"
description: "SSGX, Safeheron SGX Native Development Framework"
url: "https://github.com/Safeheron/ssgx"
homepage: "https://ssgx.safeheron.com"
language: "C++"
languages: ["C++"]
languagePcts: [88]
stars: 26
forks: 2
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 3
recentReleases: 1
createdAt: "2025-04-28T08:05:19Z"
lastCommitAt: "2026-06-28T01:35:47Z"
lastReleaseAt: "2026-05-11T08:03:28Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 72
undervaluedScore: 33
maintainers: ["xyjxys", "sword03"]
openGraphImageUrl: "https://opengraph.githubassets.com/7b14db1a480ac65caaa451644b6b36f617e8afc04a1fa14ce36da4ae0c3bd6fd/Safeheron/ssgx"
---

# SSGX - Safeheron SGX Native Development Framework

# Introduction
SSGX is a native development framework that leverages the hardware-enforced security guarantees of Intel SGX CPUs to 
enable trusted execution for sensitive applications.

It is built on top of the Intel SGX SDK and is designed to reduce the complexity of SGX TEE development in blockchain 
and other emerging fields while enhancing development efficiency and security. The framework provides comprehensive 
optimizations in the build system, system modules, functionality extensions, testing support, secure storage, interface 
simplification, and cryptographic support—addressing multiple pain points in SGX development. 

Key features of SSGX can be found in the documentation file [features.md](./features.md).

---

# Environment Requirements

This project is built based on the **SGX SDK** and **installation images**. Please ensure your environment meets the
following requirements:

- **Operating System**: Ubuntu 20.04 / 22.04
- **Build Tools**: `CMake (>=3.24)`, `GCC (>=9.3.0)`, or `Clang`
- **Ninja**: It is recommended to use Ninja as an alternative to Make.
- [**Install the Intel SGX SDK &…
