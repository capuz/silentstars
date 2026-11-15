---
repo: "jet2jet/resedit-js"
name: "resedit-js"
description: "JS library editing Windows Resource data"
readmeQualityOk: true
url: "https://github.com/jet2jet/resedit-js"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [85]
topics: ["nodejs", "windows", "resource", "pe-executable", "authenticode", "winres"]
stars: 54
forks: 4
openIssues: 0
closedIssues: 20
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2018-12-09T08:00:16Z"
lastCommitAt: "2026-11-15T11:20:29Z"
lastReleaseAt: "2021-02-10T12:47:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 92
undervaluedScore: 47
maintainers: ["jet2jet", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/dc016966497fa15b5eab1bf876cf482bad31b34732df06111a0004b6a3ad2673/jet2jet/resedit-js"
fundingLinks: ["GITHUB:https://github.com/jet2jet"]
---

# resedit-js

resedit-js is a library that manipulates resouces contained by Windows Executable files. All implementations are written in JavaScript (TypeScript), without using any native binaries. resedit-js works in both Node.js environment and Web environment (with bundlers).

This library is not tested well for modifying and/or signing executables yet. Please be careful with the emitted binaries.

> [!WARNING]  
> This library treats raw binary data for executables.
> Specifying untrusted data (such as unchecked user inputs) may increase security risks.

To use from command line, [resedit-js-cli](https://www.npmjs.com/package/resedit-cli) is suitable.

The demo page: [resedit demo](https://www.pg-fl.jp/program/resedit/index.en.htm)

- [Install](#install)
- [Usage](#usage)
- [Supported formats](#supported-formats)
- [Parsing signed executables](#parsing-signed-executables)
- [Signing executables with resedit-js](#signing-executables-with-resedit-js)
- [Notes](#notes)
- [Examples](#examples)
- [License](#license)

## Install

```
npm install resedit
```

## Usage

- For detailed code using `ResEdit` namespace, see [Examples](#examples).
- For more APIs, please see `dist`…
