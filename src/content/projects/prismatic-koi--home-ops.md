---
repo: "prismatic-koi/home-ops"
name: "home-ops"
description: "A mono repo for my home infrastructure and Kubernetes cluster."
readmeQualityOk: true
url: "https://github.com/prismatic-koi/home-ops"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ansible", "flux", "gitops", "k3s", "k8s-at-home", "kubernetes", "renovate", "selfhosted"]
stars: 7
forks: 0
openIssues: 3
closedIssues: 134
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2022-05-20T08:55:57Z"
lastCommitAt: "2026-09-05T07:49:34Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 77
maintainers: ["prismatic-bot[bot]", "prismatic-koi"]
openGraphImageUrl: "https://opengraph.githubassets.com/36536eaba0a9ce1af1c29e7534c6a58a25066404d3dc7cc3987395667a0d55da/prismatic-koi/home-ops"
---

# home-ops

## Current state 2025-08-06
This repository was boostrapped using an older version of the [onedr0p/cluster-template](https://github.com/onedr0p/cluster-template), back when it was using general purpose operating systems and k3s.
If i were to start over, I would use Talos. I may yet migrate to using it, but it is difficult with a small existing cluster as they are not interoperable.
As far as the other components go, I am very happy, Flux, Cilium and Longhorn are all great tools.
I've removed all of the ansible, taskfiles etc as they are no longer functional and I wouldn't recommend using them.

## Project Purpose

The purpose of this project is to define and manage the infrastructure of my home environment. This includes various applications and services running on a Kubernetes cluster, which is managed by Flux. The project aims to provide a reliable and scalable home infrastructure setup.

## Features

- **Kubernetes Cluster**: The core of the infrastructure is a Kubernetes cluster, which provides a scalable and resilient environment for running applications.
- **Flux**: Flux is used for continuous deployment, ensuring that the cluster state is always in sync with the…
