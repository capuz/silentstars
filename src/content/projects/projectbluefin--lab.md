---
repo: "projectbluefin/lab"
name: "lab"
description: "Bluefin QA pipeline — Argo Workflows, KubeVirt, behave/dogtail GNOME smoke tests"
url: "https://github.com/projectbluefin/lab"
homepage: "https://factory.projectbluefin.io"
language: "Astro"
languages: ["Astro", "Python"]
languagePcts: [48, 27]
stars: 10
forks: 1
openIssues: 50
closedIssues: 127
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2026-05-25T22:44:22Z"
lastCommitAt: "2026-07-03T12:40:05Z"
status: "thriving"
tags: []
healthScore: 87
undervaluedScore: 51
maintainers: ["github-actions[bot]", "castrojo"]
openGraphImageUrl: "https://opengraph.githubassets.com/05653b00ad6c138d087456912cacfc59b6cf99ee1313e49fa608d3f261745214/projectbluefin/lab"
---

# Self Hosted Cloud Native Operating System Factory
### Introducing the first "Agentic OS Factory" that isn't made up bullshit!

#### [Factory Dashboard](https://factory.projectbluefin.io)

> A production-quality, fully GitOps-driven QA pipeline for testing
> [bootc](https://containers.github.io/bootc/) (image-based Linux) deployments,
> built entirely on CNCF projects running on a single homelab node.
> This instance is deployed as the CI infrastructure for [Project Bluefin](https://projectbluefin.io).
> The productized form of this will ships as [Bluefin Server](https://projectbluefin.io/server) someday. Welcome.
>

---

## What This Is

This repo is a reference implementation of a CNCF-native homelab designed for bootc
image testing. An entire automated agentic OS factory. Boot a real VM from a real OCI image, run GUI acceptance tests, tear it
down, repeat. Everything is declared in git, reconciled by ArgoCD, and orchestrated by
Argo Workflows. Gitops. 

This instance runs as the CI infrastructure for Project Bluefin — every image
publication triggers a fully automated test run with zero human intervention, from
digest detection to screenshot in the release notes. This is…
