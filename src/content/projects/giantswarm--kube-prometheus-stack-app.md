---
repo: "giantswarm/kube-prometheus-stack-app"
name: "kube-prometheus-stack-app"
description: "Kubernetes prometheus operator chart for Giant Swarm clusters"
readmeQualityOk: true
url: "https://github.com/giantswarm/kube-prometheus-stack-app"
language: "Makefile"
languages: ["Makefile", "Go Template"]
languagePcts: [51, 43]
topics: ["app"]
stars: 22
forks: 7
openIssues: 1
closedIssues: 0
watchers: 8
contributors: 67
recentReleases: 0
createdAt: "2019-06-12T09:39:30Z"
lastCommitAt: "2026-07-21T06:12:51Z"
lastReleaseAt: "2021-01-05T15:47:31Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 75
undervaluedScore: 51
maintainers: ["renovate[bot]", "taylorbot", "architectbot"]
openGraphImageUrl: "https://opengraph.githubassets.com/7690507439f412c7f1441839040b8e50f93265738a8507f9208c85fb8e9f9641/giantswarm/kube-prometheus-stack-app"
---

# Kube Prometheus Stack App

Giant Swarm offers Prometheus Operator as a [managed app](https://docs.giantswarm.io/changes/managed-apps/) which can be installed in any clusters.

**Table of Contents:**

- [Requirements](#requirements)
- [Install](#install)
- [Upgrading](#upgrading)
- [Configuration](#configuration)
- [Limitations](#limitations)
- [Credit](#credits)

## Requirements

In order to run this app and to be able to ensure smooth upgrades, we decided to split the CRDs from the application helm chart.
In this regard, you need to install the `prometheus-operator-crd` app compatible with the `kube-prometheus-stack` app version (same major version).

## Install

There are several ways to install this app onto a workload cluster.

- [Using GitOps to instantiate the App](https://docs.giantswarm.io/advanced/gitops/#installing-managed-apps)
- [Using our web interface](https://docs.giantswarm.io/ui-api/web/app-platform/#installing-an-app).
- By creating an [App resource](https://docs.giantswarm.io/ui-api/management-api/crd/apps.application.giantswarm.io/) in the management cluster as explained in [Getting started with App…
