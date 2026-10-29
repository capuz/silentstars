---
repo: "odtu/PowerLabKiCadLibraries"
name: "PowerLabKiCadLibraries"
description: "KiCad Advanced Footprint, Symbol & 3D Libraries"
readmeQualityOk: true
url: "https://github.com/odtu/PowerLabKiCadLibraries"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 7
forks: 1
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 6
recentReleases: 1
createdAt: "2025-05-06T20:19:08Z"
lastCommitAt: "2026-10-29T14:06:27Z"
lastReleaseAt: "2026-09-25T15:06:48Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 79
maintainers: ["ekremturanfirat", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2f46edc714a5fa775c694a065536d42847a2ea85d52e04039bc5b222be93fcda/odtu/PowerLabKiCadLibraries"
---

# METU Power Lab KiCad Libraries

**Symbols, footprints and 3D models for power electronics design in KiCad.**

[Install](#-installation) · [Update](#-updating) · [What's inside](#-whats-inside) · [Contribute](#-contributing)

---

## ✨ Highlights

- **48 symbol libraries** and **52 footprint libraries**, from passives and connectors to gate drivers, GaN power stages and C2000 microcontrollers.
- **3D STEP models** for the footprints, linked through a single `${METUPOWERLAB_3D}` path.
- **Ready to use parts**: datasheet, description, manufacturer and distributor numbers are filled in, and key ratings are shown on the symbol.
- **Checked on every change**: each pull request runs the lab's standards checker and is opened in KiCad 10 before it is merged.

> [!IMPORTANT]
> **KiCad 10.0 or newer is required** (since version 2.0.0). Some libraries are saved in the KiCad 10 file format and cannot be opened by KiCad 9.
> KiCad 9 users can keep using version 1.0.0: install [`PowerLabKiCadLibrariesKiCAD9.zip`](https://github.com/odtu/PowerLabKiCadLibraries/blob/HEAD/PowerLabKiCadLibrariesKiCAD9.zip) instead.

## 📦 Installation

The libraries are installed as a package with KiCad's **Plugin…
