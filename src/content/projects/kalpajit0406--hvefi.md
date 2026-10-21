---
repo: "Kalpajit0406/HvEfi"
name: "HvEfi"
description: "Intel VT-x Type-1 EFI DXE hypervisor — VMX, EPT, VMCALL-based communication"
readmeQualityOk: true
url: "https://github.com/Kalpajit0406/HvEfi"
language: "C"
languages: ["C"]
languagePcts: [86]
stars: 11
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-10-06T22:02:20Z"
lastCommitAt: "2026-10-21T08:49:11Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 46
maintainers: ["Kalpajit0406", "mathswithsd"]
openGraphImageUrl: "https://opengraph.githubassets.com/e890d07e16bc477acb2dc3dc0883ea8f527102b313ad6b02dfc7e35d297f2d61/Kalpajit0406/HvEfi"
---

# HvEfi — Intel VT-x Type-1 EFI DXE Hypervisor

A bare-metal Type-1 hypervisor that loads as a UEFI DXE runtime driver before the OS boots. It virtualizes all logical processors via Intel VT-x (VMX), sets up an EPT identity map, and provides a SipHash-authenticated VMCALL hypercall interface for a Windows kernel driver to communicate with it.

## Architecture

```
 UEFI Firmware (DXE phase)
    |
    +-- HvBoot.efi (UEFI application, 0xA)
    |     Reads hvcfg mode file, decides full/safe mode
    |     Loads hvcore.efi (the driver), writes receipt lines
    |     Rescue state machine: incomplete boot -> safe mode next boot
    |
    +-- HvEfi.efi (DXE runtime driver, 0xC)  <-- this is the hypervisor
          Step 1:  Check VMX support (CPUID, CR4, MSR)
          Step 2:  Locate MP Services protocol (enumerate all CPUs)
          Step 3:  Read ticket from mailbox (auth secrets from HvBoot)
          Step 4:  Generate session nonce (RDRAND)
          Step 5:  Derive session keys (SipHash)
          Step 6:  Allocate secrets page
          Step 7:  Build EPT identity map (WB/UC MTRR-aware)
          Step 8:  Allocate decoy pages
          Step 9:  Hide hypervisor pages in EPT…
