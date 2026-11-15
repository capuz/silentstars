---
repo: "Kataglyphis/BeschleunigerBallett"
name: "BeschleunigerBallett"
description: "🚀 C++23 based acceleration playground. Contains renderer with Vulkan support. Serves as playground for me to test new CMake/C++/Vulkan... features🚀 "
readmeQualityOk: true
url: "https://github.com/Kataglyphis/BeschleunigerBallett"
homepage: "https://beschleunigerballette.jonasheinle.de/"
language: "C++"
languages: ["C++"]
languagePcts: [84]
topics: ["rendering", "vulkan", "path-tracing", "physically-based-rendering", "cmake", "cpp", "rust"]
stars: 8
forks: 2
openIssues: 0
closedIssues: 4
watchers: 2
contributors: 4
recentReleases: 3
createdAt: "2021-09-18T12:48:54Z"
lastCommitAt: "2026-11-15T08:24:17Z"
lastReleaseAt: "2026-10-17T18:26:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 99
undervaluedScore: 88
maintainers: ["Kataglyphis"]
openGraphImageUrl: "https://opengraph.githubassets.com/5c25ac43758df966633017604e60231692d23d2e582dc14dadec29f745e72ae0/Kataglyphis/BeschleunigerBallett"
fundingLinks: ["GITHUB:https://github.com/Kataglyphis"]
---

[**Docs site**](https://beschleunigerballette.jonasheinle.de/)

BeschleunigerBallett is a renderer and graphics-engine playground used to explore modern graphics APIs and the surrounding engineering workflow. The repository combines a C++23-modules Vulkan engine, a companion Rust WebGPU renderer (native + browser), build automation, packaging, testing, documentation, and Rust integration.

Dependency updates: run `bash scripts/linux/renovate-local.sh` to report, `--apply --dry-run` to plan,
and `--apply` to update. It checks every direct submodule against its remote default branch and
initializes missing checkouts when applying, including the tooling hub when needed. CI checks the
wrapper and config; see
[the shared Renovate guide](https://github.com/Kataglyphis/ANTfrastructure/blob/develop/docs/dependency-updates.md).
The docs environment is declared in `pyproject.toml` and locked in `uv.lock`; run
`git submodule update --init --recursive` followed by `uv sync --locked` to install it.
The CMake formatter uses ANTfrastructure's locked uv tool project.

## Highlights

- **Vulkan renderer in C++23 modules:** forward and deferred rasterization, ray tracing, path tracing, PBR,…
