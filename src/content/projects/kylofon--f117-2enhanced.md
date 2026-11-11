---
repo: "kylofon/F117-2Enhanced"
name: "F117-2Enhanced"
description: "Enhanced native SDL3 port of MicroProse F-117A Nighthawk Stealth Fighter 2.0: higher resolution, wider view, true night (original game files not included)"
readmeQualityOk: true
url: "https://github.com/kylofon/F117-2Enhanced"
language: "C"
languages: ["C", "Python"]
languagePcts: [68, 29]
stars: 42
forks: 6
openIssues: 3
closedIssues: 1
watchers: 2
contributors: 3
recentReleases: 3
createdAt: "2026-10-26T21:20:42Z"
lastCommitAt: "2026-11-11T19:42:15Z"
lastReleaseAt: "2026-11-11T19:00:28Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 36
maintainers: ["kylofon", "claude", "Chipensaw"]
openGraphImageUrl: "https://opengraph.githubassets.com/43a27316cd49a732d8045109103ce5327bac9576d31b984e6cb03621ec2b19b9/kylofon/F117-2Enhanced"
---

# F-117A Enhanced — SDL3

An enhanced native port of MicroProse's *F-117A Nighthawk Stealth Fighter 2.0* (1991), built on the faithful
SDL3 port ([F117-2](https://github.com/kylofon/F117-2), v0.1.0). Not an emulator. The original game files are not included.
Goal: a sharper, smoother game (higher resolution, higher frame rate) with the original art unchanged.

Status and plan: [PLAN.md](https://github.com/kylofon/F117-2Enhanced/blob/HEAD/PLAN.md) (as a page: `python tools/plan_site.py`, then open
`site/index.html`). Agent rules: [CLAUDE.md](https://github.com/kylofon/F117-2Enhanced/blob/HEAD/CLAUDE.md). Engine rules: [ENGINE.md](https://github.com/kylofon/F117-2Enhanced/blob/HEAD/ENGINE.md).

## Features

* **Higher resolution**: the 3D view, HUD, MFDs, TV window and map are drawn at N times the original 320x200
  (render scale: Auto, or 1 to 8). The original art is unchanged.
* **Wider view**: on a wide window the first cockpit view and the outside views show more of the world beside the
  4:3 picture; the side, rear and second cockpit views are fitted to the window height.
* **Smooth distance shading** and **True night**: options, off by default.
* **Smooth frame rate**: drawn…
