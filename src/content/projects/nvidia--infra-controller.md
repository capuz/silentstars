---
repo: "NVIDIA/infra-controller"
name: "infra-controller"
description: "NVIDIA Infra Controller - Hardware Lifecycle Management and multitenant networking"
readmeQualityOk: true
url: "https://github.com/NVIDIA/infra-controller"
homepage: "https://docs.nvidia.com/infra-controller"
language: "Rust"
languages: ["Rust", "Go"]
languagePcts: [52, 31]
stars: 238
forks: 164
openIssues: 666
closedIssues: 735
watchers: 13
contributors: 264
recentReleases: 0
createdAt: "2025-11-05T22:23:34Z"
lastCommitAt: "2026-07-30T06:07:42Z"
status: "thriving"
tags: ["needs_contributors", "fork_magnet"]
healthScore: 90
undervaluedScore: 36
maintainers: ["chet", "poroh", "williampnvidia"]
openGraphImageUrl: "https://opengraph.githubassets.com/d587c7479f4ae128c1d00b1d82f3f0ae8aaae9ffd96c0faf6a0564526fd253b3/NVIDIA/infra-controller"
discussionCount: 4
---

# NVIDIA Infra Controller

NVIDIA Infra Controller (NICo) delivers zero-touch lifecycle automation for
bare-metal systems that secures datacenter infrastructure at its foundation.

It is an API-based microservice that provides site-local, zero-trust,
bare-metal lifecycle management with DPU-enforced isolation. NICo automates the complexity
of the bare-metal lifecycle to fast-track building next generation AI Cloud offerings.

## Getting Started

- Go to the [NVIDIA Infra Controller overview](https://github.com/NVIDIA/infra-controller/blob/HEAD/docs/overview/what-is-nico.md) to get an overview of NICo architecture and capabilities.
- Or, go straight to the [Quick Start Guide](https://docs.nvidia.com/infra-controller/documentation/getting-started/quick-start-guide) to start setting up your site for NICo.
- The [NICo web documentation](https://docs.nvidia.com/infra-controller/documentation/home) is available online.
- Check out [Local Development with DevSpace](https://github.com/NVIDIA/infra-controller/blob/HEAD/dev/deployment/devspace/README.md) to run NICo locally with mock systems.

## Bare-Metal Cluster Setup

`helm-prereqs/setup.sh` deploys the full NVIDIA Infra Controller…
