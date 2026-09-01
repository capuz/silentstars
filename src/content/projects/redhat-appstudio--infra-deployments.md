---
repo: "redhat-appstudio/infra-deployments"
name: "infra-deployments"
description: "This repository is an initial set of Argo-CD-based deployments of AppStudio components to a cluster, plus a script to bootstrap Argo CD onto that cluster (to drive these Argo-CD-based deployments, via OpenShift GitOps)."
readmeQualityOk: true
url: "https://github.com/redhat-appstudio/infra-deployments"
language: "Go"
languages: ["Go", "Shell"]
languagePcts: [48, 27]
stars: 56
forks: 344
openIssues: 0
closedIssues: 0
watchers: 24
contributors: 233
recentReleases: 0
createdAt: "2021-09-28T13:19:51Z"
lastCommitAt: "2026-09-01T08:50:19Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 89
undervaluedScore: 54
maintainers: ["konflux-kargo-bot[bot]", "rh-tap-build-team[bot]", "hugares"]
openGraphImageUrl: "https://opengraph.githubassets.com/16fd89db0e091fd5d4c5792893e6f5757ad304888b9087ff7959928098dbc198/redhat-appstudio/infra-deployments"
---

# Konflux Infrastructure Deployments

For the full documentation click [here](https://redhat-appstudio.github.io/infra-deployments/docs/introduction/about.html)

When working on documentation updates, you may want to enable GitHub pages for your forked repository,
see the [GitHub docs: Publishing from a branch](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-from-a-branch).
The site will be available at `https://<username>.github.io/<repository>` (`https://<username>.github.io/infra-deployments` if you didn't rename yor fork).

This repository is an initial set of Argo-CD-based deployments of Konflux components to a cluster, plus a script to bootstrap Argo CD onto that cluster (to drive these Argo-CD-based deployments, via OpenShift GitOps).

This repository is structured as a GitOps monorepo (e.g. the repository contains the K8s resources for *multiple* applications), using [Kustomize](https://kustomize.io/).

The contents of this repository are not owned by any single individual, and should instead be collectively managed and maintained through PRs by individual teams. More information about…
