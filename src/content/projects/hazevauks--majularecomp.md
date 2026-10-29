---
repo: "hazevauks/MajulaRecomp"
name: "MajulaRecomp"
description: "Dark Souls II (2014) from Xbox 360 to Nintendo Switch"
readmeQualityOk: true
url: "https://github.com/hazevauks/MajulaRecomp"
language: "C++"
languages: ["C++", "C"]
languagePcts: [49, 47]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-10-09T04:11:15Z"
lastCommitAt: "2026-10-29T21:19:06Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 43
maintainers: ["hazevauks"]
openGraphImageUrl: "https://opengraph.githubassets.com/7b9f4db0e6bdcf0202cab33cb9362d8e7f90b4407a87ee5b7ca192558cce2821/hazevauks/MajulaRecomp"
---

## MajulaRecomp — Dark Souls II on Nintendo Switch

**Dark Souls II (2014)** from Xbox 360 statically recompiled for the handheld console.  
A native port, unlike certain "ports" that are disguised emulators.

## Where the base comes from

The method and almost all of the infrastructure code come from the sibling ports:

| Project | What we use |
|---|---|
| [ChanseyIsTheBest/sa2-nx](https://github.com/ChanseyIsTheBest/sa2-nx) | **The base of this repository** (commit `fdd6f14`, 2026-10-08): `sdk/` (ReXGlue 0.10 with the Horizon layer), `tools/`, `shaders/` (XenosRecomp), and the [porting-guide.md](https://github.com/ChanseyIsTheBest/sa2-nx/blob/main/docs/porting-guide.md) guide, which is the roadmap we follow |
| [StevensND/nfsmw-nx](https://github.com/StevensND/nfsmw-nx) | The Switch layer, the NVK (Mesa) driver with its patch, PGO/LTO, WMV3 video, platform notes |
| [ChanseyIsTheBest/futari-nx](https://github.com/ChanseyIsTheBest/futari-nx) | Another disc game (ISO); a shared notebook of optimisations (`xbox360.md`) |

`sdk/` is kept **identical** to sa2-nx's on purpose, with five exceptions marked `ds2-nx`:

- the audio dump with the sound muted…
