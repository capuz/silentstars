---
repo: "IgorKonovalov/Ritmolux"
name: "Ritmolux"
description: "A lightweight real-time music visualizer for Windows and macOS: a standalone app and a foobar2000 component over one Rust + wgpu core, driven by editable text presets. Docs and preset gallery: https://igorkonovalov.github.io/Ritmolux/"
readmeQualityOk: true
url: "https://github.com/IgorKonovalov/Ritmolux"
homepage: "https://igorkonovalov.github.io/Ritmolux/"
language: "Rust"
languages: ["Rust"]
languagePcts: [82]
topics: ["audio-visualization", "foobar2000", "music-visualizer", "rust", "wgpu"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-07-21T09:48:51Z"
lastCommitAt: "2026-09-24T08:14:46Z"
lastReleaseAt: "2026-08-16T15:26:13Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 80
undervaluedScore: 60
maintainers: ["IgorKonovalov"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1307540194/de1c02d0-7c44-4957-bcdf-8c7ffba153d8"
---

# Ritmolux

A lightweight, real-time music visualizer built around one **shared Rust core** that turns a
stream of PCM audio samples into GPU-rendered visuals. Two frontends consume that core:

- **Standalone app** (Windows, macOS and Linux) — pure Rust (`winit` + `wgpu`), fed by the OS's
  system-audio capture.
- **foobar2000 plugin** (Windows-first) — a thin **C++ shim** over the core's **C ABI**, fed by
  foobar's own `visualisation_stream` (no loopback needed on that path).

The core is **source-agnostic**: it takes interleaved/mono PCM frames and does not care whether
they came from loopback capture or foobar. That single abstraction is what lets one visual
codebase serve both frontends.

| | | |
|---|---|---|
| [](docs/preset-guide.md) | [](docs/preset-guide.md) | [](docs/preset-guide.md) |
| `attractor` | `spectrum` | `star_pattern` |

Every built-in rendering system is driven by editable text presets —
**[see them, and how to write one](https://github.com/IgorKonovalov/Ritmolux/blob/HEAD/docs/preset-guide.md)**.

**Documentation site: [igorkonovalov.github.io/Ritmolux](https://igorkonovalov.github.io/Ritmolux/)**
— the same documents this repository holds, with search,…
