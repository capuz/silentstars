---
repo: "home-operations/containers"
name: "containers"
description: "Community project for building application containers"
readmeQualityOk: true
url: "https://github.com/home-operations/containers"
homepage: "https://github.com/orgs/home-operations/packages?repo_name=containers"
language: "Dockerfile"
languages: ["Dockerfile", "HCL"]
languagePcts: [35, 20]
topics: ["containers", "home-operations", "self-hosted"]
stars: 427
forks: 47
openIssues: 1
closedIssues: 51
watchers: 3
contributors: 25
recentReleases: 0
createdAt: "2024-03-28T20:19:33Z"
lastCommitAt: "2026-08-28T12:22:31Z"
lastReleaseAt: "2025-05-31T12:19:27Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 39
maintainers: ["sticky-gecko[bot]", "onedr0p"]
openGraphImageUrl: "https://opengraph.githubassets.com/ed106d751162f095cee2cef4c634aaab93358a25deb0b61b86ca6c37b7b87d8b/home-operations/containers"
---

## Containers

_An opinionated collection of container images_

</div>

</div>

Welcome to our container images! If you are looking for a container, start by [browsing the GitHub Packages page for this repository's packages](https://github.com/orgs/home-operations/packages?repo_name=containers).

## Mission Statement

Our goal is to provide [semantically versioned](https://semver.org/), [rootless](https://rootlesscontaine.rs/), and [multi-architecture](https://www.docker.com/blog/multi-arch-build-and-images-the-simple-way/) containers for various applications.

We adhere to the [KISS principle](https://en.wikipedia.org/wiki/KISS_principle), logging to stdout, maintaining [one process per container](https://testdriven.io/tips/59de3279-4a2d-4556-9cd0-b444249ed31e/), avoiding tools like [s6-overlay](https://github.com/just-containers/s6-overlay), and building all images on top of [Alpine](https://hub.docker.com/_/alpine) or [Ubuntu](https://hub.docker.com/_/ubuntu).

## Features

### Tag Immutability

Containers built here do not use immutable tags in the traditional sense, as seen with [linuxserver.io](https://fleet.linuxserver.io/) or…
