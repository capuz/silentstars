---
repo: "opspresso/argocd-env-apps"
name: "argocd-env-apps"
description: "GitOps application deployments for the OpsPresso agent platform and demo services on k3s and EKS."
originalDescription: "GitOps application deployments for the OpsPresso agent platform and demo services on k3s and EKS."
descriptionLang: "ko"
readmeQualityOk: true
url: "https://github.com/opspresso/argocd-env-apps"
language: "Python"
languages: ["Python"]
languagePcts: [84]
topics: ["argocd", "helm", "gitops", "ai-agents", "eks", "k3s", "kubernetes"]
stars: 18
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2021-04-02T00:41:59Z"
lastCommitAt: "2026-11-02T15:17:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 62
maintainers: ["nalbam-bot", "nalbam"]
openGraphImageUrl: "https://opengraph.githubassets.com/79fd6997d7593509a4260e41f7236ad409b7e5feaa7f8bd80a7047995a82156e/opspresso/argocd-env-apps"
---

The resources and scaling limits of the production cluster `eks-demo` on EKS follow [Capacity Operations](https://github.com/opspresso/argocd-env-apps/blob/HEAD/docs/production-capacity.md).

The EKS setup for Agent Studio, Models, Memory, Knowledge, Forge, and Runway, the responsibilities of each repository, Secret preparation, and deployment order follow [Agent Platform Deployment](https://github.com/opspresso/argocd-env-apps/blob/HEAD/docs/agent-platform.md). Data and domain migration between clusters follows [Cluster Migration](https://github.com/opspresso/argocd-env-apps/blob/HEAD/docs/cluster-migration.md).

The configuration of rovr (`rovr.dev`), Secret preparation, and first deployment order follow [rovr Deployment](https://github.com/opspresso/argocd-env-apps/blob/HEAD/docs/rovr.md).

## Repository Structure

```text
apps-*.yaml       # App of Apps installation entry point
apps/             # Per-platform Argo CD Application/ApplicationSet
charts/           # Helm charts and deployment versions
env/              # Per-cluster configuration
scripts/          # Build, GitOps, validation, and operations scripts
requirements/     # Python runtime (runtime.txt) and test…
