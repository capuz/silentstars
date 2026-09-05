---
repo: "stylelint-stylistic/stylelint-stylistic"
name: "stylelint-stylistic"
description: "A collection of stylistic rules for Stylelintin in a form of a plugin."
readmeQualityOk: true
url: "https://github.com/stylelint-stylistic/stylelint-stylistic"
homepage: "https://npmx.dev/@stylistic/stylelint-plugin"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["codeguide", "css", "csslint", "lint", "linter", "stylelint", "stylelint-plugin"]
stars: 107
forks: 9
openIssues: 61
closedIssues: 260
watchers: 1
contributors: 9
recentReleases: 0
createdAt: "2023-03-28T13:24:09Z"
lastCommitAt: "2026-09-05T07:45:32Z"
lastReleaseAt: "2023-10-13T16:05:10Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 96
undervaluedScore: 47
maintainers: ["firefoxic"]
openGraphImageUrl: "https://opengraph.githubassets.com/9a88dca20b7bb8a61c9d622242c720a647425f3396b09ac9d9bfb8900cc53c2e/stylelint-stylistic/stylelint-stylistic"
discussionCount: 3
---

# Stylelint Stylistic

An updatable collection of stylistic rules for [Stylelint](https://github.com/stylelint/stylelint) (in plugin form).

## About and purpose

[Stylelint has removed 76 rules](https://stylelint.io/migration-guide/to-16#removed-deprecated-stylistic-rules) that enforce stylistic conventions. This project brought them back to keep styles consistent with your codeguide, and it has not stopped there: the list grows with rules of its own, so it is a collection rather than a fixed set.

## Installation and usage

Add `@stylistic/stylelint-plugin` and `stylelint` itself to your project:

```shell
npm add -D stylelint @stylistic/stylelint-plugin
```

> [!IMPORTANT]
> Install a published version. A dependency named by a Git reference — `github:stylelint-stylistic/stylelint-stylistic` or a URL of a branch — does **not** work. The package publishes a built `dist/`, which the repository does not carry and nothing builds for you, so such an install either stops at your package manager's gate for build scripts or leaves a package that fails to load with `ERR_MODULE_NOT_FOUND`. If you need a fix that has not shipped yet, say so on the issue rather than reaching for the branch:…
