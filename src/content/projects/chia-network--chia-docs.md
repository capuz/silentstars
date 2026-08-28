---
repo: "Chia-Network/chia-docs"
name: "chia-docs"
description: "Chia Docs - documentation on the Chia blockchain, protocol and client"
readmeQualityOk: true
url: "https://github.com/Chia-Network/chia-docs"
homepage: "https://docs.chia.net/"
language: "JavaScript"
languages: ["JavaScript", "CSS"]
languagePcts: [62, 26]
topics: ["blockchain", "consensus-protocol", "documentation", "proof-of-space-time"]
stars: 22
forks: 69
openIssues: 3
closedIssues: 55
watchers: 27
contributors: 93
recentReleases: 0
createdAt: "2021-07-30T11:25:02Z"
lastCommitAt: "2026-08-28T14:19:03Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 97
undervaluedScore: 67
maintainers: ["BrandtH22", "dependabot[bot]", "danieljperry"]
openGraphImageUrl: "https://opengraph.githubassets.com/0b45dac09705de275f98f59ec0f45ecff69f938e4b7e2d0c35a0ef927fd429ee/Chia-Network/chia-docs"
---

This is the website for Chia Docs, the source of truth for Chia documentation.

## Localization (Translation)

If you would like to contribute localization translations, please visit our [Crowdin](https://chia.crowdin.com/chia-docs) and sign up to be a contributor.

## Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator, and deployed with Github Pages.

### Installation

```
$ npm install
```

### Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Serve

```
$ npm run serve
```

This command serves the static content in the `build` directory.

### Commands run in github CI

These are the commands being run in the github CI, run them all locally in this order to ensure there are no issues building and serving the content prior to submitting a pr:

```
$ npm install
$ npm ci
$ npx prettier . --write
$ npm run build
$ npm run…
