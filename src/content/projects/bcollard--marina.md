---
repo: "bcollard/marina"
name: "marina"
description: "Opinionated CLI for managing multiple KinD clusters on a macbook with direct routing to Services type LoadBalancer, and more..."
readmeQualityOk: true
url: "https://github.com/bcollard/marina"
homepage: "https://marina.run"
language: "Go"
languages: ["Go"]
languagePcts: [99]
stars: 8
forks: 0
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-26T21:41:55Z"
lastCommitAt: "2026-10-31T09:53:36Z"
lastReleaseAt: "2026-05-31T19:49:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 52
maintainers: ["bcollard", "dependabot[bot]", "gentinel-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/678d9734d780598a7d4727281a423ca2eeb4cc8aaf8f0f07061ae446400692be/bcollard/marina"
---

&nbsp;&middot;&nbsp;
  &nbsp;&middot;&nbsp;
  &nbsp;&middot;&nbsp;

_Fast, efficient, and opinionated multi-cluster manager for macOS Silicon laptops._

**marina** is an dependency-free CLI that manages a macOS Virtualization.framework (VZ) Lima VM, installs Docker inside it, creates and manages multiple [kind](https://kind.sigs.k8s.io/) clusters, and wires up pure L3 routing from your Mac into the kind bridge subnet — no SNAT, no VPN, direct IP access to pods and LoadBalancer services.

Marina is self-contained, clean, and can work alongside your current Docker setup without conflict (Orbstack, Colima, Rancher Desktop, etc.). More details below.

For lower-level design, see [docs/MARINA-LLD-architecture.png](https://github.com/bcollard/marina/blob/HEAD/docs/MARINA-LLD-architecture.png)
and the [Architecture guide](https://marina.run/docs/architecture.html).

---

## Table of contents
- [Documentation](#documentation)
- [Demo](#demo)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Quick start](#quick-start)
- [What it does](#what-it-does)
- [Configuration reference](#configuration-reference)
- [CLI reference](#cli-reference)
- [Networking…
