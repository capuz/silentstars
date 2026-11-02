---
repo: "mcarvin8/sf-decomposer"
name: "sf-decomposer"
description: "Decompose Salesforce metadata into granular, VCS-friendly files; recompose for deployment."
readmeQualityOk: true
url: "https://github.com/mcarvin8/sf-decomposer"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 24
forks: 3
openIssues: 0
closedIssues: 10
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2024-01-25T22:23:19Z"
lastCommitAt: "2026-11-02T17:56:56Z"
lastReleaseAt: "2024-02-11T23:18:15Z"
status: "thriving"
tags: ["funded"]
healthScore: 98
undervaluedScore: 64
maintainers: ["mcarvin8", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/675e21b2468b01f5109934502b7b77e65bff903a1ac88ec356567f9958aaf1d7/mcarvin8/sf-decomposer"
fundingLinks: ["GITHUB:https://github.com/mcarvin8"]
---

# sf-decomposer

**Decomposes** large Salesforce metadata XML files into smaller, version-control–friendly files (XML, JSON, YAML, JSON5), and **recomposes** them back into deployment-ready metadata — as a Salesforce CLI plugin, or as a GitHub Action that needs neither the CLI nor a plugin install.

- Using the Salesforce CLI? Start at [Setup](#setup).
- Running this in CI without the CLI? Skip straight to [GitHub Action](#github-action).

- [Setup](#setup)
  - [1. Requirements](#1-requirements)
  - [2. Install the Plugin](#2-install-the-plugin)
  - [3. Configure .forceignore](#3-configure-forceignore)
  - [4. Configure Hooks](#4-configure-hooks-recommended)
- [Daily Workflow](#daily-workflow)
- [Commands](#commands)
- [GitHub Action](#github-action)
- [Reference](#reference)
  - [Decompose Strategies](#decompose-strategies)
  - [Supported Metadata](#supported-metadata)
  - [Manifest-scoped Runs](#manifest-scoped-runs)
  - [Per-Type & Per-Component Overrides](https://github.com/mcarvin8/sf-decomposer/blob/HEAD/CONFIGURATION.md)
  - [Ignore Files](#ignore-files)
  - [Using with sfdx-git-delta](#using-with-sfdx-git-delta)
  - [Troubleshooting](#troubleshooting)
- [Built…
