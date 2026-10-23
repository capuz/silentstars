---
repo: "remcohaszing/css-modules-content-mapper"
name: "css-modules-content-mapper"
description: "TypeScript content mapper for CSS modules"
readmeQualityOk: true
url: "https://github.com/remcohaszing/css-modules-content-mapper"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [52, 42]
topics: ["content-mapper", "css", "css-modules", "typescipt"]
stars: 33
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 3
createdAt: "2026-09-06T08:56:29Z"
lastCommitAt: "2026-10-23T08:43:12Z"
lastReleaseAt: "2026-09-11T08:36:36Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 84
undervaluedScore: 27
maintainers: ["remcohaszing"]
openGraphImageUrl: "https://opengraph.githubassets.com/fd68cc7cb8d69192967b1205fbc0fe6552a235d556bca9c14317d11008dcfdf7/remcohaszing/css-modules-content-mapper"
fundingLinks: ["GITHUB:https://github.com/remcohaszing"]
---

# css-modules-content-mapper

A [TypeScript](https://www.typescriptlang.org) content mapper for
[CSS modules](https://github.com/css-modules/css-modules).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Editor support](#editor-support)
- [Options](#options)
- [CSS syntax](#css-syntax)
- [Compatibility](#compatibility)
- [Security](#security)
- [License](#license)

## Installation

```sh
npm install css-modules-content-mapper
```

## Usage

In your `tsconfig.json`, add `css-modules-content-mapper` to the `contentMappers` array.

```jsonc
{
  "compilerOptions": {
    // …
  },
  "contentMappers": [
    {
      "package": "css-modules-content-mapper",
      "extensions": [".module.css"],
      "options": {
        // Optional options…
      }
    }
  ]
}
```

Now run `tsc` with the `--runExternalCode` flag.

```sh
tsc --runExternalCode
```

If your code uses undefined CSS module classes, this will show an error.

## Editor support

In addition to type checking, this content mapper also provides useful editor integrations. This
project uses [`postcss-safe-parser`](https://github.com/postcss/postcss-safe-parser), a
fault-tolerant CSS parser. That means it…
