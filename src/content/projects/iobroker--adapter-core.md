---
repo: "ioBroker/adapter-core"
name: "adapter-core"
description: " Core module to be used in ioBroker adapters. Acts as the bridge to js-controller"
readmeQualityOk: true
url: "https://github.com/ioBroker/adapter-core"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [56, 44]
stars: 5
forks: 9
openIssues: 0
closedIssues: 52
watchers: 3
contributors: 10
recentReleases: 0
createdAt: "2018-11-15T20:56:52Z"
lastCommitAt: "2026-07-13T06:38:08Z"
lastReleaseAt: "2022-10-08T10:28:04Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 93
undervaluedScore: 73
maintainers: ["dependabot[bot]", "GermanBluefox", "foxriver76"]
openGraphImageUrl: "https://opengraph.githubassets.com/5759d39ed0880425ba30c9e99e9dbe86a945251c7b9875630eba9c630ea4724b/ioBroker/adapter-core"
---

# Adapter-Core

Core module to be used in ioBroker adapters. Acts as the bridge to js-controller.

This replaces the `utils.js` included in the ioBroker template adapter.

## Usage

1. Add this as a dependency: `npm i @iobroker/adapter-core`
2. Replace
    ```js
    const utils = require(__dirname + '/lib/utils');
    ```
    with
    ```js
    const utils = require('@iobroker/adapter-core');
    ```
3. Create an adapter instance as usual:
    ```js
    // old style
    const adapter = utils.adapter(/* options */);
    // new style (classes). See https://github.com/ioBroker/ioBroker.template/ for a more detailed usage
    class MyAdapter extends utils.Adapter {...}
    ```

## Utility methods

Compared to the old `utils.js`, some utility methods were added.

### `getAbsoluteDefaultDataDir`

```js
const dataDir = utils.getAbsoluteDefaultDataDir();
```

This returns the absolute path of the data directory for the current host. On linux, this is usually `/opt/iobroker/iobroker-data`

### `getAbsoluteInstanceDataDir`

```js
// old style
const instanceDataDir = utils.getAbsoluteInstanceDataDir(adapter);
// new style (classes)
const instanceDataDir =…
