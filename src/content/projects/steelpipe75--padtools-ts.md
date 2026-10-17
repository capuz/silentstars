---
repo: "steelpipe75/padtools_ts"
name: "padtools_ts"
description: "Simple tool to write PAD. (TypeScript version)"
originalDescription: "Simple tool to write PAD. (TypeScript版)"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/steelpipe75/padtools_ts"
homepage: "https://steelpipe75.github.io/padtools_ts/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [86]
topics: ["pad", "simple", "writer"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 61
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-07-25T12:22:52Z"
lastCommitAt: "2026-10-17T07:59:52Z"
lastReleaseAt: "2026-05-20T10:44:20Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 81
maintainers: ["steelpipe75", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/29cd23bf7f53dcf5808cd5bcc905d678f2c0274f109081acdaf40e4bb5815043/steelpipe75/padtools_ts"
---

# padtools_ts

padtools_ts is a PAD creation tool built to make use of PAD diagrams. It aims to let you write without interrupting your train of thought.

---

This project is a TypeScript rewrite of padtools (https://github.com/knaou/padtools).

## Try it now

You can start creating PAD diagrams right away in your browser, with no installation required.

*   **[Open Web version (Cloudflare Pages)](https://padtools-ts.pages.dev/)** : Always reflects the latest state of the `main` branch.
*   **[Open Web version (GitHub Pages)](https://steelpipe75.github.io/padtools_ts/)** : Reflects the release version (stable).

## Installation

### Installing dependencies

To install the dependencies needed for project development locally, run the following command.

```shell
npm install
```

## Testing

To run the project's tests, run the following command.

```shell
npm test
```

Tests are run using Jest and SWC (`@swc/jest`). SWC handles the TypeScript transformation.

## Test coverage

To generate a test coverage report, run the following command.

```shell
npm run test:cov
```

## CLI usage

`padtools_ts` provides a CLI tool that converts SPD files to SVG.

```shell
npx padtools_ts -i…
