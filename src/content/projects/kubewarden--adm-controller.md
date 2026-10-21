---
repo: "kubewarden/adm-controller"
name: "adm-controller"
description: "Manage admission policies in your Kubernetes cluster with ease"
readmeQualityOk: true
url: "https://github.com/kubewarden/adm-controller"
homepage: "https://www.kubewarden.io/component/adm-controller/"
language: "Rust"
languages: ["Rust", "Go"]
languagePcts: [62, 35]
topics: ["hacktoberfest", "kubernetes", "kubernetes-security", "policy-as-code", "webassembly", "admission-controller", "cel-lang", "gatekeeper", "open-policy-agent", "rego"]
stars: 244
forks: 55
openIssues: 123
closedIssues: 593
watchers: 7
contributors: 32
recentReleases: 0
createdAt: "2020-12-04T11:08:13Z"
lastCommitAt: "2026-10-21T08:49:45Z"
lastReleaseAt: "2021-06-18T09:25:46Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 96
undervaluedScore: 42
maintainers: ["viccuad", "chimera-kube-bot", "flavio"]
openGraphImageUrl: "https://opengraph.githubassets.com/30a92aa32e02da05c99331ad8421cd9ca7d39c0b155bc0990dc58506657a9ce0/kubewarden/adm-controller"
---

Kubewarden is a Kubernetes Dynamic Admission Controller that uses policies written
in WebAssembly.

For more information refer to the [official Kubewarden website](https://kubewarden.io/).

# Kubewarden Admission Controller - Monorepo

This repository is a monorepo containing the source code for all the different
components of the Kubewarden Admission Controller:

- **adm-controller**: A Kubernetes controller that allows you to dynamically register Kubewarden admission policies and reconcile them with the Kubernetes webhooks of the cluster where it's deployed
- **policy-server**: The runtime component that evaluates admission policies written in WebAssembly
- **audit-scanner**: A component that scans existing resources in the cluster against registered policies
- **kwctl**: A CLI tool for testing and managing Kubewarden policies

## Documentation

The full and exhaustive documentation is available at [docs.kubewarden.io](https://docs.kubewarden.io).

The [`docs/`](https://github.com/kubewarden/adm-controller/blob/HEAD/docs) folder contains README files for each component:

- [Controller](https://github.com/kubewarden/adm-controller/blob/HEAD/docs/controller)
- [Policy…
