---
repo: "kenany/primality"
name: "primality"
description: "A JavaScript library for prime numbers."
readmeQualityOk: true
url: "https://github.com/kenany/primality"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 9
forks: 1
openIssues: 5
closedIssues: 15
watchers: 1
contributors: 2
recentReleases: 2
createdAt: "2012-11-03T00:45:27Z"
lastCommitAt: "2026-11-02T15:17:53Z"
lastReleaseAt: "2026-08-09T14:10:27Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 93
undervaluedScore: 76
maintainers: ["renovate[bot]", "kenany"]
openGraphImageUrl: "https://opengraph.githubassets.com/402f1646cb6cb357150320aca3b35fe6b0fa5d2771ba9d62807c834f98c1cf16/kenany/primality"
---

# primality.js

Primality is a JavaScript library for prime numbers. It features a fantastic
[primality test](https://en.wikipedia.org/wiki/Primality_test) and
identification of the various
[classes](https://en.wikipedia.org/wiki/Template:Prime_number_classes) of prime
numbers.

## Features

  - Check the primality of a number
  - Works with numbers disguised as strings
  - Also does arrays
  - Provides checks for the following classes of prime numbers:
    - [twin](https://en.wikipedia.org/wiki/Twin_prime)
    - [cousin](https://en.wikipedia.org/wiki/Cousin_prime)
    - [sexy](https://en.wikipedia.org/wiki/Sexy_prime)
    - [Wilson](https://en.wikipedia.org/wiki/Wilson_prime)
  - About 1 kibibyte minified and gzipped
  - ESM support

## Installation

``` bash
$ npm install primality
```

## Usage

Primality's flagship method is `primality()`, which works as you might expect it
to:

``` javascript
import { primality } from 'primality';

primality(7);
// => true

primality(6);
// => false
```

Of course, you can pass strings instead of numbers if you'd like:

``` javascript
primality('13');
// => true
```

Primality can even do arrays. If any of the values in an array are not…
