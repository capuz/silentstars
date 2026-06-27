---
repo: "mlightcad/realdwg-web"
name: "realdwg-web"
description: "JavaScript Version of AutoCAD RealDWG"
url: "https://github.com/mlightcad/realdwg-web"
homepage: "https://mlightcad.github.io/realdwg-web/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["autocad", "dwg-reader", "dxf-reader", "javascript", "realdwg", "typescript", "cad", "dwg", "dxf"]
stars: 28
forks: 19
openIssues: 0
closedIssues: 7
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2025-10-10T13:05:49Z"
lastCommitAt: "2026-06-27T00:36:50Z"
lastReleaseAt: "2026-03-17T10:48:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 60
maintainers: ["mlightcad", "pauloricardoma"]
openGraphImageUrl: "https://opengraph.githubassets.com/0feb077496cd19931f6d6690968ae4b52582dd5eaa1ec9b353ae99ab3ed55272/mlightcad/realdwg-web"
discussionCount: 0
---

# RealDWG-Web

AutoCAD RealDWG is a software development toolkit (SDK) provided by Autodesk that allows developers to read, write, and create DWG and DXF files (AutoCAD's native drawing file formats) without needing AutoCAD installed.

The target of this project is to create one web-version of AutoCAD RealDWG by providing the similar API. For now, it supports reading DWG and DXF file only. In the future, it will support write DWG and DXF too.

- [**🌐 DWG/DXF JSON Viewer**](https://dwg.thingraph.site/dwg_json_viewer.html)
- [**🌐 API Docs**](https://mlightcad.github.io/realdwg-web/)

## App Based on Realdwg-Web

- [Google Drive DWG Viewer](https://workspace.google.com/u/0/marketplace/app/dwg_viewer/641533811831)

## Converter Registration Mechanism

To support reading both DXF and DWG files (and potentially other formats in the future), this project provides a flexible mechanism for registering and unregistering file converters. This is managed by the `AcDbDatabaseConverterManager` class.

### How It Works

- Each file type (e.g., DXF, DWG) is associated with a converter class that knows how to parse and import that file format into the drawing database.
- The…
