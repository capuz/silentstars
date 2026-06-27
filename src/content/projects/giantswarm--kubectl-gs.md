---
repo: "giantswarm/kubectl-gs"
name: "kubectl-gs"
description: "kubectl plugin helping with custom resources by Giant Swarm"
url: "https://github.com/giantswarm/kubectl-gs"
homepage: "https://docs.giantswarm.io/reference/kubectl-gs/"
language: "Go"
languages: ["Go"]
languagePcts: [96]
topics: ["kubectl", "kubectl-plugins", "kubectl-plugin"]
stars: 51
forks: 8
openIssues: 2
closedIssues: 13
watchers: 9
contributors: 90
recentReleases: 0
createdAt: "2020-03-23T13:14:01Z"
lastCommitAt: "2026-06-27T06:24:30Z"
lastReleaseAt: "2020-06-10T08:42:21Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 96
undervaluedScore: 54
maintainers: ["renovate[bot]", "taylorbot", "giantswarm-align-files[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/249434934/3cae2eac-6dc6-443f-bf60-8efa2342ed38"
---

# The official Giant Swarm kubectl plug-in

## Quick start

```nohighlight
kubectl krew install gs
kubectl gs
```

Check the [installation docs](https://docs.giantswarm.io/vintage/use-the-api/kubectl-gs/installation/) for details on installation with and without Krew.

## Features

- **Login via single sign-on**: Using the `login` command, you can quickly set up a `kubectl` context with OIDC authentication for a Giant Swarm management cluster, or a workload cluster with our [dex](https://github.com/giantswarm/dex-app) and [athena](https://github.com/giantswarm/athena) apps installed.
- **Custom resource templating**: using the `template` commands lets you create manifests for
  creating/updating custom resources for:
  - Clusters
  - Node pools
  - App catalogs
  - Apps
- **Gitops repository management**: The `gitops` command family allows to create and modify resources in your GitOps repo clone.
- **Resource display**: The `get` commands allow for retrieving a list of resources, or details for a single one.

## Documentation

Find the [kubectl gs reference](https://docs.giantswarm.io/vintage/use-the-api/kubectl-gs/) in our documentation site.

## Publishing a release

See…
