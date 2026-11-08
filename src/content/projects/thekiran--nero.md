---
repo: "thekiran/nero"
name: "nero"
description: "NERO — A native C11 terminal with command history, cross-platform adapters and TCP network diagnostics for macOS, Linux and Windows. Experimental network research for authorized labs."
readmeQualityOk: true
url: "https://github.com/thekiran/nero"
language: "C"
languages: ["C", "Python"]
languagePcts: [68, 23]
topics: ["c", "dos-attack", "networking", "penetration-testing", "security", "stress-testing", "synflood", "terminal", "synfood", "linux"]
stars: 7
forks: 0
openIssues: 1
closedIssues: 3
watchers: 1
contributors: 2
recentReleases: 2
createdAt: "2025-09-05T20:13:09Z"
lastCommitAt: "2026-11-08T14:14:24Z"
lastReleaseAt: "2026-11-08T13:57:37Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 77
maintainers: ["thekiran", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1051335743/7f0080d1-2cb8-42ac-b252-6ef215543228"
---

## Overview and Platform Support

NERO provides a unified terminal interface across POSIX and Windows environments. Supported platforms are verified through native automated packaging and CI test runs:

| Platform | Native package / architectures | Verification |
| --- | --- | --- |
| **macOS 15+** | Mach-O 64-bit · ARM64 / x86-64 | Make, CMake, PTY, ASan/UBSan |
| **Ubuntu 24.04+ compatible** | ELF 64-bit · x86-64 / ARM64 | Make, CMake, PTY, ASan/UBSan |
| **Windows 10 / 11** | PE32+ (MinGW UCRT64) · x86-64 | CMake + Ninja, Win32 console/socket CTest |
| **Windows (WSL2)** | Ubuntu Linux package · x86-64 / ARM64 | Standard Linux execution path |

Windows ARM64 has no native package; use WSL2 on ARM64 hardware.

---

## Feature Status

* **Implemented & Verified:**
  * Interactive terminal shell, command tokenization, and line editor (history search, cursor motion, backspace, delete).
  * ANSI VT100 styling with automatic fallback to ASCII when `NO_COLOR=1` or `TERM=dumb`.
  * Network interface enumeration across POSIX (`getifaddrs`) and Windows (`GetAdaptersAddresses`).
  * TCP port diagnostics (`<target> -Sc`) with timeout boundaries.
  * Native `.pkg`, `.msi` and `.deb`…
