---
repo: "localstack-samples/aks-samples"
name: "aks-samples"
description: "This repository contains samples and tutorials for Azure Kubernetes Service (AKS) in LocalStack emulator for Azure."
readmeQualityOk: true
url: "https://github.com/localstack-samples/aks-samples"
language: "Shell"
languages: ["Shell"]
languagePcts: [70]
stars: 10
forks: 1
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 9
recentReleases: 0
createdAt: "2026-06-01T10:47:15Z"
lastCommitAt: "2026-11-19T11:59:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 51
maintainers: ["paolosalvatori", "HarshCasper"]
openGraphImageUrl: "https://opengraph.githubassets.com/1eadec1dc20d31d26e4868836ff5c8694022c4a54291d90521390418f5a7f3fe/localstack-samples/aks-samples"
---

# AKS Samples and Tutorials for LocalStack for Azure

This repository shows how to deploy an [Azure Kubernetes Service (AKS)](https://learn.microsoft.com/en-us/azure/aks/what-is-aks) cluster and run real workloads on it, either against Azure in the cloud or locally on the [LocalStack for Azure](https://docs.localstack.cloud/azure/) emulator. Everything here runs unchanged against both.

It contains two kinds of content:

- **[Samples](#samples)**: end-to-end deployments of the same web app, each persisting its data in a different Azure data service, so you can compare how one application is wired up against different backing stores.
- **[Tutorials](#tutorials)**: standalone walkthroughs of individual AKS capabilities, from network policies and the cloud controller manager to KEDA autoscaling, the Gateway API, the Key Vault CSI driver, and Terraform and Bicep deployments.
