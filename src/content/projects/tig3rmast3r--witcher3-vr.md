---
repo: "tig3rmast3r/witcher3-vr"
name: "witcher3-vr"
description: "VR mod for The Witcher 3 Wild Hunt videogame"
readmeQualityOk: true
url: "https://github.com/tig3rmast3r/witcher3-vr"
language: "C++"
languages: ["C++"]
languagePcts: [92]
stars: 47
forks: 4
openIssues: 4
closedIssues: 4
watchers: 4
contributors: 3
recentReleases: 7
createdAt: "2026-07-23T09:57:44Z"
lastCommitAt: "2026-08-30T00:42:37Z"
lastReleaseAt: "2026-08-19T02:00:42Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 77
undervaluedScore: 37
maintainers: ["tig3rmast3r", "djules75"]
openGraphImageUrl: "https://opengraph.githubassets.com/03635879089bd43598db5df95cd6cd223f342247ce660702ae0bc2d273804aee/tig3rmast3r/witcher3-vr"
fundingLinks: ["KO_FI:https://ko-fi.com/tig3rmast3r"]
discussionCount: 8
---

# The Witcher 3 VR

An unofficial work-in-progress mod that brings native Virtual Reality support
to the DirectX 12 version of *The Witcher 3: Wild Hunt*, using the latest
official PC release (currently Patch 4.04).

This is an independent implementation developed specifically for
*The Witcher 3*.
Its DX12 and VR architecture was informed by
[REFramework](https://github.com/praydog/REFramework) and
[UEVR](https://github.com/praydog/UEVR) by praydog; neither project is bundled
as a runtime dependency.

> [!WARNING]
> This project is under active development. Features may be incomplete,
> unstable, or incompatible with some hardware and game configurations.

> [!IMPORTANT]
> Gameplay currently requires a mouse and keyboard or a gamepad. VR motion
> controllers are not supported and are not currently planned.

## Current status

### Working

| Feature | Status |
|---|---|
| Mono rendering | Working |
| Same-tick geometry stereo | Working |
| No AA / FXAA | Working |
| TAAU | Working |
| DLSS | Working |
| DLAA | Working |
| Ray tracing | Experimental on AER + AFW - TAAU and AER + AFW - DLSS |
| Custom render resolutions | Working |
| 6DoF HMD free look | Synchronized with OpenXR |
|…
