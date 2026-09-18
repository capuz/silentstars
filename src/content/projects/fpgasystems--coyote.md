---
repo: "fpgasystems/Coyote"
name: "Coyote"
description: "Framework providing operating system abstractions and a range of shared networking and memory services for common modern heterogeneous platforms."
readmeQualityOk: true
url: "https://github.com/fpgasystems/Coyote"
homepage: "https://fpgasystems.github.io/Coyote/"
language: "SystemVerilog"
languages: ["SystemVerilog"]
languagePcts: [48]
topics: ["fpga", "rdma", "tcp", "virtualization", "gpu", "networking", "hardware-acceleration"]
stars: 451
forks: 125
openIssues: 10
closedIssues: 63
watchers: 15
contributors: 30
recentReleases: 0
createdAt: "2020-09-04T22:30:25Z"
lastCommitAt: "2026-09-18T14:03:54Z"
lastReleaseAt: "2025-07-24T22:49:30Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 91
undervaluedScore: 35
maintainers: ["bo3z", "JonasDann", "maximilianheer"]
openGraphImageUrl: "https://opengraph.githubassets.com/4838efef9b580b96b5c6c305b63b86753e83e8398766c6341a710dde558b852b/fpgasystems/Coyote"
discussionCount: 16
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="img/cyt_logo_dark.png" width = 450>
    <source media="(prefers-color-scheme: light)" srcset="img/cyt_logo_light.png" width = 450>
  </picture>
</p>

# _An operating system for FPGAs_
Coyote is an open-source shell which aims to facilitate the deployment of FPGAs in datacenters and cloud systems. One could think of Coyote as an OS for FPGAs, taking care of standard system abstractions for multi-tenancy, multi-threading, reconfiguration, networking (RDMA, TCP/IP), virtualized memory (DRAM, HBM) and PCIe interaction with other hardware (CPU, GPU). Generally speaking, Coyote aims to simplify the application deployment process and enable developers to solely focus on their application and its performance, rather than infrastructure development. By providing clear and simple-to-use interfaces in both hardware and software, Coyote allows everyone to leverage the mentioned abstractions for customized acceleration offloads and build distributed and heterogeneous computer systems, consisting of many FPGAs, GPUs and CPUs. Some examples of such systems would be [distributed recommender…
