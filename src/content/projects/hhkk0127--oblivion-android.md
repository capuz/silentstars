---
repo: "HHKK0127/Oblivion_Android"
name: "Oblivion_Android"
description: "Oblivion Android Native Port with OpenGL ES 3.0"
readmeQualityOk: true
url: "https://github.com/HHKK0127/Oblivion_Android"
language: "C++"
languages: ["C++"]
languagePcts: [83]
stars: 16
forks: 0
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-18T21:46:29Z"
lastCommitAt: "2026-11-16T11:53:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 49
maintainers: ["HHKK0127"]
openGraphImageUrl: "https://opengraph.githubassets.com/bdf4eea9f91b33196c9d2b5725facae25c63bac95f3824eccc25773699c3e128/HHKK0127/Oblivion_Android"
---

# Oblivion Android - In-progress Native Port

---

## English

An in-progress native Android port of The Elder Scrolls IV: Oblivion, built in C++17 with OpenGL ES 3.0 and the Android NDK, with the pure-logic asset and plugin layers implemented in Rust behind a C ABI.

**v0.9.10 (versionCode 910) — Phase 64 complete (all 20 missing ESM record types decoded and verified against the real Oblivion.esm). Phase 65 (full world rendering) is in progress, Phase 68 (ESM-driven game systems and GUI) is complete, and the pure-logic asset and plugin layers are being migrated to Rust (Phases 1-3 done).**

The app version is defined in exactly one place: `app/build.gradle` (`versionName` / `versionCode`).
Version labels that appear next to phase numbers in the Development Phases table below are historical
development tags, not release versions.

---

### [GAME] Features

#### Core Systems Implemented
- [x] **ESM Data-Driven World** (Phase 26-28) - 40 record types from Oblivion.esm: CELL, NPC_, WEAP, REFR, LAND, WRLD, SPEL, LVLI/LVLC/LVLN/LVSP, NAVM, ARMO, BOOK, CLOT, INGR, ALCH, MISC, FACT, RACE, CLAS, ROAD, BSGN, CREA, CONT, DOOR, ACTI, STAT, TREE, FLOR, LIGH, APPA, SOUN, SCRL, SCPT, GMST,…
