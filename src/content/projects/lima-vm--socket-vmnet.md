---
repo: "lima-vm/socket_vmnet"
name: "socket_vmnet"
description: "vmnet.framework support for unmodified rootless QEMU (no dependency on VDE)"
readmeQualityOk: true
url: "https://github.com/lima-vm/socket_vmnet"
language: "C"
languages: ["C"]
languagePcts: [75]
stars: 179
forks: 25
openIssues: 20
closedIssues: 34
watchers: 5
contributors: 26
recentReleases: 0
createdAt: "2022-05-10T09:33:53Z"
lastCommitAt: "2026-09-08T08:15:53Z"
lastReleaseAt: "2024-10-17T15:59:10Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 85
undervaluedScore: 36
maintainers: ["dependabot[bot]", "jandubois", "AkihiroSuda"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc1925135d6e52a7026ebbaeec858e2a36604b613256c6e49f9d179e69e9f28c/lima-vm/socket_vmnet"
---

# socket_vmnet: vmnet.framework support for rootless and VDE-less QEMU

`socket_vmnet` provides [vmnet.framework](https://developer.apple.com/documentation/vmnet) support for QEMU.

`socket_vmnet` does not require QEMU to run as the root user.

(But `socket_vmnet` itself has to run as the root, in most cases.)

`socket_vmnet` was forked from [`vde_vmnet`](https://github.com/lima-vm/vde_vmnet) v0.6.0.
Unlike `vde_vmnet`, `socket_vmnet` does not depend on VDE.

  - [Install](#install)
    - [From binary](#from-binary)
    - [From source](#from-source)
    - [From Homebrew](#from-homebrew)
    - [From MacPorts](#from-macports)
  - [Usage](#usage)
    - [QEMU](#qemu)
    - [Lima](#lima)
    - [Tart](#tart)
  - [Advanced usage](#advanced-usage)
    - [Multi VM](#multi-vm)
    - [Bridged mode](#bridged-mode)
  - [FAQs](#faqs)
    - [Why does `socket_vmnet` require root?](#why-does-socket_vmnet-require-root)
    - [Is it possible to run `socket_vmnet` with SETUID?](#is-it-possible-to-run-socket_vmnet-with-setuid)
  - [How is socket_vmnet related to vde_vmnet?](#how-is-socket_vmnet-related-to-vde_vmnet)
    - [How is socket_vmnet related to QEMU-builtin vmnet…
