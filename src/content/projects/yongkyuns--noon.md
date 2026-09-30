---
repo: "yongkyuns/noon"
name: "noon"
description: "Animation engine inspired by manim, written in Rust"
readmeQualityOk: true
url: "https://github.com/yongkyuns/noon"
language: "Rust"
languages: ["Rust"]
languagePcts: [70]
stars: 131
forks: 7
openIssues: 72
closedIssues: 162
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2022-02-28T02:43:34Z"
lastCommitAt: "2026-09-30T09:57:33Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 93
undervaluedScore: 42
maintainers: ["yongkyuns", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/70c7ef991a198b22c8615fc74601b3d6f2ed3cb1d2f232665f13f880bb0e6a82/yongkyuns/noon"
---

# Noon

Noon is a **Rust-native 2D animation and interactive graphics engine** with Manim-compatible Python authoring, built around a shared semantic scene, a deterministic runtime, and a retained GPU renderer.

Rust and Python expose the same observable scene semantics through shared Rust operations. Python supplies Manim-compatible syntax and arbitrary host callbacks where they are genuinely required; it does not implement a second scene, scheduler, runtime, or renderer.

## Architecture

The main data path is intentionally small. Focused diagrams carry the detailed publication, locality, callback, deployment, and ownership contracts instead of crowding them into one picture.

[D2 source](https://github.com/yongkyuns/noon/blob/HEAD/docs/diagrams/overview.d2) · [Domain projections](https://github.com/yongkyuns/noon/blob/HEAD/docs/architecture.md#domain-projections) · [Revision and lifetime model](https://github.com/yongkyuns/noon/blob/HEAD/docs/architecture.md#identity-generations-revisions-versions-and-sequences) · [Locality propagation](https://github.com/yongkyuns/noon/blob/HEAD/docs/architecture.md#runtime-complexity-contract) · [Callback…
