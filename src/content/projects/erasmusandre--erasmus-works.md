---
repo: "ErasmusAndre/erasmus.works"
name: "erasmus.works"
description: "My Personal Kubernetes GitOps Repository"
readmeQualityOk: true
url: "https://github.com/ErasmusAndre/erasmus.works"
language: "HTML"
languages: ["HTML", "CSS"]
languagePcts: [43, 30]
topics: ["gitops", "kubernetes", "self-hosted", "k8s-at-home", "argocd", "talos"]
stars: 13
forks: 0
openIssues: 2
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-03-03T10:05:28Z"
lastCommitAt: "2026-10-22T08:52:31Z"
status: "thriving"
tags: []
healthScore: 86
undervaluedScore: 43
maintainers: ["renovate[bot]", "ErasmusAndre"]
openGraphImageUrl: "https://opengraph.githubassets.com/98ba769acfe516dfe066de60f57ccde49a92dc10f2ef69ef0c0ca274241d80c3/ErasmusAndre/erasmus.works"
---

---

## Overview

This repository is the source of truth for my personal homelab Kubernetes cluster. I
try to keep things simple and reproducible by following Infrastructure as Code
(IaC) and GitOps practices with tools like Talos, Kubernetes, Argo CD, and
Renovate.

---

## Kubernetes

My Kubernetes cluster is deployed with [Talos Linux](https://www.talos.dev/).
It is a small Talos cluster built to stay simple, low-maintenance, and reliable
for the services I actually run. It currently has two nodes with a single
control-plane node.

### Core Components

- [MetalLB](https://metallb.io/): Provides `LoadBalancer` IPs on the local network.
- [Envoy Gateway](https://gateway.envoyproxy.io/): Handles in-cluster ingress and HTTP routing.
- [Cloudflare Tunnel](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/): Publishes selected services externally without opening inbound ports.
- [ExternalDNS](https://kubernetes-sigs.github.io/external-dns/latest/): Syncs DNS records to Cloudflare.
- [Blocky](https://0xerr0r.github.io/blocky/): Serves LAN DNS and blocks ads on every node.
- [External Secrets Operator](https://external-secrets.io/): Syncs Kubernetes secrets…
