---
repo: "mnaoumov/obsidian-test-mocks"
name: "obsidian-test-mocks"
description: "Fully-featured mocks for entire obsidian and and obsidian-typings/implementations modules."
readmeQualityOk: true
url: "https://github.com/mnaoumov/obsidian-test-mocks"
homepage: "https://mnaoumov.dev/obsidian-test-mocks/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 9
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-03-08T00:17:32Z"
lastCommitAt: "2026-09-18T08:25:34Z"
lastReleaseAt: "2026-03-16T14:04:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 90
undervaluedScore: 57
maintainers: ["mnaoumov"]
openGraphImageUrl: "https://opengraph.githubassets.com/fe98c804cbb83d1ea1387dfab0eb22920852e30eaf79fcf8c63654e6bc45b8e8/mnaoumov/obsidian-test-mocks"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/mnaoumov"]
---

# obsidian-test-mocks

Comprehensive test mocks for the [Obsidian](https://obsidian.md/) plugin API. Provides in-memory implementations of every class and function in `obsidian.d.ts`, plus prototype extensions Obsidian adds to DOM/JS builtins. The package is tested with **100% code coverage** (lines, branches, functions, and statements) enforced on every build.

## Installation

```bash
npm install --save-dev obsidian-test-mocks
```

Peer dependencies: `obsidian`

## Entry Points

| Import path                                          | Description                                                               |
| ---------------------------------------------------- | ------------------------------------------------------------------------- |
| `obsidian-test-mocks/obsidian`                       | Mocks for every class/function in `obsidian.d.ts`                         |
| `obsidian-test-mocks/setup`                          | Exports `setup()` / `teardown()` for prototype extensions and globals     |
| `obsidian-test-mocks/vitest-setup`                   | One-stop Vitest setup file: calls `setup()` + mocks the `obsidian` module |
| `obsidian-test-mocks/jest-setup`…
