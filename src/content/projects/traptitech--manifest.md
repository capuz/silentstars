---
repo: "traPtitech/manifest"
name: "manifest"
description: "k8s manifests ☸ for traP services"
originalDescription: "k8s manifests ☸ for traP services"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/traPtitech/manifest"
language: "HTML"
languages: ["HTML", "Go"]
languagePcts: [49, 24]
topics: ["kubernetes", "k8s", "argocd"]
stars: 12
forks: 5
openIssues: 27
closedIssues: 48
watchers: 4
contributors: 59
recentReleases: 0
createdAt: "2023-05-21T04:33:00Z"
lastCommitAt: "2026-10-10T09:59:48Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 92
undervaluedScore: 68
maintainers: ["trap-renovate[bot]", "blancnoir256", "Kentaro1043"]
openGraphImageUrl: "https://opengraph.githubassets.com/9d453698d1100ce5abf059a60ff9ac7688e224e1c6c2ca0be5a766172db4b52c/traPtitech/manifest"
---

# manifest

Kubernetes manifest files

Changes merged into the main branch are automatically deployed to the production environment by ArgoCD.

## Important: Operations during the server migration

We are currently migrating from ConoHa VPS to Sakura VPS.

Operations during the migration:

- Apps running on ConoHa
  - Managed in `applications/application-set.yaml`
  - Apps already migrated to Sakura have `exclude: true` set
- Apps running on Sakura
  - Managed in `sakura-applications/application-set.yaml`
  - `sakura-*` apps are added automatically (and excluded from ConoHa)
  - Others will be added in order as they are migrated

## Development environment

### Setup

1. Install [mise](https://mise.jdx.dev/) and enable it in your shell
   - See [Getting Started](https://mise.jdx.dev/getting-started.html)
2. Run `mise run setup`
   - The required tools and files will be set up

### Editor settings

#### Visual Studio Code

Please install [Kubernetes](https://marketplace.visualstudio.com/items?itemName=ms-kubernetes-tools.vscode-kubernetes-tools) and [YAML](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml).

Depending on the resource type, completion becomes…
