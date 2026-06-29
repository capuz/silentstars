---
repo: "openstack-k8s-operators/octavia-operator"
name: "octavia-operator"
description: "Octavia Kubernetes Operator"
url: "https://github.com/openstack-k8s-operators/octavia-operator"
language: "Go"
languages: ["Go"]
languagePcts: [92]
stars: 7
forks: 34
openIssues: 3
closedIssues: 1
watchers: 5
contributors: 36
recentReleases: 0
createdAt: "2022-09-14T14:41:21Z"
lastCommitAt: "2026-06-29T07:22:49Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 82
undervaluedScore: 74
maintainers: ["openshift-merge-bot[bot]", "stuggi", "richardcruise87"]
openGraphImageUrl: "https://opengraph.githubassets.com/e726c726bd3c8107b90cb726bdc5d9250d72d7f1e877b125944dd154e7b29299/openstack-k8s-operators/octavia-operator"
---

# octavia-operator

A Kubernetes Operator built using
the [Operator Framework](https://github.com/operator-framework) for Go. It
manages the lifecycle of
[Openstack Octavia](https://docs.openstack.org/octavia/latest/index.html).

## Description

Octavia is a Loadbalancer-as-a-service (LBaas) solution for Openstack.

## Getting Started

You’ll need a Kubernetes cluster to run against. You can
use [KIND](https://sigs.k8s.io/kind) to get a local cluster for testing, or run
against a remote cluster.
**Note:** Your controller will automatically use the current context in your
kubeconfig file (i.e. whatever cluster `kubectl cluster-info` shows).

### Running on the cluster

1. Install Instances of Custom Resources:

```sh
kubectl apply -f config/samples/
```

2. Build and push your image to the location specified by `IMG`:

```sh
make docker-build docker-push IMG=<some-registry>/octavia-operator:tag
```

3. Deploy the controller to the cluster with the image specified by `IMG`:

```sh
make deploy IMG=<some-registry>/octavia-operator:tag
```

### Uninstall CRDs
To delete the CRDs from the cluster:

```sh
make uninstall
```

### Undeploy controller

UnDeploy the controller to the cluster:…
