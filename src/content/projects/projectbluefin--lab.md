---
repo: "projectbluefin/lab"
name: "lab"
description: "Bluefin QA pipeline — Argo Workflows, KubeVirt, behave/dogtail GNOME smoke tests"
readmeQualityOk: true
url: "https://github.com/projectbluefin/lab"
homepage: "https://factory.projectbluefin.io"
language: "Python"
languages: ["Python", "Astro"]
languagePcts: [60, 26]
stars: 11
forks: 9
openIssues: 27
closedIssues: 234
watchers: 0
contributors: 11
recentReleases: 0
createdAt: "2026-05-25T22:44:22Z"
lastCommitAt: "2026-09-16T08:47:44Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 98
undervaluedScore: 64
maintainers: ["github-actions[bot]", "castrojo", "mergeraptor[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/895e01a154235a891785c36670aecdfe0016775a687995a1ff1301e6a8d428bd/projectbluefin/lab"
---

# Self Hosted Cloud Native Operating System Factory
### Introducing the first "Agentic OS Factory" that isn't made up bullshit!

#### [Factory Dashboard](https://factory.projectbluefin.io)

> A production-quality, fully GitOps-driven QA pipeline for testing
> [bootc](https://containers.github.io/bootc/) (image-based Linux) deployments,
> built entirely on CNCF projects running on the local `ghost` k3s cluster.
> This instance is deployed as the CI infrastructure for [Project Bluefin](https://projectbluefin.io).
> The productized form of this will ships as [Bluefin Server](https://projectbluefin.io/server) someday. Welcome.
>

---

## What This Is

This repo is a reference implementation of a CNCF-native homelab designed for bootc
image testing. For the Bluefin and Dakota image-poll lanes, the lab now runs
GUI and contract suites directly inside the published OCI images as Kubernetes
pods. VM-backed boot and install validation remain only for workflows that still
explicitly need KubeVirt (Flatcar, Knuckle, migration, and similar lanes).
Everything is declared in git, reconciled by ArgoCD, and orchestrated by Argo
Workflows. GitOps.

This instance runs as the CI infrastructure for…
