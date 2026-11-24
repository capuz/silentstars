---
repo: "JoshuaKGoldberg/prettier-plugin-curly"
name: "prettier-plugin-curly"
description: "Prettier plugin to enforce consistent brace style for all control statements. 🥌"
readmeQualityOk: true
url: "https://github.com/JoshuaKGoldberg/prettier-plugin-curly"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [70, 30]
topics: ["curly", "formatting", "prettier", "prettier-plugin"]
stars: 72
forks: 5
openIssues: 2
closedIssues: 23
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2023-06-11T13:52:48Z"
lastCommitAt: "2026-11-24T01:59:37Z"
lastReleaseAt: "2024-07-17T03:05:08Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 98
undervaluedScore: 50
maintainers: ["renovate[bot]", "JoshuaKGoldberg", "lishaduck"]
openGraphImageUrl: "https://opengraph.githubassets.com/4ace35baba6276ec55229f064204328b5b4323eafd21be3fd3609d3d56d97cf8/JoshuaKGoldberg/prettier-plugin-curly"
fundingLinks: ["GITHUB:https://github.com/JoshuaKGoldberg"]
---

Prettier plugin to enforce consistent brace style for all control statements.
	🥌

## Usage

First install this package as a dev dependency in your package manager of choice:

```shell
npm i prettier-plugin-curly -D
```

You'll then be able to list it as a [Prettier plugin](https://prettier.io/docs/en/plugins.html) in your [Prettier config](https://prettier.io/docs/en/configuration.html):

```json
{
	"plugins": ["prettier-plugin-curly"]
}
```

As a result, Prettier will add `{}` curly brackets to control flow statements such as `for`, `if`, and `while`:

```diff
- if (abc) def;
+ if (abc) {
+   def;
+ }
```

### Oxc

The `oxc` and `oxc-ts` parsers require Prettier 3.7.0 or later.
To use [Prettier's Oxc plugin](https://github.com/prettier/prettier/tree/main/packages/plugin-oxc), install `@prettier/plugin-oxc` alongside this plugin and list `prettier-plugin-curly` after it:

```json
{
	"plugins": ["@prettier/plugin-oxc", "prettier-plugin-curly"]
}
```
