---
repo: "Michael-Sebero/ULU"
name: "ULU"
description: "Universal Linux Upgrade: this post-installation script increases system performance and security."
readmeQualityOk: true
url: "https://github.com/Michael-Sebero/ULU"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["gaming", "s6", "installer", "encrypted-dns", "artix-linux", "openrc", "performance", "xanmod", "scx", "runit"]
stars: 119
forks: 1
openIssues: 0
closedIssues: 2
watchers: 3
contributors: 1
recentReleases: 1
createdAt: "2022-11-21T00:14:32Z"
lastCommitAt: "2026-11-07T16:12:24Z"
lastReleaseAt: "2026-10-10T16:25:04Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 84
undervaluedScore: 32
maintainers: ["Michael-Sebero"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/568579586/82d06c88-341a-46ae-a362-952d1b509589"
---

## Summary / TLDR
ULU is a post-installation script and configuration set for Arch, Void, and Debian-based Linux distributions. It configures the existing OS for gaming, low-latency workloads and improved security by installing packages and applying configurations. Utility commands are included also which help manage the system.

Originally I was inspired by Luke Smith's [LARBS](https://github.com/LukeSmithxyz/LARBS), which is why ULU's installer is script-based. If you want to see what changes I've made, the files ULU installs are in [files/ulu-packages](https://github.com/Michael-Sebero/ULU/tree/main/files/ulu-packages).

## **Core Components**

### **High Performance Kernel & Schedulers**
* [XanMod](https://xanmod.org/) - Custom Linux kernel optimized for speed, responsiveness and desktop performance
* [SCX-AURA](https://github.com/Michael-Sebero/SCX-AURA) - Laptop CPU scheduler based on [scx_bpfland](https://github.com/sched-ext/scx/tree/main/scheds/rust/scx_bpfland) and inspired by the [XNU](https://github.com/apple-oss-distributions/xnu/blob/main/osfmk/kern/sched_clutch.c) scheduler
* [SCX-IMPERATOR](https://github.com/Michael-Sebero/SCX-IMPERATOR) - Gaming CPU scheduler…
