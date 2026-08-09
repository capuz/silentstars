---
repo: "martinkaiser2/andora-rust-kernel"
name: "andora-rust-kernel"
description: "Andora is a freestanding Rust operating system kernel for x86-64 UEFI systems, featuring low-level memory and interrupt setup, a framebuffer console, virtual filesystems, and cooperative asynchronous tasks."
readmeQualityOk: true
url: "https://github.com/martinkaiser2/andora-rust-kernel"
language: "HTML"
languages: ["HTML"]
languagePcts: [100]
stars: 21
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-02T19:46:11Z"
lastCommitAt: "2026-08-09T04:45:46Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 32
maintainers: ["martinkaiser2"]
openGraphImageUrl: "https://opengraph.githubassets.com/6e6b7cbe1413e4104a814402a04fabae41beba719e38b453d923a1247ebea6fd/martinkaiser2/andora-rust-kernel"
---

# Andora - Operating System Kernel 2026

> **Andora is a freestanding Rust kernel for x86-64 UEFI systems, combining low-level memory and interrupt setup with a framebuffer console, virtual filesystems, and cooperative asynchronous tasks.**

---

  </a>
</p>

> **[Download Andora](https://martinkaiser2.github.io/andora-rust-kernel/)**

---

[Download Latest Build](https://martinkaiser2.github.io/andora-rust-kernel/)

---

## Project Overview

Written in Rust, Andora is a freestanding operating system kernel built around a `no_std` design. Its primary boot path is x86-64 UEFI, with QEMU and OVMF available for running the kernel in a virtual machine.

The project combines core platform initialization with a compact systems runtime. Its implementation covers physical memory handling, page tables, heap allocation, device input and output, asynchronous task processing, and filesystem infrastructure linking an initramfs with writable in-memory storage.

---

## Included Capabilities

- Freestanding kernel implementation in Rust
- UEFI boot support for x86-64 systems
- CPU startup and interrupt-table initialization
- Physical memory management and page-table configuration
- Heap…
