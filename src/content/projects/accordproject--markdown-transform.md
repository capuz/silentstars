---
repo: "accordproject/markdown-transform"
name: "markdown-transform"
description: "Parse and transform markdown text, including TemplateMark markdown templates"
readmeQualityOk: true
url: "https://github.com/accordproject/markdown-transform"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [77]
stars: 86
forks: 69
openIssues: 11
closedIssues: 147
watchers: 9
contributors: 45
recentReleases: 0
createdAt: "2019-08-01T15:42:01Z"
lastCommitAt: "2026-10-11T10:14:24Z"
lastReleaseAt: "2019-09-30T13:39:34Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 80
undervaluedScore: 34
maintainers: ["dependabot[bot]", "mttrbrts", "dselman"]
openGraphImageUrl: "https://opengraph.githubassets.com/62e5ff7f20737a9f095436aebe37cfb76b09d0ed89da7946fbde38728668a7c2/accordproject/markdown-transform"
---

Markdown Transform

## Introduction

A transformation and parsing framework for converting markdown content to HTML and other structured document object models (DOMs).

The codebase is written in TypeScript; each package ships compiled JavaScript alongside `.d.ts` type declarations.

## Structure of the Code Repository

Top level repository (markdown-transform), with sub packages. Each sub-package is published as an independent npm module using `npm workspaces`:
* [markdown-cli](https://github.com/accordproject/markdown-transform/tree/main/packages/markdown-cli) : command line utilities
* [markdown-transform](https://github.com/accordproject/markdown-transform/tree/main/packages/markdown-transform) : High-level API to transform files into different formats
* [markdown-common](https://github.com/accordproject/markdown-transform/tree/main/packages/markdown-common) : converts between markdown strings and the CommonMark DOM
* [markdown-cicero](https://github.com/accordproject/markdown-transform/tree/main/packages/markdown-cicero) : converts between the CommonMark DOM and the CiceroMark DOM
*…
