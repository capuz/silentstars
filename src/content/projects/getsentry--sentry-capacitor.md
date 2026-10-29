---
repo: "getsentry/sentry-capacitor"
name: "sentry-capacitor"
description: "The official Sentry SDK for Capacitor"
readmeQualityOk: true
url: "https://github.com/getsentry/sentry-capacitor"
homepage: "https://docs.sentry.io/platforms/javascript/guides/capacitor/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [70]
topics: ["sentry", "sdk", "capacitor", "ionic", "javascript", "hybrid-apps", "android", "ios", "mobile", "crash"]
stars: 148
forks: 38
openIssues: 12
closedIssues: 260
watchers: 36
contributors: 162
recentReleases: 0
createdAt: "2020-10-26T14:20:09Z"
lastCommitAt: "2026-10-29T21:24:34Z"
lastReleaseAt: "2022-03-29T18:32:10Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "funded"]
healthScore: 94
undervaluedScore: 44
maintainers: ["lucas-zimerman", "sentry-junior[bot]", "sentry-release-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5782cf4d60d321b06a4c042a9847e470a18830ab3ac731229b70523f0cc03739/getsentry/sentry-capacitor"
fundingLinks: ["CUSTOM:https://sentry.io/pricing/", "CUSTOM:https://sentry.io/"]
discussionCount: 5
---

_Bad software is everywhere, and we're tired of it. Sentry is on a mission to help developers write better software faster, so we can get back to enjoying technology. If you want to join us [<kbd>**Check out our open positions**</kbd>](https://sentry.io/careers/)_

## Official Sentry SDK for Capacitor

## Installation

```bash
# Angular 14 and newer:
yarn add @sentry/capacitor @sentry/angular --exact

# Vue
yarn add @sentry/capacitor @sentry/vue --exact

# React
yarn add @sentry/capacitor @sentry/react --exact

# Other
yarn add @sentry/capacitor @sentry/browser --exact
```

Older versions of Angular require @sentry/capacitor V0, for more information check the page: https://docs.sentry.io/platforms/javascript/guides/capacitor/#angular-version-compatibility

## Usage

To use this SDK, call `Sentry.init` as early as possible after loading the page. This will initialize the SDK and hook into the environment. _Note that you can turn off almost all side effects using the respective options._

```typescript
// app.module.ts

import * as Sentry from "@sentry/capacitor";
import { init as sentryAngularInit, createErrorHandler }  from "@sentry/angular";

// Init by passing the sibling SDK's…
