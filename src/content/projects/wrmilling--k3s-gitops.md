---
repo: "wrmilling/k3s-gitops"
name: "k3s-gitops"
description: "GitOps principles to define kubernetes cluster state via code. (Read-only Mirror)"
readmeQualityOk: true
url: "https://github.com/wrmilling/k3s-gitops"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["k3s", "kubernetes", "gitops", "flux2", "flux", "helm", "cert-manager", "renovate", "k8s-at-home", "rook"]
stars: 231
forks: 9
openIssues: 0
closedIssues: 22
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2019-06-16T16:05:19Z"
lastCommitAt: "2026-11-05T14:06:06Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 100
undervaluedScore: 40
maintainers: ["tokyohomelab", "wrmilling"]
openGraphImageUrl: "https://opengraph.githubassets.com/39ec2a8b2dee1626d317c6331cdb46b4f1c50e741791aad92eb90379823a6941/wrmilling/k3s-gitops"
---

Using GitOps principals and workflow to manage a lightweight <a href="https://k3s.io">k3s</a> cluster.

## :book:&nbsp; Overview

This repository utilizes [Flux2](https://fluxcd.io/) to implement GitOps principals and define the state of my cluster using code.

## :computer:&nbsp; Infrastructure

Setup for the individual nodes is now via NixOS and my [nixos-configuration](https://github.com/wrmilling/nixos-configuration) repository. Individual node names from the screenshot in [overview](#overview) can be searched for under the `hosts` directory of the aforementioned repo.

The current cluster consists of one (1) virtual master node, hosted on my TrueNAS Scale NAS, three (3) Minisforum UN100C mini-PCs, and one (1) BMax B4 Plus mini-PC. The mini-PCs double as both compute and ceph nodes.

## :gear:&nbsp; Setup

Setup for Flux2, secrets, and the rest of the GitOps workflow can be found here under the [setup](https://github.com/wrmilling/k3s-gitops/blob/HEAD/setup/README.md) directory.

## :wrench:&nbsp; Namespaces

* [cert-manager](https://github.com/wrmilling/k3s-gitops/blob/HEAD/cert-manager/README.md)
*…
