---
repo: "MichaelMoroz/ShaderEmu"
name: "ShaderEmu"
description: "A computer emulated in a pixel shader (VRChat-compatible)"
readmeQualityOk: true
url: "https://github.com/MichaelMoroz/ShaderEmu"
language: "C"
languages: ["C"]
languagePcts: [50]
stars: 49
forks: 3
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-10-06T00:44:49Z"
lastCommitAt: "2026-11-04T02:56:25Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 26
maintainers: ["MichaelMoroz"]
openGraphImageUrl: "https://opengraph.githubassets.com/c39a9cdf412ba4081e627b7d629abc31613aa061ce9061f0c347aac2dab9a1c9/MichaelMoroz/ShaderEmu"
---

# ShaderEmu

A computer emulated entirely in a pixel shader: a 32-bit RISC-V machine that boots Linux to a
desktop, with its own GPU, and runs Half-Life. The target is VRChat, which allows only Direct3D 11
graphics shaders (no compute shaders, no UAVs), so the whole machine lives in textures that
fragment shaders rewrite each frame.

> **Accelerate everything that can be accelerated.**

The emulated CPU runs a few million instructions a second, one after another, and no amount of
tuning changes what kind of machine that is. The shader around it is massively parallel. So
anything that touches many bytes or many pixels is given to hardware devices that run in their
own shader passes, and the CPU only says what it wants: drawing, window composition, text,
3D, copies and fills of memory, pictures sampled from the ROM where they lie. That is the only
way this computer becomes usable.

## What it does today

- **The machine** is RV32IMAF with supervisor mode, derived from
  [pimaker's rvc](https://github.com/pimaker/rvc). Its processor state, RAM and the GPU's
  memory are one 2048 x 9280 texture (256 MB of RAM, 0x82000000 to 0x92000000, the devices' 32 MB
  below it); the root file…
