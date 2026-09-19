---
repo: "jan-molak/npm-failsafe"
name: "npm-failsafe"
description: "Executes a sequence of npm scripts and returns the correct exit code should any of them fail."
readmeQualityOk: true
url: "https://github.com/jan-molak/npm-failsafe"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 11
forks: 5
openIssues: 2
closedIssues: 5
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2016-08-14T14:48:05Z"
lastCommitAt: "2026-09-19T02:48:22Z"
lastReleaseAt: "2023-10-11T21:11:58Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 92
undervaluedScore: 65
maintainers: ["renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0903275da2bd34cd6778b7737d75f884394b90cf669c7d49cc1e2cb94e918b93/jan-molak/npm-failsafe"
fundingLinks: ["GITHUB:https://github.com/jan-molak", "TIDELIFT:https://tidelift.com/funding/github/npm/npm-failsafe"]
---

# NPM Failsafe

[actions-image]: https://github.com/jan-molak/npm-failsafe/workflows/Main/badge.svg
[actions-url]: https://github.com/jan-molak/npm-failsafe/actions
[npm-stats-image]: https://img.shields.io/npm/dm/npm-failsafe.svg?style=flat
[npm-stats-url]: https://npm-stat.com/charts.html?package=npm-failsafe
[npm-version-image]: https://badge.fury.io/js/npm-failsafe.svg
[npm-version-url]: https://badge.fury.io/js/npm-failsafe

The `npm-failsafe` lets you execute a sequence of NPM scripts and return the correct exit code
should any of them fail.

## Installation

```
npm install --save-dev npm-failsafe
```

## Usage

Failsafe is a command line tool. To view the available options, run the following command in your terminal:
```
npx failsafe --help
```

## Configuration

You can use `failsafe` to run scripts defined in your `package.json` file.

### Configuring Failsafe in `package.json`

If your scripts require any arguments, those can be specified upfront in your `package.json` file.

For example, given the below `package.json` file:

```json
{
    "scripts": {
        "test": "jest",
        "test:coverage": "npm run test -- --coverage",
        "lint": "eslint 'src/*'",…
