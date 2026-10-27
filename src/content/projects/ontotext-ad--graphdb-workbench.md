---
repo: "Ontotext-AD/graphdb-workbench"
name: "graphdb-workbench"
description: "The web application for GraphDB APIs"
readmeQualityOk: true
url: "https://github.com/Ontotext-AD/graphdb-workbench"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [47, 33]
stars: 60
forks: 20
openIssues: 5
closedIssues: 14
watchers: 6
contributors: 29
recentReleases: 0
createdAt: "2019-07-15T11:46:59Z"
lastCommitAt: "2026-10-27T12:39:02Z"
lastReleaseAt: "2019-10-14T08:29:34Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 94
undervaluedScore: 51
maintainers: ["boyan-tonchev", "yordanalexandrov", "Brankovanov"]
openGraphImageUrl: "https://opengraph.githubassets.com/73be6aaba156914b7a6f452719e0a5d677fa693b7bdbda467006525e2c4ff35e/Ontotext-AD/graphdb-workbench"
---

# graphdb-workbench
The web application for GraphDB APIs

### Setup Environment

* Clone the project or check it out from version control.
* Open a terminal, navigate to the project's root directory, and run `npm install:ci` to install all required dependencies.
  The `api` project is built automatically.

## Development

### Developers guide

https://ontotext-ad.github.io/graphdb-workbench/developers-guide

### Dev server

The workbench can be run in a development mode by executing `npm run start`. This will start each of the child applications
in watch mode and will proxy requests to a GraphDB instance running on `localhost:7200` (default).

## Testing

### Acceptance/functional tests

## Code quality

###  ESLint Setup
This project enforces consistent code quality using ESLint, configured per microfrontend/package.

Each microfrontend has its own eslint.config.js or eslint.config.cjs

Lint rules are automatically enforced on file save and commit

**The legacy-workbench package uses an older ESLint setup but is still linted on commit and during local development.**

### Linting on Save
You can have ESLint running in your editor:

**IntelliJ**: enabled via Settings > Languages &…
