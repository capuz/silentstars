---
repo: "home-operations/containers"
name: "containers"
description: "Community project for building application containers"
readmeQualityOk: true
url: "https://github.com/home-operations/containers"
homepage: "https://github.com/orgs/home-operations/packages?repo_name=containers"
language: "Dockerfile"
languages: ["Dockerfile"]
languagePcts: [33]
topics: ["containers", "home-operations", "self-hosted"]
stars: 438
forks: 54
openIssues: 1
closedIssues: 56
watchers: 3
contributors: 25
recentReleases: 0
createdAt: "2024-03-28T20:19:33Z"
lastCommitAt: "2026-10-24T00:05:13Z"
lastReleaseAt: "2025-05-31T12:19:27Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 38
maintainers: ["renovate[bot]", "sticky-gecko[bot]", "onedr0p"]
openGraphImageUrl: "https://opengraph.githubassets.com/051a48f4ecc066c6e57aa69b133d0c1d9f22e6dcd00e219652b0720a69475e8d/home-operations/containers"
---

## Containers

_An opinionated collection of container images_

Welcome to our container images! If you are looking for a container, start by [browsing the GitHub Packages page for this repository's packages](https://github.com/orgs/home-operations/packages?repo_name=containers).

## Mission Statement

Our goal is to provide [semantically versioned](https://semver.org/), [rootless](https://rootlesscontaine.rs/), and [multi-architecture](https://www.docker.com/blog/multi-arch-build-and-images-the-simple-way/) containers for various applications.

We adhere to the [KISS principle](https://en.wikipedia.org/wiki/KISS_principle), logging to stdout, maintaining [one process per container](https://testdriven.io/tips/59de3279-4a2d-4556-9cd0-b444249ed31e/), avoiding tools like [s6-overlay](https://github.com/just-containers/s6-overlay), and building all images on top of [Alpine](https://hub.docker.com/_/alpine) or [Ubuntu](https://hub.docker.com/_/ubuntu).

## Features

### Tag Immutability

Containers built here do not use immutable tags in the traditional sense, as seen with [linuxserver.io](https://fleet.linuxserver.io/) or [Bitnami](https://bitnami.com/stacks/containers). Instead, we…
