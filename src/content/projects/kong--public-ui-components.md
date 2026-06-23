---
repo: "Kong/public-ui-components"
name: "public-ui-components"
description: "Kong open-source UI components and associated packages"
url: "https://github.com/Kong/public-ui-components"
homepage: "https://konghq.com"
language: "TypeScript"
languages: ["TypeScript", "Vue"]
languagePcts: [61, 38]
stars: 19
forks: 16
openIssues: 4
closedIssues: 0
watchers: 13
contributors: 107
recentReleases: 0
createdAt: "2023-01-12T20:20:46Z"
lastCommitAt: "2026-06-23T06:42:00Z"
lastReleaseAt: "2023-01-19T22:44:07Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 79
undervaluedScore: 60
maintainers: ["kongponents-bot", "renovate[bot]", "filipgutica"]
openGraphImageUrl: "https://opengraph.githubassets.com/5a4cad77c34d9c05ddb6f9c83b251281ca2f16e8a0ead1651da2a8fd485ac73d/Kong/public-ui-components"
---

# public-ui-components

Monorepo for **open-source** Kong UI components and utilities.

- [What goes here](#what-goes-here)
- [Creating a package](#creating-a-package)
- [Package Publishing](#package-publishing)
- [Development](#development)
  - [Requirements](#requirements)
  - [Setup](#setup)
  - [Dev Server](#dev-server)
  - [Stylelint](#stylelint)
  - [ESLint](#eslint)
  - [Type Checking](#type-checking)
  - [Testing](#testing)
  - [Preview sandbox build](#preview-sandbox-build)
  - [Build for production](#build-for-production)
  - [Committing Changes](#committing-changes)
  - [Generating type interface documentation](#generating-type-interface-documentation)
  - [Preview components](#preview-components)
  - [Running consuming application with local copy of the package](#running-consuming-application-with-local-copy-of-the-package)
- [Moving packages to the public/private repo](#moving-packages-to-the-publicprivate-repo)
- [Host App Troubleshooting](#host-app-troubleshooting)
  - [Analytics Packages are blocked by some ad-blockers](#analytics-packages-are-blocked-by-some-ad-blockers)

## What goes here

Here are some criteria to help figure out if your code belongs to this…
