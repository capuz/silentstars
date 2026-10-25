---
repo: "mr-finster/vf3-recomp"
name: "vf3-recomp"
description: "Virtua Fighter 3 (Sega Model 3, 1996) for Mac, Windows and Steam Deck: the arcade's PowerPC program recompiled to native code, up to 6x, widescreen, smooth 120 fps. Bring your own vf3.zip."
readmeQualityOk: true
url: "https://github.com/mr-finster/vf3-recomp"
homepage: "https://vf3-recomp.pages.dev"
language: "C++"
languages: ["C++"]
languagePcts: [93]
topics: ["arcade", "fighting-game", "recompilation", "sega", "virtua-fighter", "sega-model-3"]
stars: 42
forks: 7
openIssues: 4
closedIssues: 5
watchers: 3
contributors: 2
recentReleases: 9
createdAt: "2026-10-19T00:27:03Z"
lastCommitAt: "2026-10-25T08:23:50Z"
lastReleaseAt: "2026-10-25T08:40:35Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 81
undervaluedScore: 42
maintainers: ["mr-finster"]
openGraphImageUrl: "https://opengraph.githubassets.com/80b062f7a6650d50105b68691c7cbf6727181056fbfe242f31b449a61f232f0e/mr-finster/vf3-recomp"
---

program, recompiled to native code, with render scales up to 6x, widescreen and ultrawide, smooth motion up to 120
pictures a second and the 3D on the GPU.</b></p>

> [!IMPORTANT]
> No game files are included: no ROMs and nothing made from them. You need your own dump of the game as MAME's
> `vf3` set (`vf3.zip`, Revision D). It is read on your computer, and the game's program is recompiled there each
> time it starts. An unofficial fan project, not made, approved or supported by SEGA, and not affiliated with it.

## About

Virtua Fighter 3 Recomp runs the game's own program, for the board's PowerPC 603e, recompiled to native code
(ARM64 or x86-64) from your ROM each time it starts, and checked frame for frame against its own interpreter, which
is itself frame-identical to the Supermodel reference on every scripted run (the attract mode, all twelve
fighters, a versus match and the test menu: 173,000 frames). The rest of the Model 3 board is this port's own
code: the board itself (memory map, IRQs, the 53C810 SCSI controller's DMA, the JTAG chain, EEPROM, inputs), the
tile generator and the Real3D Pro-1000 (a scene builder and two renderers: on the CPU, and on the GPU with
SDL_GPU,…
