---
repo: "davidmartinez10/bigfloat.js"
name: "bigfloat.js"
description: "A library for arbitrary precision decimal floating point arithmetic."
readmeQualityOk: true
url: "https://github.com/davidmartinez10/bigfloat.js"
homepage: "https://www.npmjs.com/package/bigfloat.js"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["floating-point", "decimal", "bigfloat", "precision", "arbitrary-precision", "bigdecimal", "arithmetic", "mathematics"]
stars: 20
forks: 1
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2019-01-31T03:50:27Z"
lastCommitAt: "2026-11-20T12:21:26Z"
lastReleaseAt: "2020-10-11T10:53:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 44
maintainers: ["davidmartinez10"]
openGraphImageUrl: "https://opengraph.githubassets.com/4f9024f830f7eb44887d80ba2948dda7b01b06ab063709ceb7958645b31175ee/davidmartinez10/bigfloat.js"
---

A library for arbitrary precision decimal floating point arithmetic that can exactly represent all decimal fractions,
unlike JavaScript's number data type which is 64-bit binary floating point.

Based on the original work by Douglas Crockford: [howjavascriptworks](https://github.com/douglascrockford/howjavascriptworks).
This implementation is built upon the Google Chrome Labs' implementation of ECMAScript big integers: JSBI.

>NOTE: This is a compatibility package intended for older engines. If you are targeting a runtime that supports native bigints and the exponentiation operator(**), then you don't need JSBI and instead you should be using [bigfloat-esnext (npm)](https://www.npmjs.com/package/bigfloat-esnext) or [bigfloat (jsr)](https://jsr.io/@davidmartinez/bigfloat).

This library provides three ways to make bigfloat operations:
  - A set of functions for a functional style approach
  - A BigFloat class with an API similar to that of Decimal.js
  - An evaluate() function that parses and resolves an expression

# Basic usage
### Functional style
```typescript
const { make, string, sqrt } = require("bigfloat.js");

string(sqrt(make("2")));               // "1.41421"
```
