---
repo: "fobiat/home-ops"
name: "home-ops"
description: "Single-node Kubernetes homelab. Talos Linux, Flux, SOPS+age, Tailscale-first."
readmeQualityOk: true
url: "https://github.com/fobiat/home-ops"
language: "PowerShell"
languages: ["PowerShell", "Shell"]
languagePcts: [43, 43]
stars: 5
forks: 0
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2021-01-11T13:51:45Z"
lastCommitAt: "2026-08-17T04:20:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 71
maintainers: ["fobiat"]
openGraphImageUrl: "https://opengraph.githubassets.com/21b9c06231744cdc3a450a683e211b87474446e70bed952978894dffb9b203f4/fobiat/home-ops"
---

# home-ops

Single-node Kubernetes cluster running at home, managed with Flux.

One Talos Linux node, everything in this repository, nothing configured by hand. If the
machine dies I want to rebuild it from a clean disk and this Git history, which is the
whole reason it is laid out this way.

## Status

Being rebuilt. This is version 3, and nothing is running yet.

The history here goes back to January 2021. Version 1 was Kubernetes on a Dell PowerEdge
and lived in this repository until electricity prices made a full rack unappealing.
Version 2 was k3s on a Dell Optiplex and lives in
[-DEPRECIATED-k3s-homelab](https://github.com/fobiat/-DEPRECIATED-k3s-homelab) at the `v2`
tag. Version 3 starts here, on Talos.

The plan is real. The cluster is not, yet.

## Hardware

| | |
|---|---|
| Node | Dell Optiplex 3050 SFF, 4 cores, 8 threads, 32GB |
| Runs as | Talos VM on Hyper-V, external virtual switch |
| Storage | NVMe boot, second SSD for persistent volumes |
| Planned | Minisforum MS-03 class, at which point the Optiplex becomes the spare |

One node means no high availability. Upgrades take the cluster down, because there is
nowhere to drain to. The docs say so wherever it matters…
