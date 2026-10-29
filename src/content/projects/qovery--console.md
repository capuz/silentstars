---
repo: "Qovery/console"
name: "console"
description: "Qovery Web Console ⚡️"
readmeQualityOk: true
url: "https://github.com/Qovery/console"
homepage: "https://start.qovery.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["react", "ui", "cypress", "storybook", "hacktoberfest"]
stars: 227
forks: 32
openIssues: 0
closedIssues: 4
watchers: 2
contributors: 30
recentReleases: 0
createdAt: "2022-02-04T08:50:11Z"
lastCommitAt: "2026-10-29T10:36:50Z"
lastReleaseAt: "2022-12-12T10:50:59Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 43
maintainers: ["RemiBonnet", "pggb25", "Astach"]
openGraphImageUrl: "https://opengraph.githubassets.com/e631e7e1d6c9df87183adbcf66487d80e8ff502fa30750c202f6702c81a3136d/Qovery/console"
---

## Development stack

The Console is a TypeScript and React application in an Nx monorepo. It uses Vite for development and builds, TanStack Router for file-based routing, TanStack Query (React Query) for server state, and Tailwind CSS with Radix UI for the interface. Shared UI components are developed in Storybook; Jest and Playwright cover unit and end-to-end tests.

See [package.json](https://github.com/Qovery/console/blob/HEAD/package.json) for the versions and available scripts.

## Getting started

Use Node.js 24 LTS and the bundled Yarn Berry release. With nvm:

```sh
nvm install
nvm use
```

First use

```sh
yarn && yarn setup
```

Start the project on [localhost:4200](http://localhost:4200)

```sh
yarn start
```

## Development commands

Run commands from the repository root.

| Command                | Purpose                                              |
| ---------------------- | ---------------------------------------------------- |
| `yarn start`           | Start the Console at `http://localhost:4200`         |
| `yarn storybook`       | Start shared UI Storybook at `http://localhost:4400` |
| `yarn build:console`   | Build the Console into `dist/apps/console`…
