---
repo: "chubbyts/chubbyts-framework"
name: "chubbyts-framework"
description: "A minimal, highly performant middleware PSR-15 inspired function based microframework built with as little complexity as possible, aimed primarily at those developers who want to understand all the vendors they use."
readmeQualityOk: true
url: "https://github.com/chubbyts/chubbyts-framework"
homepage: "https://chubbyts-framework.dev/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["chubbyts", "handler", "micro-framework", "midleware", "psr-15"]
stars: 6
forks: 2
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-05-24T20:22:28Z"
lastCommitAt: "2026-08-29T17:28:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 60
maintainers: ["dominikzogg"]
openGraphImageUrl: "https://opengraph.githubassets.com/8913aa2081ee1af36085e06a3236d98ede0bb8387099f9401af5c7f22f75a840/chubbyts/chubbyts-framework"
---

# chubbyts-framework

## Description

A minimal, highly [performant][2] middleware [PSR-15][3] inspired function based micro framework built with as little complexity as possible, aimed primarily at those developers who want to understand all the vendors they use.

## Requirements

 * node: 22
 * [@chubbyts/chubbyts-dic-types][4]: ^2.3.0
 * [@chubbyts/chubbyts-http-error][5]: ^3.4.0
 * [@chubbyts/chubbyts-log-types][7]: ^3.3.0
 * [@chubbyts/chubbyts-throwable-to-error][8]: ^2.3.0
 * [@chubbyts/chubbyts-undici-server][9]: ^1.2.0

## Installation

Through [NPM](https://www.npmjs.com) as [@chubbyts/chubbyts-framework][1].

```sh
npm i \
  @chubbyts/chubbyts-framework-router-path-to-regexp@^3.4.0 \
  @chubbyts/chubbyts-framework@^3.3.1
```

## Usage

```ts
import { STATUS_CODES } from 'node:http';
import { createPathToRegexpMatch }
  from '@chubbyts/chubbyts-framework-router-path-to-regexp/dist/path-to-regexp-router';
import type { ServerRequest } from '@chubbyts/chubbyts-undici-server/dist/server';
import { Response } from '@chubbyts/chubbyts-undici-server/dist/server';
import { createApplication } from '@chubbyts/chubbyts-framework/dist/application';
import { createErrorMiddleware }…
