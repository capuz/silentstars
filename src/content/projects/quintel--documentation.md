---
repo: "quintel/documentation"
name: "documentation"
description: "Documentation for the Energytransitionmodel."
readmeQualityOk: true
url: "https://github.com/quintel/documentation"
homepage: "https://docs.energytransitionmodel.com"
language: "JavaScript"
languages: ["JavaScript", "CSS"]
languagePcts: [69, 31]
topics: ["documentation", "energytransition", "etm"]
stars: 7
forks: 6
openIssues: 35
closedIssues: 54
watchers: 13
contributors: 33
recentReleases: 0
createdAt: "2013-01-07T15:34:17Z"
lastCommitAt: "2026-10-23T08:47:29Z"
status: "thriving"
tags: ["legacy_hero", "community_watch", "fork_magnet"]
healthScore: 86
undervaluedScore: 60
maintainers: ["dependabot[bot]", "mabijkerk", "kndehaan"]
openGraphImageUrl: "https://opengraph.githubassets.com/87f7f6053548b1ee14bcb421ba394cd7375549848a38c34e6f81286ed3f0982f/quintel/documentation"
---

# ETM Documentation

This repository contains the source for the [ETM Docs website](https://docs.energytransitionmodel.com). It's built using Docusaurus 2; please see [Installation](#installation) for instructions on getting up-and-running.

## Adding documentation

Please see [the published documentation](https://docs.energytransitionmodel.com/contrib/authoring-docs) for details on how to add, change, and remove documents ([in-repo link](https://github.com/quintel/documentation/blob/docusaurus/docs/contrib/authoring-docs.md)).

## Installation

If you wish to preview the site locally, you should [start by installing Yarn](https://yarnpkg.com/getting-started/install). Then running `yarn` will install the dependencies.

```
$ yarn
```

### Local Development

```
$ yarn start   # use -p <port> to change default port
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

#### Testing search locally

The site **search**…
