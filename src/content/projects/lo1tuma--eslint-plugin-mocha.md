---
repo: "lo1tuma/eslint-plugin-mocha"
name: "eslint-plugin-mocha"
description: "ESLint rules for mocha"
readmeQualityOk: true
url: "https://github.com/lo1tuma/eslint-plugin-mocha"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["eslint", "eslint-plugin", "eslintplugin", "mocha", "hacktoberfest"]
stars: 288
forks: 72
openIssues: 0
closedIssues: 161
watchers: 4
contributors: 52
recentReleases: 0
createdAt: "2014-07-27T13:18:49Z"
lastCommitAt: "2026-10-29T21:24:50Z"
lastReleaseAt: "2015-09-17T17:57:13Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 99
undervaluedScore: 40
maintainers: ["renovate[bot]", "lo1tuma"]
openGraphImageUrl: "https://opengraph.githubassets.com/914a422fcac76c046ea979874fe3e20273dfe17385d28a5785737eebebaa5101/lo1tuma/eslint-plugin-mocha"
---

# eslint-plugin-mocha

ESLint rules for [Mocha](https://mochajs.org/).

This plugin targets Mocha's current JavaScript interfaces documented for Mocha 11. It does not execute Mocha or require Mocha at runtime.

## Install

This plugin requires ESLint `10.2.0` or later.

```bash
npm install --save-dev eslint-plugin-mocha
```

## Configure

Use the plugin with ESLint's [flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new). Apply it only to Mocha test files, and adjust `files` to match your project:

```js
import mochaPlugin from 'eslint-plugin-mocha';

export default [
    {
        files: [ 'test/**/*.js' ],
        ...mochaPlugin.configs.recommended
    }
];
```

## Configs

- `mochaPlugin.configs.recommended`: Practical defaults for most projects.
- `mochaPlugin.configs.all`: Enables every rule. This config may change when new
  rules are added, so it is better suited for trying the full rule set than
  for stable long-term lint output.

```js
import mochaPlugin from 'eslint-plugin-mocha';

export default [
    {
        files: [ 'test/**/*.js' ],
        ...mochaPlugin.configs.all
    }
];
```

## Plugin settings

These settings are shared by…
