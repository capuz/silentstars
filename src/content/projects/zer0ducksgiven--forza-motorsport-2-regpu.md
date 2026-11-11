---
repo: "zer0ducksgiven/Forza-Motorsport-2-ReGPU"
name: "Forza-Motorsport-2-ReGPU"
description: "Native PC port of Forza Motorsport 2: static recompilation of the CPU code and a native D3D12 renderer"
readmeQualityOk: true
url: "https://github.com/zer0ducksgiven/Forza-Motorsport-2-ReGPU"
language: "C++"
languages: ["C++"]
languagePcts: [98]
stars: 81
forks: 4
openIssues: 4
closedIssues: 23
watchers: 5
contributors: 4
recentReleases: 10
createdAt: "2026-10-18T17:37:58Z"
lastCommitAt: "2026-11-11T19:44:40Z"
lastReleaseAt: "2026-10-23T17:27:17Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 37
maintainers: ["zer0ducksgiven", "tankyx"]
openGraphImageUrl: "https://opengraph.githubassets.com/c0f12e186720ddaa1a67034b1958b545bacfde500c256aab156bcb0887b97160/zer0ducksgiven/Forza-Motorsport-2-ReGPU"
---

# Forza Motorsport 2 ReGPU

A native Windows port of **Forza Motorsport 2** (Xbox 360). Nothing is emulated:

- **CPU:** the game's entire PowerPC executable is statically recompiled to x64 C++
  with [XenonRecomp](https://github.com/hedge-dev/XenonRecomp) (51,034 functions), running on our own
  implementation of the Xbox 360 kernel and XAM. No interpreter, no JIT.
- **GPU:** a native Direct3D 12 renderer replaces Xenos GPU emulation. The game's
  Xenos shader microcode is translated to HLSL, its render state to D3D12 pipelines,
  EDRAM resolves to GPU copies, and its tiled textures are decoded natively. An experimental
  Vulkan renderer does the same through Vulkan (see [Vulkan renderer](#vulkan-renderer-experimental)).

No game data is included: you need your own copy of the disc. See
[FM2-native-scope.md](https://github.com/zer0ducksgiven/Forza-Motorsport-2-ReGPU/blob/HEAD/FM2-native-scope.md) for the plan and [TESTING.md](https://github.com/zer0ducksgiven/Forza-Motorsport-2-ReGPU/blob/HEAD/TESTING.md)
for playing it.

For support or to get involved in the development of ReGPU, join our Discord server:
https://discord.gg/pVEpmSk2G3

## Install

The installer contains no game…
