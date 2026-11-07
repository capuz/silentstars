---
repo: "RealChrizzl/hitman-vr-foveation-fix"
name: "hitman-vr-foveation-fix"
description: "Fixes the blurry image outside the centre in HITMAN World of Assassination PC VR by disabling the game's fixed foveation: two full-resolution layers instead of four half-resolution ones. Edge-to-edge sharpness. Most noticeable on pancake lenses (Quest 3, Quest Pro). Memory-only, no game files touched."
readmeQualityOk: true
url: "https://github.com/RealChrizzl/hitman-vr-foveation-fix"
language: "PowerShell"
languages: ["PowerShell", "Python"]
languagePcts: [65, 35]
topics: ["fix", "foveated-rendering", "game-modding-tool", "hitman", "mod", "oculus", "pcvr", "quest-3", "reverse-engineering", "vr"]
stars: 20
forks: 3
openIssues: 4
closedIssues: 9
watchers: 0
contributors: 3
recentReleases: 4
createdAt: "2026-07-30T16:54:36Z"
lastCommitAt: "2026-11-07T10:37:12Z"
lastReleaseAt: "2026-08-25T16:14:42Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 86
undervaluedScore: 49
maintainers: ["RealChrizzl", "GREYBE4RD", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4c334b0ad79a488b504eee0f753bb544a8679951802ffb75ae32a8bd02a7bf28/RealChrizzl/hitman-vr-foveation-fix"
---

# HitmanVRFoveationFix

**Edge-to-edge sharpness for HITMAN World of Assassination in PC VR.**

HITMAN's PC VR renderer uses fixed foveation: a small high-resolution area in the centre of the image and lower-resolution coverage around it. On modern pancake-lens headsets, that software blur remains visible far into the periphery.

HitmanVRFoveationFix changes the renderer to use two full-resolution eye layers across the full field of view while preserving the four logical views HITMAN still expects for geometry and visibility.

## What's new in Windows v1.6.2

Windows v1.6.2 adds verified support for HITMAN **3.290.1**, alongside the existing **3.270.1** profile. Each profile uses its own executable fingerprint, exact addresses and instruction contexts for all eight base patches and three refraction hooks.

The fallback full-field-of-view signature now covers both Oculus and OpenVR with exactly two required matches. This fixes the OpenVR field-offset change from `0x950` to `0x8E0` in 3.290.1. Thanks to **zlondrej** for [PR #23](https://github.com/RealChrizzl/hitman-vr-foveation-fix/pull/23).

The 3.290.1 fix was tested successfully with both Oculus and SteamVR.…
