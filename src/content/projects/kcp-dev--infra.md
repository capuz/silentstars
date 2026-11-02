---
repo: "kcp-dev/infra"
name: "infra"
description: "CI infrastructure"
readmeQualityOk: true
url: "https://github.com/kcp-dev/infra"
language: "Shell"
languages: ["Shell", "Dockerfile"]
languagePcts: [46, 22]
stars: 7
forks: 16
openIssues: 3
closedIssues: 21
watchers: 3
contributors: 29
recentReleases: 0
createdAt: "2023-05-21T10:22:48Z"
lastCommitAt: "2026-11-02T13:39:01Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 75
undervaluedScore: 58
maintainers: ["mjudeikis", "xrstf", "orymate"]
openGraphImageUrl: "https://opengraph.githubassets.com/97dca89376cb691c04c4f0439eeed279f228e5822fefbfb1013bea650618c64b/kcp-dev/infra"
---

# infra

This repository contains tools and configuration files for the testing and automation needs of the `kcp-dev` organization.

## Prow (CI)

There are 2 Kubernetes clusters that make up the Prow CI system for kcp.

* The `prow` cluster holds Prow itself (Deck, Horologium, Sinker, Plank, ...), but besides a few exceptions, no actual Prow jobs are executed here. This cluster is separated from the other to make sure some sensitive secrets (like the Github token) are not available to "random" Prow jobs that could just `echo` and steal it.
* The `build` cluster is where most of the Prow jobs are executed. This cluster is auto-scaling and holds nothing but the Prow jobs.

To access Prow, there are 2 instances of its UI:

* https://prow.kcp.k8c.io/ is the _internal_ Deck, available only to authenticated users (users part of the `kcp-dev` organization). This deck shows _all_ repositories and offers a way to rerun a Prowjob.
* https://public-prow.kcp.k8c.io/ is the _public_ Deck, available to everyone, but read-only.
