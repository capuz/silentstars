---
repo: "renovatebot/base-image"
name: "base-image"
description: "Renovate base docker image"
readmeQualityOk: true
url: "https://github.com/renovatebot/base-image"
language: "JavaScript"
languages: ["JavaScript", "Dockerfile", "HCL"]
languagePcts: [44, 31, 24]
stars: 18
forks: 18
openIssues: 3
closedIssues: 14
watchers: 0
contributors: 11
recentReleases: 0
createdAt: "2023-07-28T14:21:47Z"
lastCommitAt: "2026-11-13T18:20:08Z"
lastReleaseAt: "2023-12-05T22:30:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 96
undervaluedScore: 77
maintainers: ["renovate[bot]", "viceice"]
openGraphImageUrl: "https://opengraph.githubassets.com/b3b77bdbedea9032d90b6963b4f5436a30b3fbd1f63d692d491e18e7586363a2/renovatebot/base-image"
---

# Renovate base-image

This repository is the base image for our [`renovatebot/renovate` Docker images](https://hub.docker.com/r/renovate/renovate).

It is built from [`ghcr.io/containerbase/base`](https://github.com/containerbase/base) and runs `prepare-tool all`, so all Containerbase tools except the root-only ones (`root: true`) can be installed at runtime without root.

## npm package

Each release also publishes the [`@renovatebot/base-image`](https://github.com/renovatebot/base-image/blob/HEAD/packages/base-image/) npm package with the same version.
It re-exports [`@containerbase/base`](https://www.npmjs.com/package/@containerbase/base) at the Containerbase version of the image, so consumers can look up the tools that the image supports.
`pnpm check:containerbase` verifies that the `@containerbase/base` dependency matches the image in the [`Dockerfile`](https://github.com/renovatebot/base-image/blob/HEAD/Dockerfile).
