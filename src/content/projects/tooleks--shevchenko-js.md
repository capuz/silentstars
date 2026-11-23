---
repo: "tooleks/shevchenko-js"
name: "shevchenko-js"
description: "JavaScript library for declension of Ukrainian anthroponyms"
readmeQualityOk: true
url: "https://github.com/tooleks/shevchenko-js"
homepage: "https://shevchenko-js.tooleks.com/"
language: "TypeScript"
languages: ["TypeScript", "Vue"]
languagePcts: [48, 45]
topics: ["ukrainian", "ukrainian-language", "declension", "anthroponym-declension", "family-name-declension", "first-name-declension", "given-name-declension", "patronymic-declension", "patronymic-name-declension", "personal-name-declension"]
stars: 128
forks: 16
openIssues: 1
closedIssues: 25
watchers: 5
contributors: 5
recentReleases: 0
createdAt: "2017-08-04T17:41:41Z"
lastCommitAt: "2026-11-23T10:15:53Z"
lastReleaseAt: "2024-06-02T11:59:54Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 99
undervaluedScore: 47
maintainers: ["tooleks", "BenkiNew", "SerhiiMarkov"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/99366545/76dfe080-8748-11ea-9622-6960aae0813d"
---

# shevchenko.js

JavaScript library for declension of Ukrainian anthroponyms.

## Links

* [Try it out](https://shevchenko-js.tooleks.com/en-US/) / [Демонстрація](https://shevchenko-js.tooleks.com)
* [API Specification](https://shevchenko-js.tooleks.com/api-spec/)
* [Source Code](https://github.com/tooleks/shevchenko-js)
* [License](https://github.com/tooleks/shevchenko-js/blob/main/LICENSE)
* [Migration Guide (v2 → v3)](https://github.com/tooleks/shevchenko-js/wiki/Migration-Guide)

## Extensions

* [Military extension](https://github.com/tooleks/shevchenko-ext-military) - declension of Ukrainian military ranks and appointments

## User Guide

### Installation

Install the library with [npm](https://docs.npmjs.com):

```bash
npm install shevchenko
```

### Import

The library is available as a CommonJS module, an ECMAScript module, and a minified UMD bundle.

#### CommonJS

```JavaScript
const shevchenko = require('shevchenko');
```

#### ECMAScript module

```JavaScript
import * as shevchenko from 'shevchenko';
```

#### UMD

Load the bundle with a script tag. It exposes the library as the global `shevchenko` variable.
