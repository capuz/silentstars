---
repo: "NVIDIA/infra-controller"
name: "infra-controller"
description: "NVIDIA Infra Controller - Hardware Lifecycle Management and multitenant networking"
readmeQualityOk: true
url: "https://github.com/NVIDIA/infra-controller"
homepage: "https://docs.nvidia.com/infra-controller"
language: "Rust"
languages: ["Rust", "Go"]
languagePcts: [50, 33]
stars: 226
forks: 150
openIssues: 583
closedIssues: 409
watchers: 13
contributors: 255
recentReleases: 0
createdAt: "2025-11-05T22:23:34Z"
lastCommitAt: "2026-07-14T05:53:45Z"
status: "thriving"
tags: ["needs_contributors", "fork_magnet"]
healthScore: 87
undervaluedScore: 34
maintainers: ["chet", "poroh", "kfelternv"]
openGraphImageUrl: "https://opengraph.githubassets.com/e14372e1ccc0b5ab71284abf39f687149fff074eab634a3526be0c90de181bfc/NVIDIA/infra-controller"
discussionCount: 4
---

# NVIDIA Infra Controller

NVIDIA Infra Controller (NICo) delivers zero-touch lifecycle automation for
bare-metal systems that secures datacenter infrastructure at its foundation.

It is an API-based microservice that provides site-local, zero-trust,
bare-metal lifecycle management with DPU-enforced isolation. NICo automates the complexity
of the bare-metal lifecycle to fast-track building next generation AI Cloud offerings.

## Getting Started

- Go to the [NVIDIA Infra Controller overview](https://docs.nvidia.com/infra-controller/documentation/overview/what-is-nico) to get an overview of NICo architecture and capabilities.
- Or jump to the [Quick Start Guide](https://docs.nvidia.com/infra-controller/documentation/getting-started/quick-start-guide) to start setting up your site for NICo.
- Check out [Local Development with DevSpace](https://github.com/NVIDIA/infra-controller/blob/HEAD/dev/deployment/devspace/README.md) to run NICo locally with mock systems.

## Bare-Metal Cluster Setup

`helm-prereqs/setup.sh` deploys the full NVIDIA Infra Controller stack onto a bare-metal Kubernetes cluster in three layers:

| Layer | What it installs | Helm release |…
