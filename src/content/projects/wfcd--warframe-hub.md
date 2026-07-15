---
repo: "WFCD/warframe-hub"
name: "warframe-hub"
description: ":blue_book: Warframe hub strives to be the community center of the Warframe game"
readmeQualityOk: true
url: "https://github.com/WFCD/warframe-hub"
homepage: "https://hub.warframestat.us"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [81]
topics: ["warframe-hub", "warframe-community"]
stars: 97
forks: 30
openIssues: 1
closedIssues: 222
watchers: 4
contributors: 39
recentReleases: 0
createdAt: "2017-10-18T15:36:09Z"
lastCommitAt: "2026-07-15T05:54:42Z"
lastReleaseAt: "2021-08-01T20:14:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 97
undervaluedScore: 52
maintainers: ["dependabot[bot]", "semantic-release-bot", "TobiTenno"]
openGraphImageUrl: "https://opengraph.githubassets.com/7ac2aa6a7ffd81f105dc7f5e16339cd71379abcb6bf437b930f8c7e48ee2ed76/WFCD/warframe-hub"
discussionCount: 0
---

# Warframe Hub

## Prerequisite

In order to run your own version of Warframe Hub, you are required to have the following on your machine:

- [Node.js 24 LTS (Krypton)](https://nodejs.org/en/) (see `.nvmrc`)
- npm (ships with Node.js)

## Dependencies

Most software related dependencies should be managed by NPM, and will be automatically installed when you try to run the project. We'll cover those dependencies in the following section.

Warframe Hub also relies on the availability of the internet, as it will parse the Warframe WorldState. It uses a slightly easier to parse WorldState provided by [Warframe Stat.us](https://docs.warframestat.us/), [API](https://api.warframestat.us).

## Installation

Clone or download and unpack this repository. Install the dependencies using NPM

```bash
$ npm i
```

If everything goes well, it should tell you the number of packages it has installed. Then you can try to run it and hope everything goes well.

```bash
$ npm run build
$ npm start
```

The website will be available for viewing at http://localhost:8742

## Development

See **[REPO_LAYOUT.md](https://github.com/WFCD/warframe-hub/blob/HEAD/REPO_LAYOUT.md)** for what lives where.

Stack:…
