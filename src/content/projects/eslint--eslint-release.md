---
repo: "eslint/eslint-release"
name: "eslint-release"
description: "The ESLint release tool"
readmeQualityOk: true
url: "https://github.com/eslint/eslint-release"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 30
forks: 8
openIssues: 1
closedIssues: 22
watchers: 12
contributors: 16
recentReleases: 0
createdAt: "2016-01-20T21:03:10Z"
lastCommitAt: "2026-11-04T08:03:36Z"
lastReleaseAt: "2017-05-05T20:21:49Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded"]
healthScore: 95
undervaluedScore: 43
maintainers: ["renovate[bot]", "arpitjain099"]
openGraphImageUrl: "https://opengraph.githubassets.com/7dd3a2a6e33e9d65389cb931a8466f7785da815600ad8932e937eb30064adea8/eslint/eslint-release"
fundingLinks: ["GITHUB:https://github.com/eslint", "OPEN_COLLECTIVE:https://opencollective.com/eslint"]
---

# ESLint Release Tool

This release tool has been extracted from the [ESLint](https://github.com/eslint/eslint) project so that it can be shared among projects. While it's intended for use in ESLint organization projects, it is shared freely so others might use it as well.

Please note that while this project is shared freely, it is not intended to be a general-purpose utility. The functionality is highly specific to how ESLint projects handle releases and the project will remain very focused on this use case.

**Warning:** There are minimal tests for this project and the API is rapidly changing. Use at your own risk.

## Installation

You can install the ESLint release tool using [npm](https://npmjs.com):

```
$ npm install eslint-release --save-dev
```

## Usage

To start, you'll need to define two environment variables:

- `NPM_TOKEN` - a token to use for `npm publish`. The token must be from a user that has permission to publish the package.
- `ESLINT_GITHUB_TOKEN` - a token for a GitHub user that has `repo` permission (used for posting release notes).

The ESLint release tool is designed to be used on the command line and is divided into two phases: package generation and…
