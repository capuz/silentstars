---
repo: "RedHatInsights/javascript-clients"
name: "javascript-clients"
description: "Javascript clients for swagger API"
readmeQualityOk: true
url: "https://github.com/RedHatInsights/javascript-clients"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 7
forks: 37
openIssues: 5
closedIssues: 2
watchers: 14
contributors: 38
recentReleases: 0
createdAt: "2019-03-28T15:38:10Z"
lastCommitAt: "2026-09-23T08:47:04Z"
lastReleaseAt: "2019-04-17T12:35:02Z"
status: "watched"
tags: ["hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 84
undervaluedScore: 68
maintainers: ["dependabot[bot]", "charlesmulder", "red-hat-konflux[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b1c5231a0088c8d8c9ea24588faaf43431a003c861467fa81da8ab1300db12fe/RedHatInsights/javascript-clients"
---

# Javascript Clients
Auto generated Javascript clients for swagger API

### Overview
This repository is set up as a monorepo for all API clients to use one configuration and release cycle. This repo is using [NX](https://nx.dev/getting-started/intro) as its monorepo manager and [Github Actions](https://docs.github.com/en/actions) for CI/CD as well as publishing packages to NPM.

### Local development

We are using Java to install and build this generator. Please install Java and preferably Maven as well so you don't have any issues when building this new generator.

* Once you have Java and Maven installed you can install dependencies by running `npm install`

* When you have dependencies installed you can run build anytime you change something in the generator `npm run build:generator`

### Troubleshooting

#### Node and npm toolchain

The `engines` in the root `package.json` specify the minimum Node.js and npm versions supported by MintMaker's Renovate image, [`quay.io/konflux-ci/mintmaker-renovate-image`](https://quay.io/repository/konflux-ci/mintmaker-renovate-image). The development toolchain is pinned separately: `.nvmrc` contains the latest Node.js version we use, and the…
