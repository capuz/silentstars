---
repo: "zakura-core/zakura"
name: "zakura"
description: "Zcash full node, built for scale."
readmeQualityOk: true
url: "https://github.com/zakura-core/zakura"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
stars: 100
forks: 42
openIssues: 155
closedIssues: 98
watchers: 4
contributors: 22
recentReleases: 0
createdAt: "2026-06-12T23:32:08Z"
lastCommitAt: "2026-11-11T19:19:40Z"
lastReleaseAt: "2026-07-25T21:40:06Z"
status: "thriving"
tags: []
healthScore: 87
undervaluedScore: 30
maintainers: ["czarcas7ic", "ValarDragon", "evan-forbes"]
openGraphImageUrl: "https://opengraph.githubassets.com/fbbb456dbfd52169037832ad30538e459fb78eb780f3a89df44e67572c30286f/zakura-core/zakura"
---

- [Getting Started](#getting-started)
  - [Installer](#installer)
  - [Docker](#docker)
  - [Manual Install](#manual-install)
- [Documentation](#documentation)
- [User support](#user-support)
- [Security](#security)
- [License](#license)

---

[**Zakura**](https://github.com/zakura-core/zakura/) is a consensus-compatible Zcash full node written in Rust, built for scale. Supporting payments at global scale requires on the order of 50k TPS, which translates to consensus processing at least 100 MB/s of block data. Today's chain peaks at 28 KB/s. With cryptographic optimizations to the Zcash protocol underway in [Project Tachyon](https://tachyon.z.cash/) and at [Valargroup](https://valargroup.dev), Zakura is the node implementation built to close that gap.

Zakura is forked from [Zebra](https://github.com/ZcashFoundation/zebra). This first release brings major improvements over existing Zcash node software:

- Performance: Blockchain sync is nearly 5× faster than Zebra. Block execution is notably faster than Zebra, especially on worst-case sandblast attacks.
- Pruning and snapshots: Native block pruning with configurable retention lets you operate a full node with substantially less…
