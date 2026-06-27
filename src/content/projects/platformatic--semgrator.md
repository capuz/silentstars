---
repo: "platformatic/semgrator"
name: "semgrator"
description: "Run migrations code based on semantic version rules"
url: "https://github.com/platformatic/semgrator"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 12
forks: 0
openIssues: 1
closedIssues: 0
watchers: 4
contributors: 3
recentReleases: 0
createdAt: "2024-03-05T11:23:07Z"
lastCommitAt: "2026-06-27T00:34:06Z"
lastReleaseAt: "2024-03-13T10:35:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 38
maintainers: ["renovate[bot]", "mcollina"]
openGraphImageUrl: "https://opengraph.githubassets.com/4cd2f070413fd3985bacd7d21081083731d9b489fc96216f3d39b361dd2e944e/platformatic/semgrator"
---

# semgrator

`semgrator` provides an utility to support backward compatibility when building frameworks and runtimes
that do not introduce breaking changes via new options.

## What is a compatibility option/flag/mode?

If you want to create a product that is configurable, but you do not want to break your users on behavior changes,
you can introduce a _new option_ that turns on and off the new behavior, and turn the new behavior by default.
Users of the previous behavior _would be required_ to change their configuration to keep using the software.

### How semgrator helps

`semgrator` run migrations code based on semantic version rules. So on a breaking/behavior change that results in a new
compatibility option in your configuration file, you can add a new migration rule that set the new option to `false`
automatically.

## Install

```js
npm i semgrator
```

## Usage

### Writing migrations

```ts
import type { Migration } from 'semgrator'
import type { Config } from '../your-config-meta.js'

export const migration: Migration<Config> = {
  version: '1.0.0',
  toVersion: '1.42.0',
  up: (input: Config) => {
    // Do something with Config
    return input
  },
}
```

The…
