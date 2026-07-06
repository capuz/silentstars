---
repo: "openstack-k8s-operators/openstack-operator"
name: "openstack-operator"
description: "Meta Operator for OpenStack"
readmeQualityOk: true
url: "https://github.com/openstack-k8s-operators/openstack-operator"
homepage: "https://openstack-k8s-operators.github.io/openstack-operator/"
language: "Go"
languages: ["Go"]
languagePcts: [94]
stars: 56
forks: 112
openIssues: 2
closedIssues: 12
watchers: 5
contributors: 83
recentReleases: 0
createdAt: "2022-08-04T22:22:06Z"
lastCommitAt: "2026-07-06T07:04:59Z"
lastReleaseAt: "2023-07-26T18:46:46Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 96
undervaluedScore: 63
maintainers: ["openshift-merge-bot[bot]", "stuggi", "abays"]
openGraphImageUrl: "https://opengraph.githubassets.com/dfb30765f1825389a639b152d23c0205cc05b0d7a91d2ca68ec76ff7a46a52f6/openstack-k8s-operators/openstack-operator"
---

# openstack-operator

This is the primary operator for OpenStack. It is a "meta" operator, meaning it
serves to coordinate the other operators for OpenStack by watching and configuring
their CustomResources (CRs). Additionally installing this operator will automatically
install all required operator dependencies for installing/managing OpenStack.

## Description

This project is built, modeled, and maintained with [operator-sdk] (https://github.com/operator-framework/operator-sdk).

## Getting Started
You’ll need a Kubernetes cluster to run against. You can use [KIND](https://sigs.k8s.io/kind) to get a local cluster for testing, or run against a remote cluster.
**Note:** Your controller will automatically use the current context in your kubeconfig file (i.e. whatever cluster `kubectl cluster-info` shows).

### Running on the cluster
1. Install Instances of Custom Resources:

```sh
kubectl apply -f config/samples/
```

2. Build and push your image to the location specified by `IMG`:

```sh
make docker-build docker-push IMG=<some-registry>/openstack-operator:tag
```

3. Deploy the controller to the cluster with the image specified by `IMG`:

```sh
make deploy…
