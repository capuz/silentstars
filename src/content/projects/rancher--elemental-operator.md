---
repo: "rancher/elemental-operator"
name: "elemental-operator"
description: "The Elemental operator is responsible for managing the OS versions and maintaining a machine inventory to assist with edge or baremetal installations."
readmeQualityOk: true
url: "https://github.com/rancher/elemental-operator"
language: "Go"
languages: ["Go"]
languagePcts: [94]
topics: ["kubernetes", "operator"]
stars: 47
forks: 31
openIssues: 29
closedIssues: 295
watchers: 4
contributors: 20
recentReleases: 0
createdAt: "2022-05-25T10:23:32Z"
lastCommitAt: "2026-11-04T11:27:24Z"
lastReleaseAt: "2022-09-23T13:34:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 89
undervaluedScore: 48
maintainers: ["davidcassany", "dependabot[bot]", "susesamu"]
openGraphImageUrl: "https://opengraph.githubassets.com/ac271f83849db6a786e3dd396042e560c0cc10cacdb9a214566354f5c279550b/rancher/elemental-operator"
discussionCount: 2
---

# Operator

The Elemental operator extends Rancher introducing OS provisioning and management capabilities.

Machines booting from an Elemental live ISO register to the Elemental Operator, get provisioned
with the OS and a k8s distro, forming a new Kubernetes cluster immediately available in Rancher.

See the [Elemental docs](https://elemental.docs.rancher.com) for more information.

## Installation

The Elemental operator should be installed on a K8s cluster running Rancher Multi Cluster
Management server.

A step by step [guide](https://elemental.docs.rancher.com/quickstart-ui) is available in the [official documentation](https://elemental.docs.rancher.com).
