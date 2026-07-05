---
repo: "ravendb/docs"
name: "docs"
description: "Docs for RavenDB"
readmeQualityOk: true
url: "https://github.com/ravendb/docs"
homepage: "https://ravendb.net"
language: "MDX"
languages: ["MDX"]
languagePcts: [99]
stars: 115
forks: 146
openIssues: 0
closedIssues: 0
watchers: 17
contributors: 40
recentReleases: 0
createdAt: "2010-10-04T19:12:52Z"
lastCommitAt: "2026-07-05T20:59:05Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 89
undervaluedScore: 51
maintainers: ["ppekrol", "Danielle9897", "Netzach-Nyss"]
openGraphImageUrl: "https://opengraph.githubassets.com/da198b9f150bd4c5df15b87eaf3a02a0e8404c0d214b3c48ce691e1a9f4af10d/ravendb/docs"
---

# RavenDB Documentation

This documentation is built using [Docusaurus](https://docusaurus.io/), an open-source modern static website generator.

## Cloning the repository

To clone the repository and checkout the `main` branch:

```bash
git clone https://github.com/ravendb/docs.git
cd docs
git checkout main
```

## Contributing

1. Open the markdown file you want to change, commit the changes, and create a pull request.  
2. Describe the changes made in the commits and pull request description.

## Installation

```bash
npm ci
```

## Local development

```bash
npm run start
```

This command starts a local development server and opens up a browser window.  
Most changes are reflected live without having to restart the server (hot reload).

To run **only selected versions** (to shorten build time):  
* Install `cross-env` if not already installed:
  ```bash
  npm install -g cross-env
  ```
* Run:
  ```bash
  cross-env DOCUSAURUS_VERSIONS="7.0,7.1,current" npm run start
  ```

## Build

```bash
docusaurus build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

Note it may be necessary to increase…
