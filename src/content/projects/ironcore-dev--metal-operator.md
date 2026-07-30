---
repo: "ironcore-dev/metal-operator"
name: "metal-operator"
description: "Kubernetes operator for automating bare metal server discovery and provisioning"
readmeQualityOk: true
url: "https://github.com/ironcore-dev/metal-operator"
homepage: "https://ironcore.dev/metal-operator/"
language: "Go"
languages: ["Go"]
languagePcts: [95]
topics: ["baremetal", "operator", "provisioning", "servermanagement"]
stars: 32
forks: 26
openIssues: 58
closedIssues: 242
watchers: 13
contributors: 34
recentReleases: 5
createdAt: "2024-04-12T13:00:14Z"
lastCommitAt: "2026-07-30T06:06:29Z"
lastReleaseAt: "2026-07-17T12:12:14Z"
status: "thriving"
tags: ["hidden_gem", "release_machine", "fork_magnet"]
healthScore: 95
undervaluedScore: 70
maintainers: ["dependabot[bot]", "afritzler", "stefanhipfel"]
openGraphImageUrl: "https://opengraph.githubassets.com/acd21a0ec52e1786643ceaf80fe27d0cb34e3407cafe62873f522ff766dcdbf5/ironcore-dev/metal-operator"
discussionCount: 0
---

# metal-operator

`metal-operator` is a Kubernetes operator for automating bare metal server discovery and provisioning.

## Description

Metal-operator is a project built using Kubebuilder and controller-runtime to facilitate the discovery and provisioning 
of bare metal servers. It provides a robust and scalable solution for managing bare metal infrastructure, ensuring 
seamless integration and automation within Kubernetes environments.

## Getting Started

### Prerequisites
- go version v1.22.0+
- docker version 17.03+.
- kubectl version v1.11.3+.
- Access to a Kubernetes v1.11.3+ cluster.

### To Deploy on the cluster
**Build and push your image to the location specified by `IMG`:**

```sh
make docker-build docker-push IMG=<some-registry>/metal-operator:tag
```

**NOTE:** This image ought to be published in the personal registry you specified. 
And it is required to have access to pull the image from the working environment. 
Make sure you have the proper permission to the registry if the above commands don’t work.

**Install the CRDs into the cluster:**

```sh
make install
```

**Deploy the Manager to the cluster with the image specified by `IMG`:**

```sh
make deploy…
