---
repo: "zenglanmu/yacr"
name: "yacr"
description: "yet another cad app in rust"
readmeQualityOk: true
url: "https://github.com/zenglanmu/yacr"
language: "Rust"
languages: ["Rust"]
languagePcts: [80]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 8
createdAt: "2026-10-01T00:59:05Z"
lastCommitAt: "2026-11-11T11:15:00Z"
lastReleaseAt: "2026-11-11T05:28:05Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 55
maintainers: ["zenglanmu"]
openGraphImageUrl: "https://opengraph.githubassets.com/637a39a133ca3145bf07898dc7b5c11e53a83d9940310bee8a1faca3cadaf15f/zenglanmu/yacr"
---

# yacr — Cross-platform open-source CAD

[English](https://github.com/zenglanmu/yacr/blob/HEAD/README.md) | [中文](https://github.com/zenglanmu/yacr/blob/HEAD/README.zh-CN.md)

yacr is a cross-platform open-source CAD project. A shared Rust core handles CAD documents
(DWG/DXF, plus mesh, STEP, IFC and Revit import), geometry, commands and rendering; React + Tauri
provides the UI, and wgpu draws the scene. The same document and rendering pipeline is intended for
Linux (native Wayland or X11/`dom-canvas`), Windows, macOS, Android and the web.

**Website:** <https://yacr.pages.dev/> · **Web app:** <https://yacr-examples.pages.dev/>

yacr is under active development, and **preview builds are available now** — Linux Flatpak, Windows
zip, macOS tarball, Android APK, and a browser build. It opens DWG/DXF, imports mesh/STEP/IFC files
for display and previews Revit projects, views 2D/3D drawings with wgpu, measures, and has an
implementation path for 823 of 981 commands (68 complete, 755 partial); unsupported options are
rejected by name instead of silently succeeding. It is **not yet a production CAD system**;
per-platform status and evidence boundaries are in `docs/handoff.md` and…
