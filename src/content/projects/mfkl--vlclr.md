---
repo: "mfkl/vlclr"
name: "vlclr"
description: "A framework for building VLC 4.x plugins in C# using Native AOT compilation"
readmeQualityOk: true
url: "https://github.com/mfkl/vlclr"
language: "C#"
languages: ["C#"]
languagePcts: [96]
stars: 26
forks: 1
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2021-03-01T02:18:17Z"
lastCommitAt: "2026-10-17T07:58:43Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 93
undervaluedScore: 57
maintainers: ["mfkl"]
openGraphImageUrl: "https://opengraph.githubassets.com/94ec820d6ceebf4be6e3edc3023f9282a0e632289494e71ec59766de54ce4167/mfkl/vlclr"
---

# VLCLR

> Experimental project. Do not use it in production.

**VLC + CLR = VLCLR** is a framework for authoring VLC 4.x plugins in C# and
publishing them as Native AOT libraries that VLC loads directly—without a
separate C shim.

Current target: Windows x64, .NET 10, VLC 4.0.6.

```mermaid
flowchart LR
    CS["C# plugin"] --> GEN["VLCLR source generator"]
    GEN --> AOT["Native AOT DLL"]
    AOT --> VLC["VLC 4"]
    VLC --> VIDEO["Video filters"]
    VLC --> TEXT["Text renderers"]
    VLC --> AUDIO["Audio filters / sub-sources"]
```

## What is included

- Attribute-based modules with generated exports, callbacks, configuration,
  exception boundaries, and instance lifecycle.
- Base classes and ABI wrappers for video, subtitle, audio, player, and
  playlist integration.
- Low-level fluent module registration for advanced or multi-module plugins.
- Unit, ABI, Native AOT export, VLC integration, visual, and benchmark coverage.

## Samples

Each sample owns its setup, commands, parameters, examples, architecture, and
troubleshooting documentation.

| Sample | Capability | Guide |
|---|---|---|
| YOLOX object detection | D3D11/OpenVINO GPU video filter with COCO-80 boxes and labels…
