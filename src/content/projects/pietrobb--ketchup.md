---
repo: "pietrobb/Ketchup"
name: "Ketchup"
description: "Open-source AI-native 2D/3D parametric modeler built in Rust with OCCT and wgpu — exact geometry, assemblies, and safe undoable AI workflows."
readmeQualityOk: true
url: "https://github.com/pietrobb/Ketchup"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["3d-modeling", "ai-assisted", "cad", "opencascade", "parametric-modeling", "rust", "wgpu"]
stars: 7
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 5
createdAt: "2026-08-01T10:42:28Z"
lastCommitAt: "2026-11-03T11:14:59Z"
lastReleaseAt: "2026-11-02T18:22:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 57
maintainers: ["pietrobb", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/f44cc39495250a5abe6a170ec869cae893db87a8427f8375e13ccdec11278a19/pietrobb/Ketchup"
---

# Ketchup

> [!WARNING]
> ## Work in progress — not a finished product
>
> **Ketchup is under active development and is still far from a finished, stable release.**
>
> You are welcome to download it, build it, and look around — but expect missing features, rough edges, breaking changes, and bugs. Please do not rely on it for real work or keep important models only in Ketchup yet.

  Windows x86-64 · Rust · Open CASCADE Technology · wgpu · Apache-2.0

Ketchup is an AI-native desktop modeler for creating, editing, assembling, validating, and exporting real geometry. Manual tools and AI clients connected over MCP share the same canonical command path: every accepted model change is validated, revision-bound, atomic, and undoable. A model can also be a short rule program (Starlark) that you or an AI writes; edits in the window are written back into that program.

## Download and try it

1. Download **`Ketchup-0.3.1-Setup.exe`** from the [latest release](https://github.com/pietrobb/Ketchup/releases/latest) and run it. It installs for the current user only, without administrator rights, into `%LOCALAPPDATA%\Programs\Ketchup` and adds **Ketchup** and **Ketchup Viewer** to the Start…
