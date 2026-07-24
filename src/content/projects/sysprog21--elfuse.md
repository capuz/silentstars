---
repo: "sysprog21/elfuse"
name: "elfuse"
description: "Run Arm64/x86-64 Linux ELF binaries on macOS Apple Silicon"
readmeQualityOk: true
url: "https://github.com/sysprog21/elfuse"
language: "C"
languages: ["C"]
languagePcts: [91]
topics: ["arm64", "darwin-kernel", "macos", "hypervisor-framework", "linux-compatibility", "linux-syscall", "virtualization"]
stars: 232
forks: 18
openIssues: 10
closedIssues: 65
watchers: 4
contributors: 7
recentReleases: 0
createdAt: "2026-05-04T10:21:48Z"
lastCommitAt: "2026-07-24T06:12:26Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 27
maintainers: ["jserv", "henrybear327", "Max042004"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1228737598/ce09707f-5336-43b6-8d16-3da2de91366a"
---

# elfuse

Run Linux ELF binaries directly from the macOS shell -- no Docker, no
full VM image, no daemon. `elfuse` is a process-scoped Linux user-space
runtime: each guest runs inside a lightweight Hypervisor.framework VM
owned by the `elfuse` process itself, and Linux syscalls are translated
to macOS behavior in host-side handlers rather than served by a real
Linux kernel.

Native aarch64-linux executes directly on the CPU. x86_64-linux
executes through Apple's embedded Rosetta translator hosted inside the
same VM; the architecture is auto-detected from the ELF header. Both
static and dynamically linked guests are supported, with the dynamic
linker resolved against an external sysroot via `--sysroot`.

## Features

- Single native macOS binary (~560 KiB signed), no daemon and no disk
  image
- Millisecond-scale VM startup; per-syscall overhead is microseconds
- Native Apple Silicon execution through Hypervisor.framework
- Static and dynamically linked `aarch64-linux` ELF binaries
- Static and dynamically linked `x86_64-linux` ELF binaries via Apple
  Rosetta (auto-detected from the ELF header, opt out with
  `--no-rosetta`)
- Linux-style processes, threads (1:1 with HVF vCPUs, up…
