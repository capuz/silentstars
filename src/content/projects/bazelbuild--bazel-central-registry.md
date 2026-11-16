---
repo: "bazelbuild/bazel-central-registry"
name: "bazel-central-registry"
description: "The central registry of Bazel modules for the Bzlmod external dependency system."
readmeQualityOk: true
url: "https://github.com/bazelbuild/bazel-central-registry"
homepage: "https://registry.bazel.build"
language: "Starlark"
languages: ["Starlark"]
languagePcts: [82]
stars: 401
forks: 969
openIssues: 196
closedIssues: 322
watchers: 12
contributors: 647
recentReleases: 0
createdAt: "2020-10-27T15:29:31Z"
lastCommitAt: "2026-11-16T11:56:14Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "community_hub", "fork_magnet"]
healthScore: 92
undervaluedScore: 43
maintainers: ["Vertexwahn", "aspect-marvin", "aran"]
openGraphImageUrl: "https://opengraph.githubassets.com/38ed92b096a7c4b1fc254b48d1ce9350484e032f0a85cd9ab3eb6d6cfeee8e2e/bazelbuild/bazel-central-registry"
discussionCount: 24
---

# Bazel Central Registry

## Overview

The Bazel Central Registry (BCR) is the default registry for Bazel's external dependency system ("Bzlmod"). This is the GitHub repository backing the contents of the BCR, hosted at https://bcr.bazel.build/. For the website that allows you to search modules and see their versions conveniently, visit https://registry.bazel.build/.

Besides hosting metadata about Bazel-specific libraries (commonly known as "rulesets"), the BCR is also a central host for projects that don't have upstream support for Bazel (most commonly, C/C++ projects).

The BCR is just like a regular [Bazel registry](https://bazel.build/external/registry), with some extra metadata fields and policy restrictions. You can contribute to the BCR by sending pull requests; see [BCR policies](https://github.com/bazelbuild/bazel-central-registry/blob/HEAD/docs/bcr-policies.md) and [contribution guidelines](https://github.com/bazelbuild/bazel-central-registry/blob/HEAD/docs/README.md) for more information.

## Disclaimer

The core infrastructure of the Bazel Central Registry depends on GitHub and Google Cloud. Bazel users who enable Bzlmod (the default since Bazel 8) depend on the BCR…
