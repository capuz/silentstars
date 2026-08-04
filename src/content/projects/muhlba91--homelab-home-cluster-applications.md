---
repo: "muhlba91/homelab-home-cluster-applications"
name: "homelab-home-cluster-applications"
description: "Homelab: Applications running on the Kubernetes home-cluster"
readmeQualityOk: true
url: "https://github.com/muhlba91/homelab-home-cluster-applications"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["gitops", "homelab", "kubernetes", "fluxcd"]
stars: 14
forks: 1
openIssues: 3
closedIssues: 4
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-10-27T07:12:46Z"
lastCommitAt: "2026-08-04T06:11:32Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 91
undervaluedScore: 63
maintainers: ["renovate[bot]", "muhlba91"]
openGraphImageUrl: "https://opengraph.githubassets.com/1e0f670918445122b25f720ba82dacb97457a1736740aa0635f5f522a225cbff/muhlba91/homelab-home-cluster-applications"
---

# Homelab: Kubernetes Home Cluster - Applications

This repository contains applications deployed on the `home-cluster` via [Flux](https://fluxcd.io) using [GitOps](https://opengitops.dev).

---

## Bootstrapping

A Kubernetes cluster needs to be bootstrapped with the [Cilium CNI](https://cilium.io) and Flux pointing to this repository.

For [ksops](https://github.com/viaduct-ai/kustomize-sops) and Flux to decrypt the initial secrets for configuring the [External Secrets Operator](http://external-secrets.io) using [HashiCorp Vault](https://developer.hashicorp.com/vault), a [Google Cloud Service Account](https://cloud.google.com/docs/authentication#service-accounts) with access to the correct KMS key needs to be set in the `flux` namespace.

---

## Directory Structure

The repository is structured in:

- a [common](https://github.com/muhlba91/homelab-home-cluster-applications/blob/HEAD/common/) directory containing common applications applied to all clusters
- a [sites](https://github.com/muhlba91/homelab-home-cluster-applications/blob/HEAD/sites/) directory containing cluster specific applications

---

## App-of-Apps

The repository follows the app-of-apps pattern for each site.…
