---
repo: "alexandrainst/node-red-contrib-mock-cli"
name: "node-red-contrib-mock-cli"
description: "A Node.js module to allow running Node-RED nodes from command-line"
readmeQualityOk: true
url: "https://github.com/alexandrainst/node-red-contrib-mock-cli"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [92]
topics: ["node-red", "node-red-contrib", "cli"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2019-12-02T13:06:43Z"
lastCommitAt: "2026-10-01T10:24:08Z"
lastReleaseAt: "2020-08-05T11:55:42Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 81
undervaluedScore: 44
maintainers: ["dependabot[bot]", "Alkarex"]
openGraphImageUrl: "https://opengraph.githubassets.com/c1bc9378317a23422764368de01d2930669a722f39fb0f75c47ed60083cdb465/alexandrainst/node-red-contrib-mock-cli"
---

# node-red-contrib-mock-cli

This is a [Node.js](https://nodejs.org) module to allow running **a single** [Node-RED](https://nodered.org) node from command-line, and pipe one to another, using a similar flow than what would be done in the Node-RED graphical interface.

Originally made in December 2019 by [Alexandre Alapetite](https://alexandra.dk/alexandre.alapetite) at the [Alexandra Institute](https://alexandra.dk) for the [SynchroniCity European project](https://synchronicity-iot.eu).

License: [MIT](https://github.com/alexandrainst/node-red-contrib-mock-cli/blob/HEAD/LICENSE.md)

See examples of use in [*node-red-contrib-json-multi-schema*](https://github.com/alexandrainst/node-red-contrib-json-multi-schema),
[*node-red-contrib-chunks-to-lines*](https://github.com/alexandrainst/node-red-contrib-chunks-to-lines), [*node-red-http-basic-auth*](https://github.com/alexandrainst/node-red-http-basic-auth).

## Usage

Add an entry file `index.js` (or another name) to your Node-RED node, next to a `package.json` that contains a structure like `{ "node-red": {"node-type": "node-type.js"} }`:

```js
const RED = require('node-red-contrib-mock-cli');
const noderedNode =…
