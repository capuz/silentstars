---
repo: "zimmertr/Kubernetes-Manifests"
name: "Kubernetes-Manifests"
description: "A collection of my Kubernetes Manifests managed by Kustomize & ArgoCD"
readmeQualityOk: true
url: "https://github.com/zimmertr/Kubernetes-Manifests"
language: "Jinja"
languages: ["Jinja"]
languagePcts: [74]
topics: ["argo-workflows", "argocd", "cilium", "gateway-api", "grafana", "helm", "homelab", "istio", "k8s", "kubernetes"]
stars: 118
forks: 25
openIssues: 1
closedIssues: 6
watchers: 6
contributors: 3
recentReleases: 0
createdAt: "2018-12-02T23:34:22Z"
lastCommitAt: "2026-09-18T14:03:08Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 97
undervaluedScore: 45
maintainers: ["zimmertr", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/734f04790bdabc4454b659e584384a4e7717254639370d38549a09103eceae19/zimmertr/Kubernetes-Manifests"
discussionCount: 0
---

# Kubernetes Manifests

* [Summary](#summary)
* [Instructions](#instructions)
  * [Networking](#networking)
    * [Istio](#istio)
    * [Cilium](#cilium)
  * [Argo CD](#argo-cd)
  

<hr>

## Summary

This repository contains a collection of Kustomize projects and Argo CD resources used to deploy applications to Kubernetes. 

Using Proxmox? Consider using [TKS](https://github.com/zimmertr/TJs-Kubernetes-Service) to deploy your cluster!

<hr>

## Instructions

### Networking

#### Istio

Assuming you're using TKS with Flannel, [Istio](https://github.com/zimmertr/Kubernetes-Manifests/blob/HEAD/istio/README.md) can be used to set up Metal LB & Istio:

```bash
# You may have to run this multiple times
kustomize build istio/metallb | kubectl apply -f-
kustomize build --enable-helm istio/istio | kubectl apply -f-
kustomize build --enable-helm istio/istio-gateway | kubectl apply -f-
```

#### Cilium

Assuming you're using TKS and have disabled Flannel, [Cilium](https://github.com/zimmertr/Kubernetes-Manifests/blob/HEAD/cilium/README.md)) Can be used to install Cilium and Gateway API:

```bash
kustomize build --enable-helm cilium/gateway-api | kubectl apply -f-
kustomize build…
