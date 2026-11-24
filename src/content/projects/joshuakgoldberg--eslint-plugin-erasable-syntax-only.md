---
repo: "JoshuaKGoldberg/eslint-plugin-erasable-syntax-only"
name: "eslint-plugin-erasable-syntax-only"
description: "ESLint plugin to granularly enforce TypeScript's erasableSyntaxOnly flag. ❎"
readmeQualityOk: true
url: "https://github.com/JoshuaKGoldberg/eslint-plugin-erasable-syntax-only"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 54
forks: 4
openIssues: 2
closedIssues: 20
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2025-02-15T14:41:30Z"
lastCommitAt: "2026-11-24T02:00:04Z"
lastReleaseAt: "2026-08-19T00:59:48Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 52
maintainers: ["renovate[bot]", "JoshuaKGoldberg"]
openGraphImageUrl: "https://opengraph.githubassets.com/ec58f3d756ab11df66ae0eaabdfa8d1998522c011a5dd25bfb8e7e21a8b117fb/JoshuaKGoldberg/eslint-plugin-erasable-syntax-only"
---

ESLint plugin to granularly enforce TypeScript's <a href="https://devblogs.microsoft.com/typescript/announcing-typescript-5-8-rc/#the---erasablesyntaxonly-option"><code>erasableSyntaxOnly</code></a> flag.
	❎

	
	

	

## Usage

Add this plugin to the list of plugins in your [ESLint configuration file](https://eslint.org/docs/latest/use/configure/configuration-files):

```shell
npm i eslint-plugin-erasable-syntax-only -D
```

```ts
import eslint from "@eslint/js";
import erasableSyntaxOnly from "eslint-plugin-erasable-syntax-only";
import { defineConfig } from "eslint/config";

export default defineConfig(
	eslint.configs.recommended,
	tseslint.configs.recommended,
	erasableSyntaxOnly.configs.recommended, // 👈
);
```

### Rules

These are all set to `"error"` in the recommended config:

💡 Manually fixable by [editor suggestions](https://eslint.org/docs/latest/use/core-concepts#rule-suggestions).
