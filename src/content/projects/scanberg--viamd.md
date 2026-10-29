---
repo: "scanberg/viamd"
name: "viamd"
description: "Visual Interactive Analysis of Molecular Dynamics"
readmeQualityOk: true
url: "https://github.com/scanberg/viamd"
language: "C++"
languages: ["C++"]
languagePcts: [91]
stars: 339
forks: 37
openIssues: 8
closedIssues: 103
watchers: 10
contributors: 11
recentReleases: 0
createdAt: "2018-01-29T10:06:10Z"
lastCommitAt: "2026-10-29T12:25:42Z"
lastReleaseAt: "2023-10-04T19:38:31Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 95
undervaluedScore: 37
maintainers: ["scanberg"]
openGraphImageUrl: "https://opengraph.githubassets.com/119440fda2083d908a14f3d9ed604d1982b14162d7fd86182c98691220554d61/scanberg/viamd"
discussionCount: 18
---

# VIAMD
Visual Interactive Analysis of Molecular Dynamics

VIAMD is an interactive analysis tool for molecular dynamics (MD) written in C/C++. VIAMD is developed at the PDC Center for High Performance Computing (KTH, Stockholm). It exposes a rudimentary scripting language for declaring operations performed across trajectory frames.
The results can then be viewed in the different windows exposed in the application. 

## Status

## Running VIAMD 

### Windows
For Windows, we recommend using the latest binary available on the [release page](https://github.com/scanberg/viamd/releases/).

### macOS
For macOS, we recommend using the latest binary available on the [release page](https://github.com/scanberg/viamd/releases/).

**NOTE:** To be able to run this, you will have to do some magic in a terminal to be able to run the app bundle since we do not have code signing.

```xattr -dr com.apple.quarantine viamd.app```

### Building for Ubuntu and macOS
To [build](https://github.com/scanberg/viamd/wiki/0.-Building) VIAMD on your machine, you can follow the procedure described in detail in the wiki for [Linux](https://github.com/scanberg/viamd/wiki/0.-Building#linux) and…
