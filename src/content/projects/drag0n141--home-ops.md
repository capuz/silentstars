---
repo: "drag0n141/home-ops"
name: "home-ops"
description: "HomeOps driven by Kubernetes and GitOps using Flux"
readmeQualityOk: true
url: "https://github.com/drag0n141/home-ops"
language: "YAML"
languages: ["YAML"]
languagePcts: [94]
topics: ["gitops", "helm", "kubernetes", "kubernetes-cluster", "renovate", "flux", "kubesearch", "selfhosted", "k8s", "talos"]
stars: 65
forks: 0
openIssues: 1
closedIssues: 4
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2023-07-27T13:01:58Z"
lastCommitAt: "2026-09-18T08:27:07Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 49
maintainers: ["drag0n141-bot[bot]", "drag0n141"]
openGraphImageUrl: "https://opengraph.githubassets.com/c5346a36dffaadd1682f0c368d2fedc32e592ed43bc032353443f856ca3ad349/drag0n141/home-ops"
---

### My Home Operations Repository :octocat:

_... managed with Flux, Renovate, and GitHub Actions_ 🤖

</div>

### :wrench:&nbsp; Tools

| Tool                                                               | Purpose                                                                  |
|--------------------------------------------------------------------|--------------------------------------------------------------------------|
| [flux](https://toolkit.fluxcd.io/)                                 | Operator that manages the kubernetes cluster based on the Git repository |
| [go-task](https://github.com/go-task/task)                         | A task runner / simpler Make alternative written in Go                   |
| [sops](https://github.com/mozilla/sops)                            | Encrypts kubernetes secrets with Age                                     |

## 💻 Main Cluster
| Node             | Hostname | RAM  | Storage                      | Function   | Operating System |
|------------------|----------|------|------------------------------|------------|------------------|
| Intel NUC13ANHI5 | K8s-M01  | 64GB | OS-Disk 512GB, Ceph-Disk 4TB | Kubernetes | Talos            |
|…
