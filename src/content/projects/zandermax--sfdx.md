---
repo: "zandermax/sfdx"
name: "sfdx"
description: "A node module used to interact with Salesforce DX commands, hopefully in a more intuitive way than with the DX CLI itself."
readmeQualityOk: true
url: "https://github.com/zandermax/sfdx"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["salesforce", "salesforcedx", "nodejs", "cli"]
stars: 10
forks: 6
openIssues: 6
closedIssues: 2
watchers: 1
contributors: 4
recentReleases: 2
createdAt: "2018-01-03T21:10:43Z"
lastCommitAt: "2026-08-28T14:23:17Z"
lastReleaseAt: "2026-08-28T14:23:31Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 85
undervaluedScore: 48
maintainers: ["zandermax", "semantic-release-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/946c317d09555eb9feba2f85d69a9337c2f8da479cb9b67f4c3be237cc365c67/zandermax/sfdx"
discussionCount: 1
---

# sfdx

[npm-downloads-url]: https://www.npmjs.com/package/sfdx
[npm-downloads-image]: https://img.shields.io/npm/dt/sfdx.svg
[npm-version-url]: https://www.npmjs.com/package/sfdx
[npm-version-image]: https://img.shields.io/npm/v/sfdx.svg

sfdx is a node module used to interact with Salesforce DX commands, hopefully in a more intuitive way than with the DX CLI itself. sfdx is meant to take some of the nuances of using Salesforce DX and make common operations easier.

## Help / Documentation

- [Node command API reference here](https://github.com/zandermax/sfdx/blob/master/docs/api.md).
- [Configuration values reference here](https://github.com/zandermax/sfdx/blob/master/docs/config.md).

## Installation

Make sure you have the [Salesforce DX CLI](https://developer.salesforce.com/tools/sfdxcli) installed first! This module will let you know if you don't, but it will leave it up to you to actually install it.

```bash
npm i sfdx --save
```

## Examples

(Sample project [here](https://github.com/zandermax/sfdx-example).)

Here is a function that one might use to spin up an org and push code into it:

```javascript
const sfdx = require('sfdx')

// options - all options to use for the…
