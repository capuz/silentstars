---
repo: "Reality2713/StageView"
name: "StageView"
description: "Viewport abstractions for 3D rendering with RealityKit"
readmeQualityOk: true
url: "https://github.com/Reality2713/StageView"
language: "Swift"
languages: ["Swift"]
languagePcts: [100]
stars: 6
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2025-12-30T17:56:41Z"
lastCommitAt: "2026-10-11T10:15:11Z"
lastReleaseAt: "2026-10-11T10:15:25Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 65
undervaluedScore: 21
maintainers: ["elkraneo"]
openGraphImageUrl: "https://opengraph.githubassets.com/588373fa90de5f993b70f75c0a068c6120a6381901b4a45ec9e81909a5e3fdd3/Reality2713/StageView"
---

# StageView

A Swift package for Apple-native 3D viewport UI built on **RealityKit**.

## Overview

**What is RealityKit?**

RealityKit is Apple's high-performance 3D rendering framework designed for AR and spatial computing experiences. It runs natively across iOS, iPadOS, macOS, and visionOS, providing:
- Real-time physically-based rendering (PBR)
- AR-specific features (anchoring, occlusion, plane detection)
- Entity-Component-System (ECS) architecture
- Tight integration with SwiftUI and Reality Composer Pro

**About This Package**

StageView provides the RealityKit implementation and shared overlay layer used by RealityKit-based stage viewers. It owns viewport-specific affordances such as procedural grids, overlays, IBL controls, scale indicators, and RealityKit pick remapping.

OpenUSD inspection, editing, validation, and material semantics belong in OpenUSDKit and SwiftUsdShell. StageView stays focused on the viewport experience and can be used without linking the OpenUSDKit product surface.

## Features

- **Dynamic Grid**: Scale-aware grid that extends based on scene size (1 meter = 1 meter always)
- **Viewport Material Assets**: Shader graph recipes for RealityKit…
