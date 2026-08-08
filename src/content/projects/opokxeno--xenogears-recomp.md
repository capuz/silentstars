---
repo: "OpokXeno/xenogears-recomp"
name: "xenogears-recomp"
description: "Xenogears (USA) for the Sony PlayStation recompiled using psxrecomp"
readmeQualityOk: true
url: "https://github.com/OpokXeno/xenogears-recomp"
language: "C"
languages: ["C", "Python"]
languagePcts: [73, 21]
stars: 26
forks: 2
openIssues: 2
closedIssues: 0
watchers: 4
contributors: 2
recentReleases: 4
createdAt: "2026-07-22T17:42:46Z"
lastCommitAt: "2026-08-08T04:34:19Z"
lastReleaseAt: "2026-07-27T00:21:22Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 68
undervaluedScore: 29
maintainers: ["OpokXeno"]
openGraphImageUrl: "https://opengraph.githubassets.com/46c6f728586749ea7c490d1f6d3a873aee8e07dffe4c1ad6985de586c9b6a35b/OpokXeno/xenogears-recomp"
---

# XenogearsRecomp

**Static recompilation of *Xenogears* (USA, Disc 1) for the PlayStation 1.**

Built on [PSXRecomp](https://github.com/mstan/psxrecomp) — a MIPS R3000A → C → native x64 static recompilation framework. Both the OpenBIOS and retail `SCPH1001.BIN` BIOS backends are recompiled alongside the game executable, producing a single binary that runs without an emulator.

> ⚠️ **Alpha status.** The game boots, reaches the title screen and intro FMV, and is playable — but not fully validated end to end. See [Status](#status).

---

## Requirements

To run a release of XenogearsRecomp, you need your own legally obtained copy of:

- **Xenogears (USA, Disc 1)** — disc image (`.cue`/`.bin`)

The separate game EXE (`SLUS-006.64`) is required only for source generation; it is not needed to run a release.

Release packages include the redistributable OpenBIOS image and its MIT notice. At runtime, a legally obtained matching `SCPH1001.BIN` is optional because OpenBIOS runs by default. From-source dual-backend generation currently requires a local, legally obtained `SCPH1001.BIN` matching the compiled retail backend.

No retail BIOS image, game disc image, or game assets are included…
