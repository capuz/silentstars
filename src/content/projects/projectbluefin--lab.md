---
repo: "projectbluefin/lab"
name: "lab"
description: "Bluefin QA pipeline — Argo Workflows, KubeVirt, behave/dogtail GNOME smoke tests"
readmeQualityOk: true
url: "https://github.com/projectbluefin/lab"
homepage: "https://factory.projectbluefin.io"
language: "Rust"
languages: ["Rust"]
languagePcts: [58]
stars: 10
forks: 1
openIssues: 51
closedIssues: 127
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-05-25T22:44:22Z"
lastCommitAt: "2026-07-04T22:20:11Z"
status: "thriving"
tags: []
healthScore: 87
undervaluedScore: 51
maintainers: ["github-actions[bot]", "castrojo"]
openGraphImageUrl: "https://opengraph.githubassets.com/fb439ac6f1bbdbb1be705be868ea4e94e401d750ed507a4277c7ac76eb8148f3/projectbluefin/lab"
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
