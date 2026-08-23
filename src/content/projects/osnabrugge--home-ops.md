---
repo: "osnabrugge/home-ops"
name: "home-ops"
description: "The source of truth for my home cluster to reconcile from following GitOps where possible."
readmeQualityOk: true
url: "https://github.com/osnabrugge/home-ops"
language: "YAML"
languages: ["YAML"]
languagePcts: [92]
topics: ["flux", "gitops", "k8s-at-home", "kubernetes", "renovate", "self-hosted", "azure-keyvault", "copilot-coding-agent", "talos", "mise-en-place"]
stars: 7
forks: 0
openIssues: 113
closedIssues: 26
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-03-24T02:27:23Z"
lastCommitAt: "2026-08-23T04:08:56Z"
lastReleaseAt: "2024-10-01T00:12:39Z"
status: "thriving"
tags: ["hidden_gem", "under_pressure"]
healthScore: 84
undervaluedScore: 63
maintainers: ["homeops-runner[bot]", "osnabrugge", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/12a20d55d283cbd926909311abb793b27ed236891695f0147a3da1f159f217ca/osnabrugge/home-ops"
---

# Sean & Copilot's Home Operations

### Built together — Sean at the keyboard, Copilot in the co-pilot seat

_Backed by [Flux](https://fluxcd.io/), [Renovate](https://github.com/renovatebot/renovate), and [GitHub Actions](https://github.com/features/actions)_

> _"I literally bootstrapped this system from bare metal."_ — GitHub Copilot

---

_Live cluster stats from [kromgo](https://github.com/kashalls/kromgo). Badges may show as broken when the public Cloudflare edge is having issues; direct envoy still serves them. Tracked in [#3171](https://github.com/osnabrugge/home-ops/issues/3171)._

</div>

---

## 📖 Overview

This is a mono repository for my home infrastructure and Kubernetes cluster. I try to adhere to Infrastructure as Code (IaC) and GitOps practices using tools like [Talos](https://talos.dev), [Kubernetes](https://kubernetes.io/), [Flux](https://github.com/fluxcd/flux2), [Renovate](https://github.com/renovatebot/renovate), and [GitHub Actions](https://github.com/features/actions).

---

## ⛵ Kubernetes

My cluster runs [Talos Linux](https://talos.dev) on 6 Lenovo ThinkCentre M920q nodes — a semi-hyper-converged setup where workloads and block storage share the same…
