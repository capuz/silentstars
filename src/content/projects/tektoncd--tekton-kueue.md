---
repo: "tektoncd/tekton-kueue"
name: "tekton-kueue"
description: "Kueue extension for Tekton"
readmeQualityOk: true
url: "https://github.com/tektoncd/tekton-kueue"
language: "Go"
languages: ["Go"]
languagePcts: [90]
topics: ["hacktoberfest", "kueue", "pipelines", "tekton"]
stars: 15
forks: 24
openIssues: 10
closedIssues: 17
watchers: 1
contributors: 25
recentReleases: 4
createdAt: "2025-02-20T13:52:57Z"
lastCommitAt: "2026-11-20T12:03:37Z"
lastReleaseAt: "2026-11-17T08:20:55Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 88
undervaluedScore: 83
maintainers: ["red-hat-konflux[bot]", "waveywaves", "pramodbindal"]
openGraphImageUrl: "https://opengraph.githubassets.com/d3ccdda848897fae3c0be87fedcd965be14a138abe571251e3f08d0efe1697dc/tektoncd/tekton-kueue"
---

# tekton-kueue

Controller for integrating [Tekton] with [Kueue].

## Description

The controller enables [Kueue] to manage the scheduling of [Tekton] PipelineRuns.

## Getting Started

### Prerequisites
- kubectl version v1.11.3+.
- Access to a Kubernetes v1.11.3+ cluster.
- make
- Get familiar with [basic Kueue concept](https://kueue.sigs.k8s.io/docs/concepts/)

### To Deploy on the cluster

**Install CertManager:**

CertManager is required for providing certificates for the admission webhook.

```sh
make cert-manager
```

**Install Kueue:**

The controller currently supports Kueue v0.19.x.
If you already have kueue installed, make sure to enable it by adding `pipelineruns.tekton.dev` to the external frameworks.
Otherwise you can install it with:

```sh
make kueue
```

**Install Tekton:**
```sh
make tekton
```

**Deploy the Manager to the cluster with the image specified by `IMG`:**

```sh
make deploy IMG=ghcr.io/tektoncd/tekton-kueue:latest
```

### To Uninstall

**UnDeploy the controller from the cluster:**

```sh
make undeploy
```
