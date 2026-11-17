---
repo: "ironcore-dev/network-operator"
name: "network-operator"
description: "Kubernetes operator for automating network device provisioning"
readmeQualityOk: true
url: "https://github.com/ironcore-dev/network-operator"
homepage: "https://wireapi.dev"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["network", "operator", "provisioning"]
stars: 15
forks: 12
openIssues: 10
closedIssues: 17
watchers: 1
contributors: 26
recentReleases: 0
createdAt: "2025-07-07T11:22:38Z"
lastCommitAt: "2026-11-17T14:47:01Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 91
undervaluedScore: 77
maintainers: ["dependabot[bot]", "felix-kaestner", "lparz1val"]
openGraphImageUrl: "https://opengraph.githubassets.com/adcf6c6e3e37076b5420ea3e12d16cfaf71d0624cbb2e608c9c8274c85a23b9e/ironcore-dev/network-operator"
---

# network-operator

`network-operator` is a Kubernetes operator for automating network device provisioning.

## Description

Network-operator is a project built using Kubebuilder and controller-runtime to facilitate the provisioning of network devices. It provides a robust and scalable solution for managing networking infrastructure, ensuring seamless integration and automation within Kubernetes environments.

## Getting Started

### Prerequisites

- go version v1.27.4+
- docker version 28+.
- kubectl version v1.33.1+.
- Access to a Kubernetes v1.33.0+ cluster.
- [Git LFS](https://git-lfs.com) installed (`git lfs install`)
- kind version 0.32.0+
- Tilt version v0.37.3+
- gh version 2.93.0+
- coreutils 9.11+

### To Deploy on the cluster

**Build your image to the tag specified by `IMG`:**

```sh
make docker-build IMG=<some-registry>/network-operator:tag
```

**NOTE:** This image ought to be published in the personal registry you specified. And it is required to have access to pull the image from the working environment. Make sure you have the proper permission to the registry if the above commands don’t work.

**Install the CRDs into the cluster:**

```sh
make install
```…
