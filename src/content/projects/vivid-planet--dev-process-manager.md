---
repo: "vivid-planet/dev-process-manager"
name: "dev-process-manager"
description: "dev-process-manager is a Node.js process manager for local development environments that need multiple processes."
readmeQualityOk: true
url: "https://github.com/vivid-planet/dev-process-manager"
homepage: "https://dev-process-manager.com/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["development-environment", "development-tools", "nodejs", "npm", "process-manager"]
stars: 9
forks: 0
openIssues: 1
closedIssues: 0
watchers: 3
contributors: 8
recentReleases: 0
createdAt: "2022-02-04T13:36:58Z"
lastCommitAt: "2026-08-03T06:43:12Z"
lastReleaseAt: "2024-11-21T11:31:33Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 72
undervaluedScore: 54
maintainers: ["renovate[bot]", "nsams", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/d79820dc9c8147630680de2a91858dd9305ef8b99783f85ce079bd6237fb511f/vivid-planet/dev-process-manager"
---

# dev-process-manager

dev-process-manager is a Node.js process manager for local development environments that need multiple processes. It can be easily integrated into existing Node.js projects.

## Installation

```console
$ npm install dev-process-manager
```

Recommended Alias:
```console
alias dpm="npm exec -- dev-pm"
```

## Usage

Add `dev-pm.config.ts` file to the project root.
This file defines all available scripts, which should be started by dev-process-manager.

### dev-pm.config.ts

```typescript
import { defineConfig } from 'dev-process-manager';

export default defineConfig({
    scripts: [
        {
             name: "api",
             script: "npm run start",
             alias: "backend", //to access the script using an alternative name in all commands
             group: ["foo", "bar"], //to access a group of scripts in all commands using @groupname
             waitOn: [
                "packages/foo/lib/index.d.ts", //wait until package is built
                "tcp:5432"  //wait until database is started (tcp:$POSTGRESQL_PORT is also supported)
             ]
        },
        ...
    ],
});

```

(Other supported file types are 'ts', 'mts', 'cts', 'js',…
