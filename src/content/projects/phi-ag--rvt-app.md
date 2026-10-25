---
repo: "phi-ag/rvt-app"
name: "rvt-app"
description: "Display Revit file information in the browser"
readmeQualityOk: true
url: "https://github.com/phi-ag/rvt-app"
homepage: "https://rvt.app"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [52, 27]
topics: ["revit"]
stars: 32
forks: 5
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-11-03T05:02:16Z"
lastCommitAt: "2026-10-25T08:40:42Z"
lastReleaseAt: "2024-11-17T19:07:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 59
maintainers: ["renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/85a19ed75a9bdcc57454edbb511ea89ada5c7e57bc65c0013ff91061dd8ff287/phi-ag/rvt-app"
discussionCount: 0
---

# rvt.app

rvt-app displays the basic [Revit](https://www.autodesk.com/products/revit) `RVT` or `RFA` file information contained in `BasicFileInfo` in the browser using TypeScript. 

You can try it out by simply dropping an `RVT` BIM file into the [rvt.app](https://rvt.app/) web site.

## Development

Install [fnm](https://github.com/Schniz/fnm?tab=readme-ov-file#installation) or [nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating) ([nvm-windows](https://github.com/coreybutler/nvm-windows?tab=readme-ov-file#installation--upgrades))

Install `Node.js`

    fnm use

Install `pnpm`

    corepack enable
    corepack prepare --activate

Install packages

    pnpm i

Watch

    pnpm dev

Test

    pnpm test
    pnpm test:dev

End-to-End tests

    pnpm playwright install chromium
    pnpm test:e2e --project=chromium
    pnpm test:e2e:dev --project=chromium

Deploy

    pnpm build
    pnpm run deploy
    pnpm run deploy:production

Stream logs

    pnpm tail
    pnpm tail:production

List deployments

    pnpm wrangler pages deployment list

## Setup

### Cloudflare API token

Create a personal API token for Terraform with the following permissions

- Account /…
