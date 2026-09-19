---
repo: "EdgeApp/edge-currency-accountbased"
name: "edge-currency-accountbased"
description: "Currency plugins for accounts based blockchains such as Ethereum, Xrp, and EOS"
readmeQualityOk: true
url: "https://github.com/EdgeApp/edge-currency-accountbased"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 25
forks: 55
openIssues: 11
closedIssues: 4
watchers: 10
contributors: 29
recentReleases: 0
createdAt: "2018-09-19T01:10:00Z"
lastCommitAt: "2026-09-19T01:21:15Z"
lastReleaseAt: "2019-10-22T16:53:45Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 83
undervaluedScore: 61
maintainers: ["peachbits", "j0ntz"]
openGraphImageUrl: "https://opengraph.githubassets.com/001379a2c45a8dd4b538f6783911d7e6bcdc095adff30e6749c979a9fc901532/EdgeApp/edge-currency-accountbased"
---

# Edge Currency Plugin for Account-Based currencies

Plugins for [edge-core-js](https://github.com/EdgeApp/edge-core-js), handling many networks not derived from Bitcoin.

These are compatible with edge-core-js v0.21.2 or later.

## Installing

First, add this library to your project:

```sh
npm i -s edge-currency-accountbased
```

### Node.js

For Node.js, you should call `addEdgeCorePlugins` to register these plugins with edge-core-js:

```js
const { addEdgeCorePlugins, lockEdgeCorePlugins } = require('edge-core-js')
const plugins = require('edge-currency-accountbased')

addEdgeCorePlugins(plugins)

// Once you are done adding plugins, call this:
lockEdgeCorePlugins()
```

You can also add plugins individually if you want to be more picky:

```js
addEdgeCorePlugins({
  ethereum: plugins.ethereum
})
```

### Browser

The bundle located in `dist/edge-currency-accountbased.js` will automatically register itself with edge-core-js. Just serve the entire `dist` directory along with your app, and then load the script:

```html
<script src='https://example.com/app/dist/edge-currency-accountbased.js'>
```

If you want to debug this project, run `npm run start` to start a Webpack server,…
