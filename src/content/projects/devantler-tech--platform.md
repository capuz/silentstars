---
repo: "devantler-tech/platform"
name: "platform"
description: "DevantlerTech Platform - including deployment artifacts for running the platform in CI/CD and in Talos Omni."
url: "https://github.com/devantler-tech/platform"
homepage: "http://platform.devantler.tech/"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [65, 35]
topics: ["infrastructure"]
stars: 31
forks: 4
openIssues: 23
closedIssues: 261
watchers: 3
contributors: 4
recentReleases: 10
createdAt: "2022-05-20T20:32:47Z"
lastCommitAt: "2026-06-28T06:56:34Z"
lastReleaseAt: "2026-05-26T10:39:45Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 98
undervaluedScore: 68
maintainers: ["devantler", "renovate[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/07fc4307f799d63c3610aa4d11765988414b64ca17fb06dce6160292f670e306/devantler-tech/platform"
---

# Devantler Tech Platform ☸️⛴️

This repo contains the deployment artifacts for the DevantlerTech Platform. The platform is a Kubernetes cluster that is highly automated with the use of Flux GitOps, CI/CD with Automated Testing, and much more. Feel free to look around. You might find some inspiration 🙌🏻

## Prerequisites

For local development:

- [Docker](https://docs.docker.com/get-docker/) - For running the cluster locally.
- [KSail](https://github.com/devantler-tech/ksail) - For developing the cluster locally, and for running the cluster in CI to ensure all changes are properly tested before being applied to the production cluster.

For the production cluster:

- [Hetzner Cloud](https://www.hetzner.com/cloud/) — Infrastructure provider and managed Cloud Load Balancer for cluster ingress. KSail's native Hetzner provider handles Talos boot, CCM, CSI, and kubeconfig.
- [Cloudflare](https://www.cloudflare.com) — DNS (A/AAAA records pointed at the Hetzner Cloud Load Balancer) and Origin CA.
- [Flux GitOps](https://fluxcd.io) - For managing the kubernetes applications and infrastructure declaratively.
- [SOPS](https://getsops.io) and [Age](https://github.com/FiloSottile/age) - For…
