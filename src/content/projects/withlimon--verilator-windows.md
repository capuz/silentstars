---
repo: "withlimon/verilator-windows"
name: "verilator-windows"
description: "Native Prebuilt Latest Verilator binaries for Windows "
readmeQualityOk: true
url: "https://github.com/withlimon/verilator-windows"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["verilator", "vlsi", "windows", "verilator-for-windows", "withlimon", "verilator-exe", "verilator-without-wsl"]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2026-06-06T07:21:53Z"
lastCommitAt: "2026-11-16T11:56:24Z"
lastReleaseAt: "2026-09-06T06:56:45Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 59
undervaluedScore: 25
maintainers: ["withlimon"]
openGraphImageUrl: "https://opengraph.githubassets.com/f97ba07aba971a9004aa53f279dd60c0a05355d0e393b98dd719ae7ff0d21721/withlimon/verilator-windows"
---

# Verilator for Windows

Prebuilt Verilator for Windows. No WSL, no VM, no Perl.

## Download

**[Get the latest release](https://github.com/withlimon/verilator-windows/releases/latest)**
([all releases](https://github.com/withlimon/verilator-windows/releases))

| File | Windows | Contains | Use it for |
|------|---------|----------|-----------|
| `verilator-setup-<version>-x64.exe` | 64-bit | Verilator, optional UVM, w64devkit (g++, make), Python | Easiest: install and go |
| `verilator-windows-x64-<version>.zip` | 64-bit | Verilator + UVM sources | Portable, no install |
| `verilator-windows-windows_x86-<version>.tar.gz` | 32-bit | Verilator only | Old 32-bit PCs |
| `verilator-windows-windows_arm64-<version>.tar.gz` | ARM64 | Verilator only (not tested) | ARM64 Windows |
| `SHA256SUMS.txt` | - | Checksums | Verify your download |

The `.tar.gz` files have no compiler or Python. Install
[w64devkit](https://github.com/skeeto/w64devkit/releases) and
[Python 3](https://www.python.org/downloads/) yourself.

## Quick start

1. Install, or unzip to a path without spaces (e.g. `C:\verilator`).
2. Add `bin` to PATH.
3. Run `verify_setup.bat`, then `verilator --version`.

You also need…
