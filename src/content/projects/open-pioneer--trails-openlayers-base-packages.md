---
repo: "open-pioneer/trails-openlayers-base-packages"
name: "trails-openlayers-base-packages"
description: "Common OpenLayers packages for the Open Pioneer Trails client framework."
readmeQualityOk: true
url: "https://github.com/open-pioneer/trails-openlayers-base-packages"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["chakra-ui", "geo", "gis", "javascript", "maps", "open-pioneer", "openlayers", "react", "typescript", "webgis"]
stars: 13
forks: 10
openIssues: 50
closedIssues: 238
watchers: 6
contributors: 28
recentReleases: 0
createdAt: "2023-05-05T12:45:51Z"
lastCommitAt: "2026-10-30T10:22:55Z"
lastReleaseAt: "2023-06-08T08:43:31Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 95
undervaluedScore: 73
maintainers: ["mbeckem", "renovate[bot]", "antoniave"]
openGraphImageUrl: "https://opengraph.githubassets.com/7f2c3d984bb03cc607557a5de7a1e93a9646c8abd0c1127524280bc76ed9d2a3/open-pioneer/trails-openlayers-base-packages"
---

# OpenLayers Base Packages

This repository is intended to manage various base packages for building applications based on [OpenLayers](https://openlayers.org/).

- Samples: [latest](https://open-pioneer.github.io/trails-demo/openlayers-base-packages/latest) | [dev](https://open-pioneer.github.io/trails-demo/openlayers-base-packages/dev)
- API Documentation: [latest](https://open-pioneer.github.io/trails-demo/openlayers-base-packages/latest/docs) | [dev](https://open-pioneer.github.io/trails-demo/openlayers-base-packages/dev/docs)
- [User manual](https://github.com/open-pioneer/trails-starter/tree/main/docs)

## Getting started

Requirements: Node >= 24, pnpm >= 10.

To start the development server, run:

```bash
$ pnpm install # initially and always after changing package dependencies
$ pnpm dev     # starts dev server
  VITE ready in ...

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

To run tests:

```bash
# all tests (watch mode)
$ pnpm test
# only run tests for a certain package (or file)
$ pnpm test <PATH_TO_PACKAGE>
# run once, as in CI
$ pnpm test run
```

For more details, consult the starter project's [Repository…
