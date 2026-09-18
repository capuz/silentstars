---
repo: "joryirving/home-ops"
name: "home-ops"
description: "Wife tolerated HomeOps driven by Kubernetes, and Gitops via Flux."
readmeQualityOk: true
url: "https://github.com/joryirving/home-ops"
language: "YAML"
languages: ["YAML"]
languagePcts: [76]
topics: ["flux", "gitops", "kubernetes", "renovate", "self-hosted", "terraform", "kubesearch", "talos"]
stars: 224
forks: 11
openIssues: 1
closedIssues: 36
watchers: 1
contributors: 25
recentReleases: 0
createdAt: "2023-03-02T15:27:55Z"
lastCommitAt: "2026-09-18T08:27:10Z"
status: "thriving"
tags: ["funded"]
healthScore: 99
undervaluedScore: 40
maintainers: ["smurf-bot[bot]", "joryirving", "itsmiso-ai"]
openGraphImageUrl: "https://opengraph.githubassets.com/dec7e4ac9055312be3dece2fff26c02cd5f3323ff116281f27e6c31f5da90fb2/joryirving/home-ops"
fundingLinks: ["GITHUB:https://github.com/joryirving", "KO_FI:https://ko-fi.com/joryirving", "CUSTOM:https://www.paypal.me/joryirving"]
---

### <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f680/512.gif" alt="🚀" width="16" height="16"> My Home Operations Repository <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f6a7/512.gif" alt="🚧" width="16" height="16">

_... managed with Flux, Renovate, and GitHub Actions_ <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f916/512.gif" alt="🤖" width="16" height="16">

</div>

</div>

</div>

</div>

---

## Overview

This is a monorepository is for my home kubernetes clusters.
I try to adhere to Infrastructure as Code (IaC) and GitOps practices using tools like [Terraform](https://www.terraform.io/), [Kubernetes](https://kubernetes.io/), [Flux](https://github.com/fluxcd/flux2), [Renovate](https://github.com/renovatebot/renovate), and [GitHub Actions](https://github.com/features/actions).

The purpose here is to learn k8s, while practicing Gitops.

---

## ⛵ Kubernetes

My Kubernetes clusters are deployed with [Talos](https://www.talos.dev). One is a test cluster, one is a low-power utility cluster, running important services, and the other is a semi-hyper-converged cluster, workloads and block storage are sharing the same available resources on my…
