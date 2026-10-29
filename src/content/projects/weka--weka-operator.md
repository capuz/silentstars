---
repo: "weka/weka-operator"
name: "weka-operator"
description: "A Kubernetes Operator for Weka"
readmeQualityOk: true
url: "https://github.com/weka/weka-operator"
language: "Go"
languages: ["Go"]
languagePcts: [89]
stars: 7
forks: 8
openIssues: 9
closedIssues: 2
watchers: 4
contributors: 17
recentReleases: 0
createdAt: "2023-11-08T19:58:50Z"
lastCommitAt: "2026-10-29T14:07:22Z"
lastReleaseAt: "2024-01-19T19:24:27Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 82
undervaluedScore: 75
maintainers: ["kristina-solovyova", "assafgi", "tigrawap"]
openGraphImageUrl: "https://opengraph.githubassets.com/ac620cabb2821e792f72a5dbd41293dbf5676dc70b8eae7eb115d7fe25612445/weka/weka-operator"
---

# weka-operator

Kubernetes operator for managing WEKA clusters on Kubernetes.

## Overview

The weka-operator automates the deployment and management of WEKA distributed storage clusters on Kubernetes. It provides:

- Automated WEKA cluster provisioning and lifecycle management
- Node discovery and container orchestration
- Drive management and cluster scaling
- CSI driver integration for persistent volumes

## Prerequisites

- Kubernetes cluster (v1.26+)
- Helm 3.x
- Container registry access (Quay.io or your own registry)
- WEKA license and credentials

## Installation
Set image pull secret name if needed
```shell
export QUAY_USERNAME=<quay username>
export QUAY_PASSWORD=<quay password>

kubectl create namespace weka-operator-system
kubectl create secret docker-registry quay-io-robot-secret \
  --docker-server=quay.io \
  --docker-username=$QUAY_USERNAME \
  --docker-password=$QUAY_PASSWORD \
  --docker-email=$QUAY_USERNAME \
  --namespace=weka-operator-system # operator will be scheduling some containers in own namespace

kubectl create secret docker-registry quay-io-robot-secret \
  --docker-server=quay.io \
  --docker-username=$QUAY_USERNAME \…
