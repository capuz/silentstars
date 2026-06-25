---
repo: "Mellanox/network-operator"
name: "network-operator"
description: "NVIDIA Network Operator"
url: "https://github.com/Mellanox/network-operator"
language: "Go"
languages: ["Go"]
languagePcts: [83]
stars: 351
forks: 76
openIssues: 49
closedIssues: 322
watchers: 20
contributors: 39
recentReleases: 0
createdAt: "2020-06-29T11:20:04Z"
lastCommitAt: "2026-06-25T06:42:11Z"
lastReleaseAt: "2021-09-27T19:33:24Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 96
undervaluedScore: 37
maintainers: ["rollandf", "nvidia-ci-cd", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c0773713296406839a8599262b79c5e3fafb161e9eed1c6a3cf67839696191d4/Mellanox/network-operator"
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
