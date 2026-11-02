---
repo: "openchoreo/community-modules"
name: "community-modules"
description: "Community modules for OpenChoreo"
readmeQualityOk: true
url: "https://github.com/openchoreo/community-modules"
language: "Go"
languages: ["Go"]
languagePcts: [90]
stars: 13
forks: 37
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 25
recentReleases: 0
createdAt: "2026-02-13T06:12:07Z"
lastCommitAt: "2026-11-02T11:36:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 71
maintainers: ["dependabot[bot]", "chathuranga95", "akila-i"]
openGraphImageUrl: "https://opengraph.githubassets.com/cd795fcdb755623238f654316925b03c8fbd12c6735b40f5f86b80e8bb50dc1b/openchoreo/community-modules"
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
