---
repo: "CARTAvis/carta-frontend"
name: "carta-frontend"
description: "Source code repository for the frontend component of CARTA, a new visualization tool designed for the ALMA, the VLA and the SKA pathfinders."
readmeQualityOk: true
url: "https://github.com/CARTAvis/carta-frontend"
homepage: "https://cartavis.github.io/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
stars: 19
forks: 15
openIssues: 190
closedIssues: 1232
watchers: 10
contributors: 23
recentReleases: 0
createdAt: "2018-04-27T13:30:48Z"
lastCommitAt: "2026-07-29T06:13:28Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 95
undervaluedScore: 71
maintainers: ["dependabot[bot]", "loveluthien", "izkgao"]
openGraphImageUrl: "https://opengraph.githubassets.com/4c5f55081b6f17f74d6cc4ca0b03edeb1be387e09a696f386c3d2280467200c2/CARTAvis/carta-frontend"
---

# CARTA Frontend
The CARTA frontend is used in conjunction with the [CARTA backend](https://github.com/CARTAvis/carta-backend), and for general use a pre-built production frontend is usually installed alongside the backend automatically. However, a user may wish to install the frontend component separately in order to test beta versions, for example, or to develop it.

## Pre-built production packages
The simplest way to install the frontend component is to use the pre-built production packages from NPM (for any OS with Node.js installed), our PPA (Debian packages for Ubuntu), or our RPM repository (for RHEL based systems).

### NPM

Pre-built production frontends can be obtained from the [npmjs.com carta-frontend repository](https://www.npmjs.com/package/carta-frontend?activeTab=explore).

If you have Node.js and `npm` already installed on your system, you can install a production frontend using the following command:

```
npm i carta-frontend
```
The files will be installed to your `node-modules` directory. For a system-wide 'global' installation (using the `-g` flag) this is located at `/usr/lib/node_modules`, whereas for a local user installation, it is located at…
