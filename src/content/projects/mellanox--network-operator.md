---
repo: "Mellanox/network-operator"
name: "network-operator"
description: "NVIDIA Network Operator"
readmeQualityOk: true
url: "https://github.com/Mellanox/network-operator"
language: "Go"
languages: ["Go"]
languagePcts: [80]
stars: 378
forks: 82
openIssues: 41
closedIssues: 378
watchers: 20
contributors: 39
recentReleases: 0
createdAt: "2020-06-29T11:20:04Z"
lastCommitAt: "2026-11-02T17:57:14Z"
lastReleaseAt: "2021-09-27T19:33:24Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 97
undervaluedScore: 37
maintainers: ["rollandf", "almaslennikov", "nvidia-ci-cd"]
openGraphImageUrl: "https://opengraph.githubassets.com/76eb102c38792d36ccf5154194ab300c4415555d687c93c0c01e6e5513b48101/Mellanox/network-operator"
---

- [NVIDIA Network Operator](#nvidia-network-operator)
  * [Documentation](#documentation)
  * [Prerequisites](#prerequisites)
    + [Kubernetes Node Feature Discovery (NFD)](#kubernetes-node-feature-discovery--nfd-)
  * [Resource Definitions](#resource-definitions)
    + [NICClusterPolicy CRD](#nicclusterpolicy-crd)
      - [NICClusterPolicy spec](#nicclusterpolicy-spec-)
      - [NICClusterPolicy status](#nicclusterpolicy-status)
        * [Example Status field of a NICClusterPolicy instance](#example-status-field-of-a-nicclusterpolicy-instance)
    + [MacvlanNetwork CRD](#macvlannetwork-crd)
      - [MacvlanNetwork spec](#macvlannetwork-spec-)
    + [HostDeviceNetwork CRD](#hostdevicenetwork-crd)
      - [HostDeviceNetwork spec](#hostdevicenetwork-spec-)
    + [IPoIBNetwork CRD](#ipoibnetwork-crd)
      - [IPoIBNetwork spec](#ipoibnetwork-spec-)
    + [Examples](#examples)
  * [System Requirements](#system-requirements)
  * [Tested Network Adapters](#tested-network-adapters)
  * [Compatibility Notes](#compatibility-notes)
  * [Deployment Example](#deployment-example)
  * [Docker image](#docker-image)
  * [Driver Containers](#driver-containers)
  * [Upgrade](#upgrade)
  * [Drain…
