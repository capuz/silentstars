---
repo: "Manta-Network/docs"
name: "docs"
description: "Developer and User Documentation"
readmeQualityOk: true
url: "https://github.com/Manta-Network/docs"
homepage: "https://docs.manta.network"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [87]
stars: 12
forks: 85
openIssues: 0
closedIssues: 24
watchers: 10
contributors: 48
recentReleases: 0
createdAt: "2021-04-28T05:18:41Z"
lastCommitAt: "2026-08-10T05:06:15Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 98
undervaluedScore: 51
maintainers: ["Dengjianping"]
openGraphImageUrl: "https://opengraph.githubassets.com/7911bdd5ad048708c4b51a92cc24252a88e2924bdbd8dbb72f96c30b67db5a8a/Manta-Network/docs"
---

# Manta Network Documentations

Manta Network is the multi-modular ecosystem for zero-knowledge (ZK) applications.Content in [docs.manta.network](https://docs.manta.network). This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Translation

For the translation, we're using the [Translate plugin data](https://docusaurus.io/docs/i18n/tutorial#translate-plugin-data)  

Commands

Run the Italian version

```
yarn run start --locale it
```

Or cn
```
yarn run start --locale cn
```

Translate the markdown under…
