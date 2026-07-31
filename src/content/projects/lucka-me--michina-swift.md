---
repo: "lucka-me/michina-swift"
name: "michina-swift"
description: "Immich Machine Learning Server on macOS."
readmeQualityOk: true
url: "https://github.com/lucka-me/michina-swift"
homepage: "https://michina.lucka.dev"
language: "Swift"
languages: ["Swift"]
languagePcts: [97]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-13T16:07:27Z"
lastCommitAt: "2026-07-31T06:29:23Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 51
maintainers: ["lucka-me"]
openGraphImageUrl: "https://opengraph.githubassets.com/7ff01bbf70db2c450e031f2f4c42209abe4aea4302236424bea3237ac906bd76/lucka-me/michina-swift"
---

# Michina

<picture>
    <source srcset="./docs/static/images/app-icon-dark.png 2x" media="(prefers-color-scheme: dark)" />
    <source srcset="./docs/static/images/app-icon-light.png 2x" media="(prefers-color-scheme: light)" />
</picture>

Immich Machine Learning Server on macOS.

[workflow-build-release]: https://github.com/lucka-me/michina-swift/actions/workflows/build-release.yml
[workflow-build-release-badge]: https://github.com/lucka-me/michina-swift/actions/workflows/build-release.yml/badge.svg

> [!IMPORTANT]
> This project is still under development. **Use AT YOUR OWN RISK, and do not forget to BACKUP your database before
> running massive machine learning jobs on your Immich instance with Michina.**

## Glance

In a nutshell, Michina is a Swift implementation of
[immich/machine_learning](https://github.com/immich-app/immich/tree/main/machine-learning), with a GUI, for macOS.

> [!NOTE]
> Because of the differences in image processing ecosystem between of Swift (Core Image, Core Graphic, vImage...) and
> Python (Pillow, OpenCV, NumPy...), Machina doesn't always behave exactly the same as the original official
> implementation does, which may lead to slight differences in…
