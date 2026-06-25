---
repo: "emibcn/binary-object"
name: "binary-object"
description: "Manage binary data with JavaScript strictly typed Object-oriented programming"
url: "https://github.com/emibcn/binary-object"
homepage: "https://www.npmjs.com/package/@3m1/binary-object"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["javascript", "binary-data", "library", "hacktoberfest"]
stars: 21
forks: 1
openIssues: 8
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2021-02-04T19:10:44Z"
lastCommitAt: "2026-06-25T06:41:39Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero"]
healthScore: 78
undervaluedScore: 50
maintainers: ["emibcn", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3718e2a509d3fb17eeb1d7f26f6b69844b54b493e9b4946d831905d32bbc41f9/emibcn/binary-object"
---

![Coverage](https://raw.githubusercontent.com/emibcn/binary-object/badges/main/test-coverage.svg)

# Binary Object

Manage binary data with strictly typed JavaScript Object-oriented programming.

## Summary

- [Install](#install)
- [Usage](#usage)
  - [First: polyfill if needed](#first-polyfill-if-needed)
  - [Second: decorators or not](#second-decorators-or-not)
  - [API](#api)
  - [Examples](#examples)
- [Memory owner](#memory-owner)
- [Use cases](#use-cases)
  - [WebAssembly](#webassembly)
  - [Disable Garbage Collector (GC)](#disable-garbage-collector-gc)
  - [Workers API](#workers-api)
  - [Saving/restoring states](#savingrestoring-states)
  - [Accessing binary data files](#accessing-binary-data-files)
  - [Accessing binary APIs](#accessing-binary-apis)
  - [Develop backend DB APIs](#develop-backend-db-apis)
- [See also](#see-also)

## Install

With `npm`:

```shell
npm install binary-object
```

With `yarn`:

```shell
yarn add binary-object
```

## Usage

### First: polyfill if needed

This library uses `TextEncoder` and `TextDecoder` to transform text to and from binary data. These are JavaScript native functions, but Node lacks them. You need to polyfill them first:…
