---
repo: "Cyridd/cmpunlocker"
name: "cmpunlocker"
description: "NVIDIA CMP 40HX unlock and research for Linux and Windows: compute, PCIe Gen2 x16, 8 GiB ReBAR, Vulkan throttle bypass."
readmeQualityOk: true
url: "https://github.com/Cyridd/cmpunlocker"
language: "C"
languages: ["C", "Go"]
languagePcts: [41, 40]
topics: ["cmp", "cmp-40hx", "cmp40hx", "nvidia", "nvidia-gpu"]
stars: 66
forks: 13
openIssues: 2
closedIssues: 6
watchers: 4
contributors: 4
recentReleases: 4
createdAt: "2026-08-21T11:13:47Z"
lastCommitAt: "2026-10-15T08:31:09Z"
lastReleaseAt: "2026-10-04T19:50:06Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 83
undervaluedScore: 39
maintainers: ["Cyridd", "pearlfortune", "sbccc1888"]
openGraphImageUrl: "https://opengraph.githubassets.com/f289d9e2490aa00b65fbe845418835973709f2bf156d00e19fd22a8f3b44e3bd/Cyridd/cmpunlocker"
discussionCount: 2
---

# CMP 40HX - Compute, PCIe, ReBAR & Vulkan Pipeline Unlocks (Linux + Windows)

Hardware-research project for the NVIDIA CMP 40HX (TU106, PCI device ID `10de:1f0b`), covering both Linux and Windows.

- **Linux** (repository root) — three open-kernel-module patches for NVIDIA `610.57.04` plus one optional proprietary-userspace patch, installed by `install.sh`.
- **Windows / UEFI** ([`windows/`](https://github.com/Cyridd/cmpunlocker/blob/HEAD/windows/)) — a UEFI unlock application and Go installer/checker/uninstaller tools. See [`windows/README.md`](https://github.com/Cyridd/cmpunlocker/blob/HEAD/windows/README.md).

The two halves are independent: they unlock the same hardware by different means and share no code. Pick the one matching your OS.

## What it unlocks

- **Compute / SM configuration unlock** — changes the protected GSP/SEC2 initialization state used by the tested compute paths.
- **PCIe Gen2 x16 unlock** — raises the link from the stock PCIe Gen1 x16 (2.5 GT/s) to Gen2 x16 (5 GT/s) using the GSP/RM policy path plus a real link retrain.
- **Resizable BAR unlock** — enables an 8 GiB BAR1 aperture.
- **Pipeline bind / MME throttle unlock** (Linux, optional) — removes the…
