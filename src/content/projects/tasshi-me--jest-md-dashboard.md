---
repo: "tasshi-me/jest-md-dashboard"
name: "jest-md-dashboard"
description: "Generating a pretty Markdown dashboard for Jest"
readmeQualityOk: true
url: "https://github.com/tasshi-me/jest-md-dashboard"
homepage: "https://www.npmjs.com/package/jest-md-dashboard"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["ci", "jest", "jest-reporter", "markdown"]
stars: 8
forks: 5
openIssues: 2
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-06-21T16:49:54Z"
lastCommitAt: "2026-09-19T01:36:42Z"
lastReleaseAt: "2022-09-08T09:27:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 85
undervaluedScore: 78
maintainers: ["renovate[bot]", "tasshi-me"]
openGraphImageUrl: "https://opengraph.githubassets.com/dd3b4d197f0562cb7395a30ad79491a5fecba7df43bf867d6ca21c4684c9d45d/tasshi-me/jest-md-dashboard"
---

# jest-md-dashboard

Generating a pretty Markdown dashboard for Jest

## Table of Contents

- [Example](#Example)
- [Installation](#Installation)
- [Usage](#Usage)
- [Options](#Options)
- [Contribution](#Contribution)
- [License](#License)

## Example

See https://github.com/tasshi-me/jest-md-dashboard/issues/20

## Installation

### npm

```shell
npm install -D jest-md-dashboard
```

### yarn

```shell
yarn add -D jest-md-dashboard
```

### pnpm

```shell
pnpm add -D jest-md-dashboard
```

## Usage

Add `reporters` field in `jest.config.js`.

```js
const config = {
  reporters: ["default", "jest-md-dashboard"],
};
module.exports = config;
```

Run jest and the dashboard is generated to `test-dashboard.md`.

### With [options](#Options)

```js
const config = {
  reporters: ["default", ["jest-md-dashboard", { title: "My Dashboard" }]],
};
module.exports = config;
```

## Options

| Name               | Type     | Default             | Description                                                                                 |
| ------------------ | -------- | ------------------- | ------------------------------------------------------------------------------------------- |
|…
