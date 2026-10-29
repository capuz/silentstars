---
repo: "MichaCo/Earcut"
name: "Earcut"
description: "Fast and robust ear-clipping polygon triangulation library for .NET 8+."
readmeQualityOk: true
url: "https://github.com/MichaCo/Earcut"
homepage: "https://github.com/mapbox/earcut"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["algorithms", "computational-geometry", "csharp", "polygon", "tessellation", "triangulation"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 23
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-17T18:39:10Z"
lastCommitAt: "2026-10-29T12:25:20Z"
lastReleaseAt: "2026-07-08T17:25:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 48
maintainers: ["github-actions[bot]", "Copilot", "MichaConrad"]
openGraphImageUrl: "https://opengraph.githubassets.com/51bf5d9a00ab2d3bca2aff8f21fad95e607ef289ed4dbf02f7ff502ebe392c97/MichaCo/Earcut"
---

# Earcut.NET

A C# port of the [mapbox/earcut](https://github.com/mapbox/earcut) polygon triangulation library.

> **Note:** This is a 100% AI-driven port, created entirely by AI agents to demonstrate modern .NET development practices.

Fast and robust ear-clipping polygon triangulation library for .NET 8+.

## Features

- Fast polygon triangulation using ear-clipping algorithm
- Supports holes
- Zero-order curve spatial indexing for performance
- Modern C# implementation with .NET 8+ optimizations
- Uses ReadOnlySpan for zero-copy performance

## Installation

```
dotnet add package Earcut.NET
```

## Usage

```csharp
using EarcutDotNet;

// Simple triangle polygon (3 vertices)
double[] coords = [0, 0, 1, 0, 0.5, 1];
var triangles = Earcut.Triangulate(coords);
// triangles: [1, 0, 2] — indices into coords (each vertex is x,y pair)

// Square polygon (4 vertices) — produces 2 triangles
double[] square = [0, 0, 1, 0, 1, 1, 0, 1];
var squareTriangles = Earcut.Triangulate(square);
// squareTriangles: [3, 0, 1, 3, 1, 2]

// Polygon with a hole
double[] polyWithHole = [
    0, 0, 10, 0, 10, 10, 0, 10,   // outer ring (4 vertices)
    2, 2, 2, 8,  8,  8, 8,  2,    // hole ring  (4…
