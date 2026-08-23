---
repo: "ctrliq/ascender"
name: "ascender"
description: "Ascender provides a web-based user interface, REST API, and task engine built on top of Ansible. It is based off the upstream project of AWX."
readmeQualityOk: true
url: "https://github.com/ctrliq/ascender"
homepage: "https://ciq.com/products/ascender/"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [49, 48]
stars: 199
forks: 24
openIssues: 5
closedIssues: 36
watchers: 10
contributors: 27
recentReleases: 0
createdAt: "2023-07-21T19:51:02Z"
lastCommitAt: "2026-08-23T04:08:20Z"
lastReleaseAt: "2023-11-08T19:41:51Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 43
maintainers: ["cigamit", "blaipr", "ssimpson89"]
openGraphImageUrl: "https://opengraph.githubassets.com/e1203221007d9811977363297c77950a0d8eae2b16d410c4d22e753d3eeb52dc/ctrliq/ascender"
discussionCount: 1
---

# Ascender

Ascender provides a web-based user interface, REST API, and task engine built on top of [Ansible](https://github.com/ansible/ansible). It is the automation platform at the centre of this project, based on the upstream [AWX](https://github.com/ansible/awx) project and maintained by Ctrl IQ.

## Requirements

- Docker with Compose, for the development environment
- Python 3.12, matching what the container images build against
- A Kubernetes cluster for production, which the installer can provision for you

## Installation

For production, use the [Ascender installer](https://github.com/ctrliq/ascender-install). It deploys onto a single VM using [k3s](https://k3s.io/), or onto AKS, DKP, EKS, GKE, RKE2, OCP, or TKGI with a kubeconfig and a namespace.

For development, bring up the containerised environment:

```bash
make docker-compose
```

See [Running the Development Environment in Docker](https://github.com/ctrliq/ascender/blob/HEAD/docs/development/docker.md) for the full walkthrough, and [kind.md](https://github.com/ctrliq/ascender/blob/HEAD/docs/development/kind.md) or [minikube.md](https://github.com/ctrliq/ascender/blob/HEAD/docs/development/minikube.md) for…
