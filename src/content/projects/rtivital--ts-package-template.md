---
repo: "rtivital/ts-package-template"
name: "ts-package-template"
description: "A template to create npm packages with TypeScript"
readmeQualityOk: true
url: "https://github.com/rtivital/ts-package-template"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [77, 23]
topics: ["typescript", "boilerplate", "template"]
stars: 61
forks: 10
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2023-10-27T08:45:47Z"
lastCommitAt: "2026-09-06T08:03:19Z"
lastReleaseAt: "2025-09-13T13:03:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 40
maintainers: ["renovate[bot]", "rtivital"]
openGraphImageUrl: "https://opengraph.githubassets.com/336ff85783a595c7ebf4f1e0ebe7ac5cdca9282a961eb1167cba4bb14f3014be/rtivital/ts-package-template"
---

# ts-package-template

A template to publish a TypeScript package to npm.

Key features:

- Ready to use ESM build system
- Fast library bundling with Rolldown
- Properly configured [exports in package.json](https://publint.dev/@rtivital/ts-package-template) to support all modern bundlers and Node.js
- CI with GitHub Actions
- Testing and linting setup ready: Vitest, Oxlint, Oxfmt, Knip
- Publish to npm with an npm script, including support for pre-releases (alpha, beta, rc)
- `npm pack` validation as part of the testing pipeline: makes sure only necessary files are included in the package
- Size limit check with [size-limit](https://github.com/ai/size-limit)

Included tools:

- Yarn v4
- Rolldown
- vitest
- oxfmt
- oxlint
- Knip
- size-limit
- GitHub workflow for tests

## Usage

- Click "Use this template" button to create a new repository from this template
- Clone the new repository
- Change `package.json` to your own package name, description, etc. **!important**: change `repository.url` and other repository links to your own repository url
- Install dependencies: `yarn` (other package managers are not supported)
- Write your code in `src/` directory
- Run `npm run release`…
