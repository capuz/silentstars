---
repo: "Panchovix/nvidia-linux-vbios-vix-loader"
name: "nvidia-linux-vbios-vix-loader"
description: "Load a modified VBIOS per NVIDIA GPU at boot on Linux, in memory, through the open kernel modules"
readmeQualityOk: true
url: "https://github.com/Panchovix/nvidia-linux-vbios-vix-loader"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 45
forks: 9
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-10-15T19:28:30Z"
lastCommitAt: "2026-10-21T17:31:49Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 69
undervaluedScore: 12
maintainers: ["Panchovix"]
openGraphImageUrl: "https://opengraph.githubassets.com/c7048b0d70d581a34a7f12ed40edddc37ead466156c44b7657adef6988b001f6/Panchovix/nvidia-linux-vbios-vix-loader"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/panchovix"]
---

# NVIDIA Linux VBIOS Vix Loader

English | [Español](https://github.com/Panchovix/nvidia-linux-vbios-vix-loader/blob/HEAD/README_es.md)

Loads a modified VBIOS for each NVIDIA GPU at boot on Linux, **in memory**: the card's flash chip is never
written. It patches the NVIDIA open kernel modules so the GSP firmware starts with your VBIOS image, builds
them in a separate boot entry, rebuilds them automatically after kernel updates, and keeps your normal boot
entry as a fallback.

Works with NVIDIA 615.x (R615) drivers. It may stop working in a future driver if NVIDIA decides to change or
remove the override, so after every driver update run `nvbios system status` and check an edited value (for
example the power limits in `nvidia-smi -q -d POWER`).

Thanks to **@pantsoftime** ([overclock.net](https://www.overclock.net)), whose original `vbios_override` patch
this project is built on. Without it, none of this would have been possible.

To modify the VBIOS, use [NVIDIA VBIOS Vix Editor](https://github.com/Panchovix/nvidia-vbios-vix-editor).
This repository only loads it. On Windows, use
[NVIDIA Windows VBIOS Vix Loader](https://github.com/Panchovix/nvidia-windows-vbios-vix-loader).…
