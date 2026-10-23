---
repo: "szinn/k8s-homelab"
name: "k8s-homelab"
description: "My home operations repository using k8s/gitops"
readmeQualityOk: true
url: "https://github.com/szinn/k8s-homelab"
homepage: "https://szinn.github.io/k8s-homelab"
language: "YAML"
languages: ["YAML"]
languagePcts: [91]
topics: ["flux", "gitops", "k8s", "k8s-at-home", "kubernetes", "renovate", "selfhosted", "talos", "terraform"]
stars: 316
forks: 10
openIssues: 2
closedIssues: 55
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2022-04-06T11:40:21Z"
lastCommitAt: "2026-10-23T09:32:47Z"
lastReleaseAt: "2024-05-23T21:43:20Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 40
maintainers: ["repo-jeeves[bot]", "szinn"]
openGraphImageUrl: "https://opengraph.githubassets.com/f3af3f9573dc0b008a12420eb5572d1a35436f26a0af06999577bc4cb93c7cd8/szinn/k8s-homelab"
---

_... managed with Flux, Renovate and GitHub_ 🤖

---

## Overview

This is my mono repo for my home infrastructure. It's based loosely on the template at [onedr0p/cluster-template](https://github.com/onedr0p/cluster-template) as well as many of the exemplar repos, searchable via [https://kubesearch.dev/](https://kubesearch.dev).

It follows the concept of Infrastructure as Code and by using tools such [Flux](https://github.com/fluxcd/flux2),
[Renovate](https://github.com/renovatebot/renovate),
[go-task](https://github.com/go-task/task) and shell scripts, creates a reproducible, mostly self-managing implementation.

My original implementation was running on the Ryzen using custom shell scripts and 35+ docker containers managed by hand. Any upgrades, system resets, etc, all had to be manually resolved.
It mostly ran just fine. Applying the principle "If it ain't broke, it isn't complicated enough" led me to add machines, memory, functionality to achieve a much more automated, self-managing cluster. Plus I have learned a lot!

At the bottom of this page, is the bringup process that I follow for this cluster. I recommend reading top-to-bottom to understand the cluster structure which…
