---
repo: "NoRain211/doa2u-re"
name: "doa2u-re"
description: "Native Windows port of Dead or Alive 2 Ultimate (Xbox), built by static recompilation with a hand-written runtime. Requires your own copy of the game."
readmeQualityOk: true
url: "https://github.com/NoRain211/doa2u-re"
homepage: "https://github.com/NoRain211/doa2u-re/releases/latest"
language: "C"
languages: ["C", "C++"]
languagePcts: [54, 37]
topics: ["dead-or-alive", "direct3d11", "game-port", "pc-port", "recompilation", "reverse-engineering", "static-recompilation", "windows", "xbox"]
stars: 84
forks: 3
openIssues: 10
closedIssues: 9
watchers: 3
contributors: 3
recentReleases: 9
createdAt: "2026-10-19T20:13:35Z"
lastCommitAt: "2026-10-29T21:24:29Z"
lastReleaseAt: "2026-10-29T02:14:44Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 35
maintainers: ["NoRain211", "tmcleroy"]
openGraphImageUrl: "https://opengraph.githubassets.com/d230407b69abdb9b43123108747bdbd9bc465a53fc5c2ddc4459aa6c103297a4/NoRain211/doa2u-re"
---

# DOA2U Native PC Port

**A native Windows, macOS and Linux port of _Dead or Alive 2 Ultimate_ (Xbox), built by static recompilation, with the goal of rewriting it into readable source.**

[Download](https://github.com/NoRain211/doa2u-re/releases/latest) ·
[Features](#features) ·
[Bring-up notes](https://github.com/NoRain211/doa2u-re/blob/HEAD/docs/bring-up.md) ·
[Report a bug](https://github.com/NoRain211/doa2u-re/issues)

Sister projects: [DOA3](https://github.com/NoRain211/doa3-re) ·
[DOAXBV](https://github.com/NoRain211/doaxbv-re)

> [!IMPORTANT]
> This project ships **no game files**. You need your own legally obtained copy
> of _Dead or Alive Ultimate_ (Xbox, USA), Disc 2. It is not affiliated with or
> endorsed by the game's rights holders.

## About

The DOA2 game executable on Ultimate's second disc is lifted to C with a
static recompiler, then linked against a hand-written runtime that replaces
the Xbox kernel imports and the game's Direct3D 8, DirectSound and input
libraries (XDK build 5849) with native Windows equivalents: Direct3D 11,
XAudio2 and SDL3. On macOS and Linux the same runtime renders through SDL_GPU
(Metal or Vulkan) and plays through SDL3 audio. The rest…
