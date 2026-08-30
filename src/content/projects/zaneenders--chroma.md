---
repo: "zaneenders/chroma"
name: "chroma"
description: "UI library written in Swift"
readmeQualityOk: true
url: "https://github.com/zaneenders/chroma"
language: "Swift"
languages: ["Swift", "C"]
languagePcts: [77, 22]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-07-07T19:38:36Z"
lastCommitAt: "2026-08-30T00:45:06Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 65
undervaluedScore: 37
maintainers: ["zaneenders"]
openGraphImageUrl: "https://opengraph.githubassets.com/fe20f574f3927069d7f649f77f727ac7edb812245c123729384c7599eba656ad/zaneenders/chroma"
---

# Chroma

UI library written in Swift

⚠️ Unstable: Heavy AI • Active API [dogfooding](https://github.com/zaneenders/scribe)

## Demo

Run the native Metal demo on macOS:

```sh
swift run ChromaDemo
```

Run the Wayland/EGL/OpenGL ES demo on Linux:

```sh
swift run ChromaDemo
```

The native backend is selected by default on each platform. To build the demo
without a graphical backend, use `swift build --disable-default-traits`.
SwiftPM options such as `--traits` must appear before the executable name;
arguments after `ChromaDemo` are passed to the demo itself.

## Fonts

Chroma ships its authored monospaced bitmap display glyphs plus a pre-rasterized
Bedstead readable face in `ChromaFont`. Bedstead is CC0/public-domain dedicated.
Graphical backends build one shared atlas from that bundled data and do not
require HarfBuzz, FreeType, Fontconfig, or an installed system font.
