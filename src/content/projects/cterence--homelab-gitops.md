---
repo: "cterence/homelab-gitops"
name: "homelab-gitops"
description: "My homelab Kubernetes cluster managed by ArgoCD."
readmeQualityOk: true
url: "https://github.com/cterence/homelab-gitops"
language: "Go"
languages: ["Go"]
languagePcts: [84]
topics: ["argocd", "gitops", "homelab", "k8s", "kubernetes", "self-hosted", "k8s-at-home", "kubesearch", "helm"]
stars: 41
forks: 5
openIssues: 1
closedIssues: 5
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2022-02-13T15:40:54Z"
lastCommitAt: "2026-09-19T08:15:04Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 55
maintainers: ["renovate[bot]", "cterence", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f67243babdbc8a652b3c62bba68489d29cbe88515ca9848fcfaf4cda692603a6/cterence/homelab-gitops"
---

# 🏠 homelab-gitops

</p></div>
</div>

## ⚙️ Hardware

| Device                    | Name     | Specs                                                                 | OS    | Role                       |
|---------------------------|----------|-----------------------------------------------------------------------|-------|----------------------------|
| Lenovo ThinkCentre M75q-2 | homelab2 | Ryzen 5 Pro 5650GE (6 core / 12 threads) / 24GB RAM / 256GB + 2TB SSD | NixOS | k8s controller+worker node |

## ✨ Features

- Kubernetes cluster deployed with [k0s](https://k0sproject.io/)
- GitOps deployment with [ArgoCD](https://argo-cd.readthedocs.io/en/stable/) and [Helm](https://helm.sh/)
- Simple flat directory structure: [argocd-apps](https://github.com/cterence/homelab-gitops/blob/HEAD/argocd-apps/) contains ArgoCD applications deploying umbrella Helm charts in [k8s-apps](https://github.com/cterence/homelab-gitops/blob/HEAD/k8s-apps/)
- Fully automated HTTPS exposition using [cert-manager](https://cert-manager.io/), [external-dns](https://kubernetes-sigs.github.io/external-dns) and [traefik](https://doc.traefik.io/traefik/)
- Authentication of sensitive apps with…
