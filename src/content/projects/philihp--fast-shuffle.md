---
repo: "philihp/fast-shuffle"
name: "fast-shuffle"
description: "A fast, pure, side-effect-free, and deterministic implementation of Fisher-Yates Shuffle"
readmeQualityOk: true
url: "https://github.com/philihp/fast-shuffle"
homepage: "https://www.npmjs.com/package/fast-shuffle"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["shuffle", "random", "deterministic", "redux-reducers", "array-shuffle"]
stars: 26
forks: 4
openIssues: 1
closedIssues: 6
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2018-02-19T07:40:44Z"
lastCommitAt: "2026-07-11T05:55:39Z"
lastReleaseAt: "2021-02-03T03:42:57Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded"]
healthScore: 95
undervaluedScore: 64
maintainers: ["renovate[bot]", "philihp", "dynst"]
openGraphImageUrl: "https://opengraph.githubassets.com/2f388c3bd37410d95d877cd2f20b61990422c75c84ce7863fa21a452e6ec57ef/philihp/fast-shuffle"
fundingLinks: ["GITHUB:https://github.com/philihp"]
---

# Fast Shuffle

A fast, side-effect-free, and O(n) array shuffle that's safe for functional programming and use within Redux reducers.

## Usage

```
npm install --save fast-shuffle
```

```js
import { shuffle } from 'fast-shuffle'

const suits = ['♣', '♦', '♥', '♠']
const faces = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A']
const sortedDeck = suits.map((suit) => faces.map((face) => face + suit)).flat()
// [ '2♣', '3♣', '4♣', '5♣', '6♣', '7♣', '8♣', ...

const shuffledDeck = shuffle(sortedDeck)
// [ '3♥', '3♦', 'K♥', '6♦', 'J♣', '5♠', 'A♠', ...
```

The named `shuffle` export seen above uses `Math.random` for entropy. This is the easiest way to use the library, but it may be useful to create a purely functional shuffler which takes either a random seed which is used in a [PCG](https://www.pcg-random.org/) for entropy, or a function ([as seen here](https://github.com/philihp/fast-shuffle/blob/c36f6cfb27312590301446721b5ba0539baab591/src/__tests__/index.test.ts#L62-L73)).

```js
import { createShuffle } from 'fast-shuffle' // note the change

const letters = ['a', 'b', 'c', 'd', 'e']
const shuffleRed = createShuffle(12345)
shuffleRed(letters) // [ 'a', 'b', 'c',…
