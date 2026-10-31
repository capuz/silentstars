---
repo: "xirtus/sexos"
name: "sexos"
description: "SexOS — a ~128 KB Rust microkernel built around a single address space, capability IPC and PKU isolation."
readmeQualityOk: true
url: "https://github.com/xirtus/sexos"
homepage: "https://sexos.dev"
language: "C"
languages: ["C", "Rust"]
languagePcts: [39, 28]
topics: ["capability-security", "microkernel", "operating-system", "osdev", "rust", "sasos"]
stars: 14
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-04-14T07:24:35Z"
lastCommitAt: "2026-10-31T15:59:00Z"
lastReleaseAt: "2026-10-19T23:04:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 50
maintainers: ["xirtus"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1210203756/d1799491-b93e-400a-80c1-45d9500fa6ae"
discussionCount: 0
---

# SexOS

### A single-address-space Rust microkernel

[Website](https://sexos.dev) · [Architecture](https://github.com/xirtus/sexos/blob/HEAD/ARCHITECTURE.md) · [Manual](https://github.com/xirtus/sexos/blob/HEAD/docs/handoff_html/index.html) · [YouTube](https://youtube.com/playlist?list=PLtv6PF9o7eC59PC5cn49Wia-8ogZ6AxUn) · [Releases](https://github.com/xirtus/sexos/releases)

SexOS is an experimental operating system built around a **single global virtual address space** instead of per-process page tables. Memory is globally addressable; authority is capability-controlled through `sex-pdx`; Intel PKU is used as an optional hardware enforcement accelerator. The kernel is written in Rust, and the userland is a set of protection-domain servers.

It is not a Linux distribution, not a drop-in replacement for Linux, and not production-ready. It is a testbed for a different OS model: one address space, explicit capabilities, deterministic epochs, and a very small kernel.

## What is in the box

- **GLOBAL_VAS** — one virtual address space for kernel, servers, and processes.
- **sex-pdx** — the capability and communication substrate. All inter-domain access is capability-mediated; there…
