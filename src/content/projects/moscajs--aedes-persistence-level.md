---
repo: "moscajs/aedes-persistence-level"
name: "aedes-persistence-level"
description: "LevelDB persistence for Aedes"
readmeQualityOk: true
url: "https://github.com/moscajs/aedes-persistence-level"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 6
forks: 7
openIssues: 0
closedIssues: 13
watchers: 9
contributors: 7
recentReleases: 0
createdAt: "2015-12-31T13:05:07Z"
lastCommitAt: "2026-09-16T08:48:36Z"
lastReleaseAt: "2018-08-23T21:45:33Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded", "fork_magnet"]
healthScore: 100
undervaluedScore: 52
maintainers: ["robertsLando"]
openGraphImageUrl: "https://opengraph.githubassets.com/85e04a00d5bda9177d1b83fa7bf5745ae22d818ed5fd8ecac794828a9957c522/moscajs/aedes-persistence-level"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/aedes"]
---

# aedes-persistence-level

[Aedes][aedes] [persistence][persistence], backed by [levelup][levelup].

See [aedes-persistence][persistence] for the full API, and [Aedes][aedes] for usage.

## Install

```
npm i aedes aedes-persistence-level level --save
```

## API

### aedesPersistencelevel(db)

Creates a new instance of aedes-persistence-level.
The first parameter is an instance of [levelup][levelup].

Example:

```js
const { Level } = require('level') // Level >= 9.0.0 is required 
const aedesPersistencelevel = require('aedes-persistence-level')

// instantiate a persistence instance
aedesPersistencelevel(new Level('./mydb'))
```

## License

MIT

[aedes]: https://github.com/mcollina/aedes
[persistence]: https://github.com/mcollina/aedes-persistence
[levelup]: http://npm.im/levelup
