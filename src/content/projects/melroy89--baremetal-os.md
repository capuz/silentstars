---
repo: "melroy89/baremetal-os"
name: "baremetal-os"
description: "A generic minimal OS fully written in Assembly"
readmeQualityOk: true
url: "https://github.com/melroy89/baremetal-os"
language: "Assembly"
languages: ["Assembly", "Shell"]
languagePcts: [76, 22]
topics: ["assembly", "bare-metal", "kvm", "multiboot", "nasm", "operating-system", "osdev", "qemu", "x86-64"]
stars: 15
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-11-26T00:06:56Z"
lastCommitAt: "2026-11-26T23:32:35Z"
lastReleaseAt: "2026-11-26T21:30:44Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 39
maintainers: ["melroy89"]
openGraphImageUrl: "https://opengraph.githubassets.com/5be6a91bf10b152f4f3aca7be6b8f75788ce157c96626573da8751eb157b82b9/melroy89/baremetal-os"
---

# Bare Metal OS

Bare Metal OS is a small operating system written in x86-64 assembly and designed for speed and simplicity. It boots directly to an interactive text console and idles the CPU while waiting for input.

**Key features**

- Fast direct kernel boot in QEMU/KVM, plus ISO boot on BIOS and UEFI.
- GPT partition inspection and volume mounting, with writable ext2, FAT32, and a built-in RAM filesystem.
- Browse multiple mounted volumes with `cd` and `ls`, read files with `cat`, and copy them between volumes with `cp`.
- Multicore startup and tools to inspect CPUs, memory, and PCI devices.
- IPv4 networking over virtio-net or e1000, with ARP, UDP, `ping`, DHCP, and DNS lookups.

## Download

Download the latest release from [GitHub Releases](https://github.com/melroy89/baremetal-os/releases).

- `baremetal-os.elf` boots directly as a kernel in QEMU/KVM.
- `baremetal-os.iso` boots as a CD/DVD image with BIOS or UEFI firmware.
- `SHA256SUMS` lets you verify the downloads.

## Quick start

Run these commands from the directory containing the downloaded file.

### Run directly with QEMU/KVM

For a quick boot in QEMU/KVM, load the kernel ELF directly with `-kernel`.
