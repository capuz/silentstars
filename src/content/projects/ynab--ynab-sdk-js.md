---
repo: "ynab/ynab-sdk-js"
name: "ynab-sdk-js"
description: "Official JavaScript client for the YNAB API"
readmeQualityOk: true
url: "https://github.com/ynab/ynab-sdk-js"
homepage: "https://api.ynab.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["api", "nodejs", "typescript", "rest-api", "ynab", "ynab-api", "budgeting", "finance"]
stars: 240
forks: 25
openIssues: 0
closedIssues: 50
watchers: 4
contributors: 26
recentReleases: 0
createdAt: "2017-11-16T13:55:16Z"
lastCommitAt: "2026-11-05T14:07:01Z"
lastReleaseAt: "2018-03-16T19:32:51Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 98
undervaluedScore: 42
maintainers: ["dependabot[bot]", "bradymholt", "sgrammargs"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c0ad85187eba40bffacfbfa9ecc89908d59fa860bd6b0f1b5ef8d6944388028/ynab/ynab-sdk-js"
---

# YNAB API JavaScript Library

Please read the [YNAB API documentation](https://api.ynab.com) for an overview of using the API and a complete list of available resources.

This client is generated using the [OpenAPI Generator](https://openapi-generator.tech/).

## Installation

First, install the module with npm:

```shell
npm install ynab
```

Then, depending upon your usage context, add a reference to it:

### CommonJS / Node

```
const ynab = require("ynab");
```

Requires Node 22 or later.

### ESM / TypeScript

```
import * as ynab from "ynab";
```

### Browser

The API supports [Cross Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) for asynchronous browser requests from any origin.

The `dist/browser/ynab.js` file (located in node_modules/ynab after installation) is specifically built to run in a browser / window context and exports `ynab` variable to global namespace. No other dependencies are needed.

```
<script src="ynab.js" async></script>
...
<script>
  // This assignment is not necessary but demonstrates that
  // once the library is loaded, the global 'ynab' object will be available.
  var ynab = window.ynab;
</script>
```…
