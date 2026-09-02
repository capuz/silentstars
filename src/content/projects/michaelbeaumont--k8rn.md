---
repo: "michaelbeaumont/k8rn"
name: "k8rn"
description: "My self-hosted Talos Kubernetes cluster running on Tailscale, configured using terraform and flux"
readmeQualityOk: true
url: "https://github.com/michaelbeaumont/k8rn"
language: "HCL"
languages: ["HCL"]
languagePcts: [83]
topics: ["bare-metal", "cloudflare", "flux", "self-hosted", "tailscale", "talos", "terraform"]
stars: 6
forks: 0
openIssues: 3
closedIssues: 13
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-07-25T00:51:43Z"
lastCommitAt: "2026-09-02T08:04:22Z"
status: "thriving"
tags: []
healthScore: 95
undervaluedScore: 74
maintainers: ["renovate[bot]", "michaelbeaumont"]
openGraphImageUrl: "https://opengraph.githubassets.com/28c9fd285d65b00e0e0a2dfd4e93b9cc5c433992ae4091730d825d96cca4de49/michaelbeaumont/k8rn"
---

# k8rn

This holds everything for my bare metal Talos k8s cluster.

The cluster is initialized with Terraform, including flux, which then runs off of this repo.

## Setup

This configuration depends on:

- Tailscale
  - In particular an oauth client that is tagged to own the tags assigned to each device in
    [the tailscale Terraform](https://github.com/michaelbeaumont/k8rn/blob/HEAD/infra/tailscale.tf)
- Cloudflare
  - A DNS zone to assign a subdomain in
- A KMS service for talos, I'm using [talos-unlockr](https://github.com/michaelbeaumont/talos-unlockr) to easily unlock things on demand.
- SSH key for flux
  - Must be a deploy key for this repo
- Age key for SOPS-encrypted data with flux
- An OIDC IdP for cluster authzn

The cluster nodes have to be assigned IPs reachable from your machine.

### Install

#### Talos images

Each image:

- gets a UUID in the META partition because the mini PCs I have don't have proper UUIDs generated
- has `stable_secret` set as a kernel param

Creating the image factory config and fetching each image is handled in
Terraform and exposed as outputs. The `justfile` makes it easy to grab the
update image and the ISOs.

Each node is added to the…
