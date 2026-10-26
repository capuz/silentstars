---
repo: "zamtmn/zcad"
name: "zcad"
description: "Simple CAD program"
readmeQualityOk: true
url: "https://github.com/zamtmn/zcad"
language: "Pascal"
languages: ["Pascal"]
languagePcts: [99]
topics: ["cad", "dxf", "lazarus", "fpc", "delphi", "drawing", "pascal", "autocad", "object-pascal"]
stars: 336
forks: 71
openIssues: 36
closedIssues: 161
watchers: 24
contributors: 10
recentReleases: 0
createdAt: "2018-05-24T06:03:13Z"
lastCommitAt: "2026-10-26T20:59:35Z"
lastReleaseAt: "2024-07-11T19:32:08Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero"]
healthScore: 94
undervaluedScore: 37
maintainers: ["zamtmn"]
openGraphImageUrl: "https://opengraph.githubassets.com/f102e54f01c527952969b059249ddea05413ea1931cdfbcb62e3914e81126e46/zamtmn/zcad"
discussionCount: 10
---

# ZCAD

## Overview
ZCAD is simple CAD program, written in Lazarus / FPC.

Contacts:
* zamtmn@yandex.ru
* https://t.me/zcad_dev
  

License: GPL3.0/MPL2.0

Features:
* Fast OpenGL rendering
* Fast GDI rendering
* Crossplatform (Windows x86/x64, Linux x86/x64 - gtk/qt)
* DXF fileformat
* SHX, TTF font support
* true DXF linetypes
* POINT, LINE, CIRCLE, POLYLINE,  LWPOLYLINE, ARC, ELLIPSE, INSERT, TEXT, MTEXT, 3DFACE, SOLID, SPLINE, HATCH entities support
* Polar tracking, Object snap

ToDo:
* ~~Dimensional entities~~ (partially done)
* ~~Line type~~
* More entities
* ~~Separate graphics engine from the CAD implementation~~ (partially done)
* ~~GDI and canvas render backends~~
* DX render backend
* ~~Printing~~

## Build from source
Detailed instructions: [ENG](https://github.com/zamtmn/zcad/blob/master/BUILD_FROM_SOURCES.md "ENG") / [RUS](https://github.com/zamtmn/zcad/blob/master/cad_source/docs/userguide/locale/ru/for_developers/building_from_sources.adoc "RUS")

Requirements:

* **Lazarus RC2.2 (or trunk)**
* **FPC 3.2 (or trunk)**

You can build ZCAD or ZCADELECTROTECH

Build ZCAD:

* `make installpkgstolaz LP=/path/to/your/lazarus PCP=/path/to/your/lazarus/primary/config`
*…
