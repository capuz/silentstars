---
repo: "Kaays/nfscarbon-nx"
name: "nfscarbon-nx"
description: "Unofficial native Nintendo Switch port of Need for Speed: Carbon (Xbox 360), statically recompiled with ReXGlue and drawn with Vulkan on NVK"
readmeQualityOk: true
url: "https://github.com/Kaays/nfscarbon-nx"
language: "C"
languages: ["C", "C++"]
languagePcts: [56, 43]
topics: ["homebrew", "need-for-speed-carbon", "nintendo-switch", "static-recompilation", "vulkan", "xbox-360"]
stars: 9
forks: 1
openIssues: 1
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-16T13:53:03Z"
lastCommitAt: "2026-11-26T12:56:38Z"
lastReleaseAt: "2026-11-14T17:33:28Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 84
undervaluedScore: 56
maintainers: ["claude", "Kaays"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc8cf2f8e84372da50d2a411714bdd2102ebba25f4fed7d2375b172df4ca063d/Kaays/nfscarbon-nx"
---

An **unofficial, work-in-progress** native Nintendo Switch port of the Xbox 360 version of **Need for Speed: Carbon**
(2006).

It is not an emulator. The PowerPC code of the game's `default.xex` is statically recompiled to C++ with
[ReXGlue](https://github.com/rexglue/rexglue-sdk), compiled for the Switch with devkitA64, and the game is drawn by a
native Vulkan renderer running on NVK (Mesa).

> **Important**
>
> **Playable, with an overclock.** The game boots, the menus, career, cutscenes and races all work, with sound and
> videos. It **needs an overclock**: at the Switch's stock clocks it does not run well. On the overclock we play
> with (CPU 1683 / GPU 844 / RAM 2133 MHz) and the fourth CPU core enabled, it holds 28-30 FPS in races and only
> dips to about 18-22 FPS at the start of Race Wars, while the whole pack is on screen, with clean sound. Long career
> sessions (2.5 h and more in our tests) run without freezes. Video settings (motion blur, anti-aliasing, resolution
> and more) are in the game's own **Options > Video** screen.
