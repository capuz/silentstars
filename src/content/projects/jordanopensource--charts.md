---
repo: "jordanopensource/charts"
name: "charts"
description: "Helm charts offered by JOSA!"
readmeQualityOk: true
url: "https://github.com/jordanopensource/charts"
homepage: "https://charts.josa.ngo"
language: "Go Template"
languages: ["Go Template"]
languagePcts: [100]
topics: ["kubernetes", "helm", "helm-charts", "k8s", "cloud-applications"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 6
contributors: 21
recentReleases: 0
createdAt: "2021-06-17T07:53:19Z"
lastCommitAt: "2026-07-24T06:11:06Z"
lastReleaseAt: "2021-09-19T16:02:48Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 76
undervaluedScore: 38
maintainers: ["thread-koder", "0xAhmadHammad", "thamudi"]
openGraphImageUrl: "https://opengraph.githubassets.com/050e39c237c3728c4752e07fe9c34aa90293d303cbc4efefa9813271a7a76d63/jordanopensource/charts"
---

# JOSA Helm Charts for Kubernetes

Popular applications, provided by [JOSA](https://josa.ngo), ready to launch on Kubernetes using [Kubernetes Helm](https://helm.sh).

## TL;DR

```bash
$ helm repo add josa https://charts.josa.ngo
$ helm search repo josa
$ helm install my-release josa/<chart>
```

### Prerequisites
- Kubernetes 1.20+
- Helm 3+

### Setup a Kubernetes Cluster

For setting up Kubernetes refer to the Kubernetes [getting started guide](http://kubernetes.io/docs/getting-started-guides).

### Install Helm

Helm is a tool for managing Kubernetes charts. Charts are packages of pre-configured Kubernetes resources.

To install Helm, refer to the [Helm install guide](https://helm.sh/docs/intro/install).

### Add Repo

The following command allows you to download and install all the charts from this repository:

```bash
$ helm repo add josa https://charts.josa.ngo
```

### Using Helm

Once you have installed the Helm client, you can deploy a JOSA Helm Chart into a Kubernetes cluster.

Please refer to the [Quick Start guide](https://helm.sh/docs/intro/quickstart/) if you wish to get running in just a few commands, otherwise the [Using Helm…
