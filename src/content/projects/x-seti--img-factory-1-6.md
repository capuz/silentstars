---
repo: "X-Seti/Img-Factory-1.6"
name: "Img-Factory-1.6"
description: "Img Factory 1.6 "
readmeQualityOk: true
url: "https://github.com/X-Seti/Img-Factory-1.6"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 10
forks: 2
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-12-29T18:55:25Z"
lastCommitAt: "2026-08-27T14:31:59Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 59
maintainers: ["X-Seti"]
openGraphImageUrl: "https://opengraph.githubassets.com/1ff5406c5484cf25dc3a6aa5c7f2bd5ffe5ffaa6baf87dbe0f9c3024dfac11c6/X-Seti/Img-Factory-1.6"
---

# IMG Factory 1.6

**GTA modding toolkit** — Build 370.80  
PyQt6 · Python 3.11+ · Linux / Windows / macOS

---

Information in this README is out of date. Will update soon.

## Recent fixes (Augest 2026)

## Recent fixes (July 2026)

## Recent fixes (June 2026)

## Recent fixes (May 2026)

- Model Workshop bleed-through when docked in IMG Factory — fixed
- TXD parser updated for GTA VC/III format (was only reading SA correctly)
- All `Mdl_Editor` import references replaced with `Model_Editor`
- Standalone repos (Col-Workshop, Txd-Workshop, Model-Workshop) now
  self-contained with required methods included
- DAT Browser bleed-through — fixed (wrong parent widget + missing paintEvent)
- Compact toolbar buttons now respond to splitter drag, not just window resize

---

## What is it?

IMG Factory is a multi-format modding suite for GTA3, Vice City, San Andreas and
**GTASOL** (multi-city). It handles the full asset pipeline: open archives, browse
the game world, edit textures, collision and models, then rebuild.

---

## Quick start

```bash
# Launch (menu - pick a tool)
python3 launch.py

# Launch IMG Factory directly
python3 launch.py 1

# Or directly via module
python -m…
