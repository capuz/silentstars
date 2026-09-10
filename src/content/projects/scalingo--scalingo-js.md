---
repo: "Scalingo/scalingo.js"
name: "scalingo.js"
description: "Javascript package to communicate with Scalingo API"
readmeQualityOk: true
url: "https://github.com/Scalingo/scalingo.js"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [66, 34]
topics: ["scalingo", "sdk"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 60
watchers: 3
contributors: 17
recentReleases: 0
createdAt: "2019-01-15T15:17:52Z"
lastCommitAt: "2026-09-10T08:20:02Z"
lastReleaseAt: "2021-11-04T14:42:06Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 97
undervaluedScore: 77
maintainers: ["dependabot[bot]", "github-actions[bot]", "aurelien-reeves-scalingo"]
openGraphImageUrl: "https://opengraph.githubassets.com/6efbedbfe01f395b80cbc093de7f4c673071ec7c231fdef8fedc06803d377e42/Scalingo/scalingo.js"
---

# Scalingo.js

The Scalingo.js library provides convenient access to the Scalingo API. A
documentation is [available
online](https://scalingo.github.io/scalingo.js/)

Note: 0.5.0 has a few internal changes (dependencies bumps, switch to esbuild) that may result in breakages.

## Usage

The package needs to be configured with your token which is available in your Scalingo [dashboard](https://my.scalingo.com/profile).

```js
const scalingo = require('scalingo')

scalingo.clientFromToken("tk-us-...").then(function(client) {
  return client.Users.self()
}).then(function(user) {
  console.log(user)
})
```

Or using ES modules, this looks more like:

```js
import Scalingo from 'scalingo'

let client = await Scalingo.clientFromToken("tk-us-...")
let user = await client.Users.self()
console.log(user)
```

## Examples

A bunch of examples are available in the `examples` folder to show how to use
scalingo.js library. In order to execute them, you need to define the
environment variable `SCALINGO_TOKEN`. The token can be created in Scalingo
[dashboard](https://my.scalingo.com/profile). Then modify the example so that
the application name and the possible IDs match one of your application.…
