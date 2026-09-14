---
repo: "coolbho3k/emibios"
name: "emibios"
description: "a GBA BIOS replacement"
readmeQualityOk: true
url: "https://github.com/coolbho3k/emibios"
language: "Zig"
languages: ["Zig", "Assembly"]
languagePcts: [54, 44]
stars: 35
forks: 2
openIssues: 1
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 2
createdAt: "2026-09-11T08:23:04Z"
lastCommitAt: "2026-09-14T09:07:08Z"
lastReleaseAt: "2026-09-14T05:44:29Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 21
maintainers: ["coolbho3k", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b19df4ce13a2275745553a5663aaf8ed6a2dd8914c26c3d560835fd4309ff2aa/coolbho3k/emibios"
---

# emibios: a GBA BIOS replacement

emibios is a research GBA BIOS replacement that aims to be as accurate as possible when running
commercial games while being freely redistributable. It is not intended to contain, or use as
reference, any proprietary code directly derived from the retail BIOS. Instead, we rely on observing
and matching the behavior of the retail BIOS.

Originally based on [Cult-of-GBA BIOS](https://github.com/Cult-of-GBA/BIOS/) by fleroviux and
DenSinH.

 

### Features

- Runs most commercial games
- Compatible with most software emulators and FPGA cores
- Syncs with the retail BIOS in TAS playback in many games
- Most SWIs are accurate in both result and register/flag side effects
- Many SWIs are tuned to match the retail BIOS in timing for most inputs
- Some SWIs are adjusted for timing under bus/IRQ/DMA contention where it was observed to affect accuracy for tested commercial games
- Multiboot (Normal/Multiplay sender and receiver, JoyBus receiver), tested on FPGA hardware and GameCube with real link cables as well as mGBA/Dolphin.
- Sound functionality used in commercial games (as far as I know, let me know if I missed anything or you find any bugs) is…
