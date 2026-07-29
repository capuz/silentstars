---
repo: "realmcu/HoneyDesigner"
name: "HoneyDesigner"
description: "HoneyGUI Design Tool"
readmeQualityOk: true
url: "https://github.com/realmcu/HoneyDesigner"
language: "C"
languages: ["C", "TypeScript", "C++"]
languagePcts: [51, 22, 20]
stars: 5
forks: 1
openIssues: 8
closedIssues: 16
watchers: 0
contributors: 13
recentReleases: 0
createdAt: "2026-04-09T11:35:40Z"
lastCommitAt: "2026-07-29T06:14:22Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 53
maintainers: ["hellsge", "Belief997", "wanghao-realmcu"]
openGraphImageUrl: "https://opengraph.githubassets.com/fbbbf7279f9b003034eb247da1c27167a36421822c46c0a396f0e5a16896c1cd/realmcu/HoneyDesigner"
discussionCount: 0
---

# HoneyGUI Design

Visual Embedded GUI Designer | Drag & Drop → Auto-generate C Code → Compile & Simulate

---

## Features

| Category | Content |
|----------|---------|
| **Design** | Drag & drop visual designer with live preview |
| **Components** | Buttons, labels, images, inputs, progress bars, sliders, video, 3D models |
| **Code** | HML → C code generation with user code protection |
| **Simulation** | One-click compile & run, works offline |
| **Resources** | Image/font/video/3D model converters |

## Installation

Search VSCode Marketplace for **"HoneyGUI Visual Designer"** → Install

## Quick Start

| Step | Action |
|------|--------|
| 1 | New Project - Click HoneyGUI icon in sidebar |
| 2 | Design - Double-click .hml file, drag components to canvas |
| 3 | Run - Click ▶ Compile & Simulate in toolbar |

## Resource Conversion

`Ctrl+Shift+P → HoneyGUI: Resource Conversion Tools`

| Type | Input | Output |
|------|-------|--------|
| Image | PNG, JPG, BMP | BIN |
| Font | TTF, OTF | BIN |
| 3D | OBJ, GLTF, GLB | BIN |
| Video | MP4, AVI, MOV | MP4 (H.264) |

## Project Config

**project.json**
```json
{ "name": "my-project", "resolution": "480X272" }
```

## License

MIT…
