---
repo: "GetMikros/mikros"
name: "mikros"
description: "An open-source OS that aims for simplicity, security, and compatibility."
readmeQualityOk: true
url: "https://github.com/GetMikros/mikros"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["kernel", "operating-system", "rust"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-11-01T22:51:03Z"
lastCommitAt: "2026-11-13T11:23:43Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 44
maintainers: ["numbereddev", "Nepgfurmixpro"]
openGraphImageUrl: "https://opengraph.githubassets.com/28ef0ccc7fcc927807439d38e495173cafbd69e1de2e203c03abc420d1adc88f/GetMikros/mikros"
---

# Mikros

The Mikros operating system: boot manager, bootloader, kernel and user space
in one repository. Mikros is a microkernel-based OS.

## Getting the source

    git clone --recurse-submodules https://github.com/GetMikros/mikros.git

The specifications are in the `spec/` submodule, which is a private
repository. Code and commits refer to them by ID, such as `MIKSPEC-0012.R3`.

## Layout

| Path | Contents |
|---|---|
| `spec/` | The Mikros specifications (submodule) |
| `xtask/` | Development tasks, run with `cargo xtask` |
| `targets/` | Target specification for Rust |
| `boot/bootmenu/` | Boot manager |
| `boot/mikrosboot/` | Bootloader |
| `boot/protocol/` | Data passed from the bootloader to the kernel |
| `kernel/core/` | Architecture-independent kernel |
| `kernel/arch/x86_64/` | x86_64 support |
| `kernel/fuzz/` | Host fuzz targets |
| `kernel/gdb/` | GDB commands for inspecting the kernel |
| `user/bin/` | Programs: the shell `msh`, the text console, setup |
| `user/core/` | `init`, the initial process, and the process and service managers |
| `user/services/` | System services, each with its manifest |
| `user/drivers/` | Device and file system drivers, each with…
