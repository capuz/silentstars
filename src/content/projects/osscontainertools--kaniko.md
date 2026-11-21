---
repo: "osscontainertools/kaniko"
name: "kaniko"
description: "Build Container Images In Kubernetes"
readmeQualityOk: true
url: "https://github.com/osscontainertools/kaniko"
homepage: "https://osscontainertools.org"
language: "Go"
languages: ["Go"]
languagePcts: [96]
stars: 458
forks: 32
openIssues: 29
closedIssues: 138
watchers: 3
contributors: 321
recentReleases: 0
createdAt: "2024-10-10T11:26:54Z"
lastCommitAt: "2026-11-21T11:39:55Z"
lastReleaseAt: "2025-07-17T22:25:49Z"
status: "thriving"
tags: ["funded"]
healthScore: 96
undervaluedScore: 37
maintainers: ["mzihlmann", "dependabot[bot]", "gary-wall"]
openGraphImageUrl: "https://opengraph.githubassets.com/15282dde065bf116d1c43709d859c9ddb5389df030088dec06d71d3b8f5d5d6d/osscontainertools/kaniko"
fundingLinks: ["GITHUB:https://github.com/mzihlmann"]
discussionCount: 11
---

# kaniko - Build Images In Kubernetes

kaniko is a tool to build container images from a Dockerfile, inside a container
or Kubernetes cluster.

> **Important**
>
> This is a supported replacement of the original `GoogleContainerTools/kaniko`
> repository, which was archived in June of 2025.
> The focus of this fork is to keep dependencies up-to-date, fix bugs and improve performance.
> The images are available on docker hub [martizih/kaniko](https://hub.docker.com/r/martizih/kaniko).
> News and blog posts are on [osscontainertools.org](https://osscontainertools.org).
> If you are new here you can refer to our [Changelog Overview](https://github.com/osscontainertools/kaniko/blob/HEAD/CHANGELOG_OVERVIEW.md) for the main differences to Google's v1.24.0 release.

kaniko doesn't depend on a Docker daemon and executes each command within a
Dockerfile completely in userspace. This enables building container images in
environments that can't easily or securely run a Docker daemon, such as a
standard Kubernetes cluster.
