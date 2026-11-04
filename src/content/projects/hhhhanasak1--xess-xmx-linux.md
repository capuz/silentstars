---
repo: "HHHHanasak1/xess-xmx-linux"
name: "xess-xmx-linux"
description: "Intel XeSS XMX super resolution and frame generation on Linux/Proton for Arc (Xe-HPG, Xe2, Xe3): igdext shim + patched Mesa ANV running XeSS' own CM kernels"
readmeQualityOk: true
url: "https://github.com/HHHHanasak1/xess-xmx-linux"
language: "C++"
languages: ["C++"]
languagePcts: [95]
stars: 45
forks: 6
openIssues: 0
closedIssues: 8
watchers: 1
contributors: 5
recentReleases: 10
createdAt: "2026-09-22T05:00:06Z"
lastCommitAt: "2026-11-04T02:57:43Z"
lastReleaseAt: "2026-10-16T11:13:00Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 44
maintainers: ["HHHHanasak1", "IHulkSmashI", "RNI4114"]
openGraphImageUrl: "https://opengraph.githubassets.com/db37bac7e107676dce6eb8eae76b5de6897bcf728a9a5774afd19e0240ac2a71/HHHHanasak1/xess-xmx-linux"
---

# XeSS XMX on Linux (Proton) for Intel Arc: Xe-HPG, Xe2, Xe3

Real Intel **XeSS** super resolution and **XeSS frame generation** inside Proton games, running on the GPU's XMX
(matrix) units instead of the DP4a fallback that stock Wine/Proton gets. No Windows driver, no change to Proton or
vkd3d-proton:

* `igdext64.dll`, a shim built on Intel's open source [dxvk-igdext](https://github.com/GameTechDev/dxvk-igdext), answers
  XeSS' driver queries like an Intel driver and hands every C-for-Metal (CM) kernel XeSS submits over as a placeholder;
* a patched Mesa **ANV** Vulkan driver compiles those kernels with Intel's compiler (IGC) on first use and runs them in
  place of the placeholders, inside the normal vkd3d-proton queue;
* `ControlLib.dll`, a stand-in for Intel's Control Library, gives XeSS frame generation the override that Intel
  Graphics Software sets on Windows: `XESS_FG=<n>` in a game's launch options;
* `amd_fidelityfx_upscaler_dx12.dll` and `amd_fidelityfx_framegeneration_dx12.dll` run a game's FSR 3.1+ upscaling
  and frame generation on XeSS, so a game without XeSS gets XeSS on XMX and multi-frame generation as well: `FSR=xess`
  in its launch options…
