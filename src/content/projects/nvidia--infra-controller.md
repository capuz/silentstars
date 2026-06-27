---
repo: "NVIDIA/infra-controller"
name: "infra-controller"
description: "NVIDIA Infra Controller - Hardware Lifecycle Management and multitenant networking"
url: "https://github.com/NVIDIA/infra-controller"
homepage: "https://docs.nvidia.com/infra-controller"
language: "Rust"
languages: ["Rust", "Go"]
languagePcts: [49, 34]
stars: 212
forks: 135
openIssues: 456
closedIssues: 324
watchers: 12
contributors: 245
recentReleases: 0
createdAt: "2025-11-05T22:23:34Z"
lastCommitAt: "2026-06-27T06:25:02Z"
status: "thriving"
tags: ["needs_contributors", "fork_magnet"]
healthScore: 88
undervaluedScore: 33
maintainers: ["chet", "poroh", "kensimon"]
openGraphImageUrl: "https://opengraph.githubassets.com/be9e4fdb85979f98583cff60d2dc649d19059a8ba2dadd9041a81c176b52aeb4/NVIDIA/infra-controller"
discussionCount: 3
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
- Check out [Local Development with DevSpace](dev/deployment/devspace/README.md) to run NICo locally with mock systems.

## Bare-Metal Cluster Setup

`helm-prereqs/setup.sh` deploys the full NVIDIA Infra Controller stack onto a bare-metal Kubernetes cluster in three layers:

| Layer | What it installs | Helm release |
|-------|-----------------|--------------|
| **Common services** | MetalLB,…
