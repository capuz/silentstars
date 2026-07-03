---
repo: "sighupio/generic-container-images"
name: "generic-container-images"
description: "Support & Utilities container Images built and used by SIGHUP"
url: "https://github.com/sighupio/generic-container-images"
homepage: "https://docs.sighup.io"
language: "Dockerfile"
languages: ["Dockerfile"]
languagePcts: [36]
stars: 11
forks: 6
openIssues: 0
closedIssues: 2
watchers: 8
contributors: 50
recentReleases: 0
createdAt: "2018-11-22T11:21:19Z"
lastCommitAt: "2026-07-03T12:39:53Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 98
undervaluedScore: 50
maintainers: ["marcopaggioro", "ralgozino"]
openGraphImageUrl: "https://opengraph.githubassets.com/4cdcfd61198e1914efe13b3d4860d7684fe8606c40f3856a9b17350055bb2a38/sighupio/generic-container-images"
---

# Generic Container Images

This repository contains CI and definition files to build and push general-purpose container images.

Please note that these are **not** the images used by SIGHUP Distribution Modules, even though the repository name could suggest that (see [#65](https://github.com/sighupio/fury-images/issues/65)). For SKD Modules images refer to: https://github.com/sighupio/container-image-sync

## Multi arch images

By default, all images are built for `amd64` architecture using the `docker build` command.
If you want to build multi-arch images, you can add the platform property to the image spec as follows:

```bash
platforms:
  - linux/arm64
  - linux/amd64
```

This option will cause the build script to use `docker buildx` instead.
