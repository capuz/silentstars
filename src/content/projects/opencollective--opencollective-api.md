---
repo: "opencollective/opencollective-api"
name: "opencollective-api"
description: "Open Collective's API. A GraphQL API powered by Sequelize and PostgreSQL."
readmeQualityOk: true
url: "https://github.com/opencollective/opencollective-api"
homepage: "https://api.opencollective.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
topics: ["opencollective", "postgres", "nodejs", "graphql"]
stars: 475
forks: 305
openIssues: 2
closedIssues: 109
watchers: 43
contributors: 97
recentReleases: 0
createdAt: "2015-05-19T05:40:22Z"
lastCommitAt: "2026-11-23T10:18:57Z"
status: "thriving"
tags: ["legacy_hero", "funded", "fork_magnet"]
healthScore: 99
undervaluedScore: 41
maintainers: ["Betree", "renovate[bot]", "znarf"]
openGraphImageUrl: "https://opengraph.githubassets.com/e312ef4d015f3383d993de914a1f1aa40b1d98048b847966fdff3a8122ab3121/opencollective/opencollective-api"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/opencollective"]
---

# Open Collective API

## Foreword

If you see a step below that could be improved (or is outdated), please update the instructions. We rarely go through this process ourselves, so your fresh pair of eyes and your recent experience with it, makes you the best candidate to improve them for other users. Thank you!

## Development

### Prerequisite

1. Make sure you have Node.js version 24.x and NPM version 11.x.

- We recommend using [nvm](https://github.com/creationix/nvm): `nvm install && nvm use`.

2. Make sure you have a PostgreSQL database available

- Check the version: 16.x or newer
- More info in our [PostgreSQL Database](https://github.com/opencollective/opencollective-api/blob/HEAD/docs/postgres.md) documentation

3. For [node-gyp](https://github.com/nodejs/node-gyp), make sure you have Python 2 available and configured as the active version.

- You can use [pyenv](https://github.com/pyenv/pyenv) to manage Python versions.

### Install

We recommend cloning the repository in a folder dedicated to `opencollective` projects.

```
git clone git@github.com:opencollective/opencollective-api.git opencollective/api
cd opencollective/api
npm install
```
