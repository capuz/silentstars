---
repo: "intel/intel-device-plugins-for-kubernetes"
name: "intel-device-plugins-for-kubernetes"
description: "Collection of Intel device plugins for Kubernetes"
readmeQualityOk: true
url: "https://github.com/intel/intel-device-plugins-for-kubernetes"
language: "Go"
languages: ["Go"]
languagePcts: [84]
topics: ["kubernetes", "swrepo", "cloud-computing", "edge-computing", "5g", "cloud", "plug-ins"]
stars: 147
forks: 223
openIssues: 32
closedIssues: 487
watchers: 11
contributors: 52
recentReleases: 0
createdAt: "2018-05-14T22:30:06Z"
lastCommitAt: "2026-09-17T08:51:56Z"
lastReleaseAt: "2022-10-17T04:41:29Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 97
undervaluedScore: 51
maintainers: ["mythi", "dependabot[bot]", "tkatila"]
openGraphImageUrl: "https://opengraph.githubassets.com/e4d9cbeaffd9f38e28b20034ed17c9d91b05c99fe4da5095ac1c7135ca14fce9/intel/intel-device-plugins-for-kubernetes"
---

# Overview

This repository contains a framework for developing plugins for the Kubernetes
[device plugins framework](https://kubernetes.io/docs/concepts/extend-kubernetes/compute-storage-net/device-plugins/),
along with a number of device plugin implementations utilizing that framework.

The [v0.36.0 release](https://github.com/intel/intel-device-plugins-for-kubernetes/releases/latest)
is the latest feature release with its documentation available [here](https://intel.github.io/intel-device-plugins-for-kubernetes/0.36/).

Table of Contents

* [Prerequisites](#prerequisites)
* [Plugins](#plugins)
    * [GPU device plugin](#gpu-device-plugin)
    * [QAT device plugin](#qat-device-plugin)
    * [SGX device plugin](#sgx-device-plugin)
    * [DSA device plugin](#dsa-device-plugin)
    * [IAA device plugin](#iaa-device-plugin)
    * [NPU device plugin](#npu-device-plugin)
* [Device Plugins Operator](#device-plugins-operator)
* [XeLink XPU Manager sidecar](#xelink-xpu-manager-sidecar)
* [Intel GPU Level-Zero sidecar](#intel-gpu-levelzero)
* [Demos](#demos)
* [Workload Authors](#workload-authors)
* [Developers](#developers)
* [Releases](#releases)
    * [Supported Kubernetes…
