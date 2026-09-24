---
repo: "confidential-containers/cloud-api-adaptor"
name: "cloud-api-adaptor"
description: "Ability to create Kata pods using cloud provider APIs aka the peer-pods approach"
readmeQualityOk: true
url: "https://github.com/confidential-containers/cloud-api-adaptor"
language: "Go"
languages: ["Go"]
languagePcts: [87]
stars: 86
forks: 159
openIssues: 189
closedIssues: 913
watchers: 18
contributors: 116
recentReleases: 0
createdAt: "2022-02-14T14:01:17Z"
lastCommitAt: "2026-09-24T08:42:18Z"
lastReleaseAt: "2023-11-03T14:36:53Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 96
undervaluedScore: 54
maintainers: ["stevenhorsman", "dependabot[bot]", "Amulyam24"]
openGraphImageUrl: "https://opengraph.githubassets.com/32bf371f55a003b943740981cae8979086a4375ed4a1088539e03679b23ecf68/confidential-containers/cloud-api-adaptor"
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
