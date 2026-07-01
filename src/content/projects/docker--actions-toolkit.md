---
repo: "docker/actions-toolkit"
name: "actions-toolkit"
description: "Toolkit for Docker (GitHub) Actions"
url: "https://github.com/docker/actions-toolkit"
homepage: "https://www.npmjs.com/package/@docker/actions-toolkit"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["buildkit", "buildx", "docker", "github", "github-actions", "toolkit"]
stars: 100
forks: 45
openIssues: 0
closedIssues: 29
watchers: 7
contributors: 45
recentReleases: 0
createdAt: "2023-01-15T16:24:30Z"
lastCommitAt: "2026-07-01T07:05:22Z"
lastReleaseAt: "2023-02-18T06:40:01Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 53
maintainers: ["crazy-max", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/989b1f42271b66bb810769c5b86f898169d21eae48927d4e4e52d093ebd0c9c4/docker/actions-toolkit"
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
