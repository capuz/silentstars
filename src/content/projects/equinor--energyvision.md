---
repo: "equinor/energyvision"
name: "energyvision"
description: "Home of the equinor.com website"
readmeQualityOk: true
url: "https://github.com/equinor/energyvision"
homepage: "https://www.equinor.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
stars: 6
forks: 2
openIssues: 76
closedIssues: 2512
watchers: 0
contributors: 23
recentReleases: 0
createdAt: "2019-11-26T06:41:58Z"
lastCommitAt: "2026-10-14T08:58:17Z"
lastReleaseAt: "2022-02-09T22:19:33Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "community_hub"]
healthScore: 98
undervaluedScore: 88
maintainers: ["BorghildSelle", "padms", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0a1d7cbb80bf4568123185ea55d81e3b2f9861a7de1e1fe885d681ea33874bc0/equinor/energyvision"
discussionCount: 229
---

# EnergyVision

This is the main repository for the [equinor.com website](https://www.equinor.com). This version of the website is built using the [Sanity content platform](https://www.sanity.io/) as headless CMS and [Next.js](https://nextjs.org/) for the web frontend.

The project is licensed under the [MIT license](https://github.com/equinor/energyvision/blob/main/LICENSE) following [the open source strategy of Equinor](https://opensource.equinor.com) and integrates elements from the [Equinor Design System](https://eds.equinor.com).

## Getting started

This project uses [pnpm](https://pnpm.io) as main package manager. You can install pnpm using npm as shown below, or use one of the [alternative installation methods](https://pnpm.io/installation).

```bash
# Install pnpm
npm i -g pnpm

# Install all project dependencies
pnpm setup-project
```

For compatibility reasons, the Sanity Studio uses the Yarn package manager, and the search indexer uses npm. The `pnpm setup-project` script will automatically install the dependencies for the Studio as well as the workspace packages listed in `pnpm-workspace.yaml`. See the [section on package managers](#package-managers) for more…
