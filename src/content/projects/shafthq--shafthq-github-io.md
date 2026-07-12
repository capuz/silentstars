---
repo: "ShaftHQ/shafthq.github.io"
name: "shafthq.github.io"
description: "SHAFT_Engine's official user guide, powered by Docusaurus 3.x"
readmeQualityOk: true
url: "https://github.com/ShaftHQ/shafthq.github.io"
homepage: "https://shafthq.github.io/"
language: "HTML"
languages: ["HTML"]
languagePcts: [84]
topics: ["automated-testing", "automation", "documentation", "shaft-engine", "test-automation", "testing-tools"]
stars: 13
forks: 16
openIssues: 0
closedIssues: 76
watchers: 2
contributors: 18
recentReleases: 0
createdAt: "2020-08-12T14:11:10Z"
lastCommitAt: "2026-07-12T06:18:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 100
undervaluedScore: 86
maintainers: ["MohabMohie", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/59f0eeabaf2ea43f79599d9bd68ed5a1d5ed3f107a9859bccfba63d1381b73b8/ShaftHQ/shafthq.github.io"
---

# SHAFT User Guide

This repository contains the canonical Docusaurus documentation site for
[SHAFT Engine](https://github.com/ShaftHQ/SHAFT_ENGINE), published at
[shafthq.github.io](https://shafthq.github.io).

The engine source of truth is
[ShaftHQ/SHAFT_ENGINE](https://github.com/ShaftHQ/SHAFT_ENGINE). This site owns
the public guide, reference material, integration docs, and maintainer runbooks.

## Local Development

Requirements:

- Node.js 20.
- Yarn.

```bash
yarn install
yarn start
```

The local Docusaurus server prints the browser URL after startup.

## Validate A Change

Run the full documentation contract before opening a pull request:

```bash
yarn test
yarn typecheck
yarn build
yarn test:playwright
```

Broken Markdown links, duplicate content, retrieval tests, release template
checks, search exclusions, and rendering checks are release requirements.

## Contribute

Read [CONTRIBUTING.md](https://github.com/ShaftHQ/shafthq.github.io/blob/HEAD/CONTRIBUTING.md) for the checkout, local setup,
validation, content, and pull request checklist.

Public SHAFT behavior changes should update this repository in the same delivery
as the engine change and link the engine pull…
