---
repo: "hexlet-boilerplates/nodejs-package"
name: "nodejs-package"
description: "Node.js boilerplate package"
readmeQualityOk: true
url: "https://github.com/hexlet-boilerplates/nodejs-package"
homepage: "https://hexlet.io"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [69]
topics: ["nodejs", "boilerplate"]
stars: 333
forks: 605
openIssues: 0
closedIssues: 7
watchers: 30
contributors: 26
recentReleases: 0
createdAt: "2016-03-06T08:48:04Z"
lastCommitAt: "2026-10-24T00:15:47Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 91
undervaluedScore: 40
maintainers: ["fey", "mokevnin", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4526159fdf19b6c6ad7b1009e28137778ae7e1e668845246e899c12a9b45a4fa/hexlet-boilerplates/nodejs-package"
---

# nodejs-package

## Requirements

- Unix system (Macos/Linux)
- Nodejs 22.x+
- Make
- [mise](https://mise.jdx.dev), он ставит `hk` для git-хуков

## Description

Boilerplate for javascript projects with:

- Javascript (nodejs)
- Oxlint (linter) and Oxfmt (formatter)
- Vitest

For Typescript boilerplate see [typescript-package](https://github.com/hexlet-boilerplates/typescript-package)

## Setup

```bash
make install
```

## Run tests

```bash
make test
```

See other commands in [Makefile](https://github.com/hexlet-boilerplates/nodejs-package/blob/HEAD/Makefile)

## Run tests with coverage

```bash
make test-coverage
# see ./coverage
```

The coverage threshold is set in [vitest.config.js](https://github.com/hexlet-boilerplates/nodejs-package/blob/HEAD/vitest.config.js) — `make test-coverage` exits with an error when coverage drops below it, so the Node CI badge above stays green only while coverage holds.

---

This repository is created and maintained by the team and the community of Hexlet, an educational project. [Read more about Hexlet](https://hexlet.io/?utm_source=github&utm_medium=link&utm_campaign=nodejs-package).
