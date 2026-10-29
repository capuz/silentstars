---
repo: "Liech/CADaver"
name: "CADaver"
description: "CAD in Godot!"
readmeQualityOk: true
url: "https://github.com/Liech/CADaver"
language: "C++"
languages: ["C++"]
languagePcts: [94]
topics: ["cad", "gdextension", "godot", "occt", "step"]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-04-25T21:14:55Z"
lastCommitAt: "2026-10-29T10:36:16Z"
lastReleaseAt: "2025-05-10T21:47:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 66
maintainers: ["Liech"]
openGraphImageUrl: "https://opengraph.githubassets.com/c7a40b7ee1c331a12902833a8f6ca00b1116bb4e81b0d1a4a756d22a8da8ac2b/Liech/CADaver"
---

# CADaver - Now

CADaver is currently a STEP file viewer using Godot & Open Cascade.

# CADaver - Future

CADaver should be a basic & easy to use CAD tool, capable of replacing commerical CAD tools when its nothing too complex.

Due to godots accesibility it will be easy to improve UX/UI for ~everyone.

I get easily distracted by new projects, so lets see how it goes.

Goals for the next version:

* Extrusion
* Sketches (line only)
* Remember Settings
* Linux releasebuild

# Controls

| Move | Description |
|---|---|
| Left Click Drag | Rotate camera around center |
| Double Click | Change center to picked position |
| Right Click Draw | Panning |
| Mouse Wheel | Zoom |

# How to Build

It is writen Cross Platform compatible, so it should work on your machine.

You have to use VCPKG as your CMAKE toolchain to compile the GDExtension. The library should be put into the bin file of the project by a postbuildstep. Use godot-4.3-stable for the godotproject or change the branch in the root CMakelists.txt.
