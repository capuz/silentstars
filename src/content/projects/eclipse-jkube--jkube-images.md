---
repo: "eclipse-jkube/jkube-images"
name: "jkube-images"
description: "Container images for Eclipse JKube"
url: "https://github.com/eclipse-jkube/jkube-images"
homepage: "https://quay.io/organization/jkube"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["jkube", "eclipse-jkube"]
stars: 7
forks: 6
openIssues: 1
closedIssues: 2
watchers: 6
contributors: 13
recentReleases: 0
createdAt: "2020-05-14T05:53:02Z"
lastCommitAt: "2026-07-01T07:05:14Z"
lastReleaseAt: "2021-01-12T10:02:37Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 89
undervaluedScore: 63
maintainers: ["ash-thakur-rh", "manusa"]
openGraphImageUrl: "https://opengraph.githubassets.com/95ac22ab0620f154628325dba056b6bd32ff485b4ce50528a6f963d043c39977/eclipse-jkube/jkube-images"
---

# Eclipse JKube Images

This repository hosts part of the container images used by [Eclipse JKube](https://github.com/eclipse-jkube/jkube).

These images are available on [Quay.io](https://quay.io/organization/jkube).

Published images are multi-arch (`linux/amd64` + `linux/arm64`), except `jkube-jetty9` which is `linux/amd64` only.
CycloneDX SBOMs for each image and architecture are available as assets on each [GitHub release](https://github.com/eclipse-jkube/jkube-images/releases)

## Available images

### jkube-java

- https://quay.io/repository/jkube/jkube-java
- https://quay.io/repository/jkube/jkube-java-25
- https://quay.io/repository/jkube/jkube-java-21
- https://quay.io/repository/jkube/jkube-java-17
- https://quay.io/repository/jkube/jkube-java-11

`jkube-java` tracks the latest LTS (currently Java 25, identical to `jkube-java-25`).

Base image to be used by any `JavaExecGenerator` implementation. The image is based on
`ubi9/ubi-minimal`
([catalog.redhat.com](https://catalog.redhat.com/software/containers/ubi9/ubi-minimal/615bd9b4075b022acc111bf5))
with stripped down dependencies to make it lighter.

The image contains the `run-java.sh` script added by…
