---
repo: "Panchovix/nvidia-windows-vbios-vix-loader"
name: "nvidia-windows-vbios-vix-loader"
description: "Load a modified VBIOS for NVIDIA GPUs on Windows through the driver's registry override, without flashing"
readmeQualityOk: true
url: "https://github.com/Panchovix/nvidia-windows-vbios-vix-loader"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 163
forks: 13
openIssues: 3
closedIssues: 4
watchers: 2
contributors: 1
recentReleases: 4
createdAt: "2026-10-16T22:14:29Z"
lastCommitAt: "2026-10-21T17:31:47Z"
lastReleaseAt: "2026-10-19T21:48:33Z"
status: "newborn"
tags: ["solo_builder", "funded"]
healthScore: 81
undervaluedScore: 18
maintainers: ["Panchovix"]
openGraphImageUrl: "https://opengraph.githubassets.com/1db2efbd498cc9885de4c3201f603f57397ee8da17329a0c24719201684c99b2/Panchovix/nvidia-windows-vbios-vix-loader"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/panchovix"]
---

# NVIDIA Windows VBIOS Vix Loader

English | [Español](https://github.com/Panchovix/nvidia-windows-vbios-vix-loader/blob/HEAD/README_es.md)

Loads a modified VBIOS for an NVIDIA GPU on Windows **without flashing it**. The image is stored in the
GPU's driver registry key, where the NVIDIA driver looks for a VBIOS override when the device starts, and
the device is restarted. `verify` checks that the driver is running it, and `unload` removes it again. The
card's flash chip is never written.

Works with NVIDIA 616.x, 617.x and 621.x drivers (616.56 or newer; tested on 617.42, 617.70 and 621.01). It may
stop working in a future driver if NVIDIA decides to change or remove the registry override, so click **Verify**
after every driver update. On 621.01, overrides loaded on an RTX 4090 and an RTX A2000 stayed in place through the
driver update and, after restarting Windows, Verify reported both as `override-active`. On an RTX 5070, Verify
reported `override-active` for an edited VBIOS loaded on 621.01 after a GPU restart, without restarting Windows.
Turing is not tested on 621.01 yet.

Thanks to **@pantsoftime** ([overclock.net](https://www.overclock.net)), whose original…
