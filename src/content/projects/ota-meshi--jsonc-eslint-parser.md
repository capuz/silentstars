---
repo: "ota-meshi/jsonc-eslint-parser"
name: "jsonc-eslint-parser"
description: "JSON, JSONC and JSON5 parser for use with ESLint plugins."
readmeQualityOk: true
url: "https://github.com/ota-meshi/jsonc-eslint-parser"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [81]
topics: ["json", "jsonc", "json5", "parser", "eslint-parser", "eslint-custom-parser"]
stars: 72
forks: 8
openIssues: 1
closedIssues: 18
watchers: 2
contributors: 9
recentReleases: 0
createdAt: "2020-08-14T01:59:07Z"
lastCommitAt: "2026-08-08T04:33:18Z"
lastReleaseAt: "2021-08-15T01:16:27Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded"]
healthScore: 84
undervaluedScore: 41
maintainers: ["renovate[bot]", "ota-meshi", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/cff0ee1906ee97a0d9d2f1389f943786b083936a4fca894e5d48e3aece2b07a1/ota-meshi/jsonc-eslint-parser"
fundingLinks: ["GITHUB:https://github.com/ota-meshi"]
---

# jsonc-eslint-parser

## :name_badge: Introduction

[JSON], [JSONC] and [JSON5] parser for use with [ESLint] plugins.

This parser allows us to lint [JSON], [JSONC] and [JSON5] files.
This parser and the rules of [eslint-plugin-jsonc] would catch some of the mistakes and code style violations.

See [eslint-plugin-jsonc] for details.

## :cd: Installation

```bash
npm i --save-dev jsonc-eslint-parser
```

## :book: Usage (Flat Config)

In your ESLint configuration file, set the `parser` property:

```js
import * as jsoncParser from "jsonc-eslint-parser";

export default [
  {
    // ...
    // Add the following settings.
    files: ["**/*.json", "**/*.json5"], // Specify the extension or pattern you want to parse as JSON.
    languageOptions: {
      parser: jsoncParser, // Set this parser.
    }
  },
];
```

## :book: Usage (Legacy Config)

In your ESLint configuration file, set the `overrides` > `parser` property:

```json5
{
  // ...
  // Add the following settings.
  "overrides": [
    {
      "files": ["*.json", "*.json5"], // Specify the extension or pattern you want to parse as JSON.
      "parser": "jsonc-eslint-parser", // Set this parser.
    },
  ],
}
```

## :gear:…
