---
repo: "rnmapbox/maps-docs"
name: "maps-docs"
description: "Source of documentation repository - rnmapbox.github.io"
readmeQualityOk: true
url: "https://github.com/rnmapbox/maps-docs"
language: "HTML"
languages: ["HTML", "JavaScript"]
languagePcts: [70, 24]
stars: 5
forks: 7
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 7
recentReleases: 0
createdAt: "2023-10-15T08:05:38Z"
lastCommitAt: "2026-10-28T09:57:53Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 88
undervaluedScore: 84
maintainers: ["github-actions[bot]", "mfazekas"]
openGraphImageUrl: "https://opengraph.githubassets.com/1ded0af540c4d2533f70f5dca37c7479dc2290d87652f8bab961a302e24370ed/rnmapbox/maps-docs"
---

# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Example documentation process:

1.) Each example has metadata, that metadata is extracted by 

```
npx jest __tests__/exportTestInterface.js
# writes updates  docs/examples.json

yarn detox test --configuration ios.debug --debug-synchronization 500 --loglevel trace --record-logs all --take-screenshots all e2e/docScreenshots.e2e.js
# generates screenshots.json and screenshot.pngs

```

### Docosaurus update:

1. See…
