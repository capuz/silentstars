---
repo: "pulumi/pulumi-docker-build"
name: "pulumi-docker-build"
description: "A Pulumi native provider for Docker"
readmeQualityOk: true
url: "https://github.com/pulumi/pulumi-docker-build"
language: "Go"
languages: ["Go"]
languagePcts: [94]
stars: 12
forks: 11
openIssues: 25
closedIssues: 121
watchers: 12
contributors: 71
recentReleases: 0
createdAt: "2024-03-07T19:17:12Z"
lastCommitAt: "2026-07-10T07:00:57Z"
lastReleaseAt: "2025-01-27T22:57:10Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 94
undervaluedScore: 72
maintainers: ["pulumi-provider-automation[bot]", "pulumi-renovate[bot]", "pose"]
openGraphImageUrl: "https://opengraph.githubassets.com/df1a5ebb2da784c4f4375203467b87cda923c4cfea1cefaf16810733876ee126/pulumi/pulumi-docker-build"
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
