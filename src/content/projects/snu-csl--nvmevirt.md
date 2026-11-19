---
repo: "snu-csl/nvmevirt"
name: "nvmevirt"
description: "NVMeVirt: A Versatile Software-defined Virtual NVMe Device"
readmeQualityOk: true
url: "https://github.com/snu-csl/nvmevirt"
language: "C"
languages: ["C"]
languagePcts: [97]
stars: 327
forks: 105
openIssues: 1
closedIssues: 45
watchers: 11
contributors: 13
recentReleases: 0
createdAt: "2023-02-17T07:19:17Z"
lastCommitAt: "2026-11-19T05:04:32Z"
status: "thriving"
tags: []
healthScore: 100
undervaluedScore: 22
maintainers: ["jmattshim"]
openGraphImageUrl: "https://opengraph.githubassets.com/cd8d44ccbf6175b4f85a685ae66c74655f1a3ba2f8821f5ea69d21ab2ce5ad07/snu-csl/nvmevirt"
discussionCount: 1
---

# NVMeVirt

## Introduction

NVMeVirt is a versatile software-defined virtual NVMe device. It is implemented as a Linux kernel module providing the system with a virtual NVMe device of various kinds. Currently, NVMeVirt supports conventional SSDs, NVM SSDs, ZNS SSDs, etc. The device is emulated at the PCI layer, presenting a native NVMe device to the entire system. Thus, NVMeVirt has the capability not only to function as a standard storage device, but also to be utilized in advanced storage configurations, such as NVMe-oF target offloading, kernel bypassing, and PCI peer-to-peer communication.

Further details on the design and implementation of NVMeVirt can be found in the following papers.
- [NVMeVirt: A Versatile Software-defined Virtual NVMe Device (FAST 2023)](https://www.usenix.org/conference/fast23/presentation/kim-sang-hoon)
- [Empowering Storage Systems Research with NVMeVirt: A Comprehensive NVMe Device Emulator (Transactions on Storage 2023)](https://dl.acm.org/doi/full/10.1145/3625006)
