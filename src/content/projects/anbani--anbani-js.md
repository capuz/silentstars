---
repo: "Anbani/anbani.js"
name: "anbani.js"
description: "Multifunctional javascript toolkit for Georgian Alphabet - Anbani"
readmeQualityOk: true
url: "https://github.com/Anbani/anbani.js"
homepage: "https://www.npmjs.com/package/anbani"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
topics: ["georgian", "alphabet", "anbani", "converter", "interpreter", "random", "text", "generation", "lorem", "ipsum"]
stars: 20
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2018-03-07T06:48:39Z"
lastCommitAt: "2026-07-04T22:22:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 87
undervaluedScore: 40
maintainers: ["georgegach"]
openGraphImageUrl: "https://opengraph.githubassets.com/5d10360d2479aada895dd8b5a827c5c6ef3f8dde1b9a5e6989e62e62f8b9db13/Anbani/anbani.js"
---

# Anbani

**Anbani** is a multifunctional toolkit designed for Georgian Alphabet. Main functionalities include text conversion between various Georgian alphabets via `anbani.core` and random text generation via `anbani.lorem`. 

# Installation
To install the package simple grab it from `npm`
```bash
npm install anbani
```
Initialize package in CommonJS format as follows
```javascript
const anbani = require('anbani')
```
Load the module in ESM definition like this
```javascript
import anbani from "anbani";
```
You may use it in browser via `window` global
```html
<script src="https://cdn.jsdelivr.net/npm/anbani@latest/dist/anbani.js"></script>
```
To try modern `module` definition in browsers you may include directly from source. (Notice `src` directory in URL) 
```html
<script type="module">
  import anbani from "https://cdn.jsdelivr.net/npm/anbani@latest/src/anbani.mjs";
  ...
</script>
```

# Structure
Here's the structure of the package with four main modules: `core` for conversion and interpretation of letters, `lorem` for random text generation, `data` for accessing the datasets, and `toolkit` for bonus features.

Minor features from each module are exposed in `$`, such as…
