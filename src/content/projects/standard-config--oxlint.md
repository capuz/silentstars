---
repo: "standard-config/oxlint"
name: "oxlint"
description: "Curated Oxlint config with sensible defaults"
readmeQualityOk: true
url: "https://github.com/standard-config/oxlint"
homepage: "https://sconfig.org"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["npm-package", "oxc", "oxlint-config"]
stars: 10
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-02-04T21:09:58Z"
lastCommitAt: "2026-10-23T12:04:19Z"
lastReleaseAt: "2026-02-19T11:49:49Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 60
maintainers: ["dependabot[bot]", "porada"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1150072136/e5070f4d-9de1-4f63-bfb9-ea73db7c4ae1"
---

<img
            src="https://github.com/standard-config/.github/blob/main/.github/assets/standard-config-oxlint@3x.png?raw=true"
            width="500"
            alt=""
        />

        ><img
            src="https://img.shields.io/npm/v/%40standard-config%2Foxlint?style=flat-square"
            alt=""
    /></a>
        ><img
            src="https://img.shields.io/github/actions/workflow/status/standard-config/oxlint/test.yaml?style=flat-square"
            alt=""
    /></a>
        ><img
            src="https://img.shields.io/codecov/c/github/standard-config/oxlint?style=flat-square"
            alt=""
    /></a>

## Overview

Curated Oxlint config with sensible defaults. Designed as a careful, environment-agnostic baseline for writing better TypeScript. Comes with [supplemental configs](#supplemental-configs) that extend the core ruleset.

## Install

```sh
npm install --save-dev @standard-config/oxlint
```

```sh
pnpm add --save-dev @standard-config/oxlint
```

For [type-aware linting](https://oxc.rs/docs/guide/usage/linter/type-aware.html), make sure `oxlint` and `oxlint-tsgolint` are both installed.

## Usage

Create your `oxlint.config.ts`:

```ts
import {…
