---
repo: "aethersdr/AetherSDR"
name: "AetherSDR"
description: "Linux-native SmartSDR client for FlexRadio (FLEX-6000/8600) — Qt6 + C++20"
url: "https://github.com/aethersdr/AetherSDR"
language: "C++"
languages: ["C++"]
languagePcts: [96]
topics: ["amateur-radio", "cpp", "flexradio", "ham-radio", "hf-radio", "linux", "qt6", "sdr", "smartsdr", "software-defined-radio"]
stars: 168
forks: 72
openIssues: 231
closedIssues: 1630
watchers: 5
contributors: 41
recentReleases: 5
createdAt: "2026-03-12T17:33:54Z"
lastCommitAt: "2026-06-26T21:31:50Z"
lastReleaseAt: "2026-04-02T22:16:21Z"
status: "thriving"
tags: ["needs_contributors", "release_machine", "community_hub"]
healthScore: 97
undervaluedScore: 36
maintainers: ["jensenpat", "ten9876", "rfoust"]
openGraphImageUrl: "https://opengraph.githubassets.com/03feb04f74d00d9ae1ace4e6d7c8f249d7760d03ad87d9557f067f66d7129f60/aethersdr/AetherSDR"
discussionCount: 199
---

# AetherSDR

**A Linux-native client for FlexRadio Systems transceivers**

AetherSDR brings FlexRadio operation to Linux without Wine or virtual machines. Built from the ground up with Qt6 and C++20, it speaks the SmartSDR protocol natively and aims to replicate the full SmartSDR experience.

**Current version: 26.6.4** — CalVer (`YY.M.patch[.hotfix]`). | [Download](https://github.com/aethersdr/AetherSDR/releases/latest) | [Discussions](https://github.com/aethersdr/AetherSDR/discussions) | [What's New](https://github.com/aethersdr/AetherSDR/releases)

> **Cross-platform downloads available:** Linux AppImage, macOS universal DMG, Windows installer and portable ZIP.
> Linux is the primary supported platform. macOS and Windows builds are provided as a courtesy.

<p><i>Native. Open. Yours.</i></p>

---

## Highlights

- **GPU-accelerated spectrum & waterfall** — QRhi rendering on the GPU (OpenGL/Metal/D3D11), ~71% CPU reduction over CPU paint, GPU-composited slice flags, and multi-GPU adapter selection
- **Multi-slice & multi-panadapter** — colour-coded VFO overlays, independent TX assignment, diversity/ESC beamforming; up to 8 detachable pans with native VITA-49 waterfall tiles, with…
