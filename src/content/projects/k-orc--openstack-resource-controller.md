---
repo: "k-orc/openstack-resource-controller"
name: "openstack-resource-controller"
description: "A set of Kubernetes controllers to manage your OpenStack infrastructure"
readmeQualityOk: true
url: "https://github.com/k-orc/openstack-resource-controller"
homepage: "https://k-orc.cloud/"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["controller", "kubernetes", "openstack", "orc"]
stars: 85
forks: 53
openIssues: 31
closedIssues: 164
watchers: 2
contributors: 26
recentReleases: 0
createdAt: "2023-10-21T04:41:55Z"
lastCommitAt: "2026-09-17T08:24:34Z"
lastReleaseAt: "2025-11-07T16:54:41Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 95
undervaluedScore: 55
maintainers: ["mandre", "gndrmnn", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/68e89401fabb7aadad3443923ac3d3938d5f3fc05767f4e582b41d17772a0707/k-orc/openstack-resource-controller"
---

# ORC: openstack-resource-controller

## Description

[**openstack-resource-controller**][orc], or **ORC**, is a Kubernetes API for
declarative management of OpenStack resources. By fully controlling the order
of OpenStack operations, it allows consumers to easily create, manage, and
reproduce complex deployments. ORC aims to be easily consumed both directly by
users, and by higher level controllers. ORC aims to cover all OpenStack APIs
which can be expressed declaratively.

ORC is based on [Gophercloud][gophercloud], the OpenStack Go SDK.

[orc]: https://github.com/k-orc/openstack-resource-controller
[gophercloud]: https://github.com/gophercloud/gophercloud

## Maturity

ORC is deployed and used in production environments and is notably a dependency
of Cluster API's [OpenStack provider](https://github.com/kubernetes-sigs/cluster-api-provider-openstack).

The Kubernetes API is currently `v1alpha1`. The core API patterns are stable and
we do not anticipate major structural changes, but the API is still evolving as
we add new controllers and features. We do not have a timeline for graduation to
`v1beta1`.

ORC versioning follows [semver](https://semver.org/spec/v2.0.0.html): there…
