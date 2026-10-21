---
repo: "bazelbuild/bazel-central-registry"
name: "bazel-central-registry"
description: "The central registry of Bazel modules for the Bzlmod external dependency system."
readmeQualityOk: true
url: "https://github.com/bazelbuild/bazel-central-registry"
homepage: "https://registry.bazel.build"
language: "Starlark"
languages: ["Starlark"]
languagePcts: [81]
stars: 393
forks: 943
openIssues: 196
closedIssues: 310
watchers: 11
contributors: 623
recentReleases: 0
createdAt: "2020-10-27T15:29:31Z"
lastCommitAt: "2026-10-21T08:49:35Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "community_hub", "fork_magnet"]
healthScore: 92
undervaluedScore: 43
maintainers: ["periareon-bot", "dzbarsky", "bazel-contrib-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/f745fcdb78bd5edfd469662299254cbfd946a20d03cf2a4a648d7b07d5f2556c/bazelbuild/bazel-central-registry"
discussionCount: 24
---

# Bazel Central Registry

## Overview

The Bazel Central Registry (BCR) is the default registry for Bazel's external dependency system ("Bzlmod"). This is the GitHub repository backing the contents of the BCR, hosted at https://bcr.bazel.build/. For the website that allows you to search modules and see their versions conveniently, visit https://registry.bazel.build/.

Besides hosting metadata about Bazel-specific libraries (commonly known as "rulesets"), the BCR is also a central host for projects that don't have upstream support for Bazel (most commonly, C/C++ projects).

The BCR is just like a regular [Bazel registry](https://bazel.build/external/registry), with some extra metadata fields and policy restrictions. You can contribute to the BCR by sending pull requests; see [BCR policies](https://github.com/bazelbuild/bazel-central-registry/blob/HEAD/docs/bcr-policies.md) and [contribution guidelines](https://github.com/bazelbuild/bazel-central-registry/blob/HEAD/docs/README.md) for more information.

## Disclaimer

The core infrastructure of the Bazel Central Registry depends on GitHub and Google Cloud. Bazel users who enable Bzlmod (the default since Bazel 8) depend on the BCR…
