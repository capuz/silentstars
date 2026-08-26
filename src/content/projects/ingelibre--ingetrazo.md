---
repo: "ingelibre/ingetrazo"
name: "ingetrazo"
description: "Modelador 3D libre estilo SketchUp para ingeniería civil. Linux-first, PySide6, integración IFC con IngePresupuestos."
readmeQualityOk: true
url: "https://github.com/ingelibre/ingetrazo"
homepage: "https://ingetrazo.com"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 7
forks: 2
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-06-06T04:30:31Z"
lastCommitAt: "2026-08-26T04:18:23Z"
lastReleaseAt: "2026-08-21T16:56:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 53
maintainers: ["tuxiasumari"]
openGraphImageUrl: "https://opengraph.githubassets.com/c7f1568148a26cd66d7546906a0f7cf76520135b8d54a3b216e63d5e4b18061b/ingelibre/ingetrazo"
---

# IngeTrazo

**A free, SketchUp-inspired 3D modeler for architecture, civil engineering, and 3D printing — built natively for Linux.**

IngeTrazo brings SketchUp-style *push/pull* modeling to Linux — where there is
almost no native CAD for civil engineers and architects. It is freeform at the
core (draw anything, like sketching by hand) with an **optional BIM tagging
layer** planned on top: mark geometry as `IfcWall` / `IfcSlab` / `IfcColumn`,
export to IFC, and close the loop **model → tag → quantity takeoff → budget**
with its sister project [IngePresupuestos](https://ingepresupuestos.com).

> *The name is the thesis: **trazar** — to trace, as you would by hand.*

## Status

**Usable — real work gets done in it today.** Draw, extrude, edit, paint,
dimension and annotate; open any SketchUp file from 2013 to 2026 and save
back to `.skp`; tag BIM classes and export IFC quantities; georeference and
import survey data. IngeTrazo is developed by dogfooding on real engineering
projects, backed by ~2,000 automated tests, and its geometry engine refuses
to commit a broken solid (the hermeticity guard) — your quantities stay
honest. It is still a 0.x: the file format and plugin API may…
