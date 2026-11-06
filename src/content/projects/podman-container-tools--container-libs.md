---
repo: "podman-container-tools/container-libs"
name: "container-libs"
description: "Monorepository with libraries used by the containers projects."
readmeQualityOk: true
url: "https://github.com/podman-container-tools/container-libs"
language: "Go"
languages: ["Go"]
languagePcts: [97]
stars: 121
forks: 194
openIssues: 246
closedIssues: 100
watchers: 2
contributors: 1583
recentReleases: 3
createdAt: "2025-08-07T10:31:49Z"
lastCommitAt: "2026-11-06T12:18:00Z"
lastReleaseAt: "2026-10-22T15:57:45Z"
status: "thriving"
tags: ["needs_contributors", "fork_magnet"]
healthScore: 83
undervaluedScore: 52
maintainers: ["mtrmac", "renovate[bot]", "Luap99"]
openGraphImageUrl: "https://opengraph.githubassets.com/2c72c28b3696c4fe57477d4836a8369404d178964320d7bf15e227df8b362a06/podman-container-tools/container-libs"
---

# container/container-libs

This repository is a **monorepo** combining several core Go libraries and utilities from the [containers](https://github.com/containers) project.  

It brings together:  

- **[`common`](https://github.com/podman-container-tools/container-libs/blob/HEAD/common/)** → Shared Go code and configuration used across multiple containers projects.  
- **[`storage`](https://github.com/podman-container-tools/container-libs/blob/HEAD/storage/)** → A Go library for managing container images, layers, and containers.  
- **[`image`](https://github.com/podman-container-tools/container-libs/blob/HEAD/image/)** → A Go library for interacting with container images and registries.  

These components are used by major container tools such as [Podman](https://github.com/containers/podman), [Buildah](https://github.com/containers/buildah), [CRI-O](https://github.com/cri-o/cri-o), and [Skopeo](https://github.com/containers/skopeo).

---

## Building

Each subproject has its own README.md file with more instructions.

## Contributing

We welcome contributions!

See the **[`CONTRIBUTING.md`](https://github.com/podman-container-tools/container-libs/blob/HEAD/CONTRIBUTING.md)**,…
