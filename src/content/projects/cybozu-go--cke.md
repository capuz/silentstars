---
repo: "cybozu-go/cke"
name: "cke"
description: "Cybozu Kubernetes Engine"
readmeQualityOk: true
url: "https://github.com/cybozu-go/cke"
language: "Go"
languages: ["Go"]
languagePcts: [97]
topics: ["kubernetes", "sabakan", "kubernetes-installer"]
stars: 211
forks: 12
openIssues: 3
closedIssues: 62
watchers: 13
contributors: 33
recentReleases: 0
createdAt: "2018-07-09T09:15:12Z"
lastCommitAt: "2026-08-13T05:19:20Z"
lastReleaseAt: "2018-10-30T07:19:32Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 94
undervaluedScore: 40
maintainers: ["YZ775", "zeroalphat", "masa213f"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/140261100/ffa21300-688d-11e9-9261-82bdb3d8d35d"
---

Cybozu Kubernetes Engine
========================

**CKE** (Cybozu Kubernetes Engine) is a distributed service that automates [Kubernetes][] cluster management.

**Project Status**: GA

Requirements
------------

### CKE requirements

* [etcd][]
* [Vault][]

### Node OS Requirements

* Docker: etcd data is stored in Docker volumes.
* A user who belongs to `docker` group
* SSH access for the user

Features
--------

* Bootstrapping and life-cycle management.

    CKE can bootstrap a Kubernetes and [etcd][] cluster from scratch.
    CKE can also add or remove nodes to/from the Kubernetes and etcd cluster.

* In-place and fast upgrade of Kubernetes

    A version of CKE corresponds strictly to a single version of Kubernetes.
    Therefore, upgrading CKE will upgrade the managed Kubernetes.

    Unlike [kubeadm][] or similar tools, CKE can automatically upgrade
    its managed Kubernetes without draining nodes.  The time taken for
    the upgrade is not proportional to the number of nodes, so it is
    very fast.

* Graceful rebooting of nodes

    CKE can [reboot specified nodes gracefully](https://github.com/cybozu-go/cke/blob/HEAD/docs/reboot.md) using the Kubernetes eviction API.…
