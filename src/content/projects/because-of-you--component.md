---
repo: "because-of-you/component"
name: "component"
description: "A low-footprint, dynamically scalable, easily extensible, and personalized library of common big data components for a personal Kubernetes development cluster."
originalDescription: "一个低占用、动态伸缩、易拓展、个性化。应用于个人Kubernetes开发集群的大数据常用组件库。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/because-of-you/component"
homepage: "https://component.acitrus.cn"
language: "JavaScript"
languages: ["JavaScript", "Shell"]
languagePcts: [58, 28]
topics: ["hadoop", "kafka", "zookee", "component"]
stars: 8
forks: 0
openIssues: 11
closedIssues: 18
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2022-10-24T12:02:13Z"
lastCommitAt: "2026-10-29T14:05:06Z"
lastReleaseAt: "2024-12-04T13:49:22Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 90
undervaluedScore: 74
maintainers: ["wfy-belief", "azatho", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8f21f38db17f5a38ff65c94d0da9035b4768499ebcb27a814286872297d51e65/because-of-you/component"
---

# component

`component` is a Helm Charts repository for maintaining personal Kubernetes components.

This repository manages in one place its own Charts, wrappers for third-party Charts, environment override configuration, image builds, and the OCI publishing workflow. The goal is that each component can be checked and packaged independently, and distributed via Helm OCI.

## Features

- Maintains Kubernetes components based on Helm v3
- Supports wrapping third-party Charts and maintaining their own default values
- Supports appending custom resources to third-party Charts
- Supports dev environment override configuration
- Supports local rendering and deployment via Helmfile
- Supports automatic CI execution for changed Charts
- Supports automatic publishing of the dev branch to the GHCR OCI Registry
- Supports future extension to Docker image builds and formal version release workflows

## Quick Start

Install dependencies:

```bash
make deps
```

Lint Charts:

```bash
make lint
```

Render Charts:

```bash
make template
```

Package Charts:

```bash
make package
```

## Using OCI Charts

The dev branch publishes a fixed version:

```text
0.0.0-dev
```

Using Redis as an…
