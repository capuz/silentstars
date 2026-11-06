---
repo: "google/hdmitsuba"
name: "hdmitsuba"
description: "USD Hydra delegate for Mitsuba 3"
readmeQualityOk: true
url: "https://github.com/google/hdmitsuba"
language: "Python"
languages: ["Python", "C++"]
languagePcts: [58, 40]
topics: ["hydra", "mitsuba", "openusd", "usd"]
stars: 90
forks: 9
openIssues: 1
closedIssues: 1
watchers: 5
contributors: 10
recentReleases: 0
createdAt: "2026-06-07T17:47:38Z"
lastCommitAt: "2026-11-06T11:23:47Z"
lastReleaseAt: "2026-06-28T19:20:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 28
maintainers: ["dvicini", "WeiPhil", "Poupine"]
openGraphImageUrl: "https://opengraph.githubassets.com/0837f1bcc9ff59b455d9e5c4c7753be173261235ccb0e0b71034fb8f07ff4078/google/hdmitsuba"
---

# hdMitsuba - USD Hydra Delegate for Mitsuba 3

`hdMitsuba` is a USD Hydra render delegate that enables [OpenUSD](https://github.com/PixarAnimationStudios/OpenUSD) to render scenes using [Mitsuba 3](https://github.com/mitsuba-renderer/mitsuba3). It allows integrating Mitsuba rendering into USD-compatible applications (e.g., usdview, Houdini, ...), or using it programmatically via Hydra.

## Motivation

This Hydra delegate bridges the gap between rendering research and production pipelines by bringing Mitsuba 3 into the Pixar OpenUSD ecosystem. This allows to use the wide range of existing USD tools for scene assembly, while benefitting from various Mitsuba capabilities. USD provides a clean separation between renderer-agnostic scene assembly and final image rendering. Some of the key benefits of `hdMitsuba` are:

*   **Direct USD rendering**: Render USD stages directly using Mitsuba 3 without (inefficient) manual scene translation. This allows harnessing both USD-compatible tools as well as USD's APIs for authoring scenes that are then rendered in Mitsuba. Moreover, Mitsuba can be used as a viewport renderer in USD-native applications.
*   **Efficient incremental updates**:…
