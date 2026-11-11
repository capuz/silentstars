---
repo: "cbusillo/BD_to_AVP"
name: "BD_to_AVP"
description: "3D Blu-ray to Apple Vision Pro converter"
readmeQualityOk: true
url: "https://github.com/cbusillo/BD_to_AVP"
language: "Swift"
languages: ["Swift", "Python"]
languagePcts: [50, 47]
stars: 171
forks: 9
openIssues: 11
closedIssues: 443
watchers: 8
contributors: 5
recentReleases: 0
createdAt: "2024-03-12T23:01:43Z"
lastCommitAt: "2026-11-11T19:47:39Z"
lastReleaseAt: "2024-06-10T18:45:36Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 42
maintainers: ["shiny-code-app[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f3aae068b0295de6b59c03d5dc8d25832b5a8c003e3ee0d33a2d9a8104d22666/cbusillo/BD_to_AVP"
discussionCount: 15
---

# BD_to_AVP

This repository contains the full Mac converter and the Vision Pro movie player:

| App | Platform | Purpose |
| --- | --- | --- |
| **3D Blu-ray to Vision Pro** | macOS | Convert supported sources into spatial movies. |
| **Shiny 3D Cinema** | visionOS | Play movies from the headset's own storage or from network shares added as Locations. |

The [player guide](https://github.com/cbusillo/BD_to_AVP/blob/HEAD/docs/visionos-player.md) covers supported formats, Locations and
developer workflows. The repository, CLI, Xcode targets, bundle IDs and
saved-data paths retain their established `BD_to_AVP`/`BDToAVPPlayer` identities;
they do not need to match the public app names.

## Introduction

The Mac app turns your 3D Blu-ray movies into spatial videos
you can watch on Apple Vision Pro. Give it a supported 3D Blu-ray disc, disc
image, or existing video file, choose where the finished video should go, and
the app prepares a spatial version while preserving the movie's stereoscopic
depth. For physical discs, MakeMKV is still required to read and extract the
title; existing MKV, MTS, and M2TS files do not need that extra step.

Most people should use the default MV-HEVC…
