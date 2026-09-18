---
repo: "openchoreo/community-modules"
name: "community-modules"
description: "Community modules for OpenChoreo"
readmeQualityOk: true
url: "https://github.com/openchoreo/community-modules"
language: "Go"
languages: ["Go"]
languagePcts: [94]
stars: 12
forks: 32
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 23
recentReleases: 0
createdAt: "2026-02-13T06:12:07Z"
lastCommitAt: "2026-09-18T14:02:55Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 92
undervaluedScore: 62
maintainers: ["dependabot[bot]", "mevan-karu", "nilushancosta"]
openGraphImageUrl: "https://opengraph.githubassets.com/1075fdb7fe5c82d948af69a9f81f40b415b77fdcd6560e0eb28fe5457f1bcbd4/openchoreo/community-modules"
---

# OpenChoreo Community Modules

Community modules are pluggable integrations that extend [OpenChoreo](https://openchoreo.dev/) platform capabilities. They allow operators to customize and enhance areas such as API gateways, CI workflows, observability, and GitOps, without being locked into a single tool stack.

## Prerequisites

- An installed and running [OpenChoreo](https://openchoreo.dev/) instance.

## Getting Started

Browse the available modules in the [OpenChoreo Ecosystem](https://openchoreo.dev/ecosystem/) and follow the installation instructions for each module.

For a deeper understanding of how modules work and how to add a new OpenChoreo module, see the [modules overview](https://openchoreo.dev/docs/platform-engineer-guide/modules/overview/) documentation.

Some modules bundle upstream Helm charts, listed under a **Dependencies** section in their README. Override any of their values with `--set <chart-name>.<value>=...` or by nesting them under `<chart-name>:` in your values file.

## Releases

Each module publishes its container image(s) to `ghcr.io/openchoreo/<image-name>` and its Helm chart to `oci://ghcr.io/openchoreo/helm-charts`. Releases are **author-driven**:…
