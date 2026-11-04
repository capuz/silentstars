---
repo: "redhat-appstudio/infra-deployments"
name: "infra-deployments"
description: "This repository is an initial set of Argo-CD-based deployments of AppStudio components to a cluster, plus a script to bootstrap Argo CD onto that cluster (to drive these Argo-CD-based deployments, via OpenShift GitOps)."
readmeQualityOk: true
url: "https://github.com/redhat-appstudio/infra-deployments"
language: "Go"
languages: ["Go", "Shell"]
languagePcts: [59, 20]
stars: 59
forks: 357
openIssues: 0
closedIssues: 0
watchers: 23
contributors: 246
recentReleases: 0
createdAt: "2021-09-28T13:19:51Z"
lastCommitAt: "2026-11-04T13:05:08Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 90
undervaluedScore: 53
maintainers: ["konflux-kargo-bot[bot]", "yftacherzog", "rh-tap-build-team[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/dd1e1bbc7daba7bda098d74d2553674d718f954c0b028e83b03c342e2299bfdf/redhat-appstudio/infra-deployments"
---

# Konflux Infrastructure Deployments

For the full documentation click [here](https://redhat-appstudio.github.io/infra-deployments/docs/introduction/about.html)

When working on documentation updates, you may want to enable GitHub pages for your forked repository,
see the [GitHub docs: Publishing from a branch](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-from-a-branch).
The site will be available at `https://<username>.github.io/<repository>` (`https://<username>.github.io/infra-deployments` if you didn't rename yor fork).

This repository is an initial set of Argo-CD-based deployments of Konflux components to a cluster, plus a script to bootstrap Argo CD onto that cluster (to drive these Argo-CD-based deployments, via OpenShift GitOps).

This repository is structured as a GitOps monorepo (e.g. the repository contains the K8s resources for *multiple* applications), using [Kustomize](https://kustomize.io/).

The contents of this repository are not owned by any single individual, and should instead be collectively managed and maintained through PRs by individual teams. More information about…
