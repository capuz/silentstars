---
repo: "The-Cix-Project/cix"
name: "cix"
description: "cix OS is more than a distribution; it is a discipline."
readmeQualityOk: true
url: "https://github.com/The-Cix-Project/cix"
homepage: "https://cix.world/"
language: "C"
languages: ["C"]
languagePcts: [91]
topics: ["c", "containerization", "containers", "linux", "operating-system"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2026-09-15T11:50:14Z"
lastCommitAt: "2026-10-28T09:56:57Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 45
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/4c945ed0b6f048b22c49d71f9bae58c98ccb87e656e2a7e290ff2f0ce78f8e62/The-Cix-Project/cix"
---

# Cix

**Systems, directly.**

The Cix source is free software under the [GNU General Public License,
version 3](https://github.com/The-Cix-Project/cix/blob/HEAD/LICENSE), or (at your option) any later version
(`GPL-3.0-or-later`).
Contributions follow the [DCO-based contribution guide](https://github.com/The-Cix-Project/cix/blob/HEAD/CONTRIBUTING.md); the
Cix name and marks are governed separately by [TRADEMARK.md](https://github.com/The-Cix-Project/cix/blob/HEAD/TRADEMARK.md).

Cix OS is a rolling-release hardware and workload orchestration platform, compiled entirely from source: a hand-rolled container runtime on raw Linux namespaces and cgroups, image layering by btrfs snapshot, a 100% custom C networking data plane, and a REST control layer for the host, containers, hardware, disks, networks, DNS, PKI, and more — no runc, no Open vSwitch, no eBPF-based networking dataplane. Cix's own code is compiled exclusively with the Tiny C Compiler (TCC); third-party packages build with TCC by default and with Cix's own self-hosted gcc where TCC cannot ([ADR-0224](https://github.com/The-Cix-Project/cix/blob/HEAD/docs/adr/0224-the-toolchain-tenet.md),…
