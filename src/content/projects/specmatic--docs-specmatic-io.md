---
repo: "specmatic/docs.specmatic.io"
name: "docs.specmatic.io"
description: "The specmatic documentation website"
readmeQualityOk: true
url: "https://github.com/specmatic/docs.specmatic.io"
homepage: "http://docs.specmatic.io/"
language: "JavaScript"
languages: ["JavaScript", "MDX"]
languagePcts: [45, 32]
topics: ["cdd", "contract-driven-development", "contract-testing", "specmatic"]
stars: 5
forks: 2
openIssues: 6
closedIssues: 1
watchers: 3
contributors: 39
recentReleases: 0
createdAt: "2025-04-11T16:21:52Z"
lastCommitAt: "2026-11-09T04:34:48Z"
status: "thriving"
tags: []
healthScore: 80
undervaluedScore: 72
maintainers: ["ketan", "yogeshnikam671", "nashjain"]
openGraphImageUrl: "https://opengraph.githubassets.com/a6b0b2b9461bbafc8d25a1246b3d8098e03e95ec6acec63b12824e044223fcd6/specmatic/docs.specmatic.io"
---

# docs.specmatic.io

This repository contains the Specmatic documentation site built with Docusaurus.

## Prerequisites

- Node.js 20 or later
- npm
- Ruby and Bundler if you want to run link verification

## Install dependencies

From the repository root:

```bash
npm install
bundle install
```

## Run the docs site locally

Start the local development server:

```bash
npm run start
```

This starts Docusaurus in development mode. The terminal output will show the local URL, typically:

- `http://localhost:3000`

## Build the site locally

Create a production build:

```bash
npm run build
```

This also runs the redirect fix-up script used by this repository.

## Preview the built site

After a build completes, serve the generated site locally:

```bash
npm run serve
```

## Validate links

To build the site and then run the local link checker:

```bash
npm run build:verified
```

If you only want to run the link checker after an existing build:

```bash
npm run check:links
```

## Helpful notes

- Docs content lives under [docs](https://github.com/specmatic/docs.specmatic.io/blob/HEAD/Users/jaydeep/znsio/docs.specmatic.io/docs).
- Static images live under…
