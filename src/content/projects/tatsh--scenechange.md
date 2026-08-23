---
repo: "Tatsh/scenechange"
name: "scenechange"
description: "Scene change detection plugin for VapourSynth."
readmeQualityOk: true
url: "https://github.com/Tatsh/scenechange"
homepage: "https://tatsh.github.io/scenechange/"
language: "C"
languages: ["C"]
languagePcts: [66]
topics: ["plugin", "vapoursynth"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2017-04-09T03:22:30Z"
lastCommitAt: "2026-08-23T04:09:12Z"
lastReleaseAt: "2026-08-04T03:23:37Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 98
undervaluedScore: 91
maintainers: ["dependabot[bot]", "Tatsh", "pre-commit-ci[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a42b1b1e1360f5cfaf2eaa554ad5f5ad464958f975abe1a5ac6eaf85890c7c9c/Tatsh/scenechange"
fundingLinks: ["GITHUB:https://github.com/Tatsh", "KO_FI:https://ko-fi.com/tatsh2", "LIBERAPAY:https://liberapay.com/tatsh2", "PATREON:https://patreon.com/tatsh2"]
---

# scenechange

Scene change detection plugin for VapourSynth.

The project builds two VapourSynth plugins:

- `scenechange` (namespace `scd`) detects scene changes and attaches `_SceneChangePrev` and
  `_SceneChangeNext` frame properties (0 or 1) so downstream temporal filters can avoid bleeding
  across cuts.
- `temporalsoften2` (namespace `focus2`) is a temporal-averaging denoiser that honours those scene
  change properties.

The `vapoursynth-scenechange` Python package bundles both compiled plugins together with a small
wrapper (`scenechange.TemporalSoften`) that stitches them into a single function call.

## Building and installing

Requirements:

- A C99 compiler (GCC, Clang, or MSVC).
- Meson 1.3 or newer, and Ninja.
- VapourSynth R55 or newer (API 4) headers. These are found via `vapoursynth.pc`, or via the
  `vapoursynth` Python package (`vapoursynth.get_include()`), and are otherwise downloaded at
  configure time. The plugins use `VapourSynth4.h` and are not compatible with the legacy API 3.

Configure, build, and install:

```shell
meson setup build
meson compile -C build
meson install -C build
```

By default the plugins install to `<libdir>/vapoursynth`. Override the…
