---
repo: "ahgraber/homelab-gitops-k3s"
name: "homelab-gitops-k3s"
description: "k3s cluster managed by FluxCD GitOps"
readmeQualityOk: true
url: "https://github.com/ahgraber/homelab-gitops-k3s"
homepage: "https://ahgraber.github.io/homelab-gitops-k3s/"
language: "Python"
languages: ["Python"]
languagePcts: [68]
topics: ["gitops", "k8s-at-home", "kubernetes", "k3s", "self-hosted", "kubesearch"]
stars: 122
forks: 12
openIssues: 3
closedIssues: 15
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2021-08-05T21:13:50Z"
lastCommitAt: "2026-10-24T00:16:50Z"
lastReleaseAt: "2024-10-01T01:48:13Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 96
undervaluedScore: 46
maintainers: ["unhesitatingeffectivebot[bot]", "ahgraber"]
openGraphImageUrl: "https://opengraph.githubassets.com/2679738f3e7ac13337e7b8e7378eac9c8b47fa8a7ee8ccfdb9e8662faef84158/ahgraber/homelab-gitops-k3s"
---

# Homelab cluster with k3s and Flux

This repo configures a single Kubernetes ([k3s](https://k3s.io)) cluster with [Ansible](https://www.ansible.com) and uses the GitOps tool [Flux](https://toolkit.fluxcd.io) to manage its state.

## ✨ Features

- Automated, reproducible, customizable setup through Ansible templates and playbooks
- Opinionated implementation of Flux from the [Home Operations Community's template](https://github.com/onedr0p/flux-cluster-template/tree/main#-help)
- Encrypted secrets with [SOPS](https://github.com/getsops/sops) and [Age](https://github.com/FiloSottile/age)
- Web application firewall provided by [Cloudflare Tunnels](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/)
- SSL certificates from [Cloudflare](https://cloudflare.com) and [cert-manager](https://cert-manager.io)
- HA control plane capability via [kube-vip](https://kube-vip.io)
- Next-gen networking using [Cilium](https://cilium.io/)
- A [Renovate](https://www.mend.io/renovate)-ready repository with pull request diffs provided by [flux-local](https://github.com/allenporter/flux-local)
- Integrated [GitHub Actions](https://github.com/features/actions)

... and more!…
