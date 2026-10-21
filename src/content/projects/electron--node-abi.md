---
repo: "electron/node-abi"
name: "node-abi"
description: ":turtle: :rocket: Get the Node.js and Electron ABI for a given target and runtime"
readmeQualityOk: true
url: "https://github.com/electron/node-abi"
homepage: "https://www.npmjs.com/node-abi"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 182
forks: 65
openIssues: 1
closedIssues: 57
watchers: 7
contributors: 47
recentReleases: 0
createdAt: "2016-12-02T23:51:20Z"
lastCommitAt: "2026-10-21T17:31:07Z"
lastReleaseAt: "2018-11-01T23:48:14Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 89
undervaluedScore: 35
maintainers: ["electron-node-abi-updater[bot]", "dependabot[bot]", "claude[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b48f8abbea78aa60e093e72f85cfefa01a3a571531d2b7fb0f5e6b6e01edeaed/electron/node-abi"
---

# Node.js ABI

Get the Node ABI (application binary interface) for a given target and runtime, and vice versa.

## Installation

```shell
npm install node-abi
```

## Usage

```javascript
const nodeAbi = require('node-abi')

nodeAbi.getAbi('7.2.0', 'node')
// '51'
nodeAbi.getAbi('1.4.10', 'electron')
// '50'
nodeAbi.getTarget('51', 'node')
// '7.2.0'
nodeAbi.getTarget('50', 'electron')
// '1.4.15'

nodeAbi.allTargets
// [
//  { runtime: 'node', target: '0.10.48', abi: '11', lts: false },
//  { runtime: 'node', target: '0.12.17', abi: '14', lts: false },
//  { runtime: 'node', target: '4.6.1', abi: '46', lts: true },
//  { runtime: 'node', target: '5.12.0', abi: '47', lts: false },
//  { runtime: 'node', target: '6.9.4', abi: '48', lts: true },
//  { runtime: 'node', target: '7.4.0', abi: '51', lts: false },
//  { runtime: 'electron', target: '1.0.2', abi: '47', lts: false },
//  { runtime: 'electron', target: '1.2.8', abi: '48', lts: false },
//  { runtime: 'electron', target: '1.3.13', abi: '49', lts: false },
//  { runtime: 'electron', target: '1.4.15', abi: '50', lts: false }
// ]
nodeAbi.deprecatedTargets
nodeAbi.supportedTargets
nodeAbi.additionalTargets
nodeAbi.futureTargets…
