---
repo: "FeatherCompute/Feather"
name: "Feather"
description: "Feather is a high-level C# frontend for EasyGPU, offering an embedded C# DSL, automatic differentiation, graphics pipeline support, and a unified abstraction layer for GPU compute and rendering workflows."
readmeQualityOk: true
url: "https://github.com/FeatherCompute/Feather"
language: "C#"
languages: ["C#", "C++"]
languagePcts: [76, 21]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-01T05:02:15Z"
lastCommitAt: "2026-08-01T06:16:13Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 46
maintainers: ["FSMargoo"]
openGraphImageUrl: "https://opengraph.githubassets.com/8c1e53e0aef8bc43bdc5bfaa525cb07c4a46452b654a40aeca50b8038433eb1e/FeatherCompute/Feather"
discussionCount: 0
---

# Feather.NET

Write GPU compute kernels, texture pipelines, raster shaders, reverse-mode automatic differentiation, and small neural-network experiments in C#.

[Documentation](https://github.com/FeatherCompute/Feather/blob/HEAD/docs/README.md) | [Getting Started](https://github.com/FeatherCompute/Feather/blob/HEAD/docs/getting-started.md) | [Examples](https://github.com/FeatherCompute/Feather/blob/HEAD/docs/examples.md) | [API Reference](https://github.com/FeatherCompute/Feather/blob/HEAD/docs/api.md) | [FEIR](https://github.com/FeatherCompute/Feather/blob/HEAD/docs/feir.md) | [Support Status](https://github.com/FeatherCompute/Feather/blob/HEAD/docs/support-status.md)

</div>

---

Feather is a .NET front end for [EasyGPU](https://github.com/FeatherCompute/Feather/blob/HEAD/EasyGPU/). You write GPU code as normal C# `readonly partial struct` types, the Roslyn generator lowers the supported shader subset into Feather IR (FEIR), and the native bridge sends typed IR into EasyGPU for GLSL/SPIR-V execution.

Feather is currently experimental. The compute path is the most mature surface. Windowing, graphics, automatic differentiation, and `Feather.NN` are usable preview APIs that are…
