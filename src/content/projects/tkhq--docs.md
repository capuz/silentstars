---
repo: "tkhq/docs"
name: "docs"
description: "Our public documentation site"
readmeQualityOk: true
url: "https://github.com/tkhq/docs"
homepage: "https://docs.turnkey.com"
language: "MDX"
languages: ["MDX"]
languagePcts: [98]
stars: 10
forks: 21
openIssues: 7
closedIssues: 3
watchers: 4
contributors: 65
recentReleases: 0
createdAt: "2023-07-12T19:58:22Z"
lastCommitAt: "2026-11-11T18:49:18Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 84
undervaluedScore: 77
maintainers: ["t-vila", "emostov", "am-hernandez"]
openGraphImageUrl: "https://opengraph.githubassets.com/00d8b8d45345c5b0eaf82fe85d7345fb3ea23328ccf6a3e38c317ab0611c2975/tkhq/docs"
---

# Turnkey docs

This repo hosts the documentation hosted at https://docs.turnkey.com.

## Development

### Prerequisites

To work with this documentation locally, you'll need:

- Node.js (see `.nvmrc` for the recommended version)
- npm or yarn

### Local Development

Install the [Mintlify CLI](https://www.npmjs.com/package/mintlify) to preview documentation changes locally:

```sh
# Install Mintlify CLI globally
npm i -g mintlify

# Start the local development server
mintlify dev
```

This will start a local development server where you can preview your changes in real-time.

If you encounter any issues with the development server:

- Run `mintlify install` to reinstall dependencies
- Ensure you're running the command in a folder with `docs.json` (Mintlify's configuration file)

> **Important:** If you previously worked with the Docusaurus version of this site, make sure to delete the `build` and `.docusaurus` folders before running the Mintlify docs site locally. Otherwise, you may experience style conflicts.

### Deployment

Changes to the documentation are automatically deployed when merged to the main branch through our CI/CD pipeline.

### Mintlify Dashboard

You can access…
