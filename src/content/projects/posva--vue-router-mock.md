---
repo: "posva/vue-router-mock"
name: "vue-router-mock"
description: "🧪 Easily mock routing interactions in your Vue apps"
readmeQualityOk: true
url: "https://github.com/posva/vue-router-mock"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 219
forks: 9
openIssues: 4
closedIssues: 17
watchers: 2
contributors: 8
recentReleases: 0
createdAt: "2020-11-05T09:33:12Z"
lastCommitAt: "2026-07-13T06:36:23Z"
lastReleaseAt: "2022-01-22T08:30:34Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 91
undervaluedScore: 28
maintainers: ["renovate[bot]", "posva", "cexbrayat"]
openGraphImageUrl: "https://opengraph.githubassets.com/d8d746d293dc671624e40a299dfa71a1939ee8f6a0ebfa672c37cc015fb85d0e/posva/vue-router-mock"
fundingLinks: ["GITHUB:https://github.com/posva", "CUSTOM:https://www.paypal.me/posva"]
discussionCount: 7
---

# vue-router-mock [](https://github.com/posva/vue-router-mock/actions/workflows/test.yml) [](https://www.npmjs.com/package/vue-router-mock) [](https://codecov.io/gh/posva/vue-router-mock) [](https://github.com/posva/thanks)

> Easily mock routing interactions in your Vue 3 apps

## Installation

```sh
pnpm i -D vue-router-mock
# or
yarn add -D vue-router-mock
# or
npm install -D vue-router-mock
```

## Requirements

This library

- `@vue/test-utils` >= 2.4.0
- vue 3 and vue router 4

## Goal

The goal of Vue Router Mock is to enable users to **unit and integration test** navigation scenarios. This means tests that are isolated enough to not be end to end tests (e.g. using [Cypress](https://www.cypress.io/)) or are edge cases (e.g. network failures). Because of this, some scenarios are more interesting as end to end tests, **using the real** vue router.

## Introduction

Vue Router Mock exposes a few functions to be used individually and they are all documented through TS. But most of the time you want to globally inject the router in a _setupFilesAfterEnv_ file. Create a `tests/router-mock-setup.js` file at the root of your project (it can be named differently):

```js
import {…
