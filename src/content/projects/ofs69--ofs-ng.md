---
repo: "ofs69/ofs-ng"
name: "ofs-ng"
description: "funscript editor"
readmeQualityOk: true
url: "https://github.com/ofs69/ofs-ng"
language: "C++"
languages: ["C++"]
languagePcts: [71]
stars: 12
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-06-18T19:08:21Z"
lastCommitAt: "2026-08-29T09:58:43Z"
lastReleaseAt: "2026-08-19T19:04:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 77
undervaluedScore: 50
maintainers: ["ofs69"]
openGraphImageUrl: "https://opengraph.githubassets.com/77c09ed50a1a037038412956b9649295c4ae8d188aaf9b2101facb72d96891e7/ofs69/ofs-ng"
---

</p>

# ofs-ng

A funscript editor. It pairs libmpv video playback with a multi-axis timeline,
a live simulator, a node-based processing graph, and a C# plugin system.

A complete rewrite of OpenFunscripter in modern C++20, built on largely the same stack —
SDL3, Dear ImGui, OpenGL, and libmpv.

## Features

- **Multi-axis timeline** — edit every standard axis (stroke, surge, sway, twist, roll, pitch, …)
  alongside scratch axes on one synchronized timeline.
- **Live 3D simulator** — a real-time 3D preview that plays back the script as you edit.
- **Node-based processing graph** — compose per-region effects and transforms in a visual node editor.
- **C# plugin system** — extend the editor with managed .NET plugins; no C ABI to deal with.
- **Localized UI** — every string is translatable, with multiple languages shipped.

## Platform support

| Platform | Status |
|----------|--------|
| **Windows** | Fully supported — build, run, and debug. |
| **Linux** | Fully supported — build, run, and debug. |
| **macOS** | Indirect only. The codebase is cross-platform and is expected to build and run, but it is **not directly supported** — we don't build, test, or debug on macOS. |

Each…
