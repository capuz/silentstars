---
repo: "dreikk91/persona4-psp"
name: "persona4-psp"
description: "Experimental Persona 4 native PSP port with source-build instructions and a Windows resource preparation tool"
readmeQualityOk: true
url: "https://github.com/dreikk91/persona4-psp"
language: "C"
languages: ["C", "Python"]
languagePcts: [56, 44]
topics: ["homebrew", "persona4", "psp", "reverse-engineering", "persona-4", "personal-website"]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 5
createdAt: "2026-11-08T17:40:51Z"
lastCommitAt: "2026-11-14T10:40:54Z"
lastReleaseAt: "2026-11-14T10:42:46Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 24
maintainers: ["dreikk91"]
openGraphImageUrl: "https://opengraph.githubassets.com/28a749c612dc2e2c6d72ac3dbd8127c9c8673c7b915a6c758d3566d746e1f467/dreikk91/persona4-psp"
---

# Persona 4 for PSP

An experimental native PSP port of **Shin Megami Tensei: Persona 4** (PlayStation 2, USA, `SLUS_217.82`). The port combines recovered C, locally translated retail routines and PSP implementations of graphics, input, files, saves, audio and movie playback.

You must supply your own legally obtained USA disc image. Game executables, archives, music, voices, movies and generated game data are not included in the source repository.

## Windows preparation tool

Use the **source-build** preparation package: extract the entire archive, run `Prepare P4.exe`, select your original USA ISO and an output folder, then copy the resulting `P4` folder to `PSP/GAME/` on your memory card. The utility downloads the PSP compiler on the first build; no separate Python or PSPDEV setup is needed. See [the preparation guide](https://github.com/dreikk91/persona4-psp/blob/HEAD/docs/prepare_game.md) for building the package and using it.

Download **P4-PSP-b249-windows-x64.zip** from the [b249 pre-release](https://github.com/dreikk91/persona4-psp/releases/tag/b249). The utility compiles EBOOT and matching data locally from your ISO and pinned upstream sources. It needs Internet access…
