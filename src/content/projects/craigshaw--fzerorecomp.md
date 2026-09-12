---
repo: "craigshaw/FZeroRecomp"
name: "FZeroRecomp"
description: "F-Zero recompiled"
readmeQualityOk: true
url: "https://github.com/craigshaw/FZeroRecomp"
language: "C"
languages: ["C"]
languagePcts: [78]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-09-11T16:58:43Z"
lastCommitAt: "2026-09-12T08:04:49Z"
lastReleaseAt: "2026-09-11T19:32:03Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 20
maintainers: ["craigshaw"]
openGraphImageUrl: "https://opengraph.githubassets.com/1832864ca5f82cb1107c2fa96684bc9436be85caa79343062e1e48543abb1ad3/craigshaw/FZeroRecomp"
---

# F-Zero Recomp

A native, widescreen, static recompilation of F-Zero (USA).

You supply your own cartridge dump. No ROM is included; generated C is not
part of the source repository.

</p>

## Status and features

Most of the game has been tested on macOS with Apple Silicon. Windows x64 now
builds with MSVC and passes the synthetic host, graphics, and raster tests,
including GPU readback on Intel Iris Xe. Linux builds are not yet verified.
Development is ongoing; not every course, vehicle, or game situation is covered.

- Optional 16:9 widescreen
- Enhanced visual filters
- Keyboard and gamepad input, audio, and persistent saves
- ROM picker with identity verification
- In-game display, audio, and input settings

Filters use SDL 3.4 or newer's GPU renderer: Metal on macOS, or Direct3D 12
with Shader Model 6.0 on Windows. Other renderers retain Original colours and
support widescreen. Unsupported game layouts use the native view.

## ROM requirements

Use a **headerless F-Zero (USA)** cartridge dump for code generation:

| Property | Value |
| --- | --- |
| Size | 524,288 bytes |
| Mapping | LoROM |
| SHA-256 | `bf16c3c867c58e2ab061c70de9295b6930d63f29f81cc986f5ecae03e0ad18d2` |…
