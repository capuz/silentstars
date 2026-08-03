---
repo: "libersoft-org/libersystem"
name: "libersystem"
description: "A capability-based microkernel modern operating system written in Rust"
readmeQualityOk: true
url: "https://github.com/libersoft-org/libersystem"
homepage: "https://libersystem.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [90]
stars: 14
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-06-17T00:46:44Z"
lastCommitAt: "2026-08-03T06:43:14Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 43
maintainers: ["libersoft-org"]
openGraphImageUrl: "https://opengraph.githubassets.com/37d98195b3c0fa1850f8fe713b4149a092796350d7f9686e90c5a6a32babf5c0/libersoft-org/libersystem"
---

# LiberSystem

## Table of contents

- [**About**](#about)
- [**Documentation**](#documentation)
- [**Installation**](#installation)
- [**License**](#license)
- [**Contribution**](#contribution)
- [**Donations**](#donations)
- [**Star history**](#star-history)

## About

**LiberSystem** is a modern operating system written from scratch in Rust. It is built around a small, memory-safe microkernel and a typed object / capability model - every resource has a clear type and is reached through an explicit, unforgeable capability that carries its own rights.

The kernel is a small, safe arbiter; system services and drivers run as isolated, restartable components that talk to each other over stable, typed contracts. Security is capability-based and least-privilege by construction, the system is SMP-aware from the ground up, and memory safety comes from the Rust language itself rather than from discipline. One portable kernel runs on multiple architectures - **`x86_64`**, **`aarch64` (ARM64)** and **`riscv64`** - each booting through the system's own UEFI loader.

This is an early-stage project under active development. It is not yet a general-purpose OS release.

## Documentation

-…
