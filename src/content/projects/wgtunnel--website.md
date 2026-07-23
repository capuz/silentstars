---
repo: "wgtunnel/website"
name: "website"
description: "The website for WG Tunnel."
readmeQualityOk: true
url: "https://github.com/wgtunnel/website"
homepage: "https://wgtunnel.com"
language: "TypeScript"
languages: ["TypeScript", "CSS", "MDX"]
languagePcts: [51, 25, 24]
stars: 6
forks: 8
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-04-13T21:34:01Z"
lastCommitAt: "2026-07-23T06:15:01Z"
status: "thriving"
tags: ["solo_builder", "funded", "fork_magnet"]
healthScore: 76
undervaluedScore: 67
maintainers: ["zaneschepke"]
openGraphImageUrl: "https://opengraph.githubassets.com/aaecd625b813cefe70eeb3edfaf1540fb255c67128d6f064b813aff2e18e4e1d/wgtunnel/website"
fundingLinks: ["GITHUB:https://github.com/zaneschepke", "KO_FI:https://ko-fi.com/zaneschepke", "LIBERAPAY:https://liberapay.com/zaneschepke", "CUSTOM:https://wgtunnel.com/donate/"]
---

# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
