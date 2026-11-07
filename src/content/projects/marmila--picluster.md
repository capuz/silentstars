---
repo: "marmila/picluster"
name: "picluster"
description: "This is a clone of https://github.com/ricsanfre/pi-cluster - Project credits: @ricsanfre - Built my own bare metal Pi Kubernetes Cluster Homelab automated with Ansible and FluxCD. "
readmeQualityOk: true
url: "https://github.com/marmila/picluster"
language: "HCL"
languages: ["HCL", "Shell"]
languagePcts: [46, 20]
stars: 7
forks: 1
openIssues: 1
closedIssues: 8
watchers: 1
contributors: 8
recentReleases: 0
createdAt: "2023-11-12T17:00:43Z"
lastCommitAt: "2026-11-07T13:55:33Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 76
maintainers: ["renovate[bot]", "marmila"]
openGraphImageUrl: "https://opengraph.githubassets.com/32508ea927e4c0e38bd05c34abe4c325fb21e565b9ab52bfeca1a77438f3a1ae/marmila/picluster"
---

# Pi Kubernetes Cluster

**K3S Kubernetes Cluster at home automated with Ansible and FluxCD**

This is an educational project to build a hybrid x86/ARM Kubernetes cluster at home, using Raspberry Pi and refurbished x86 mini PCs, learn to deploy basic kubernetes services and automate its deployment and configuration applying IaC (infrastructure as a code) and GitOps methodologies.

The entire process for creating this cluster at home, from cluster design and architecture to step-by-step manual configuration guides, has been documented and it is published in the project website: https://picluster.ricsanfre.com.

This repository contains all source code used to automate all manual tasks described in the documentation: Cloud-init's configuration files, Ansible's source code (playbooks/roles), and packaged Kubernetes applications (helm and kustomize) to be deployed using FluxCD.

Since its deployment is completely automated, the cluster can be re-deployed in minutes as many times as needed for testing new cluster configurations, new software versions or just take you out of any mesh you could cause playing with the cluster.

## Scope

The scope of this project is to build a hybrid…
