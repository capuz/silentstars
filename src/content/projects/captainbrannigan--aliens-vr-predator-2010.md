---
repo: "CaptainBrannigan/Aliens-vr-Predator-2010"
name: "Aliens-vr-Predator-2010"
description: "Vibe coded VR mod for 2010's Aliens vs Predator"
readmeQualityOk: true
url: "https://github.com/CaptainBrannigan/Aliens-vr-Predator-2010"
language: "C++"
languages: ["C++"]
languagePcts: [97]
stars: 8
forks: 0
openIssues: 3
closedIssues: 4
watchers: 0
contributors: 2
recentReleases: 7
createdAt: "2026-10-17T01:05:58Z"
lastCommitAt: "2026-11-02T15:17:27Z"
lastReleaseAt: "2026-11-01T23:33:14Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 80
undervaluedScore: 34
maintainers: ["CaptainBrannigan"]
openGraphImageUrl: "https://opengraph.githubassets.com/e64c019521abbf84b6297f990bb8ad480c65bfb7fdb195b0a5c45f88c93ab123/CaptainBrannigan/Aliens-vr-Predator-2010"
---

# Aliens vs Predator VR

An unofficial VR mod for **Aliens vs Predator** (2010, Rebellion, DirectX 11). The game has no VR support of its own.
This mod is a proxy `dxgi.dll` that hooks the game's rendering and input and talks to SteamVR directly from inside
the game: stereo 3D for all three species, head-tracked look and movement, the Marine's gun and the arms of the
Marine and the Predator on your motion controllers, and an in-headset settings menu.

**Status: 1.5, a hobby reverse-engineering project.** See [Known issues](#known-issues) and [Planned](#planned) for
what isn't done yet.

> **SteamVR is the only runtime targeted.** The mod talks to SteamVR through its `openvr_api.dll` and nothing else: it
> doesn't use OpenXR. **Virtual Desktop users on VDXR need to be in SteamVR:** start SteamVR, then launch the game from
> there. VDXR on its own won't work.

## Requirements

- Aliens vs Predator (the Steam PC release), its **DirectX 11** version, `AvP_DX11.exe`. The DirectX 9 `AvP.exe` isn't
  supported.
- SteamVR **2.17 or newer** (the release that added a 32-bit runtime), with a headset and motion controllers.
  Developed and tested on a Meta Quest 3 over Steam Link with Touch…
