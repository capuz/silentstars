---
repo: "maplibre/maplibre-native-slint"
name: "maplibre-native-slint"
description: "MapLibre Native + Slint Integration"
url: "https://github.com/maplibre/maplibre-native-slint"
language: "C++"
languages: ["C++"]
languagePcts: [59]
stars: 22
forks: 6
openIssues: 2
closedIssues: 2
watchers: 1
contributors: 8
recentReleases: 0
createdAt: "2025-06-29T01:37:15Z"
lastCommitAt: "2026-07-04T06:11:48Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 75
undervaluedScore: 41
maintainers: ["yuiseki", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a111eacd3558e101034abf95b6c193b72a2cfdf123bcf6626cff39b9d6eadc75/maplibre/maplibre-native-slint"
fundingLinks: ["GITHUB:https://github.com/maplibre", "OPEN_COLLECTIVE:https://opencollective.com/maplibre"]
---

# MapLibre Native + Slint Reference Implementation

This repository is a working reference for using [MapLibre Native](https://github.com/maplibre/maplibre-native) inside [Slint](https://slint.dev/) applications.

The important thing here is not packaging polish. The important thing is that the combination actually works today across desktop platforms, with a reusable Slint component surface in [`src/`](src/).

## What This Repository Is

- A reusable Slint component library centered on [`src/maplibre.slint`](src/maplibre.slint)
- A canonical C++ backend integration that works on Linux, Windows, and macOS
- A practical reference for people who want to build their own Slint + MapLibre app
- A place to validate backend choices such as WebGPU (`wgpu-native`) and Metal/OpenGL fallbacks

## What This Repository Is Not

- Not yet a polished end-user SDK
- Not yet a versioned package with stable distribution guarantees
- Not yet a "just import it and everything is magically wired for you" solution

Today, the most honest way to describe this repository is:

> If you want to build a Slint application that embeds MapLibre, this repository shows a real cross-platform way to do it.

##…
