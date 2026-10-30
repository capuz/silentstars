---
repo: "lukashankeln/glint"
name: "glint"
description: "lint ArgoCD Applications, FluxCD HelmReleases and plain Resources using custom CEL Policies"
readmeQualityOk: true
url: "https://github.com/lukashankeln/glint"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["gitops", "linter"]
stars: 18
forks: 1
openIssues: 3
closedIssues: 28
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-05-17T10:00:14Z"
lastCommitAt: "2026-10-30T10:23:10Z"
lastReleaseAt: "2026-06-04T15:37:51Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 44
maintainers: ["lukashankeln", "renovate-k8s[bot]", "hankeln-release-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b2b163de655a7ba70bd71d7f640c0ac74d04d3629a6c3cbe7c46b13a28b5f5fd/lukashankeln/glint"
---

# glint

**GitOps linter for ArgoCD and Flux repositories.**

glint auto-renders Helm charts and Kustomize overlays and enforces custom policies via [CEL](https://cel.dev) expressions — all in a single command, no external binaries required.

```
$ glint lint .

[ERROR] Deployment/prod/api (apps/v1): one or more containers use the :latest image tag  [no-latest-tag]
[ERROR] Ingress/prod/api (networking.k8s.io/v1beta1): apiVersion is deprecated or removed  [deprecated-apis]
[WARNING] Deployment/prod/api (apps/v1): one or more containers are missing resource requests  [resource-requests]

2 errors, 1 warning across 47 resources
```

---

## Why glint?

A typical GitOps repo needs several tools chained together:

```bash
helm template . | kube-linter lint -
pluto detect-files -d .
# ... plus custom scripts for org-specific policies
```

glint replaces all of that with a single step that understands your repository structure — ArgoCD Applications, Flux HelmReleases, plain YAML directories — and handles rendering and policy enforcement in one pass.

---

## Install

**Homebrew (recommended):**
```bash
brew install lukashankeln/tap/glint
```

**Go:**
```bash
go install…
