---
repo: "ironcore-dev/network-operator"
name: "network-operator"
description: "Kubernetes operator for automating network device provisioning"
readmeQualityOk: true
url: "https://github.com/ironcore-dev/network-operator"
homepage: "https://ironcore.dev/network-operator/"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["network", "operator", "provisioning"]
stars: 12
forks: 8
openIssues: 9
closedIssues: 15
watchers: 1
contributors: 22
recentReleases: 0
createdAt: "2025-07-07T11:22:38Z"
lastCommitAt: "2026-09-29T08:10:19Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 91
undervaluedScore: 78
maintainers: ["felix-kaestner", "dependabot[bot]", "adamtrizuljak-sap"]
openGraphImageUrl: "https://opengraph.githubassets.com/e95fab74374fafee45bb0bd2ade9493091e602308fda3634759e1e8223bdf6aa/ironcore-dev/network-operator"
---

# network-operator

`network-operator` is a Kubernetes operator for automating network device provisioning.

## Description

Network-operator is a project built using Kubebuilder and controller-runtime to facilitate the provisioning of network devices. It provides a robust and scalable solution for managing networking infrastructure, ensuring seamless integration and automation within Kubernetes environments.

## Getting Started

### Prerequisites

- go version v1.27.0+
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
