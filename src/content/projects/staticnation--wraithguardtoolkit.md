---
repo: "staticnation/WraithguardToolkit"
name: "WraithguardToolkit"
description: "One program for keeping a modded Morrowind in order: sort it, see it, find what fights, fix it. It reads an OpenMW install (openmw.cfg), a Mod Organizer 2 install, or the game's own (Data Files and Morrowind.ini), and runs on Windows, macOS and Linux, with a command line beside it for scripts and headless machines."
readmeQualityOk: true
url: "https://github.com/staticnation/WraithguardToolkit"
homepage: "https://www.nexusmods.com/morrowind/mods/59606"
language: "Rust"
languages: ["Rust", "JavaScript"]
languagePcts: [58, 35]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 8
createdAt: "2026-07-13T16:40:45Z"
lastCommitAt: "2026-11-26T23:34:02Z"
lastReleaseAt: "2026-09-30T00:11:04Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 90
undervaluedScore: 57
maintainers: ["staticnation"]
openGraphImageUrl: "https://opengraph.githubassets.com/6a30d41ecbfed1394ef1f81dec0235d71e29dc357d2310c6ef3bb8be504523d5/staticnation/WraithguardToolkit"
---

# Wraithguard Toolkit

One program for keeping a modded Morrowind in order: sort it, see it, find what fights, fix
it. It reads an OpenMW install (`openmw.cfg`), a Mod Organizer 2 install, or the game's own
(`Data Files` and `Morrowind.ini`), and runs on Windows, macOS and Linux, with a command line
beside it for scripts and headless machines.

- **Load order.** Sorts by the mlox rules. On a curated
  [Modding-OpenMW.com](https://modding-openmw.com/) (MOMW) list it places only the mods you
  added and never reorders the list, saving the result as a `momw-customizations.toml` that
  survives every MOMW Configurator rebuild. Without a list, it sorts the whole order as mlox
  does.
- **Cell Preview.** Any cell of the load order in 3D, drawn as the game draws it, with its
  MWScript and OpenMW Lua running, and a way to see what one mod changed.
- **Conflicts.** Which plugins change the same records and the same files, and who wins.
- **Editor.** The Construction Set's windows around the Preview: records, references,
  dialogue, scripts and path grids, written into one new patch plugin, or into a plugin you
  choose to edit.
