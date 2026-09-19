---
repo: "dankogai/js-xiterable"
name: "js-xiterable"
description: "Make ES6 Iterators Functional Again"
readmeQualityOk: true
url: "https://github.com/dankogai/js-xiterable"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [78, 21]
stars: 22
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2020-07-18T14:54:56Z"
lastCommitAt: "2026-09-19T01:38:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 31
maintainers: ["dankogai"]
openGraphImageUrl: "https://opengraph.githubassets.com/efd07a0728a7def679e12fe36bf4d2fef8a5f9dc634ecfd0e5a407bc8ddb4d99/dankogai/js-xiterable"
---

# js-xiterable

Make ES6 Iterators Functional Again

## Synopsis

Suppose we have a generator like this.

```javascript
function* count(n) {
    for (let i = 0; i < n; i++) yield i;
};
```

We make it more functional like this.

```javascript
import {Xiterable} from './xiterable.js';
const xcount = n => new Xiterable(() => count(n));
const tens = xcount(10);
const odds = tens.filter(v=>v%2).map(v=>v*v);
const zips = tens.zip(odds);
[...tens];  // [ 0,      1,      2,       3,       4, 5, 6, 7, 8, 9]
[...odds];  // [ 1,      9,     25,      49,      81]
[...zips];  // [[0, 1], [1, 9], [2, 25], [3, 49], [4, 81]]
```

In other words, this module make any iterables work like `Array`, with `.map`, `.filter` and so on.

### Install

```shell
npm install js-xiterable
```

### Usage

locally

```javascript
import {
  Xiterable,
  xiterable, zip, zipWith, xrange, repeat
} from './xiterable.js';
```

You don't even have to install if you `import` from CDNs.

```javascript
import {Xiterable} from 'https://cdn.jsdelivr.net/npm/js-xiterable@0.3.0/xiterable.min.js';
```

Or plain old `<script>` tags — the UMD version `umd/xiterable.js` makes `Xiterable` globally available.

```html
<script…
