---
repo: "nonoroazoro/eslint-config-zoro"
name: "eslint-config-zoro"
description: "ESLint Configuration with VERY STRICT RULES :anger:"
readmeQualityOk: true
url: "https://github.com/nonoroazoro/eslint-config-zoro"
homepage: "https://www.npmjs.com/package/eslint-config-zoro"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["eslint-configurations", "typescript-eslint", "react", "react-hooks"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2016-05-04T07:30:25Z"
lastCommitAt: "2026-07-16T06:00:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 68
undervaluedScore: 42
maintainers: ["nonoroazoro"]
openGraphImageUrl: "https://opengraph.githubassets.com/6cdcc243aa5202db0f083ec19c7639c872e7ed5e9f1ceea3cf8df21f44bfd908/nonoroazoro/eslint-config-zoro"
---

<h1 align="center">Zoro's ESLint Configuration</h1>
    </a>
    </a>
    </a>
</p>

## Installation

```sh
npm i -D eslint eslint-config-zoro
```

## Usage

Use `defineConfig` to generate ESLint configuration in your `eslint.config.mjs` file:

```javascript
// eslint.config.mjs
import { defineConfig } from "eslint-config-zoro";

export default defineConfig();
```

## Core Presets

The following presets are **always enabled** and cannot be opted out:

| Preset                                           | Description   |
| ------------------------------------------------ | ------------- |
| [ESLint](https://eslint.org/docs/rules)          | ESLint rules  |
| [Stylistic](https://eslint.style/rules)          | Style rules   |
| [Perfectionist](https://perfectionist.dev/rules) | Sorting rules |

## Optional Presets

Enable optional presets by passing options to `defineConfig`, see [Examples](#examples):

| Option       | Preset                                                                                                                                                     | Required Dependencies                                          |
| ------------ |…
