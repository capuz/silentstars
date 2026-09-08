---
repo: "confidential-containers/cloud-api-adaptor"
name: "cloud-api-adaptor"
description: "Ability to create Kata pods using cloud provider APIs aka the peer-pods approach"
readmeQualityOk: true
url: "https://github.com/confidential-containers/cloud-api-adaptor"
language: "Go"
languages: ["Go"]
languagePcts: [87]
stars: 84
forks: 158
openIssues: 189
closedIssues: 909
watchers: 18
contributors: 111
recentReleases: 0
createdAt: "2022-02-14T14:01:17Z"
lastCommitAt: "2026-09-08T08:17:53Z"
lastReleaseAt: "2023-11-03T14:36:53Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 95
undervaluedScore: 54
maintainers: ["stevenhorsman", "dependabot[bot]", "mkulke"]
openGraphImageUrl: "https://opengraph.githubassets.com/cbffc26fa13c1b21dcb765bba5d0904bbc7d75a4aac0d29adb54fba60b5dc2f1/confidential-containers/cloud-api-adaptor"
---

# Introduction

This repository contains all go modules related to Cloud API Adaptor. The Cloud API Adaptor is an implementation of the
[remote hypervisor interface](https://github.com/kata-containers/kata-containers/blob/main/src/runtime/virtcontainers/remote.go)
of [Kata Containers](https://github.com/kata-containers/kata-containers)

It enables the creation of Kata Containers VMs on any machines without the need for bare metal worker nodes,
or nested virtualisation support.

## Architecture

The background and description of the components involved in 'peer pods' can be found in the [architecture documentation](https://github.com/confidential-containers/cloud-api-adaptor/blob/HEAD/docs/architecture.md).

## Cloud Providers

[cloud-providers](https://github.com/confidential-containers/cloud-api-adaptor/blob/HEAD/src/cloud-providers/) Cloud Providers for Kata remote hypervisor

## PeerPod controller

[peerpod-ctrl](https://github.com/confidential-containers/cloud-api-adaptor/blob/HEAD/src/peerpod-ctrl/) PeerPod controller is watching PeerPod events and deleting dangling resources that were not deleted by the cloud-api-adaptor at Pod deletion time.

## Cloud API Adaptor…
