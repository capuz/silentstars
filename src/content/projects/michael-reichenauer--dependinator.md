---
repo: "michael-reichenauer/Dependinator"
name: "Dependinator"
description: "Interactive dependency map for C#/.NET codebases: a VS Code extension and companion web app for understanding, analyzing and refactoring software architecture."
readmeQualityOk: true
url: "https://github.com/michael-reichenauer/Dependinator"
homepage: "https://dependinator.com"
language: "C#"
languages: ["C#"]
languagePcts: [82]
topics: ["architecture-diagram", "blazor", "code-visualization", "csharp", "dependency-analysis", "dependency-graph", "dotnet", "roslyn", "software-architecture", "visual-studio-code"]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2017-06-24T13:23:12Z"
lastCommitAt: "2026-10-14T08:57:41Z"
lastReleaseAt: "2026-09-11T08:16:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "release_machine"]
healthScore: 89
undervaluedScore: 80
maintainers: ["michael-reichenauer", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/95298941/2897756a-4e58-4a7e-ad15-a641d407c3e9"
discussionCount: 0
---

See your C#/.NET codebase or Azure Bicep deployment as an interactive dependency map, right inside VS Code.

  &nbsp;&middot;&nbsp;
  &nbsp;&middot;&nbsp;
  &nbsp;&middot;&nbsp;

Dependinator parses your solution and draws it as a zoomable map. Projects,
namespaces, types and members are nested nodes; dependencies are the lines
between them. An Azure Bicep deployment is drawn the same way: modules and
resources with their Azure icons, parameters and outputs, and the dependencies
between them. Zoom out for the big picture, zoom in to see how a component works
inside, and jump from any node straight to its source.

## Why

- **Get oriented fast.** Joining a project or opening an old codebase? See how
  it is put together before reading a single file.
- **Refactor with confidence.** Find the tangles, see what depends on what, and
  check that a change lands where you expect.
- **Keep an architecture picture that stays true.** The map is generated from
  the code and refreshes as you edit. Annotate it with notes, icons and
  hand-drawn nodes, and it still reflects reality tomorrow.

## Features

- **Interactive map.** Pan, zoom and double-click to drill into any node. The
  breadcrumb…
