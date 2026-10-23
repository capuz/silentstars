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
lastCommitAt: "2026-10-23T08:46:46Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 62
maintainers: ["nalbam-bot", "nalbam"]
openGraphImageUrl: "https://opengraph.githubassets.com/cac685c061d8139efc214a41083bd9b4effe8908e5746c8a689bfbf1e91eb353/opspresso/argocd-env-apps"
---

# argocd-env-apps

Resource and scaling limits for the current k3s alpha and future EKS declarations follow [Capacity operations](https://github.com/opspresso/argocd-env-apps/blob/HEAD/docs/production-capacity.md).

For the k3s/EKS configuration of Agent Studio, Memory, Librio, and Forge, the responsibilities of each repository, Secret preparation, and the deployment order, follow [Agent Platform deployment](https://github.com/opspresso/argocd-env-apps/blob/HEAD/docs/agent-platform.md).

## Repository structure

```text
apps-*.yaml       # App of Apps installation entry point
apps/             # Platform-specific Argo CD Application/ApplicationSet
charts/           # Helm chart and deployment versions
env/              # Per-cluster configuration
scripts/          # Build, GitOps, validation, and operations scripts
requirements/     # Python runtime (runtime.txt) and test (dev.txt) dependencies
tests/            # Automated tests
docs/             # Operations documentation
```

The commands below are relative to the repository root. The scripts can also be run from other directories by specifying paths.

## apps

> Register apps.

```bash
kubectl apply -n argocd -f…
