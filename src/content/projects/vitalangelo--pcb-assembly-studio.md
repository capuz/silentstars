---
repo: "Vitalangelo/pcb-assembly-studio"
name: "pcb-assembly-studio"
description: "Generate color-coded PCB assembly drawings"
readmeQualityOk: true
url: "https://github.com/Vitalangelo/pcb-assembly-studio"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 18
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2026-07-21T17:08:19Z"
lastCommitAt: "2026-11-20T12:20:54Z"
lastReleaseAt: "2026-09-11T10:28:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 65
undervaluedScore: 18
maintainers: ["Vitalangelo"]
openGraphImageUrl: "https://opengraph.githubassets.com/544fd64e4d80fda893448af1f3c369daad60a67ba1ddd862834c5a2b754ff653/Vitalangelo/pcb-assembly-studio"
---

# PCB Assembly Studio

Turn Altium or KiCad outputs — Gerber, BOM, Pick & Place and NC drill files — into multi-page **PCB
assembly drawings**. Interactive board viewer, print-ready PDF export.

**100% offline.** Everything is parsed on your machine. No uploads, no network calls.

*One A3 sheet of the exported PDF — ISO 5457 frame, ISO 7573 parts list, ISO 7200
title block. Each group gets a colour, so every 12K resistor on the board is
found by looking instead of reading designators.*

---

## 🚀 Run from source

**Source distribution only for now; Python is required.** Standalone Windows
executables are not currently offered: unsigned builds can be blocked by Windows
Smart App Control. Code signing and a supported binary distribution channel are
still pending. Do not disable Windows protection to run this application.

1. Install [Python 3.10+](https://www.python.org/downloads/) — tick **"Add Python to PATH"**
2. Green **Code** button above → **Download ZIP** → right-click the ZIP → **Properties** → tick **Unblock** → unzip
3. Double-click **`run.bat`**
