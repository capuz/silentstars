---
repo: "devantler-tech/platform"
name: "platform"
description: "DevantlerTech Platform - including deployment artifacts for running the platform in CI/CD and in Talos Omni."
readmeQualityOk: true
url: "https://github.com/devantler-tech/platform"
homepage: "http://platform.devantler.tech/"
language: "Shell"
languages: ["Shell", "Go"]
languagePcts: [55, 42]
topics: ["infrastructure"]
stars: 34
forks: 4
openIssues: 210
closedIssues: 617
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2022-05-20T20:32:47Z"
lastCommitAt: "2026-09-17T08:37:46Z"
lastReleaseAt: "2026-05-26T10:39:45Z"
status: "thriving"
tags: []
healthScore: 95
undervaluedScore: 58
maintainers: ["devantler", "dependabot[bot]", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7309ef9024fb6f51d963d8794e4effc154509aa4e025bdbdd46a2fd157515f53/devantler-tech/platform"
---

# Devantler Tech Platform ☸️⛴️

My personal Kubernetes platform, in the open. Everything the cluster runs is described as files in
this repository, and changes go live by being merged here rather than by anyone running commands
against the cluster — that pattern is called *GitOps*, and [Flux](https://fluxcd.io) is what applies
it.

This is a working system rather than a product: it is shaped around what I run, and it is not
packaged for reuse. Look around anyway — if you are building something similar, the repository
layout and the guides in [`docs/`](https://github.com/devantler-tech/platform/blob/HEAD/docs) are the useful parts, and
[`docs/TEMPLATING.md`](https://github.com/devantler-tech/platform/blob/HEAD/docs/TEMPLATING.md) lists exactly what a fork has to change. 🙌🏻

## Prerequisites

For local development:

- [Docker](https://docs.docker.com/get-docker/) — runs the cluster on your machine.
- [KSail](https://github.com/devantler-tech/ksail) — creates and manages that cluster. CI uses the
  same tool to validate and security-scan manifests, but does not boot a cluster; running one is a
  local step.

For the production cluster:

- [Hetzner…
