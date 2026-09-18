---
repo: "Pummelchen/XAIOS"
name: "XAIOS"
description: "Extremely fast OS for to run converted Frontier AI models on low power CPU cores (ARM /x86/RISC-V)"
readmeQualityOk: true
url: "https://github.com/Pummelchen/XAIOS"
language: "C"
languages: ["C", "Python"]
languagePcts: [71, 22]
stars: 7
forks: 0
openIssues: 0
closedIssues: 17
watchers: 1
contributors: 2
recentReleases: 8
createdAt: "2026-06-13T07:50:41Z"
lastCommitAt: "2026-09-18T08:26:06Z"
lastReleaseAt: "2026-09-18T08:24:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 60
maintainers: ["Pummelchen"]
openGraphImageUrl: "https://opengraph.githubassets.com/af683540fdd013744f3ecc5e8f6edf7b7cfd2630347e7bbffdd7161f53d3f3bf/Pummelchen/XAIOS"
discussionCount: 1
---

# XAIOS

XAIOS is an experimental freestanding Unix-like operating system written in
C99, with a portable inference engine built into it rather than installed on
top. It boots from UEFI to a login prompt with durable storage, dual-stack
networking and an OpenSSH-compatible SSH/SFTP server on three architectures —
AArch64, x86-64 and RISC-V (rv64gc) — under QEMU, and on two macOS
hypervisors, VMware Fusion and Apple Virtualization.framework. What each of
those environments has actually been shown to do differs, and
[Where it runs](#where-it-runs) says which is which. Real-model inference is
not implemented.

**What it is aiming at.** An SSH-administered distributed CPU inference server
where the operating system and the model runtime are one system rather than an
application on a distribution. The kernel owns hardware, isolation,
persistence, networking and service lifecycle; the engine owns model packages,
architecture adapters, backends and sessions; both are built, versioned and
gated together. There is no Linux or BSD underneath, and no Linux or FreeBSD
binary ABI on top.

**Who it is for.** People who want to read, boot or extend a small operating
system that is complete…
