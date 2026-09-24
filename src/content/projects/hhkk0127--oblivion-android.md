---
repo: "HHKK0127/Oblivion_Android"
name: "Oblivion_Android"
description: "Oblivion Android Native Port with OpenGL ES 3.0"
readmeQualityOk: true
url: "https://github.com/HHKK0127/Oblivion_Android"
language: "C++"
languages: ["C++"]
languagePcts: [91]
stars: 7
forks: 0
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-18T21:46:29Z"
lastCommitAt: "2026-09-24T08:42:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 37
maintainers: ["HHKK0127"]
openGraphImageUrl: "https://opengraph.githubassets.com/b3a3e8c2fd80652268a68d95fcfa665aacfc5a3eca2514e89ad4e78d623e7efc/HHKK0127/Oblivion_Android"
---

# Oblivion Android - In-progress Native Port

---

## English

An in-progress native Android port of The Elder Scrolls IV: Oblivion, built entirely in C++ using OpenGL ES 3.0 and the Android NDK.

**v0.9.10 (versionCode 910) — Phase 64 complete, all 20 missing ESM record types decoded and verified against the real Oblivion.esm. Phase 65 (full world rendering) is next.**

The app version is defined in exactly one place: `app/build.gradle` (`versionName` / `versionCode`).
Version labels that appear next to phase numbers in the Development Phases table below are historical
development tags, not release versions.

---

### [GAME] Features

#### Core Systems Implemented
- [x] **ESM Data-Driven World** (Phase 26-28) - 40 record types from Oblivion.esm: CELL, NPC_, WEAP, REFR, LAND, WRLD, SPEL, LVLI/LVLC/LVLN/LVSP, NAVM, ARMO, BOOK, CLOT, INGR, ALCH, MISC, FACT, RACE, CLAS, ROAD, BSGN, CREA, CONT, DOOR, ACTI, STAT, TREE, FLOR, LIGH, APPA, SOUN, SCRL, SCPT, GMST, SKIL, EYES, HAIR, CLMT, REGN, WTHR, PGRD
- [x] **3D Rendering Engine** - OpenGL ES 3.0 with mesh and texture support
- [x] **Game World** - Cell-based world system with seamless transitions
- [x] **NPC System** - 100+ NPCs with…
