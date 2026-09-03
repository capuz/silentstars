---
repo: "DragonFlyBSD/DeltaPorts"
name: "DeltaPorts"
description: "FreeBSD Ports Collection + DeltaPorts = DragonFly Ports (a.k.a. DPorts)"
readmeQualityOk: true
url: "https://github.com/DragonFlyBSD/DeltaPorts"
language: "C"
languages: ["C", "C++"]
languagePcts: [55, 21]
stars: 34
forks: 37
openIssues: 4
closedIssues: 35
watchers: 15
contributors: 31
recentReleases: 0
createdAt: "2012-10-29T11:52:20Z"
lastCommitAt: "2026-09-03T08:15:03Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 94
undervaluedScore: 64
maintainers: ["dragonflybot", "dependabot[bot]", "liweitianux"]
openGraphImageUrl: "https://opengraph.githubassets.com/7bf4d77be72be91897fc1e77464dac8f1bc677ee3090d0c9b8c5f6ab3aa761a1/DragonFlyBSD/DeltaPorts"
---

# Delta Ports

This repository contains patches and files that overlay and modify the FreeBSD Ports Collection to create DragonFly Ports.

> **Note:** This repository is not intended to be useful by itself. Scripts combine these overlays and patches to generate the final product.

## Tooling

The tooling that composes this overlay into a DPorts tree — the compose
pipeline, the `overlay.dops` DSL, the build tracker, the chroot dev-env and the
agentic build-failure repair loop — lives in its own repository, **Polytropos**.
It reads this repository as an input.

The shell scripts under `scripts/` are the earlier generation of that tooling
and still live here.

## Organization

- **docs/**  
  DeltaPorts related documentation.

- **scripts/**  
  Shell scripts to generate the final DPorts repository, as well as a copy of the Tinderbox hooks.

- **ports/**  
  Contains subdirectories corresponding to Ports categories (e.g., `audio`, `editors`, `devel`, etc.).

  - **<category>/**  
    Subdirectory of `ports/` (e.g., `audio`, `editors`, `devel`).

    - **<portname>/**  
      Subdirectory of a category directory. Contains a mix of:
      - `STATUS` file
      - `Makefile.DragonFly`…
