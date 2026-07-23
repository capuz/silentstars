---
repo: "openshift/console"
name: "console"
description: "OpenShift Cluster Console UI"
readmeQualityOk: true
url: "https://github.com/openshift/console"
homepage: "https://www.openshift.org"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [88]
topics: ["openshift", "openshift-origin"]
stars: 458
forks: 730
openIssues: 8
closedIssues: 426
watchers: 103
contributors: 3091
recentReleases: 0
createdAt: "2018-04-13T17:54:59Z"
lastCommitAt: "2026-07-23T06:15:04Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 99
undervaluedScore: 43
maintainers: ["openshift-merge-bot[bot]", "logonoff", "sowmya-sl"]
openGraphImageUrl: "https://opengraph.githubassets.com/02cee521e8860c19afc159f92107345e3b69207afbc4f52294dd5e60c72d0664/openshift/console"
---

# OpenShift Console

Codename: "Bridge"

[quay.io/openshift/origin-console](https://quay.io/repository/openshift/origin-console?tab=tags)

The console is a more friendly `kubectl` in the form of a single page webapp. It also integrates with other services like monitoring, chargeback, and OLM. Some things that go on behind the scenes include:

- Proxying the Kubernetes API under `/api/kubernetes`
- Providing additional non-Kubernetes APIs for interacting with the cluster
- Serving all frontend static assets
- User Authentication

## Quickstart

### Dependencies:

1. [node.js](https://nodejs.org/) >= 22 with [corepack](https://npmjs.com/package/corepack) enabled for [yarn berry](https://yarnpkg.com/)
2. [go](https://go.dev/) >= 1.25
3. [oc](https://mirror.openshift.com/pub/openshift-v4/clients/oc/latest/) or [kubectl](https://kubernetes.io/docs/tasks/tools/#kubectl) and an OpenShift or Kubernetes cluster
4. [jq](https://stedolan.github.io/jq/download/) (used by scripts and tests; see [code usage](https://github.com/search?q=repo%3Aopenshift%2Fconsole+%2F+jq+%2F+-path%3A**%2F*.md+-path%3A**%2FDockerfile*&type=code))

### Build everything:

This project uses [Go…
