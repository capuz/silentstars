---
repo: "mmomtchev/pymport"
name: "pymport"
description: "Use Python libraries from Node.js"
readmeQualityOk: true
url: "https://github.com/mmomtchev/pymport"
language: "C++"
languages: ["C++", "TypeScript"]
languagePcts: [47, 35]
topics: ["import", "nodejs", "numpy", "pandas", "python", "require", "compatibility-layer"]
stars: 132
forks: 9
openIssues: 19
closedIssues: 38
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2022-10-17T20:12:47Z"
lastCommitAt: "2026-10-13T10:57:01Z"
lastReleaseAt: "2022-11-07T16:43:42Z"
status: "thriving"
tags: ["funded"]
healthScore: 79
undervaluedScore: 33
maintainers: ["dependabot[bot]", "mmomtchev"]
openGraphImageUrl: "https://opengraph.githubassets.com/dbf7d71c26297580b7d6d89f341d7e7eb65941e137dc98add7d2d3c6d47742a2/mmomtchev/pymport"
fundingLinks: ["GITHUB:https://github.com/mmomtchev"]
---

# pymport

Use Python libraries from Node.js

**Update: since Oct 24 2024 I am homeless and living in my van. I lost access to most of my computer hardware. The eviction from my home has been timed for maximum effect as I was not present when it happened. Please, if you use my software, consider asking everyone around you if they are taking part in this extortion and why.**

# Quickstart

Install `pymport`:
```shell
npm i pymport
```

Install `numpy`, `pandas` or whatever your favorite Python package is:
```shell
npx pympip3 install numpy
```

Start using from Node.js:
```js
const { pymport, proxify } = require('pymport');
const np = proxify(pymport('numpy'));

const a = np.arange(15).reshape(3, 5);
const b = np.ones([2, 3], { dtype: np.int16 });
```

or

```js
import { pymport, proxify } from 'pymport';
const np = proxify(pymport('numpy'));

const a = np.arange(15).reshape(3, 5);
const b = np.ones([2, 3], { dtype: np.int16 });
```

Then head to the [wiki](https://github.com/mmomtchev/pymport/wiki) for the full documentation.

Or go for the quickstart by learning from the [examples](https://github.com/mmomtchev/pymport/tree/main/examples).

There is also a [medium…
