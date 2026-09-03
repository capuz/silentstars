---
repo: "morganstanley/fdc3-web"
name: "fdc3-web"
description: "NPM Library providing FDC3 capabilities"
readmeQualityOk: true
url: "https://github.com/morganstanley/fdc3-web"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["fdc3"]
stars: 6
forks: 6
openIssues: 9
closedIssues: 13
watchers: 8
contributors: 12
recentReleases: 0
createdAt: "2025-02-11T20:10:23Z"
lastCommitAt: "2026-09-03T08:12:57Z"
lastReleaseAt: "2025-08-11T06:29:52Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 88
undervaluedScore: 77
maintainers: ["dependabot[bot]", "bingenito", "Roaders"]
openGraphImageUrl: "https://opengraph.githubassets.com/989aded62f29ebdc46a2b9d48b0972ca036c4b764c3ac15afcc57f4c862291b3/morganstanley/fdc3-web"
---

# fdc3-web

## Installation

```shell
npm install @morgan-stanley/fdc3-web
npm install @morgan-stanley/fdc3-web-ui-provider
npm install @morgan-stanley/fdc3-web-messaging-provider
```

## Usage

Below are common usage patterns for the `@morgan-stanley/fdc3-web` library, including code examples for agent access, intents, channels, and App Directory setup. These examples are based on real usage in the test-harness app.

### Accessing the FDC3 Agent

#### In the Root Window

```js
import { DesktopAgentFactory, getAgent } from '@morgan-stanley/fdc3-web';
import { LogLevel } from '@finos/fdc3';
import { AppResolverComponent } from '@morgan-stanley/fdc3-web-ui-provider';

const agent = await getAgent({
  failover: () =>
    new DesktopAgentFactory().createRoot({
      uiProvider: agent => Promise.resolve(new AppResolverComponent(agent, document)),
      appDirectoryEntries: ['http://localhost:4299/v2/apps'],
      applicationStrategies: [{
        canOpen: (params: OpenApplicationStrategyParams, context?: Context) => { /* define whether an app should open */ },
        open: (params: OpenApplicationStrategyParams, context?: Context) => { /* define how an app should open */ }
      }],…
