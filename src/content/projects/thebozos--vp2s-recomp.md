---
repo: "TheBozos/VP2S_Recomp"
name: "VP2S_Recomp"
description: "Native PC port of Valkyrie Profile 2: Silmeria (USA, SLUS-21452) by static recompilation with PS2Recomp: native renderer and audio, no GS/VU1/SPU2 emulation. No game data or keys included."
readmeQualityOk: true
url: "https://github.com/TheBozos/VP2S_Recomp"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [70, 25]
topics: ["cpp", "mips", "native-port", "opengl", "pc-port", "playstation-2", "ps2", "ps2recomp", "recompilation", "reverse-engineering"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2026-10-22T10:38:51Z"
lastCommitAt: "2026-11-07T22:50:33Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 48
maintainers: ["boubou666", "Arzaroth"]
openGraphImageUrl: "https://opengraph.githubassets.com/8f41fda9034e4bdc8647d86c7985244b6ed4a760af48a4dd614f9d4959b78244/TheBozos/VP2S_Recomp"
---

# VP2S_Recomp

**A native Windows port of *Valkyrie Profile 2: Silmeria*, made by statically recompiling the game's PlayStation 2 code to C++.**<br>
The game's own MIPS R5900 code, rebuilt as a Windows program, drawing and playing sound natively: no GS, no VU1 and no SPU2 emulation on the default path.

-8a2be2)

> [!IMPORTANT]
> No game files are included: no ELF, overlay modules, IOP modules, decryption key, textures, meshes, or code
> generated from them. You need **your own copy** of the game. The port targets the **USA release, `SLUS-21452`**:
>
> | Release | File | SHA-1 |
> |---|---|---|
> | USA (target) | `SLUS_214.52` | `0534bfe1a7e6877b4430f2221ea7ce614fea4afd` |
> | PAL (former target, being dropped) | `SLES_546.45` | `541fa8d563b2834350fd0a635a4d3631574ad778` |
>
> The European build tree still exists (`build/`), but new work is done and checked on the USA disc only.

## Screenshots

Captured from `vp2s.exe` (USA disc), native renderer.

| | |
|:---:|:---:|
|  |  |
| Title screen (animated sky, matched against PCSX2) | The port town of Logun |
|  |  |
| Camp menu | Settings |
|  | |
| Load game (data menu) | |

## Goal: a PC port, not an emulator

The end state has…
