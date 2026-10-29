---
repo: "kazupon/eslint-plugin"
name: "eslint-plugin"
description: "ESLint plugin for @kazupon"
readmeQualityOk: true
url: "https://github.com/kazupon/eslint-plugin"
homepage: "https://eslint-plugin.kazupon.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["eslint", "plugin"]
stars: 6
forks: 0
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-04-07T15:31:33Z"
lastCommitAt: "2026-10-29T21:25:03Z"
lastReleaseAt: "2025-08-03T09:19:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 65
undervaluedScore: 46
maintainers: ["renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/28156165c48c0615c88b2ce1ffc812cd72749ae1cca2a002d85d862cefbafd8d/kazupon/eslint-plugin"
---

# @kazupon/eslint-plugin

ESLint plugin for @kazupon

## 💿 Installation

```sh
# npm
npm install --save-dev @kazupon/eslint-plugin

## yarn
yarn add -D @kazupon/eslint-plugin

## pnpm
pnpm add -D @kazupon/eslint-plugin

## bum
bun add -D @kazupon/eslint-plugin
```

## 📋 Requirements

- **ESLint**: v9 or later
- **oxlint**: v1.35 or later
- **Configuration**:
  - ESLint: flat config style `eslint.config.[js|ts]`, not support legacy config style `.eslintrc`
  - oxlint: json or jsonc style like `.oxlintrc.json` or `.oxlintrc.jsonc`
- **Node.js**: v20 or later

## 🚀 Usage

### ESLint

Example `eslint.config.js`:

```js
import { defineConfig } from 'eslint/config'
import kazupon from '@kazupon/eslint-plugin'

export default defineConfig(
  ...kazupon.configs.recommended,
  {
    // ...
  }

  // ... something other configurations
)
```

### oxlint

Example [oxlint configuration file](https://oxc.rs/docs/guide/usage/linter/config.html) such as `.oxlintrc.json`:

```jsonc
{
  // ...

  "extends": ["./node_modules/@kazupon/eslint-plugin/oxlint/recommended.json"]

  // ...
}
```

## ✅ Rules

The `--fix` option on the [command…
