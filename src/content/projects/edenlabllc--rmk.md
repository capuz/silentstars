---
repo: "edenlabllc/rmk"
name: "rmk"
description: "RMK CLI - Reduced Management for Kubernetes by Edenlab LLC."
readmeQualityOk: true
url: "https://github.com/edenlabllc/rmk"
homepage: "https://edenlabllc.github.io/rmk/latest/"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["fhir", "helm", "helmfile", "kubectl", "kubernetes", "terraform", "kodjin", "rmk", "ci-cd", "deployment"]
stars: 56
forks: 1
openIssues: 6
closedIssues: 21
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2024-05-28T16:59:30Z"
lastCommitAt: "2026-09-04T08:09:05Z"
lastReleaseAt: "2024-06-24T16:19:49Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 70
undervaluedScore: 31
maintainers: ["anovikov-el", "apanasiuk-el"]
openGraphImageUrl: "https://opengraph.githubassets.com/40b192c7e1020eb2129c6eb1fa710a3b44bd838faf3e6263eac68102c6509c5b/edenlabllc/rmk"
---

# RMK CLI - Reduced Management for Kubernetes

Command-line tool for simplified management and provisioning of [Kubernetes](https://kubernetes.io/) clusters and
environments,
[Helm](https://helm.sh/) secrets and releases, built according to best practices
in [CI/CD](https://www.redhat.com/en/topics/devops/what-is-ci-cd) and [DevOps](https://www.atlassian.com/devops).

Full documentation is available at https://edenlabllc.github.io/rmk/latest/.

## Overview

**RMK** stands for "**R**educed **M**anagement for **K**ubernetes".

The main goal of the [CLI](https://en.wikipedia.org/wiki/Command-line_interface) tool is to simplify (**reduce**) the
management of Kubernetes clusters and releases, serving as a "Swiss knife" for daily CI/CD and DevOps tasks while
allowing **efficient control** with a minimal set of CLI commands.

RMK serves as a **wrapper** for various popular CI/CD and DevOps CLI tools, including:

- [Helmfile](https://helmfile.readthedocs.io/en/latest/)
- [Helm](https://helm.sh/)
- [kubectl](https://kubernetes.io/docs/reference/kubectl/)
- [clusterctl](https://cluster-api.sigs.k8s.io/clusterctl/overview)
- [K3D](https://k3d.io/)
- [SOPS](https://getsops.io/)
-…
