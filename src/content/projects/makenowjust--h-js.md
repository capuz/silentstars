---
repo: "makenowjust/h.js"
name: "h.js"
description: "2KB JavaScript Syntax Highlighter"
readmeQualityOk: true
url: "https://github.com/makenowjust/h.js"
homepage: "https://h.js.org/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [79]
topics: ["javascript", "syntax-highlighting", "minimal"]
stars: 39
forks: 5
openIssues: 1
closedIssues: 5
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2015-10-17T08:28:54Z"
lastCommitAt: "2026-09-19T01:16:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 95
undervaluedScore: 56
maintainers: ["renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0da4fddbdf0a146c94c3d2c78cd36b8fc46d439cd9d4a186487c62d6aac05d6a/makenowjust/h.js"
---

# h.js

> **2KB** JavaScript Syntax Highlighter

## Features

- Small. The size is only 2.0KB or 1.4KB if gzipped.
- Dependency free. It needs no other libraries.
- It supports [ES2022][] syntax.

[es2022]: https://www.ecma-international.org/publications-and-standards/standards/ecma-262/

## Install

NPM:

```console
$ npm install h.js
```

Yarn:

```console
$ yarn add h.js
```

## Usage

```javascript
const h = require("h.js");

console.log(h("1 + 2"));
// => <span class=v>1</span> <span class=o>+</span> <span class=v>2</span>
```

### API

```javascript
/**
 * `h` highlights JavaScript source code.
 *
 * @param {string} source - JavaScript source code
 * @return {string} - highlighted HTML string
 */
const h = source => ...
```

It returns an HTML string which contains some `<span>` elements having such classes:

- `<span class=c>...</span>`: comment
- `<span class=d>...</span>`: JSDoc tag (only in comment)
- `<span class=k>...</span>`: keyword
- `<span class=v>...</span>`: value (number literal, boolean and some constants)
- `<span class=s>...</span>`: string literal (also means a template string)
- `<span class=i>...</span>`: interpolation content (only in template string)
-…
