---
repo: "qjoly/GitOps"
name: "GitOps"
description: "Homelab setup based on Omni and Talos."
readmeQualityOk: true
url: "https://github.com/qjoly/GitOps"
homepage: "https://qjoly.github.io/GitOps/"
language: "Shell"
languages: ["Shell", "HTML"]
languagePcts: [31, 31]
topics: ["k8s-at-home", "kubernetes", "omni", "talos", "argocd", "vault"]
stars: 114
forks: 5
openIssues: 1
closedIssues: 22
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2023-02-15T20:03:40Z"
lastCommitAt: "2026-11-22T11:47:52Z"
lastReleaseAt: "2025-05-31T07:52:48Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 48
maintainers: ["qjoly", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4c19fe840e7f783763c3e5a25fc003ea5333c3d0345f47ac22d59c2f95c95b83/qjoly/GitOps"
---

# HomeLab

*Homelab setup based on Talos, Omni and Corium.*

## Overview

This repository contains the configuration files for my homelab. The homelab is a collection of servers and services that I run at home or in the cloud. The homelab is used for learning, testing, and hosting projects.

## Stack

The home cluster runs [Talos](https://www.talos.dev/) (don't hesitate to check [a little article I wrote about it](https://a-cup-of.coffee/blog/talos/)), managed by a self-hosted [Omni](https://www.siderolabs.com/platform/saas-for-kubernetes/) instance. The two OVH servers run [Corium](https://github.com/Corium-OS/Corium) (bootc + k0s) and are driven with `cctl`.
