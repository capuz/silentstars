---
repo: "kevinjohncutler/omnipose"
name: "omnipose"
description: "Omnipose: a high-precision solution for morphology-independent cell segmentation"
readmeQualityOk: true
url: "https://github.com/kevinjohncutler/omnipose"
homepage: "https://omnipose.readthedocs.io"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["deep-learning", "pytorch", "segmentation"]
stars: 159
forks: 46
openIssues: 39
closedIssues: 84
watchers: 5
contributors: 5
recentReleases: 0
createdAt: "2021-11-05T17:34:52Z"
lastCommitAt: "2026-09-02T08:03:41Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 78
undervaluedScore: 29
maintainers: ["kevinjohncutler"]
openGraphImageUrl: "https://opengraph.githubassets.com/cf69e423f27b8d0b317ee77e5b8bd4796863e891dbd039175cb0360ab3ec5f82/kevinjohncutler/omnipose"
---

# Omnipose Refactor (WIP)

This folder hosts a clean, minimal re-implementation of Omnipose with two separable packages:

- `omnipose`: the core Omnipose package (ND-first, backwards-compatible API)
- `omnitools`: shared utilities (plotting, file management, transforms)

The goal is to preserve all current model behaviors and outputs while simplifying structure and removing unused Cellpose code paths.

## Goals
- Preserve model logic and argument semantics for backwards compatibility.
- Ensure identical outputs for existing models.
- Prioritize ND implementations; port 2D-only code only for outline plotting utilities.
- Separate generic plotting/file/transforms into `omnitools`.
- Keep tests and GUI functional.
- Avoid nested class overrides (e.g., `UnetModel`/`CellposeModel`/`Cellpose`).

## Progress
- [x] Define target package structure and module mapping.
- [x] Create parity test harness for side-by-side comparisons.
- [ ] Identify and extract shared utilities into `omnitools`.
- [ ] Port ND-centric core and model definitions.
- [ ] Migrate GUI bindings to new package entrypoints.
- [ ] Verify model output parity and update tests.

## Module Mapping (Draft)
Goal: keep ND-first…
