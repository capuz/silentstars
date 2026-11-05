---
repo: "mykso/myks"
name: "myks"
description: "Render Kubernetes manifests for many clusters from one Git repo: Helm, Git and YAML in, reviewable YAML out."
readmeQualityOk: true
url: "https://github.com/mykso/myks"
homepage: "https://mykso.github.io/myks/"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["fleet-management", "helm", "kubernetes", "kubernetes-manifests", "vendir", "yaml", "ytt", "argocd", "carvel", "gitops"]
stars: 20
forks: 4
openIssues: 8
closedIssues: 95
watchers: 3
contributors: 9
recentReleases: 0
createdAt: "2023-04-18T22:38:16Z"
lastCommitAt: "2026-11-05T00:21:43Z"
lastReleaseAt: "2023-12-11T23:21:24Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 67
maintainers: ["Zebradil", "renovate[bot]", "mykso-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/4cf5a56e79ce87d1e728d5219269e50bfcb2e0dbf9527791ac0ed598cdaf828f/mykso/myks"
discussionCount: 2
---

# Myks

**Render the Kubernetes manifests for every cluster you run from one Git
repository, and review the exact YAML each change produces before it ships.**

Myks (**M**anage (**my**) **y**aml for **K**ubernetes **s**imply) takes upstream
Helm charts, Git repositories and plain YAML, applies your per-cluster
configuration, and writes plain Kubernetes manifests to a `rendered/` directory.
You commit that output. Argo CD, Flux, kapp or `kubectl` deploy static YAML, and
every pull request shows reviewers what changes in which cluster.

[Getting started](https://mykso.github.io/myks/getting-started/) ·
[Documentation](https://mykso.github.io/myks/) ·
[Why myks](https://mykso.github.io/myks/concepts/why-myks/) ·
[Examples](https://github.com/mykso/myks/blob/HEAD/examples/README.md) ·
[Slack](https://kubernetes.slack.com/archives/C06BVDBHZC2)

## The problem

You run several clusters. Each needs mostly the same applications, with small
differences: a chart version held back in production, more replicas in one
region, a label every cluster adds, a fix to an upstream chart that the
maintainers have not merged yet. The usual answers are a values file per cluster
per chart, a fork of the…
