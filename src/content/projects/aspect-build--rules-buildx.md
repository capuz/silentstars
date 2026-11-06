---
repo: "aspect-build/rules_buildx"
name: "rules_buildx"
description: "BuildX rules for Bazel"
readmeQualityOk: true
url: "https://github.com/aspect-build/rules_buildx"
language: "Starlark"
languages: ["Starlark"]
languagePcts: [95]
stars: 21
forks: 4
openIssues: 1
closedIssues: 4
watchers: 1
contributors: 15
recentReleases: 3
createdAt: "2025-08-11T18:57:30Z"
lastCommitAt: "2026-11-06T02:44:01Z"
lastReleaseAt: "2026-11-04T00:23:58Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 85
undervaluedScore: 68
maintainers: ["njlr", "xangcastle", "thesayyn"]
openGraphImageUrl: "https://opengraph.githubassets.com/4fe5b9e8af01134d22e92cb43661fb20c9b6ddb6e4c10d3a5c2db9d1cc7c28e8/aspect-build/rules_buildx"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/aspect-build"]
---

# Bazel rules for BuildX

> [!IMPORTANT]
> This module was previously published as `aspect_rules_buildx`. To upgrade, replace `aspect_rules_buildx` with `rules_buildx` in your `bazel_dep`, `load()` statements and flags.

Bazel rules for [buildx](https://github.com/docker/buildx) so you can use your existing Dockerfiles with Bazel.

## Why would you want this?

`rules_oci` approaches container definitions from the perspective that container images are
composites of layers which need to be assembled, and which can be assembled without using a
container runtime. This works well for distroless-style images which have few or no "system"
dependencies, and which can be described in terms of layering Bazel-defined build products into
container images.

Treating OCI images as "just a stack of tarballs" struggles with building more conventional
system-image style Docker containers. It's common to see Dockerfiles which manage dependencies via
`RUN apt-get install` or `RUN curl|bash` and such which are difficult to model when assembling
containers from layers of assets.

This tool provides a bridge for teams with existing Dockerfiles. By leveraging BuildX, which allows
for non-hermetic…
