---
repo: "ghilios/hocus-focus"
name: "hocus-focus"
description: "NINA Plugins"
url: "https://github.com/ghilios/hocus-focus"
language: "C#"
languages: ["C#"]
languagePcts: [99]
stars: 13
forks: 6
openIssues: 17
closedIssues: 6
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2021-10-25T13:21:35Z"
lastCommitAt: "2026-06-25T01:39:54Z"
lastReleaseAt: "2021-11-12T15:23:23Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 85
undervaluedScore: 65
maintainers: ["ghilios"]
openGraphImageUrl: "https://opengraph.githubassets.com/bbbf036dfca9a4bd76f4ae4be13da2d03147a887c5e62ca323e3364d3272aada/ghilios/hocus-focus"
---

# Hocus Focus — a NINA plugin

Improved **star detection**, **star annotation**, **autofocus**, and **tilt / aberration inspection**
for [NINA](https://nighttime-imaging.eu/) (Nighttime Imaging 'N' Astronomy).

📖 **Documentation:** **<https://ghilios.github.io/hocus-focus/>**

The documentation covers:

- An overview of the plugin and its key features.
- A complete reference for **every star-detection setting** — what it does, when it helps, and when it
  doesn't, with illustrative figures.
- A technical deep-dive on the **star-detection optimization** approach (the objective function, the
  search algorithm, and how each setting factors in).
- An analysis of which settings could be derived **heuristically** rather than tuned empirically.

## Installation

Hocus Focus is published through NINA's in-app plugin manager (Plugins → Available). See the
documentation for details.

## Building from source

This is a .NET 8 (Windows) class library. Open `Joko.NINA.Plugins/Joko.NINA.Plugins.sln` in Visual
Studio, or build from the command line:

```
dotnet build Joko.NINA.Plugins/Joko.NINA.Plugins.sln -c Debug
```

## License

Licensed under the [Mozilla Public License 2.0](LICENSE.txt).…
