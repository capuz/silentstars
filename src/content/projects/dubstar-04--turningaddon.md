---
repo: "dubstar-04/TurningAddon"
name: "TurningAddon"
description: "FreeCAD Turning Addon"
readmeQualityOk: true
url: "https://github.com/dubstar-04/TurningAddon"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 7
forks: 2
openIssues: 7
closedIssues: 20
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2020-04-10T13:19:47Z"
lastCommitAt: "2026-11-13T18:33:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 94
undervaluedScore: 74
maintainers: ["dubstar-04"]
openGraphImageUrl: "https://opengraph.githubassets.com/a861414ceebe9fe53972e03616e3e7e1ac5c0adfd20c156a9ee9fb783ff20410/dubstar-04/TurningAddon"
---

# FreeCAD Turning Addon 
A FreeCAD CAM Addon to encourage the development of CNC turning functionality for the CAM workbench.

| :warning: WARNING: Turning Addon is currently experimental / proof of concept and only suitable for testing. |

## Description
This addon appears under **CAM -> CAM Addons -> Turning Addon** and allows the creation of
turning paths for use with a CNC lathe. The menu is restored whenever the CAM
workbench is activated. It uses an externally installed
[LibLathe](https://github.com/dubstar-04/LibLathe) library; no library is bundled.

## Features
* Turning Roughing operation: external/internal, axial `-Z`/`+Z` or `Radial`
* Turning Profiling operation: external/internal, axial `-Z`/`+Z` or `Radial`
* Turning Parting operation
* Turning Thread operation
* Turning Tool Library

## Requirements
* FreeCAD v1.1 or later with the CAM workbench
* The matching LibLathe `feature/architecture` build installed in FreeCAD's
  Python environment, including its native extensions. Released LibLathe
  packages do not yet provide this branch's architecture API. Restart FreeCAD
  after updating LibLathe; updating the Addon alone does not update the library.

## Tool…
