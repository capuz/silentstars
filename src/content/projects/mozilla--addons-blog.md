---
repo: "mozilla/addons-blog"
name: "addons-blog"
description: "Blog content builder for AMO"
readmeQualityOk: true
url: "https://github.com/mozilla/addons-blog"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [62]
stars: 7
forks: 3
openIssues: 13
closedIssues: 129
watchers: 9
contributors: 14
recentReleases: 0
createdAt: "2021-03-09T09:25:03Z"
lastCommitAt: "2026-10-12T11:14:56Z"
lastReleaseAt: "2021-04-20T13:04:16Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 95
undervaluedScore: 72
maintainers: ["dependabot[bot]", "willdurand", "diox"]
openGraphImageUrl: "https://opengraph.githubassets.com/0dfcdbeaadf1269922f4a18f75a063d0fdfa4d27f2823e60e5bffdc65f588836/mozilla/addons-blog"
---

# addons-blog

This is the AMO Blog, which uses WP as a headless CMS with 11ty as a static generator.

## Getting started

1. clone the project
2. run `npm install` to install the dependencies
3. run `npm start` to build the blog and serve it locally

For other tasks, take a look at the available commands in the section below.

## Available commands

In the project directory, you can run the following commands. There are a few commands not mentioned here (see `package.json`) but those are only used by internal processes.

### `npm run prettier`

This runs [Prettier][] to automatically format the entire codebase.

### `npm run prettier-dev`

This runs [Prettier][] on only your changed files. This is intended for development.

### `npm run build`

This is the _base_ command for building the content of the blog in the `build/` directory.

### `npm run build:debug`

This is similar to `npm run build:serve` but with Eleventy debug logs turned on.

### `npm run build:production`

This builds the blog in production mode, which essentially optimizes the different assets.

### `npm run build:serve`

This starts a web server to serve the blog on local port `8081`.

### `npm run…
