---
repo: "PastiiJay/klbf-lab"
name: "klbf-lab"
description: "Xbox Series X|S (Scarlett) GDK compatibility layer for Windows: runs the Xbox Series build of the game natively on PC from your own files. AMD Radeon fixes, water physics, optional AMD FSR frame generation. No game files."
readmeQualityOk: true
url: "https://github.com/PastiiJay/klbf-lab"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["amd", "compatibility-layer", "d3d12", "rust", "radeon", "rdna4", "gdk", "scarlett", "xbox-series"]
stars: 146
forks: 25
openIssues: 22
closedIssues: 3
watchers: 3
contributors: 52
recentReleases: 0
createdAt: "2026-11-25T08:33:02Z"
lastCommitAt: "2026-11-26T15:24:52Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 69
undervaluedScore: 23
maintainers: ["PastiiJay", "HandshakeHackin", "gmankab"]
openGraphImageUrl: "https://opengraph.githubassets.com/d1e2d2fd748c7146e2b8b2e5a2df182b9506eda74a1f90037b46a28f2a3f7d9c/PastiiJay/klbf-lab"
---

An open lab that runs the Xbox Series X|S (Scarlett) build of the game natively on a Windows PC: a GDK compatibility layer (`kernelx`, `xgameruntime`, `d3d12_xs` → host D3D12, RDNA2 → DXIL shader translation) that combines the best fixes from open compatibility projects into one tested build. Our own fixes (AMD Radeon stability and rendering, water physics, pre-building pipelines, optional AMD FSR frame generation) and fixes from other contributors, credited below.

This is the one version we recommend. It is meant for every graphics card; so far we have tested it on an AMD Radeon RX 9070 XT, and reports from other cards (NVIDIA, Intel, other AMD) are very welcome. New builds are tried first on the **[`beta` branch](https://github.com/PastiiJay/klbf-lab/tree/beta)** of this repository (test builds); issues and test reports go in [this repository's issues](https://github.com/PastiiJay/klbf-lab/issues).
