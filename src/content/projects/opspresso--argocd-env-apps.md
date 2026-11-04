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
languagePcts: [83]
topics: ["argocd", "helm", "gitops", "ai-agents", "eks", "k3s", "kubernetes"]
stars: 18
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2021-04-02T00:41:59Z"
lastCommitAt: "2026-11-04T02:57:09Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 62
maintainers: ["nalbam-bot", "nalbam"]
openGraphImageUrl: "https://opengraph.githubassets.com/bbfd21052c724f88d7342d435b4af87bb7f9d0d2c3fbbb549b8a3cf48939bd54/opspresso/argocd-env-apps"
---

# argocd-env-apps

The resources and scaling limits of the production cluster EKS `eks-demo` follow [Capacity operations](https://github.com/opspresso/argocd-env-apps/blob/HEAD/docs/production-capacity.md).

The EKS configuration for Agent Studio, Models, Memory, Knowledge, Forge, and Runway, the responsibilities of each repository, and the Secret preparation and deployment order follow [Agent Platform deployment](https://github.com/opspresso/argocd-env-apps/blob/HEAD/docs/agent-platform.md).
Cost-effective models by role, the OpenRouter-first principle, and how to switch saved configuration follow [Model defaults](https://github.com/opspresso/argocd-env-apps/blob/HEAD/docs/model-defaults.md).

The configuration of rovr(`rovr.dev`), Secret preparation, and the first deployment order follow [rovr deployment](https://github.com/opspresso/argocd-env-apps/blob/HEAD/docs/rovr.md).

## Repository structure

```text
apps-*.yaml       # App of Apps installation entry point
apps/             # Argo CD Application/ApplicationSet per platform
charts/           # Helm charts and deployment versions
env/              # Per-cluster configuration
scripts/          # Build, GitOps, validation,…
