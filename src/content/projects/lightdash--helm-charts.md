---
repo: "lightdash/helm-charts"
name: "helm-charts"
description: "Lightdash Community helm charts"
readmeQualityOk: true
url: "https://github.com/lightdash/helm-charts"
language: "Shell"
languages: ["Shell"]
languagePcts: [79]
stars: 28
forks: 23
openIssues: 10
closedIssues: 8
watchers: 10
contributors: 28
recentReleases: 0
createdAt: "2022-02-04T20:09:51Z"
lastCommitAt: "2026-10-08T10:52:03Z"
lastReleaseAt: "2022-10-10T13:34:14Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 87
undervaluedScore: 60
maintainers: ["github-actions[bot]", "owlas"]
openGraphImageUrl: "https://opengraph.githubassets.com/3f8ef2c06fcbc3f336a8e8ebeed3ca5e4fa2ae854837eb1174d61038f027a0c3/lightdash/helm-charts"
---

# Lightdash helm-charts

# Migrating to 1.0.0

The 1.0.0 release contains breaking changes. You **must first update your instance to 0.10.1** before updating to 1.0.0.

# Development

It is recommended to work on this project with VS Code, as the development environment is pre-configured in a [development container](https://code.visualstudio.com/docs/remote/create-dev-container).

For end-to-end walkthroughs that deploy the locally checked-out chart—from `main`, another branch, or a fork—see [docs/recipes](https://github.com/lightdash/helm-charts/blob/HEAD/docs/recipes/). Each recipe is one self-contained file covering a single path.

## Linting
  `ct lint --all`

## Running with minikube

```
# Start minikube (optionally use hyperkit not docker)
minikube start --driver=hyperkit

# Get the lightdash helm charts (this repo)
helm repo add lightdash https://lightdash.github.io/helm-charts

# Pull a specific version of lightdash - (~5 minutes)
minikube image pull lightdash/lightdash:0.433.1

# Use a locally built image of lightdash - (~5 minutes)
minikube image load lightdash/lightdash:0.433.1-alpha

##########
### values.yaml
image:
  tag: latest
service:
  type: NodePort
configMap:…
