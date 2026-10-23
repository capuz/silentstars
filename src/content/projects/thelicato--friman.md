---
repo: "thelicato/friman"
name: "friman"
description: "Frida version management tool"
readmeQualityOk: true
url: "https://github.com/thelicato/friman"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["frida", "python", "reverse-engineering", "version-manager"]
stars: 17
forks: 4
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2025-11-19T10:42:23Z"
lastCommitAt: "2026-10-23T08:46:47Z"
lastReleaseAt: "2026-10-23T08:47:06Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 38
maintainers: ["thelicato"]
openGraphImageUrl: "https://opengraph.githubassets.com/48eeb7509a259f21a48b02f0a5ebbc8aa19a0e1eca27335cd17d1d9340b2f3d0/thelicato/friman"
---

Do you ever feel that finding the right Frida version for the job is like threading a needle? With different projects, devices, and debugging scenarios all requiring specific builds, keeping track of Frida versions can quickly become a tedious balancing act. `friman` (pronounced "*free man*") is designed to solve exactly this problem.

## Why
It’s common to switch between Frida versions because different environments don’t always behave the same with the latest release. Depending on what you’re targeting, a specific version may be the only one that works reliably. Common reasons include:

- **Device/OS quirks**: Older or unusual Android/iOS builds may only work with certain Frida versions.
- **Project compatibility**: Some scripts, tools, or workflows rely on behavior from a specific release (e.g. a lot of APIs changed between `v16` and `v17`).
- **Stability vs. features**: Newer versions fix some issues but can introduce others, so the “right” version is not always the newest.

## Overview

[Frida](https://github.com/frida/frida) evolves rapidly, and different projects or devices often require different versions. Switching manually can be error-prone, especially when juggling…
