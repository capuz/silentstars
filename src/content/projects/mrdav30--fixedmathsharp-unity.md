---
repo: "mrdav30/FixedMathSharp-Unity"
name: "FixedMathSharp-Unity"
description: "A deterministic fixed-point math library for Unity"
readmeQualityOk: true
url: "https://github.com/mrdav30/FixedMathSharp-Unity"
language: "C#"
languages: ["C#"]
languagePcts: [93]
topics: ["deterministic", "fixed-point-arithmetic", "game-development", "high-precision", "math-library", "simulation", "trigonometry", "unity", "fixed-point", "vector-math"]
stars: 63
forks: 11
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2025-02-17T01:13:38Z"
lastCommitAt: "2026-08-09T04:46:20Z"
lastReleaseAt: "2026-05-18T18:12:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 94
undervaluedScore: 48
maintainers: ["mrdav30"]
openGraphImageUrl: "https://opengraph.githubassets.com/77f3ea3566859f0b35fab4e7d89fd2938d839434721d67d0d745e7809d600033/mrdav30/FixedMathSharp-Unity"
fundingLinks: ["GITHUB:https://github.com/mrdav30", "KO_FI:https://ko-fi.com/mrdav30", "BUY_ME_A_COFFEE:https://buymeacoffee.com/mrdav30"]
---

# FixedMathSharp-Unity

[API Documentation](https://mrdav30.github.io/FixedMathSharp-Unity/)

Unity package host for
[FixedMathSharp](https://github.com/mrdav30/FixedMathSharp). Both variants
contain the same deterministic math library and Unity math, geometry, bounds,
and transform adapters.

## Choose a Package

### Standard

`com.mrdav30.fixedmathsharp` includes the MemoryPack serializer/runtime
integration.

`https://github.com/mrdav30/FixedMathSharp-Unity.git?path=/com.mrdav30.fixedmathsharp`

### Lean

`com.mrdav30.fixedmathsharp.lean` omits the MemoryPack serializer/runtime and is
the safer default for Burst AOT. It includes only
`Chronicler.MemoryPackShim.dll`, an attribute-shape compatibility assembly
required by the Lean core DLL; it does not serialize data.

`https://github.com/mrdav30/FixedMathSharp-Unity.git?path=/com.mrdav30.fixedmathsharp.lean`

## Included

- Deterministic `Fixed64` math, vectors, quaternions, matrices, bounds,
  frustums, curves, and geometry
- Unity vector, ray, plane, rectangle, bounds, matrix, `AnimationCurve`, and
  `FixedTransform` interop
- Fixed-point inspector drawers and a sample scene

```csharp
Plane[] planeBuffer = new…
