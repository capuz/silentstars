---
repo: "Michaelpalacce/HomeLab"
name: "HomeLab"
description: "My HomeLab environment "
readmeQualityOk: true
url: "https://github.com/Michaelpalacce/HomeLab"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 219
forks: 7
openIssues: 1
closedIssues: 12
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2021-06-13T19:09:15Z"
lastCommitAt: "2026-08-03T06:44:14Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 98
undervaluedScore: 40
maintainers: ["renovate[bot]", "Michaelpalacce"]
openGraphImageUrl: "https://opengraph.githubassets.com/50644f05a85eb1d5cf43bb34e5deb67dd8bcc3080ff230882f086dbed352cf0a/Michaelpalacce/HomeLab"
---

# Preface

This repository contains basic HELM local charts for application installation as well as FluxCD2 HelmReleases for GitOps.
I'm not going to move away from the local helm charts where possible as they make this repository pretty beginner-friendly.

Also, big warning, this repo is things I've done on the side with time taken away from my family.

# :open_book: Check out the Documentation
* [Documentation](https://github.com/Michaelpalacce/HomeLab/blob/HEAD/docs)

# Main tools used
1. **FluxCD 2** - GitOps for my HomeLab.
2. **Renovate** - Checks for updates to actions, helm charts, helm releases, docker containers.
3. **Istio + Gateway API** - Reverse proxy + SSL termination for services
4. **cert-manager + reflector** - cert-manager generates certificates for my services and reflector duplicates the generated ssl
certificate secret to all the namespaces. The secret is called `ingress`.
5. **Longhorn** - K8S native storage.
6. **Ansible** - Used to provision the architecture
7. **Velero** - K8S and PVC backup. Free and open source by VMware 
8. **MetalLB** - LoadBalancer for bare-metal k8s clusters
9. **tofu-controller** - Gitops for Terraform 

# GitOps :construction:…
