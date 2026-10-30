---
repo: "FruitieX/homelab"
name: "homelab"
description: "This repo contains a declarative, GitOps definition of my homelab"
readmeQualityOk: true
url: "https://github.com/FruitieX/homelab"
language: "Python"
languages: ["Python"]
languagePcts: [92]
topics: ["fluxcd", "gitops", "homelab", "kubernetes", "hacktoberfest"]
stars: 6
forks: 1
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-02-01T16:56:20Z"
lastCommitAt: "2026-10-30T10:23:31Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 79
undervaluedScore: 64
maintainers: ["github-actions[bot]", "FruitieX", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2c1e0da9781dc3f8235517939f9d3a33be828d338b2e8829f1394c8fe8762edb/FruitieX/homelab"
---

# FruitieX' homelab

This repo contains a declarative, GitOps definition of my homelab.

## Components

In summary, the homelab is built up using:

- Three mini PCs running [Proxmox VE](https://www.proxmox.com/en/proxmox-ve), a [Synology DS923+ NAS](https://www.synology.com/en-us/products/DS923+) and [UniFi](https://ui.com/) network infrastructure ([hardware](https://github.com/FruitieX/homelab/blob/HEAD/docs/components.md#hardware))
- [Kubernetes](https://kubernetes.io/), running on virtual [Talos Linux](https://www.talos.dev/) nodes in [Proxmox VE](https://www.proxmox.com/en/proxmox-ve)
- [Flux CD](https://fluxcd.io/) reconciling cluster configuration from this git repo
- [MetalLB](https://metallb.universe.tf/) & [external-dns](https://github.com/kubernetes-sigs/external-dns) expose apps on separate IP addresses with associated DNS records
- [Envoy Gateway](https://gateway.envoyproxy.io/) & [cert-manager](https://cert-manager.io/) route subdomain HTTP requests with auto-renewing [Let's Encrypt](https://letsencrypt.org/) certificates
- [csi-driver-nfs](https://github.com/kubernetes-csi/csi-driver-nfs) provides persistent storage on the NAS
-…
