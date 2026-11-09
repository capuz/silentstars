---
repo: "cristim/AztecCraft"
name: "AztecCraft"
description: "Rust desktop 3D authoring prototype inspired by Maya workflows"
readmeQualityOk: true
url: "https://github.com/cristim/AztecCraft"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 27
forks: 7
openIssues: 84
closedIssues: 97
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2026-10-14T15:08:04Z"
lastCommitAt: "2026-11-09T11:59:32Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 89
undervaluedScore: 39
maintainers: ["cristim", "RafaelMendes1407", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/de4e6d27a2ec8943a24b8a85d4cb99b5393eed6fefe786129802ec2f0456ecfd/cristim/AztecCraft"
---

# AztecCraft

AztecCraft is a Rust desktop 3D authoring project with the objective of reproducing Autodesk Maya 2026's interface and behavior, including modeling, animation, rigging, simulation, rendering, scripting and existing plug-in compatibility.

The current prototype has a native desktop window for cube/plane/sphere/cylinder/cone creation, selection, numeric transforms, undo/redo and perspective navigation. Open stages Maya binary scenes or legacy JSON documents into the authoritative native model. This candidate adds Unix and Windows Maya binary Save/Save As for supported existing-record edits through the ordinary vendored writer; current application checks and native Save QA remain pending. Overall Maya coverage is unmeasured.

[Current capabilities](#current-capabilities) · [Build and test](#build-and-test) · [Roadmap](#roadmap-and-publication) · [Project documentation](https://github.com/cristim/AztecCraft/blob/HEAD/.project-docs/INDEX.md)

## Current capabilities

| Area | This checkout | Evidence or next step |
| --- | --- | --- |
| Scene data | Cube/plane creation, validated quad meshes, stable IDs, rename, remove and transform edits | [Scene workflow…
