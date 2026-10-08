---
repo: "apache/infrastructure-actions"
name: "infrastructure-actions"
description: "ASF GitHub Actions Repository"
readmeQualityOk: true
url: "https://github.com/apache/infrastructure-actions"
homepage: "https://infra.apache.org/"
language: "Python"
languages: ["Python"]
languagePcts: [97]
stars: 32
forks: 88
openIssues: 20
closedIssues: 82
watchers: 7
contributors: 78
recentReleases: 0
createdAt: "2024-04-18T22:43:49Z"
lastCommitAt: "2026-10-08T10:51:53Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 96
undervaluedScore: 69
maintainers: ["asfgit", "dependabot[bot]", "potiuk"]
openGraphImageUrl: "https://opengraph.githubassets.com/9efc187bdb3d5664aca140415c4d41948f6dccab2f1e2c46b5d2e5f5858a383c/apache/infrastructure-actions"
---

# ASF GitHub Actions Repository

This repository hosts GitHub Actions developed by the ASF community and approved for any ASF top level project to use. It also manages the organization wide allow list of GitHub Actions via 'Configuration as Code'.

- [Checking the Action Usage in an ASF Project](#checking-the-action-usage-in-an-asf-project)
- [Submitting an Action](#submitting-an-action)
- [Available GitHub Actions](#available-github-actions)
- [Versioning and Pinning Actions](#versioning-and-pinning-actions)
- [Organization-wide GitHub Actions Allow List](#management-of-organization-wide-github-actions-allow-list)
  - [Pipeline Overview](#pipeline-overview)
  - [Adding a New Action](#adding-a-new-action-to-the-allow-list)
  - [Reviewing](#reviewing)
  - [Updating Version of Already Approved Action](#updating-version-of-already-approved-action)
    - [Automated Verification in CI](#automated-verification-in-ci)
    - [Dependabot Update Grouping](#dependabot-update-grouping)
    - [Dependabot Cooldown Period](#dependabot-cooldown-period)
  - [Manual Version Addition](#manual-addition-of-specific-versions)
  - [Automatic Expiration of Old…
