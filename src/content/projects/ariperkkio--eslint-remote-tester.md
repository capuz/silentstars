---
repo: "AriPerkkio/eslint-remote-tester"
name: "eslint-remote-tester"
description: "CLI tool for testing given ESlint rules against multiple repositories at once."
readmeQualityOk: true
url: "https://github.com/AriPerkkio/eslint-remote-tester"
homepage: "https://www.npmjs.com/package/eslint-remote-tester"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["eslint", "eslint-test"]
stars: 131
forks: 12
openIssues: 2
closedIssues: 102
watchers: 2
contributors: 10
recentReleases: 0
createdAt: "2020-09-03T17:14:20Z"
lastCommitAt: "2026-09-07T08:34:05Z"
lastReleaseAt: "2025-12-30T08:37:16Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 96
undervaluedScore: 33
maintainers: ["renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b4aba89d7795e8cecadca86333c60c591b54762a62d3bd10e6fd8ca2ecfbff82/AriPerkkio/eslint-remote-tester"
fundingLinks: ["GITHUB:https://github.com/AriPerkkio"]
---

# eslint-remote-tester

[Installation](#installation) | [Configuration](#configuration) | [How and when to use](#how-and-when-to-use) | [Github CI Actions](#github-ci-actions) | [Examples](#Examples)

`eslint-remote-tester` is a CLI tool for testing given [ESlint](https://github.com/eslint/eslint) rules against multiple repositories at once. It's designed to be used when validating regression of new rules. It can be used to spot whether a new rule flags false positives or crashes ESLint completely. CIs can be configured to verify regression of large set of rules so that possible null pointers or any unexpected errors are caught immediately.

</p>

## Installation

```sh
# In your project directory
$ npm install --save-dev eslint-remote-tester

# eslint@>=9 is also required as peer dependency
$ npm install --save-dev eslint
```

The underlying git integration is done via [simple-git](https://github.com/steveukx/git-js). It requires git to be installed and [that it can be called using the command `git`.](https://github.com/steveukx/git-js#dependencies)

## Configuration

### Linking your local eslint plugin as a dependency

In order for `eslint-remote-tester`'s `eslint` to know…
