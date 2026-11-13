---
repo: "un-ts/sh-syntax"
name: "sh-syntax"
description: "A WASM shell parser and formatter with bash support, based on `mvdan/sh`"
readmeQualityOk: true
url: "https://github.com/un-ts/sh-syntax"
homepage: "https://npmx.dev/sh-syntax"
language: "TypeScript"
languages: ["TypeScript", "Go"]
languagePcts: [61, 36]
topics: ["shell", "shell-script", "shellscript", "wasm", "go", "golang", "tinygo"]
stars: 72
forks: 8
openIssues: 7
closedIssues: 12
watchers: 0
contributors: 10
recentReleases: 0
createdAt: "2022-04-01T01:23:01Z"
lastCommitAt: "2026-11-13T10:21:06Z"
lastReleaseAt: "2022-05-11T11:35:51Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 82
undervaluedScore: 50
maintainers: ["JounQin", "github-actions[bot]", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0f60d35e211b105082e0856f589216a12f29b8a55b10fa087723bae0303f599a/un-ts/sh-syntax"
fundingLinks: ["GITHUB:https://github.com/JounQin", "GITHUB:https://github.com/1stG", "GITHUB:https://github.com/rx-ts", "GITHUB:https://github.com/un-ts", "PATREON:https://patreon.com/1stG", "OPEN_COLLECTIVE:https://opencollective.com/unts", "CUSTOM:https://opencollective.com/1stG", "CUSTOM:https://opencollective.com/rxts", "CUSTOM:https://afdian.com/a/JounQin"]
---

# sh-syntax

A WASM shell parser and formatter with bash support, based on [mvdan/sh](https://github.com/mvdan/sh)

## TOC 

- [Usage](#usage)
  - [Install](#install)
  - [API](#api)
    - [node](#node)
    - [syntax tree](#syntax-tree)
    - [source offsets](#source-offsets)
    - [browser](#browser)
    - [workerd](#workerd)
- [Benchmark](#benchmark)
- [Sponsors](#sponsors)
- [Backers](#backers)
- [Changelog](#changelog)
- [License](#license)

## Usage

### Install

```sh
# yarn
yarn add sh-syntax

# npm
npm i sh-syntax
```

### API

#### node

```js
import { init, parse, print } from 'sh-syntax'

// Optional: load and initialize the WASM runtime up front.
await init()

const text = "echo 'Hello World!'"
const ast = await parse(text)

// print() formats source text.
const formatted = await print(text)

// print(ast) prints the current tree, including edits made to its fields.
// print(ast) serializes the tree to Go and decodes it before printing. For
// large files, the originalText path below is much faster.
const printedAst = await print(ast)

// originalText still selects the source-text fast path.
const formattedSource = await print(ast, { originalText: text })
```

The…
