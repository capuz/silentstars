---
repo: "OpenAlly/configs"
name: "configs"
description: "Mono-repository for tools configuration (ESLint, TSConfig)"
readmeQualityOk: true
url: "https://github.com/OpenAlly/configs"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["configuration", "eslint", "tsconfig"]
stars: 6
forks: 1
openIssues: 2
closedIssues: 6
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2024-07-02T21:23:56Z"
lastCommitAt: "2026-09-11T08:15:38Z"
lastReleaseAt: "2025-06-09T19:27:37Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 81
undervaluedScore: 60
maintainers: ["fraxken", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c23dc863f72cd6eb00400a7402186b7229a7a1fef845ab2081e8fae58de6e1e1/OpenAlly/configs"
---

<h1 align="center">Configurations</h1>
</p>

  Mono-repository for tools configuration (ESLint, TSConfig)
</p>

  </a>
  </a>
  </a>
</p>

## Requirements
- [Node.js](https://nodejs.org/en/) version 20 or higher
- npm v7+ for [workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces)

## Available packages

Click on one of the links to access the documentation of the package:

| name | package and link |
| --- | --- |
| config.typescript | [@openally/config.typescript](https://github.com/OpenAlly/configs/blob/HEAD/src/typescript) |
| config.eslint | [@openally/config.eslint](https://github.com/OpenAlly/configs/blob/HEAD/src/eslint) |

These packages are available in the Node Package Repository and can be easily installed with [npm](https://docs.npmjs.com/getting-started/what-is-npm) or [yarn](https://yarnpkg.com).
```bash
$ npm i @openally/config.typescript -D
# or
$ yarn add @openally/config.typescript -D
```

## Build
To install and compile all workspaces, just run the following command at the root

```bash
$ npm install
$ npm run build
```

## Test
Running test with npm workspace:

```bash
$ npm run test -w <workspace>
```

## Publishing package
Each packages has his own…
