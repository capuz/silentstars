---
repo: "vexxhost/capo-image-elements"
name: "capo-image-elements"
description: "diskimage-builder elements for the OpenStack Cluster API provider"
readmeQualityOk: true
url: "https://github.com/vexxhost/capo-image-elements"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 12
forks: 9
openIssues: 3
closedIssues: 12
watchers: 9
contributors: 10
recentReleases: 0
createdAt: "2024-06-26T23:17:11Z"
lastCommitAt: "2026-10-29T14:06:50Z"
lastReleaseAt: "2025-08-21T15:11:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 91
undervaluedScore: 52
maintainers: ["renovate[bot]", "vexxhost-bot", "yaguangtang"]
openGraphImageUrl: "https://opengraph.githubassets.com/d37fc54043c0b7c9567665d17fd3630acc86e6bb760a0f5a75adacef2ae66fab/vexxhost/capo-image-elements"
---

# capo-image-elements

This repository contains `diskimage-builder` elements for building images for
Cluster API provider for OpenStack.

These images take a different approach than the upstream
[image-builder](https://github.com/kubernetes-sigs/image-builder)
project in that they are built using `diskimage-builder` and not Packer.

These images were primarily built to be consumed by the
[Cluster API driver for Magnum](https://github.com/vexxhost/magnum-cluster-api),
however, they will likely generate `qcow2` images that should work directly
with the Cluster API provider for OpenStack.

## Releases

### Automatic updates

This repository runs nightly updates to grab the latest maintained Kubernetes versions
and creates a pull request to update the versions in the CI workflow.

### Release images

Upon every merge to the main branch, a CI workflow will start up a DevStack instance
with the Cluster API provider for OpenStack. For all maintained Kubernetes releases on
different Linux distributions, it will spin up a cluster with the image and ensure that
it can create a cluster successfully. After this, new images will be built and
published as a GitHub release.

Release assets…
