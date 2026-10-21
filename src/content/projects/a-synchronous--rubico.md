---
repo: "a-synchronous/rubico"
name: "rubico"
description: "[A]synchronous Functional Programming"
readmeQualityOk: true
url: "https://github.com/a-synchronous/rubico"
homepage: "https://rubico.land"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
topics: ["function-composition", "asynchronous", "transducers", "parallel", "series", "functional-programming", "promise", "async-await", "node", "javascript"]
stars: 283
forks: 18
openIssues: 53
closedIssues: 164
watchers: 10
contributors: 4
recentReleases: 0
createdAt: "2019-11-03T09:20:01Z"
lastCommitAt: "2026-10-21T23:35:37Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero"]
healthScore: 87
undervaluedScore: 36
maintainers: ["richytong"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/219276883/0646f1a3-8be5-49f4-a44c-f00bc200c858"
discussionCount: 0
---

# [Rubico](https://rubico.land/)

> a shallow river in northeastern Italy, just south of Ravenna

Source code: [GitHub](https://github.com/a-synchronous/rubico) |
License: [CFOSS](https://cloutsworld.com/en-us/legal/license/cfoss)

## [A]synchronous Functional Programming

A program is a tree of synchronous or asynchronous functions.

A program can be a combination of programs from different paradigms.

```javascript [playground]
const { pipe, map, filter } = rubico

const isOdd = number => number % 2 == 1

const asyncSquare = async number => number ** 2

const numbers = [1, 2, 3, 4, 5]

pipe(
  numbers, 
  filter(isOdd),
  map(asyncSquare),
  console.log,
)
```

## Installation
[Core build](https://cdn.jsdelivr.net/npm/rubico/index.js) ([~8.3 kB minified and gzipped](https://cdn.jsdelivr.net/npm/rubico/dist/rubico.min.js)) [Transducer module](https://cdn.jsdelivr.net/npm/rubico/dist/Transducer.js) ([~1.7kb minified and gzipped](https://cdn.jsdelivr.net/npm/rubico/dist/Transducer.min.js))

with [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm):
```bash
npm i rubico
```

require Rubico with Node.js [CommonJS…
