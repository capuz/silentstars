---
repo: "ILFforever/YW4Recomp"
name: "YW4Recomp"
description: "Fan static recompilation of Yokai Watch 4++ (Switch) to native Windows/Linux. ARM64 → C, NVN on Vulkan."
readmeQualityOk: true
url: "https://github.com/ILFforever/YW4Recomp"
homepage: "https://ilfforever.github.io/YW4Recomp/"
language: "C"
languages: ["C"]
languagePcts: [66]
topics: ["aarch64", "decompilation", "nintendo-switch", "recompilation", "reverse-engineering", "static-recompilation", "vulkan", "yokai-watch"]
stars: 15
forks: 1
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 3
recentReleases: 4
createdAt: "2026-10-21T10:33:15Z"
lastCommitAt: "2026-11-13T11:26:20Z"
lastReleaseAt: "2026-11-13T11:19:52Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 53
maintainers: ["ILFforever", "Quandiy"]
openGraphImageUrl: "https://opengraph.githubassets.com/99389e360eca0f31ebd7fb7f45e092c6a311a77cf66854f6e4ead3db324e12d0/ILFforever/YW4Recomp"
---

4K · Ultrawide 21:9 / 32:9 · PCSS soft shadows · TAA / SMAA · ×16 texture filtering · Xbox, PlayStation and Joy-Cons

> [!IMPORTANT]
> **Built with AI.** Claude (Anthropic's model, used through Claude Code) wrote most of this repository: the
> recompiler, the runtime, the reverse engineering notes and these docs. A human decides what to work on, plays and
> tests every build, compares it against the real game and reviews the changes. It is a personal fan project that
> happens to be public. If AI-written code is not something you want to use or read, feel free to pass on it; if you
> do run it, that is your call.

> [!NOTE]
> Platforms:
> - Windows - x86-64, Vulkan graphics backend (this is what is built and tested): NVIDIA RTX, and AMD Radeon
>   ([decision 0059](https://github.com/ILFforever/YW4Recomp/blob/HEAD/docs/decisions/0059-amd-depth-format-fallback.md)): a Ryzen 5 7530U laptop's integrated graphics
>   runs it at about 35-40 frames/s at native resolution, where the Eden emulator gets 22-30
> - Linux - x86-64, Vulkan: works. Tester [ouni666](https://github.com/ouni666) plays it on AOSC OS (KDE Plasma, Wayland) with an AMD RX 6600 XT at
>   about 110-120 frames/s, the GPU…
