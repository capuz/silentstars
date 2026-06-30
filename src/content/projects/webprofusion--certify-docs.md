---
repo: "webprofusion/certify-docs"
name: "certify-docs"
description: "Documentation Site for the Certify The Web - Certify SSL Manager app for windows"
url: "https://github.com/webprofusion/certify-docs"
homepage: "https://docs.certifytheweb.com"
language: "JavaScript"
languages: ["JavaScript", "MDX"]
languagePcts: [66, 20]
topics: ["acme-client", "letsencrypt", "https"]
stars: 5
forks: 33
openIssues: 0
closedIssues: 3
watchers: 3
contributors: 14
recentReleases: 0
createdAt: "2018-04-28T06:52:05Z"
lastCommitAt: "2026-06-30T06:51:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 94
undervaluedScore: 86
maintainers: ["webprofusion-chrisc", "Copilot", "lspiehler"]
openGraphImageUrl: "https://opengraph.githubassets.com/79817223efd6c30343a416e013e219f413fbc9df0432a7cf0a5484c206b73382/webprofusion/certify-docs"
---

# Documentation system for Certify The Web
Documentation Site for the Certify Certificate Manager.

Contributions are welcome and all content can be found in the `docs` folder. Please submit a PR.

This uses markdown syntax document files and the [Docusaurus](https://docusaurus.io) build system.

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
$ npx docusaurus build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Github Actions are configured so that commits to master are built and the gh-pages branch is updated and published automatically.
