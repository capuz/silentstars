---
repo: "macos-powerpc/powerpc-ports"
name: "powerpc-ports"
description: "Modern software for macOS PowerPC: overlay with fixes and new ports to use with MacPorts"
readmeQualityOk: true
url: "https://github.com/macos-powerpc/powerpc-ports"
homepage: "https://macos-powerpc.org"
language: "Tcl"
languages: ["Tcl"]
languagePcts: [93]
topics: ["darwin", "macosx", "powerpc", "ports"]
stars: 39
forks: 10
openIssues: 25
closedIssues: 65
watchers: 0
contributors: 19
recentReleases: 0
createdAt: "2024-11-01T15:22:17Z"
lastCommitAt: "2026-08-30T00:45:10Z"
lastReleaseAt: "2025-08-01T03:35:56Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "funded"]
healthScore: 94
undervaluedScore: 59
maintainers: ["barracuda156", "watermark-hd", "alex-free"]
openGraphImageUrl: "https://opengraph.githubassets.com/09c62bb669d1014619211d480a4e6bc42be817c3d5af39551b9455a8e736a900/macos-powerpc/powerpc-ports"
fundingLinks: ["KO_FI:https://ko-fi.com/barracuda156"]
---

# PowerPC Ports
Overlay repo with fixes and new ports to use with [PPCPorts](https://github.com/macos-powerpc/ppcports-base) (or MacPorts).
Primary target system is macOS 10.6 PowerPC. Most of ports are expected to work on modern macOS on x86_64 and arm64 as well.

Recommended set-up:

1. Install 10.6.8 (Snow Leopard) PowerPC. On a G5 you may install 10.5.8 instead and build for ppc64 (support for Leopard is limited though).
2. Install PPCPorts from [MacOS PowerPC](https://macos-powerpc.org). It is configured to use this repo on top of mainstream MacPorts ports tree.

Bug reports are accepted via Issues and will be addressed. This project is not associated with MacPorts, so please do not open tickets related to these ports on Trac.
Using this repository with mainstream MacPorts is possible, but you are on your own there.

Commit history is preserved here and PRs are accepted.

R ports have been moved to a separate repository: https://github.com/macos-powerpc/R-ports (PowerPC support is maintained there too).

This repository is accessible at [CodeBerg](https://codeberg.org/macos-powerpc/powerpc-ports) and [GitHub](https://github.com/macos-powerpc/powerpc-ports).
