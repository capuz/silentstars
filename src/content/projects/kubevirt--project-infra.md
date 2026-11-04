---
repo: "kubevirt/project-infra"
name: "project-infra"
description: "Project infrastructure administrative tools"
readmeQualityOk: true
url: "https://github.com/kubevirt/project-infra"
language: "Go"
languages: ["Go"]
languagePcts: [85]
topics: ["ansible", "continuous-integration", "hacktoberfest", "infrastructure-as-code"]
stars: 45
forks: 211
openIssues: 26
closedIssues: 257
watchers: 9
contributors: 187
recentReleases: 0
createdAt: "2017-07-03T09:38:04Z"
lastCommitAt: "2026-11-04T02:56:26Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 98
undervaluedScore: 63
maintainers: ["kubevirt-bot", "dollierp", "vamsikrishna-siddu"]
openGraphImageUrl: "https://opengraph.githubassets.com/caf62b4d93633aac1ef562ea76c7c1fed992677f934060ef441ca80468e4e1fe/kubevirt/project-infra"
---

# KubeVirt Project Infrastructure Tools

This repository provides supporting code for the project infrastructure. This is
what you can find on each of the repo directories

* `cni-plugins`: code to deploy CNI plugins (currently only sriov-passthrough-cni
is available)

* `docs`: extended documentation of several aspects of our infrastructure

* `external-plugins`: Prow plugins used on our setup

* `github/ci`: Infrastructure code for our main deployments:

  * `github/ci/prow-deploy`: Ansible code for testing and deploying Prow components,
  includes Prow configuration under github/ci/prow-deploy/files

  * `github/ci/services`: Code to manage additional CI services

  * `github/ci/testgrid`: Code to manage the configuration for our
  [testgrid setup](https://testgrid.k8s.io/kubevirt)

* `images`: Definition of container images used in CI

* `limiter`: Tool used to control connections for GCE buckets to the outside world
depending on billing alerts. See [README](https://github.com/kubevirt/project-infra/blob/HEAD/limiter/README.md)

* `releng/release-tool`: Tool for creating KubeVirt releases

* `robots`: Automation tools

  * `robots/dependabot`: Tool to create PRs to resolve…
