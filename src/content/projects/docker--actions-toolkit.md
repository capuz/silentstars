---
repo: "docker/actions-toolkit"
name: "actions-toolkit"
description: "Toolkit for Docker (GitHub) Actions"
readmeQualityOk: true
url: "https://github.com/docker/actions-toolkit"
homepage: "https://www.npmjs.com/package/@docker/actions-toolkit"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["buildkit", "buildx", "docker", "github", "github-actions", "toolkit"]
stars: 108
forks: 47
openIssues: 0
closedIssues: 30
watchers: 7
contributors: 44
recentReleases: 0
createdAt: "2023-01-15T16:24:30Z"
lastCommitAt: "2026-10-30T10:22:38Z"
lastReleaseAt: "2023-02-18T06:40:01Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 52
maintainers: ["crazy-max", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/95e2f8ba52495db7256463ad272f6229d5924af2d7fe5222bc254c9f8258dec3/docker/actions-toolkit"
---

# Actions Toolkit

Toolkit for Docker (GitHub) Actions.

## :test_tube: Experimental

This repository is considered **EXPERIMENTAL** and under active development
until further notice. It is subject to non-backward compatible changes or
removal in any future version.

## About

This repository contains the source code for the toolkit that is consumed as
a library by most of our GitHub Actions:

* [docker/bake-action](https://github.com/docker/bake-action)
* [docker/build-push-action](https://github.com/docker/build-push-action)
* [docker/login-action](https://github.com/docker/login-action)
* [docker/metadata-action](https://github.com/docker/metadata-action)
* [docker/setup-buildx-action](https://github.com/docker/setup-buildx-action)
* [docker/setup-compose-action](https://github.com/docker/setup-compose-action)
* [docker/setup-docker-action](https://github.com/docker/setup-docker-action)
* [docker/setup-qemu-action](https://github.com/docker/setup-qemu-action)

This toolkit provides some utilities and common logic when developing GitHub
Actions and also acts as a minimal wrapper around our build tooling such as
[Buildx](https://github.com/docker/buildx) and…
