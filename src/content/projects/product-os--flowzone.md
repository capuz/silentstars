---
repo: "product-os/flowzone"
name: "flowzone"
description: "Reusable, opinionated, zero-conf workflows for GitHub actions"
readmeQualityOk: true
url: "https://github.com/product-os/flowzone"
homepage: "https://flowzone.pages.dev"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [85]
topics: ["github-actions", "repo-manager", "flowzone"]
stars: 27
forks: 7
openIssues: 38
closedIssues: 87
watchers: 6
contributors: 33
recentReleases: 0
createdAt: "2022-07-06T15:24:10Z"
lastCommitAt: "2026-11-12T05:42:40Z"
lastReleaseAt: "2022-11-29T16:02:53Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 93
undervaluedScore: 61
maintainers: ["balena-renovate[bot]", "flowzone-app[bot]", "Page-"]
openGraphImageUrl: "https://opengraph.githubassets.com/66d3908da0f68923094ccbdec4092cc7a57b154cb51ae9d1eabcf8505e6940f7/product-os/flowzone"
---

# Flowzone

Reusable, opinionated, zero-conf workflows for GitHub actions

## Contents

- [Contents](#contents)
- [Getting Started](#getting-started)
- [Usage](#usage)
  - [Merging](#merging)
  - [Config Migrations](#config-migrations)
  - [External Contributions](#external-contributions)
  - [Commit Message](#commit-message)
    - [Skipping Workflow Runs](#skipping-workflow-runs)
- [Supported project types](#supported-project-types)
  - [npm](#npm)
  - [Docker](#docker)
  - [balena](#balena)
  - [Python (with Poetry)](#python-with-poetry)
  - [Rust](#rust)
  - [GitHub](#github)
  - [Custom](#custom)
  - [Versioning](#versioning)
  - [Docs](#docs)
  - [Website](#website)
- [Help](#help)
- [Contributing](#contributing)

## Getting Started

Open a PR with the following changes to test and enable Flowzone:

1. Create `.github/workflows/flowzone.yml` (see [Usage](#usage)) in a new Draft Pull Request to avoid changing branch protection rules.
2. Ensure your `package.json`, `docker-compose.test.yml`, `balena.yml`, etc. contain correct information and all tests are passing.
3. Mark the Pull Request as Ready for Review and re-run the checks via the Checks or Actions panel. New branch…
