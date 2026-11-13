---
repo: "Alano6678/hwaoi-recomp"
name: "hwaoi-recomp"
description: "Experimental Hyrule Warriors: Age of Imprisonment recompilation for Windows, with a local NUP compiler. Non-60 FPS modes accelerate gameplay; higher resolutions are unstable."
readmeQualityOk: true
url: "https://github.com/Alano6678/hwaoi-recomp"
language: "C"
languages: ["C", "Python"]
languagePcts: [66, 30]
topics: ["cpp", "experimental", "static-recompilation", "vulkan", "windows", "hwaoi"]
stars: 66
forks: 1
openIssues: 9
closedIssues: 1
watchers: 3
contributors: 3
recentReleases: 3
createdAt: "2026-11-05T14:45:05Z"
lastCommitAt: "2026-11-12T16:55:23Z"
lastReleaseAt: "2026-11-13T11:23:41Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 81
undervaluedScore: 30
maintainers: ["LibertyPrime27", "Alano6678"]
openGraphImageUrl: "https://opengraph.githubassets.com/e8289a6bdf6f59b7def76540049f9541bef9ecedf850cfc9b2932349c8a05eee/Alano6678/hwaoi-recomp"
---

# HWAoI Recomp

**HWAoI Recomp** is an experimental static recompilation of *Hyrule Warriors: Age of Imprisonment* for Nintendo Switch 2 into a native Windows x86-64 application with a Vulkan renderer.

The game's ARM64 code is translated to C ahead of time and compiled with a C/C++ runtime. An NVN 2 implementation handles graphics, translating Ampere shaders to SPIR-V for Vulkan. This project builds on [DKB Recomp](https://github.com/Lucas-blip-png/dkb-pc-recomp).

## Project lead — [Alano6678](https://github.com/Alano6678)

HWAoI adaptation, runtime and renderer development, Windows compiler distribution, memory optimization, testing, and project maintenance.

## Major contributor — [LibertyPrime27](https://github.com/LibertyPrime27)

Combat performance and QUADS batching, buffer-texture lighting, first-load stutter reduction, update and DLC support, two-player controls, and compiler/settings improvements. Their work is included through [#9](https://github.com/Alano6678/hwaoi-recomp/pull/9), [#10](https://github.com/Alano6678/hwaoi-recomp/pull/10), and [#11](https://github.com/Alano6678/hwaoi-recomp/pull/11).

> [!NOTE]
> Bring your own matching game files. No ROMs, keys,…
