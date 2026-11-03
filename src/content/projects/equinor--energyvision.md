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
openIssues: 72
closedIssues: 2538
watchers: 0
contributors: 23
recentReleases: 0
createdAt: "2019-11-26T06:41:58Z"
lastCommitAt: "2026-11-03T11:14:49Z"
lastReleaseAt: "2022-02-09T22:19:33Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "community_hub"]
healthScore: 98
undervaluedScore: 88
maintainers: ["BorghildSelle", "padms", "equinorpiyush"]
openGraphImageUrl: "https://opengraph.githubassets.com/5ac3f710dbcafe7792811807703319537ce47cf7be467deb64a463c8c1610f48/equinor/energyvision"
discussionCount: 232
---

# EnergyVision

This is the main repository for the [equinor.com website](https://www.equinor.com). This version of the website is built using the [Sanity content platform](https://www.sanity.io/) as headless CMS and [Next.js](https://nextjs.org/) for the web frontend.

The project is licensed under the [MIT license](https://github.com/equinor/energyvision/blob/main/LICENSE) following [the open source strategy of Equinor](https://opensource.equinor.com) and integrates elements from the [Equinor Design System](https://eds.equinor.com).

## Getting started

This project uses [pnpm](https://pnpm.io) as main package manager. You can install pnpm using npm as shown below, or use one of the [alternative installation methods](https://pnpm.io/installation).

Use Node.js 24.22.1 for development and builds. With nvm installed, run `nvm install` and `nvm use` to select the version in `.nvmrc`.

Verify the actual runtime with `node --version` on each host and CI runner, and `docker run --rm <image> node --version` for each container image. The web and Studio deployment actions log both runner and built-image versions, and their containers log the runtime version at startup.

```bash
# Install…
