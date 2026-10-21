---
repo: "CroqueMr/libreelec-x86-DV"
name: "libreelec-x86-DV"
description: "LibreELEC x86_64 with Dolby Vision support for Intel, AMD, and Nvidia"
readmeQualityOk: true
url: "https://github.com/CroqueMr/libreelec-x86-DV"
homepage: "https://github.com/CroqueMr/libreelec-x86-DV/releases"
language: "C"
languages: ["C", "Makefile", "Python"]
languagePcts: [33, 30, 23]
stars: 78
forks: 6
openIssues: 4
closedIssues: 17
watchers: 1
contributors: 11
recentReleases: 10
createdAt: "2026-09-25T21:04:20Z"
lastCommitAt: "2026-10-21T21:15:13Z"
lastReleaseAt: "2026-10-20T18:27:47Z"
status: "thriving"
tags: ["solo_builder", "funded", "release_machine"]
healthScore: 95
undervaluedScore: 40
maintainers: ["CroqueMr", "dangerouslaser"]
openGraphImageUrl: "https://opengraph.githubassets.com/6e4334f82ec56422ecda3161fb160e5d65a7098bc0dbced8922fc80e0ee725e2/CroqueMr/libreelec-x86-DV"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/libreelec"]
---

# LibreELEC with Dolby Vision and AMD 3D support

Dolby Vision playback and HDR10 conversion in Kodi, powered by **CB1**, an
open-source Dolby Vision processing engine. Intel and AMD integrated graphics
are supported. Dedicated AMD Radeon and NVIDIA GeForce GPUs are experimental.

**R1.0.0 Beta5** · LibreELEC 13 · Kodi 22 RC1 · CB1 0.3

[Downloads](https://github.com/CroqueMr/libreelec-x86-DV/releases)
· [Release notes](https://github.com/CroqueMr/libreelec-x86-DV/blob/HEAD/docs/cb1/RELEASE.md)
· [Report an issue](https://github.com/CroqueMr/libreelec-x86-DV/issues)

No external player or proprietary Dolby SDK is required.

## Supported Dolby Vision profiles

| Profile | Support |
| --- | --- |
| 5 | Yes |
| 7 MEL | Yes |
| 7 FEL | Yes, including enhancement-layer reconstruction |
| 8.1 / 8.2 / 8.4 | Yes |
| 10 | Yes |
| 9, legacy profiles, 20 | No |

CM2.9 and CM4 metadata are supported. Mode availability depends on the source
format and the active output capabilities.

## Rendering modes

| Source | Mode | Output | Purpose |
| --- | --- | --- | --- |
| Dolby Vision | **Dolby Vision Standard** | Dolby Vision, TV-Led | Prioritize performance with near-imperceptible image…
