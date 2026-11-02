---
repo: "ToolAssisted-run/chimera"
name: "chimera"
description: "Chimera is a minimal frontend for creating tool-assisted speedruns (TAS)"
readmeQualityOk: true
url: "https://github.com/ToolAssisted-run/chimera"
homepage: "https://toolAssisted.run"
language: "C++"
languages: ["C++"]
languagePcts: [72]
stars: 18
forks: 5
openIssues: 3
closedIssues: 461
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-08-10T16:40:19Z"
lastCommitAt: "2026-11-02T17:56:30Z"
lastReleaseAt: "2026-09-12T09:39:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 59
maintainers: ["SergioMartin86", "P-AS"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1330040231/0b827366-73b6-4ffe-94ba-d7e829425b35"
---

&nbsp;&nbsp;

## Goals

- **Modularity.** The frontend contains no emulation core and no system-specific knowledge. Cores are external, self-contained packages (`.chimeraCore`), each maintained in its own repository under its own license, loaded explicitly like a ROM. Chimera includes none and downloads none.

- **Performance.** All functional machinery (the sandbox host, movies, savestates, file formats, the running machine itself) lives in `libchimera`, a native C++ engine the GUI calls into.

- **Stronger reproducibility guarantees.** Every core runs inside the [miniBox](https://github.com/ToolAssisted-run/chimera-common-minibox) sandbox, so the same project and input files play the same movie on any machine.

Chimera is not designed for casual play. For that, use the original emulators directly, or a multi-emulation frontend such as RetroArch.

## Cores

Chimera does not include cores and does not download them. To use a core, download its `.chimeraCore` package from the core's own project (linked below) or build it yourself, and put it in the `Cores` folder beside Chimera.

**Tools > Core Manager...** lists the cores in that folder and lets you point Chimera at a different…
