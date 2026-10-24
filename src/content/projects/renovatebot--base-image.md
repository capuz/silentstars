---
repo: "renovatebot/base-image"
name: "base-image"
description: "Renovate base docker image"
readmeQualityOk: true
url: "https://github.com/renovatebot/base-image"
language: "Dockerfile"
languages: ["Dockerfile", "JavaScript", "HCL"]
languagePcts: [38, 32, 30]
stars: 18
forks: 18
openIssues: 3
closedIssues: 14
watchers: 0
contributors: 11
recentReleases: 0
createdAt: "2023-07-28T14:21:47Z"
lastCommitAt: "2026-10-24T08:19:03Z"
lastReleaseAt: "2023-12-05T22:30:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 96
undervaluedScore: 77
maintainers: ["renovate[bot]", "viceice"]
openGraphImageUrl: "https://opengraph.githubassets.com/e2054ccc04d7cae11c6ed4008f8dde7da28c70ff8d58fb77f6bf3646642cc007/renovatebot/base-image"
---

# Renovate base-image

This repository is the base image for our [`renovatebot/renovate` Docker images](https://hub.docker.com/r/renovate/renovate).

It is built from [`ghcr.io/containerbase/base`](https://github.com/containerbase/base) and runs `prepare-tool all`, so all Containerbase tools except the root-only ones (`root: true`) can be installed at runtime without root.

## npm package

Each release also publishes the [`@renovatebot/base-image`](https://github.com/renovatebot/base-image/blob/HEAD/packages/base-image/) npm package with the same version.
It re-exports [`@containerbase/base`](https://www.npmjs.com/package/@containerbase/base) at the Containerbase version of the image, so consumers can look up the tools that the image supports.
`pnpm check:containerbase` verifies that the `@containerbase/base` dependency matches the image in the [`Dockerfile`](https://github.com/renovatebot/base-image/blob/HEAD/Dockerfile).
