---
repo: "camunda/camunda-platform-helm"
name: "camunda-platform-helm"
description: "Camunda Platform 8 Self-Managed Helm charts"
readmeQualityOk: true
url: "https://github.com/camunda/camunda-platform-helm"
homepage: "https://docs.camunda.io/docs/self-managed/about-self-managed/"
language: "Go"
languages: ["Go"]
languagePcts: [77]
topics: ["helm", "kubernetes", "charts", "camunda", "zeebe", "operate", "k8s", "openshift", "identity", "optimize"]
stars: 90
forks: 150
openIssues: 121
closedIssues: 1613
watchers: 14
contributors: 130
recentReleases: 0
createdAt: "2021-08-16T11:26:43Z"
lastCommitAt: "2026-10-25T02:07:35Z"
lastReleaseAt: "2022-04-29T11:31:12Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 98
undervaluedScore: 58
maintainers: ["bkenez", "renovate[bot]", "leiicamundi"]
openGraphImageUrl: "https://opengraph.githubassets.com/126bd4c9f1486ba16eae4f07a552786ad57d931aacb705988c1141563c05a8b8/camunda/camunda-platform-helm"
---

# Camunda 8 Helm

> [!CAUTION]
>
> This GitHub repository is mainly for development, don't use it directly to deploy Camunda. End users should use the [official documentation](https://docs.camunda.io/docs/self-managed/about-self-managed/) for [installation](https://docs.camunda.io/docs/self-managed/deployment/helm/install/), [upgrade](https://docs.camunda.io/docs/self-managed/deployment/helm/upgrade/), etc.

- [Overview](#overview)
- [Documentation](#documentation)
- [Versioning and Release Cycles](#versioning-and-release-cycles)
- [Installation](#installation)
- [Guides](#guides)
- [Issues](#issues)
- [Contributing](#contributing)
- [Releasing](#releasing)
- [License](#license)

## Overview

Camunda 8 Self-Managed Helm charts repo. Camunda 8 Helm chart is an umbrella chart
for different components. Some are internal components, and some are external (third-party).
The dependency management is fully automated and managed by Helm itself.

## Documentation

- Official docs (to install the platform via Helm chart): [Camunda 8 Self-Managed](https://docs.camunda.io/docs/self-managed/about-self-managed/).
- Internal developer docs (release process, CI workflows, contribution guidelines,…
