---
repo: "davidkarlsen/flyway-operator"
name: "flyway-operator"
description: "k8s operator for Flyway migrations"
readmeQualityOk: true
url: "https://github.com/davidkarlsen/flyway-operator"
language: "Go"
languages: ["Go"]
languagePcts: [83]
topics: ["database", "database-management", "flyway", "kubernetes", "kubernetes-controller", "kubernetes-operator", "operator", "schema"]
stars: 12
forks: 1
openIssues: 7
closedIssues: 15
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-09-07T07:32:08Z"
lastCommitAt: "2026-11-07T13:54:19Z"
lastReleaseAt: "2023-09-12T09:13:10Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 66
maintainers: ["dependabot[bot]", "davidkarlsen"]
openGraphImageUrl: "https://opengraph.githubassets.com/df267397402febde161db3f871b8dedb51d2c3c9f1fb045926432f80f5716dd1/davidkarlsen/flyway-operator"
discussionCount: 1
---

# flyway-operator
[Kubernetes-operator](https://kubernetes.io/docs/concepts/extend-kubernetes/operator/) to apply [Flyway migrations](https://flywaydb.org/).

## Badges

## Description
The operator will spawn [Jobs](https://kubernetes.io/docs/concepts/workloads/controllers/job/) using the
[flyway-docker image](https://hub.docker.com/r/flyway/flyway).

See the [documentation](https://github.com/davidkarlsen/flyway-operator/blob/HEAD/docs/README.md) for features, installation and examples.

It is still an early project and I want to further develop some day-2 elements as described in the [backlog](https://github.com/davidkarlsen/flyway-operator/issues?q=is%3Aissue+is%3Aopen+label%3Aenhancement).

## Argo CD
To make Argo CD wait for a `Migration` to apply before it syncs your application, see [docs/argocd.md](https://github.com/davidkarlsen/flyway-operator/blob/HEAD/docs/argocd.md).

## Getting Started
You’ll need a Kubernetes cluster to run against. You can use [KIND](https://sigs.k8s.io/kind) to get a local cluster for testing, or run against a remote cluster.
**Note:** Your controller will automatically use the current context in your kubeconfig file (i.e. whatever cluster…
