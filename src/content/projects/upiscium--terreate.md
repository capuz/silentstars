---
repo: "upiscium/Terreate"
name: "Terreate"
description: "3D graphics support library for C++."
readmeQualityOk: true
url: "https://github.com/upiscium/Terreate"
language: "C++"
languages: ["C++"]
languagePcts: [90]
stars: 9
forks: 0
openIssues: 106
closedIssues: 66
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2023-09-30T10:23:10Z"
lastCommitAt: "2026-11-25T03:13:34Z"
lastReleaseAt: "2025-07-26T12:22:56Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 87
undervaluedScore: 63
maintainers: ["upiscium"]
openGraphImageUrl: "https://opengraph.githubassets.com/6306481fc0722201e25480444b1ead157fb2bc324df54d816839cfd915d0bfc6/upiscium/Terreate"
---

# Terreate

Terreate is a code-first C++23/Vulkan rendering-support library, not an application engine.
The application retains its own loop, scheduling, and resource lifetime decisions.
The project uses GCC/g++, CMake, Ninja, CTest, Nix, and Just. KAGARI v0.1.0
is an optional external, isolated Work Unit developer tool rather than a repository-owned agent runtime.

## Architecture documentation

- [Configuration and capability resolution contract](https://github.com/upiscium/Terreate/blob/HEAD/docs/architecture/configuration-resolution.md)
- [Core error and result contract](https://github.com/upiscium/Terreate/blob/HEAD/docs/architecture/error-result.md)
- [Structured diagnostics contract](https://github.com/upiscium/Terreate/blob/HEAD/docs/architecture/diagnostics.md)
- [Graphics allocator integration and ownership](https://github.com/upiscium/Terreate/blob/HEAD/docs/architecture/allocator.md)
- [Graphics validation and integration test matrix](https://github.com/upiscium/Terreate/blob/HEAD/docs/development/graphics-test-matrix.md)

The documentation (architecture, development guide, API reference) is built with
`just project::docs`; its entry point is `docs/index.md`.
