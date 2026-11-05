---
repo: "konflux-ci/konflux-ci"
name: "konflux-ci"
description: "Trusted builds made easy! A cloud-native software factory for building, testing, and releasing trusted software artifacts"
readmeQualityOk: true
url: "https://github.com/konflux-ci/konflux-ci"
homepage: "https://konflux-ci.dev/"
language: "Go"
languages: ["Go"]
languagePcts: [93]
topics: ["ci-cd", "cloud-native", "kubernetes", "sbom", "sigstore", "slsa", "supply-chain-security", "tekton", "ai", "go"]
stars: 222
forks: 170
openIssues: 96
closedIssues: 419
watchers: 4
contributors: 82
recentReleases: 0
createdAt: "2024-03-09T12:26:12Z"
lastCommitAt: "2026-11-05T13:40:15Z"
lastReleaseAt: "2026-01-29T09:47:36Z"
status: "thriving"
tags: ["needs_contributors", "fork_magnet"]
healthScore: 96
undervaluedScore: 47
maintainers: ["red-hat-konflux[bot]", "github-actions[bot]", "yftacherzog"]
openGraphImageUrl: "https://opengraph.githubassets.com/e33ad8c8e00dbc98de1e403394236dfa97aa34ad2c13d0838cb461e6cd98b8c1/konflux-ci/konflux-ci"
discussionCount: 1
---

A cloud-native software factory for building, testing, and releasing trusted software artifacts

---

## What is Konflux?

Konflux is an open-source, Kubernetes-native CI/CD platform that manages the full software
delivery lifecycle for software artifacts — with supply chain trust built in
from the start. Built on [Tekton](https://tekton.dev/) and the
[Conforma](https://enterprisecontract.dev/) policy framework, it brings together
best-in-class open source projects into a single, integrated software factory.
Managed by a Kubernetes operator, Konflux runs on Kind, OpenShift, and any conformant Kubernetes cluster.

## Try Konflux

Want to see it in action? You can have a full Konflux instance running on a local Kind
cluster in just a few minutes — no cloud account, no complex setup.
Jump into the [Local Deployment Guide](https://konflux-ci.dev/konflux-ci/docs/installation/install-local/) and start building!

## Key Features

| | Feature | Description |
|---|---|---|
| **Build** | Automated Pipelines | Triggers Tekton pipelines on every pull request and merge, producing signed container images with attached SBOMs |
| **Test** | Integration Testing | Runs integration test scenarios…
