---
repo: "openstack-k8s-operators/gitops"
name: "gitops"
description: "RHOSO GitOps base tooling (in development)"
url: "https://github.com/openstack-k8s-operators/gitops"
language: "Go Template"
languages: ["Go Template"]
languagePcts: [100]
stars: 13
forks: 15
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 7
recentReleases: 0
createdAt: "2024-03-18T18:49:40Z"
lastCommitAt: "2026-06-25T06:40:29Z"
lastReleaseAt: "2024-09-27T21:27:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 84
undervaluedScore: 58
maintainers: ["cjeanner", "pinikomarov", "oliashish"]
openGraphImageUrl: "https://opengraph.githubassets.com/7bfa50906b950edbdb28947e8401f904dfb80f23acdc5676af462532751e8e5d/openstack-k8s-operators/gitops"
---

# Deploying and managing Red Hat OpenStack Services on OpenShift with GitOps

This repository contains an implementation of Red Hat GitOps (GitOps, ArgoCD) for managing the
deployment of Red Hat OpenStack Services on OpenShift (RHOSO).

**WARNING**: _This repository is provided as a Developer Preview for testing environments only, 
before all features have been implemented and tested. Therefore, some functionality may be absent, 
incomplete, or not work as expected, and is subject to change until the official release. 
Red Hat encourages customers to use the Developer Preview release to provide feedback._

## Prerequisites: Use pinned resources

In your `kustomization.yaml` and related resources, make sure to use
a fixed reference `?ref=VALUE`, where `VALUE` is a hash or a tag.

## Deploy the OpenShift GitOps Operator

### Option 1: Deploy automatically with the included helper playbook
We provide a light playbook to facilitate the operator deployment and
subsequent ArgoCD instance configuration.

[Read the playbook documentation](./openshift-gitops.deploy/README.md).

### Option 2: Deploy manually with `oc apply` commands
1. Create the namespace, operatorgroup and subscription:…
