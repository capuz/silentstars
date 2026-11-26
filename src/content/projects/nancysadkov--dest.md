---
repo: "NancySadkov/dest"
name: "dest"
description: "Decompilation of the 1993 AD&D Stronghold game for DOS."
readmeQualityOk: true
url: "https://github.com/NancySadkov/dest"
language: "C"
languages: ["C"]
languagePcts: [82]
stars: 6
forks: 0
openIssues: 1
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2024-06-21T22:26:34Z"
lastCommitAt: "2026-11-26T12:57:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 60
maintainers: ["NancySadkov"]
openGraphImageUrl: "https://opengraph.githubassets.com/1b0561e299a29a6da6a445e449745981c6b4f79d86a787ed06f33be12abc6dee/NancySadkov/dest"
---

# DeSt
WIP decompilation of the 1993 AD&D Stronghold game for DOS.

The project's goal is recovering original code in a form compilable by Borland C++ 3.0.




# Milestones
* Decompiled small part of the init code and mapped most of the asseta init code.
* Recovered the raw asset files (LBMs, VOCs, etc), which can be assembled back into the STRONG.DAT stash file by going to assets/ folder and typing `st.exe grab`. The LBM files can be edited with [Deluxe Paint](https://winworldpc.com/product/deluxepaint/2x). These are PBM LBMs, so not many programs support them.
* **Recovered the full executable into `src/decompiled/`**: every code segment is
  exported as a C module (55 modules, 1021 functions), together with recovered
  types, globals (with original initialisers), prototypes and a function index.
  See `doc/STATUS.md` for the current state and the plan for turning the
  decompiler baseline into a rebuildable, original-like source tree.
* Added a TC30/DOSBox build harness. **31 of 58** staged modules now compile
  with Turbo C++ 3.0, including the asset-init chain (`ovc44/46/48`), the stash
  layer (`ovc17/20`), the LBM decoder (`ovc04`), `main` and `mouse`.
