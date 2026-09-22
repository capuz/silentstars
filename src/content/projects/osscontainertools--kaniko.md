---
repo: "osscontainertools/kaniko"
name: "kaniko"
description: "Build Container Images In Kubernetes"
readmeQualityOk: true
url: "https://github.com/osscontainertools/kaniko"
language: "Go"
languages: ["Go"]
languagePcts: [95]
stars: 369
forks: 24
openIssues: 21
closedIssues: 115
watchers: 4
contributors: 315
recentReleases: 0
createdAt: "2024-10-10T11:26:54Z"
lastCommitAt: "2026-09-22T08:45:03Z"
lastReleaseAt: "2025-07-17T22:25:49Z"
status: "thriving"
tags: ["funded"]
healthScore: 96
undervaluedScore: 36
maintainers: ["mzihlmann", "dependabot[bot]", "BobDu"]
openGraphImageUrl: "https://opengraph.githubassets.com/ef5116ccaf14865ae720ab4d67b9be6ebf4859c051be18bb8a9c4d5eca10d668/osscontainertools/kaniko"
fundingLinks: ["GITHUB:https://github.com/mzihlmann"]
discussionCount: 10
---

# kaniko - Build Images In Kubernetes

kaniko is a tool to build container images from a Dockerfile, inside a container
or Kubernetes cluster.

> [!IMPORTANT]
> This is a supported replacement of the original `GoogleContainerTools/kaniko`
> repository, which was archived in June of 2025.
> The focus of this fork is to keep dependencies up-to-date, fix bugs and improve performance.
> The images are available on docker hub [martizih/kaniko](https://hub.docker.com/r/martizih/kaniko).
> If you are new here you can refer to our [Changelog Overview](https://github.com/osscontainertools/kaniko/blob/HEAD/CHANGELOG_OVERVIEW.md) for the main differences to Google's v1.24.0 release.

kaniko doesn't depend on a Docker daemon and executes each command within a
Dockerfile completely in userspace. This enables building container images in
environments that can't easily or securely run a Docker daemon, such as a
standard Kubernetes cluster.

kaniko is meant to be run as an image: `ghcr.io/osscontainertools/kaniko:latest`. We do **not** recommend
running the kaniko executor binary in another image, as it might not work as you
expect - see [Known Issues](#known-issues).

**Table of Contents**…
