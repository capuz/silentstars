---
repo: "ota-meshi/eslint-plugin-yml"
name: "eslint-plugin-yml"
description: "This ESLint plugin provides linting rules for YAML."
readmeQualityOk: true
url: "https://github.com/ota-meshi/eslint-plugin-yml"
homepage: "https://ota-meshi.github.io/eslint-plugin-yml/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["eslint-plugin", "yaml", "eslintplugin"]
stars: 184
forks: 23
openIssues: 11
closedIssues: 59
watchers: 5
contributors: 19
recentReleases: 0
createdAt: "2020-07-30T03:56:36Z"
lastCommitAt: "2026-08-01T06:16:26Z"
lastReleaseAt: "2021-03-09T09:17:52Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "funded"]
healthScore: 94
undervaluedScore: 43
maintainers: ["renovate[bot]", "ota-meshi", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/fa44f1295d955d8c049d7030e8aa546e7ba08a23da92d37c13244e106807978e/ota-meshi/eslint-plugin-yml"
fundingLinks: ["GITHUB:https://github.com/ota-meshi"]
---

# Introduction

[eslint-plugin-yml](https://www.npmjs.com/package/eslint-plugin-yml) is ESLint plugin provides linting rules for [YAML].

## :name_badge: Features

This ESLint plugin provides linting rules for [YAML].

- You can use ESLint to lint [YAML].
- You can find out the problem with your [YAML] files.
- You can apply consistent code styles to your [YAML] files.
- Supports [Vue SFC](https://vue-loader.vuejs.org/spec.html) custom blocks such as `<i18n lang="yaml">`.  
  Requirements `vue-eslint-parser` v7.3.0 and above.
- Supports ESLint directives. e.g. `# eslint-disable-next-line`
- You can check your code in real-time using the ESLint editor integrations.

You can check on the [Online DEMO](https://ota-meshi.github.io/eslint-plugin-yml/playground/).

## :question: How is it different from other YAML plugins?

### Plugins that do not use AST

e.g. [eslint-plugin-yaml](https://www.npmjs.com/package/eslint-plugin-yaml)

These plugins use the processor to parse and return the results independently, without providing the ESLint engine with AST and source code text.

Plugins don't provide AST, so you can't use directive comments (e.g. `# eslint-disable`).  
Plugins don't…
