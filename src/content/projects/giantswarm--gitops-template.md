---
repo: "giantswarm/gitops-template"
name: "gitops-template"
description: "A repository that shows how to work with our flux based gitops offering."
url: "https://github.com/giantswarm/gitops-template"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [63, 33]
stars: 18
forks: 3
openIssues: 1
closedIssues: 11
watchers: 6
contributors: 59
recentReleases: 0
createdAt: "2022-03-11T12:48:41Z"
lastCommitAt: "2026-07-03T12:38:56Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 77
undervaluedScore: 48
maintainers: ["weatherhog", "architectbot", "marians"]
openGraphImageUrl: "https://opengraph.githubassets.com/b2bdf79e1daec1cad04c06264daeb4f57a72951ecc7c5c610ff21b6ed844f31f/giantswarm/gitops-template"
---

# GitOps Template

This repository presents structure, ideas and best practices for managing clusters and apps
using Flux available by default on Giant Swarm Management Clusters.

*Warning:* This repository is of a preview quality right now and still a work in progress.
Please bear in mind that it might have some elements that are not strictly needed or left
loose after we ported some ideas from other repositories.
Work in progress and new features are tracked [in this ticket](https://github.com/giantswarm/giantswarm/issues/21243).

## Using this repository

A good starting point is the
[repository structure](docs/repo_structure.md) doc, which explains how this repository
works.

Please check [Appendices](docs/appendices.md) on the assumptions made for the code examples throughout this repository.

To start creating and managing your infrastructure using this template, please
fork a repo from it, then follow the docs below to learn how it works:

1. [add a new Management Cluster](./docs/add_mc.md)
1. [add a new Organization](./docs/add_org.md)
1. [add a new Workload Cluster](./docs/add_wc.md)
   1. [create a template for mass instantiation of clusters](docs/add_wc_template.md)…
