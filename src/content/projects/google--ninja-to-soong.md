---
repo: "google/ninja-to-soong"
name: "ninja-to-soong"
description: "Generate Soong files from Ninja"
readmeQualityOk: true
url: "https://github.com/google/ninja-to-soong"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
stars: 7
forks: 9
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 10
recentReleases: 0
createdAt: "2026-04-09T14:56:02Z"
lastCommitAt: "2026-10-29T10:36:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 84
undervaluedScore: 61
maintainers: ["rjodinchr", "kumarsac", "mbizansz"]
openGraphImageUrl: "https://opengraph.githubassets.com/28a30ff0cd869153386a5a84f65b367f75cb9e0b8ebacd0df3deefbbd9ba8a3c/google/ninja-to-soong"
---

# Ninja to Soong [](https://github.com/google/ninja-to-soong/actions/workflows/presubmit.yml?query=branch%3Amain++)

`ninja-to-soong` is a project to generate `Soong` files (`Android.bp`) for the Android build system.

# Legal

`ninja-to-soong` is licensed under the terms of the [Apache 2.0 license](https://github.com/google/ninja-to-soong/blob/HEAD/LICENSE)

This is not an officially supported Google product. This project is not eligible for the [Google Open Source Software Vulnerability Rewards Program](https://bughunters.google.com/open-source-security).

# How does it work?

1. `ninja-to-soong` generates [Ninja](https://ninja-build.org/) files using either:
    - [CMake](https://cmake.org/) and the Android NDK
    - [GN](https://github.com/o-lim/generate-ninja) cross-compiling for [Android](https://gn.googlesource.com/gn/+/HEAD/docs/quick_start.md#cross_compiling-to-a-target-os-or-architecture)
    - [Meson](https://mesonbuild.com/) and the Android NDK
2. `ninja-to-soong` generates `Soong` files using [Ninja](https://ninja-build.org/) files.

# Dependencies

* [Rust](https://www.rust-lang.org/)
* [Ninja](https://ninja-build.org/)
* Depending on the projects:
  *…
