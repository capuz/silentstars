---
repo: "valence-works/nuplane"
name: "nuplane"
description: "Nuplane is a NuGet runtime reconciliation engine for .NET applications — deterministic, transactional, and host-neutral."
readmeQualityOk: true
url: "https://github.com/valence-works/nuplane"
homepage: "https://www.nuplane.io"
language: "C#"
languages: ["C#"]
languagePcts: [99]
stars: 19
forks: 2
openIssues: 2
closedIssues: 48
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-03-02T11:49:28Z"
lastCommitAt: "2026-11-26T15:27:23Z"
lastReleaseAt: "2026-08-11T00:49:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 57
maintainers: ["sfmskywalker", "joey-orbyss", "grok-valence[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2a47b893a17f802970070ae1fcd0974bc74e4d6d504a4f503a5dff09aa8c1880/valence-works/nuplane"
---

# Nuplane

Nuplane is a runtime control plane for NuGet packages. It lets your .NET application install, update, and load NuGet packages **while it is running** — no restart required.

Drop a `.nupkg` into a watched folder or point Nuplane at a NuGet feed. It resolves the package, extracts it to a deterministic local store, loads the assemblies into an isolated context, and signals your host. Your host decides what to do with the loaded types.

## What you can build

The most immediate use case is **dynamic NuGet package installation into a live .NET application**:
