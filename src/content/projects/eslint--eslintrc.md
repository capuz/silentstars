---
repo: "eslint/eslintrc"
name: "eslintrc"
description: "The legacy ESLintRC config file format for ESLint"
readmeQualityOk: true
url: "https://github.com/eslint/eslintrc"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 179
forks: 56
openIssues: 0
closedIssues: 68
watchers: 10
contributors: 36
recentReleases: 0
createdAt: "2020-08-20T18:44:53Z"
lastCommitAt: "2026-09-09T08:19:03Z"
lastReleaseAt: "2021-05-08T00:25:33Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 95
undervaluedScore: 41
maintainers: ["lumirlumir", "eslintbot", "jayshahcodes"]
openGraphImageUrl: "https://opengraph.githubassets.com/a627df4e11fe4ca30d42000c5044551f1b552da39a515f9eb0cb73bc7e929c4f/eslint/eslintrc"
fundingLinks: ["GITHUB:https://github.com/eslint", "OPEN_COLLECTIVE:https://opencollective.com/eslint", "TIDELIFT:https://tidelift.com/funding/github/npm/eslint"]
---

# ESLintRC Library

This repository contains the legacy ESLintRC configuration file format for ESLint. This package is not intended for use outside of the ESLint ecosystem. It is ESLint-specific and not intended for use in other programs.

**Note:** This package is frozen except for critical bug fixes as ESLint moves to a new config system.

## Installation

You can install the package as follows:

```shell
npm install @eslint/eslintrc -D
# or
yarn add @eslint/eslintrc -D
# or
pnpm install @eslint/eslintrc -D
# or
bun install @eslint/eslintrc -D
```

## Usage (ESM)

The primary class in this package is `FlatCompat`, which is a utility to translate ESLintRC-style configs into flat configs. Here's how you use it inside of your `eslint.config.js` file:

```js
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import path from "path";
import { fileURLToPath } from "url";

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,                  // optional; default: process.cwd()…
