---
repo: "IconJar/IJSVG"
name: "IJSVG"
description: "MacOS SVG rendering and exporting library"
url: "https://github.com/IconJar/IJSVG"
language: "Objective-C"
languages: ["Objective-C"]
languagePcts: [100]
topics: ["objective-c", "svg"]
stars: 176
forks: 34
openIssues: 0
closedIssues: 10
watchers: 16
contributors: 3
recentReleases: 0
createdAt: "2014-09-02T12:39:51Z"
lastCommitAt: "2026-06-26T23:40:29Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 80
undervaluedScore: 38
maintainers: ["curthard89"]
openGraphImageUrl: "https://opengraph.githubassets.com/844326ab24cae65e8fe91a5c83171d73cfce5a111099bf177335c9d6a4e22ee9/IconJar/IJSVG"
---

IJSVG 3.0
===

IJSVG is a Mac OSX 10.13+ COCOA library for rendering SVG's within your COCOA applications, its extremely fast and native.

It also supports the `NSPasteboards` writing protocol, an IJSVG object can be put onto the pasteboard and application like Sketch and Photoshop can paste them into the document as vector objects (generated PDF's on the fly).

### What is new in IJSVG 3.0?
- Its almost a complete full rewrite.
- Is now fully ARC 🎉.
- Parsing and rendering is much faster.
- Support for aspect ratios and nested SVG's.
- Fixes a lot of pattern and gradient rendering.
- Fixes various clipPath issues.
- Masking now correctly uses alpha masking instead of what `CALayer` uses.
- Various improvements with exporting such as modifying the viewBox instead of using a new group for scaling.
- Exporting now supports converting strokes to paths.
- Much simpler to use API's for creating SVG's from scratch.
- Much better threading support.
- Much improved color replacement support (can now specify only replacing a color that is a fill and not touch ths stroke).
- Improved API's for querying the node graph.
- Support for the wild card CSS selector.
- Removed most `NS` graphics…
