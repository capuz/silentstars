---
repo: "silverwind/oui-data"
name: "oui-data"
description: "IEEE OUI database as JSON"
readmeQualityOk: true
url: "https://github.com/silverwind/oui-data"
language: "TypeScript"
languages: ["TypeScript", "Makefile"]
languagePcts: [77, 23]
stars: 21
forks: 3
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 9
createdAt: "2023-10-05T22:53:48Z"
lastCommitAt: "2026-10-23T09:33:21Z"
lastReleaseAt: "2026-08-19T05:06:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 72
maintainers: ["github-actions[bot]", "silverwind"]
openGraphImageUrl: "https://opengraph.githubassets.com/9c6d3aa3f635592f142934a05d52292fbe12d619bc7ecbbfa126aa753d167686/silverwind/oui-data"
---

# oui-data

> IEEE OUI database as JSON

## Usage

```sh
pnpm add oui-data
```

The module exports a JSON file. Depending on your environment you may need to use [import attributes](https://github.com/tc39/proposal-import-attributes), [import assertions](https://nodejs.org/api/esm.html#import-assertions) or [nothing at all](https://bun.sh/guides/runtime/import-json).

Keys cover all three IEEE registries, MA-L with 6 hex chars, MA-M with 7 and MA-S with 9. MA-M and MA-S are subdivisions of MA-L prefixes assigned to `IEEE Registration Authority`, so match the longest prefix first:

```js
import ouiData from "oui-data" with {type: "json"};

const mac = "C85CE27ABCDE";
console.log(ouiData[mac.substring(0, 9)] ?? ouiData[mac.substring(0, 7)] ?? ouiData[mac.substring(0, 6)]);
//=> SYNERGY SYSTEMS AND SOLUTIONS
//=> A1526, GREEN FIELDS COLONY
//=> Faridabad HARYANA 121001
//=> India
```

© [silverwind](https://github.com/silverwind), distributed under BSD licence
