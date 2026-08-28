---
repo: "jsenv/core"
name: "core"
description: "Develop, test and build JavaScript projects"
readmeQualityOk: true
url: "https://github.com/jsenv/core"
language: "JavaScript"
languages: ["JavaScript", "HTML"]
languagePcts: [66, 33]
topics: ["devtools", "css", "javascript", "html", "preact", "react", "build-tool", "testing-framework"]
stars: 36
forks: 6
openIssues: 0
closedIssues: 136
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2018-02-15T15:41:04Z"
lastCommitAt: "2026-08-28T12:22:59Z"
lastReleaseAt: "2022-01-31T17:31:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 100
undervaluedScore: 59
maintainers: ["dmail"]
openGraphImageUrl: "https://opengraph.githubassets.com/8ab66fea11d38d592bdd1cf834b1103bd672ca24f74b3bf6b1801b5547c716ed/jsenv/core"
fundingLinks: ["GITHUB:https://github.com/dmail"]
discussionCount: 0
---

# @jsenv/core

## Overview

Jsenv is a suite of tools for JavaScript projects that prioritizes standards and simplicity, making it ideal for both beginners and those who need straightforward tools.

## Installation

```console
npm install --save-dev @jsenv/core
```

> **Compatibility**: Mac, Windows, and Linux with Node.js 25.

## Documentation

For comprehensive documentation, see the full [user documentation](https://github.com/jsenv/core/blob/main/docs/users/users.md).

## Basic Usage

Start a development server:

```js
import { startDevServer } from "@jsenv/core";

await startDevServer({
  sourceDirectoryUrl: import.meta.resolve("./"),
});
```

## Core Features

`@jsenv/core` provides four main tools:

1. **Dev Server**: Serves source files with live reloading to facilitate development
2. **Build**: Optimizes source files into a specified directory for production
3. **Build Server**: Serves the built files, allowing for testing and verifying the production build
4. **Test Runner**: Runs test files concurrently to ensure code reliability

## Key Advantages

- **Standards-first approach**: Built on web standards rather than custom abstractions
- **Robust versioning**: Avoids…
