---
repo: "pulumi/pulumi-docker-build"
name: "pulumi-docker-build"
description: "A Pulumi native provider for Docker"
readmeQualityOk: true
url: "https://github.com/pulumi/pulumi-docker-build"
language: "Go"
languages: ["Go"]
languagePcts: [89]
stars: 12
forks: 15
openIssues: 33
closedIssues: 134
watchers: 12
contributors: 30
recentReleases: 0
createdAt: "2024-03-07T19:17:12Z"
lastCommitAt: "2026-10-05T10:47:10Z"
lastReleaseAt: "2025-01-27T22:57:10Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 94
undervaluedScore: 73
maintainers: ["pulumi-renovate[bot]", "pulumi-provider-automation[bot]", "pose"]
openGraphImageUrl: "https://opengraph.githubassets.com/05e9661d4772bff7512a44521f8cea736037b1ce543d40a329884bc23b9ea00e/pulumi/pulumi-docker-build"
---

# Docker-Build Resource Provider

A [Pulumi](http://pulumi.com) provider for building modern Docker images with [buildx](https://docs.docker.com/build/architecture/) and [BuildKit](https://docs.docker.com/build/buildkit/).

Not to be confused with the earlier
[Docker](http://github.com/pulumi/pulumi-docker) provider, which is still
appropriate for managing resources unrelated to building images.

| Provider               | Use cases                                                                                                                                                |
| ----------------       | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `@pulumi/docker-build` | Anything related to building images with `docker build`.                                                                                                 |
| `@pulumi/docker`       | Everything else -- including running containers and creating networks.                                                                                   |

## Reference

For more information, including examples and migration…
