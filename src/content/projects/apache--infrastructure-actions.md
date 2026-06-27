---
repo: "apache/infrastructure-actions"
name: "infrastructure-actions"
description: "ASF GitHub Actions Repository"
url: "https://github.com/apache/infrastructure-actions"
homepage: "https://infra.apache.org/"
language: "Python"
languages: ["Python"]
languagePcts: [97]
stars: 28
forks: 75
openIssues: 20
closedIssues: 71
watchers: 9
contributors: 78
recentReleases: 0
createdAt: "2024-04-18T22:43:49Z"
lastCommitAt: "2026-06-27T00:36:15Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 95
undervaluedScore: 69
maintainers: ["dependabot[bot]", "asfgit", "potiuk"]
openGraphImageUrl: "https://opengraph.githubassets.com/8fe6968d27cd600db830c93ed45a56344243a0b169a8cb30c97bc35a1900112c/apache/infrastructure-actions"
---

# ASF GitHub Actions Repository

This repository hosts GitHub Actions developed by the ASF community and approved for any ASF top level project to use. It also manages the organization wide allow list of GitHub Actions via 'Configuration as Code'.

- [Checking the Action Usage in an ASF Project](#checking-the-action-usage-in-an-asf-project)
- [Submitting an Action](#submitting-an-action)
- [Available GitHub Actions](#available-github-actions)
- [Organization-wide GitHub Actions Allow List](#management-of-organization-wide-github-actions-allow-list)
  - [Pipeline Overview](#pipeline-overview)
  - [Adding a New Action](#adding-a-new-action-to-the-allow-list)
  - [Reviewing](#reviewing)
  - [Updating Version of Already Approved Action](#updating-version-of-already-approved-action)
    - [Automated Verification in CI](#automated-verification-in-ci)
    - [Dependabot Cooldown Period](#dependabot-cooldown-period)
  - [Manual Version Addition](#manual-addition-of-specific-versions)
  - [Automatic Expiration of Old Versions](#automatic-expiration-of-old-versions)
  - [Removing a Version](#removing-a-version-manually)
- [Auditing Repositories for Actions Security…
