---
repo: "opspresso/argocd-env-apps"
name: "argocd-env-apps"
description: "GitOps application deployments for the OpsPresso agent platform and demo services on k3s and EKS."
originalDescription: "GitOps application deployments for the OpsPresso agent platform and demo services on k3s and EKS."
descriptionLang: "ko"
readmeQualityOk: true
url: "https://github.com/opspresso/argocd-env-apps"
language: "Python"
languages: ["Python", "Jinja"]
languagePcts: [73, 26]
topics: ["argocd", "helm", "gitops", "ai-agents", "eks", "k3s", "kubernetes"]
stars: 18
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2021-04-02T00:41:59Z"
lastCommitAt: "2026-11-17T12:14:41Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 62
maintainers: ["nalbam-bot", "nalbam"]
openGraphImageUrl: "https://opengraph.githubassets.com/cc343edde884c8e638ec2197c025735f2d17a954a7561d505a4228634b195a07/opspresso/argocd-env-apps"
---

# argocd-env-apps

Resource and scaling limits for the production EKS cluster `eks-demo` follow [Capacity Operations](https://github.com/opspresso/argocd-env-apps/blob/HEAD/docs/production-capacity.md).

The EKS setup for Agent Studio, Models, Memory, Knowledge, Forge, and Runway, per-repository responsibilities, and Secret preparation and deployment order follow [Agent Platform Deployment](https://github.com/opspresso/argocd-env-apps/blob/HEAD/docs/agent-platform.md).
Cost-effective models by role, the OpenRouter-first principle, and how to switch stored settings follow [Model Defaults](https://github.com/opspresso/argocd-env-apps/blob/HEAD/docs/model-defaults.md).

The rovr (`rovr.dev`) setup, Secret preparation, and first deployment order follow [rovr Deployment](https://github.com/opspresso/argocd-env-apps/blob/HEAD/docs/rovr.md).

## Repository Structure

```text
apps-*.yaml       # App of Apps installation entry point
apps/             # Argo CD Application/ApplicationSet per platform
charts/           # Helm charts and deployment versions
env/              # per-cluster configuration
scripts/          # build, GitOps, validation, and operations scripts
requirements/     #…
