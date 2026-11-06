---
repo: "docker/packaging"
name: "packaging"
description: "Docker Packaging (deb, rpm, static)"
readmeQualityOk: true
url: "https://github.com/docker/packaging"
homepage: "https://hub.docker.com/r/dockereng/packaging"
language: "Dockerfile"
languages: ["Dockerfile", "Shell"]
languagePcts: [45, 36]
stars: 36
forks: 39
openIssues: 9
closedIssues: 22
watchers: 5
contributors: 51
recentReleases: 0
createdAt: "2022-08-29T08:36:14Z"
lastCommitAt: "2026-11-06T02:43:19Z"
lastReleaseAt: "2022-10-03T12:57:23Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 93
undervaluedScore: 67
maintainers: ["vvoland", "thaJeztah", "crazy-max"]
openGraphImageUrl: "https://opengraph.githubassets.com/726d2829f4c53040ff319e1fd4a2cb595839288de5386ec6e07c1a3ff0289c4d/docker/packaging"
discussionCount: 0
---

# Docker Packaging

## About

This repository creates packages (deb, rpm, static) for various projects and
are published as a Docker image [on Docker Hub](https://hub.docker.com/r/dockereng/packaging).

___

* [Packaging guidelines](#packaging-guidelines)
* [Release](#release)
* [Build](#build)
  * [Requirements](#requirements)
  * [Usage](#usage)
  * [Remote override](#remote-override)
* [Contributing](#contributing)

## Packaging guidelines

Docker-maintained `.deb` and `.rpm` packages must build shipped binaries from
source in the distro package build path. See [PACKAGING.md](https://github.com/docker/packaging/blob/HEAD/PACKAGING.md) for
the full packaging contract around source builds, distro build environments,
provenance, and SBOMs.

## Release

Packages are published to [Docker Hub](https://hub.docker.com/r/dockereng/packaging)
as non-runnable images that only contains the artifacts. You can check the [GitHub Releases](https://github.com/docker/packaging/releases)
for the list of published Docker tags.

> [!NOTE]
> We are also publishing nightly builds using the [`nightly-<project>-<version>` tags](https://hub.docker.com/r/dockereng/packaging/tags?page=1&name=nightly-).…
