---
repo: "IBM/carbon-components-ember"
name: "carbon-components-ember"
description: "Ember implementation of the Carbon Design System"
readmeQualityOk: true
url: "https://github.com/IBM/carbon-components-ember"
homepage: "https://ibm.github.io/carbon-components-ember/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
stars: 25
forks: 3
openIssues: 208
closedIssues: 226
watchers: 3
contributors: 10
recentReleases: 0
createdAt: "2019-07-11T12:09:31Z"
lastCommitAt: "2026-10-19T09:14:15Z"
lastReleaseAt: "2020-03-12T10:12:26Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 89
undervaluedScore: 59
maintainers: ["aklkv", "patricklx", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/365aae7b01936dca099e3a3b376738980800b6718e34893e401e401927ca0e90/IBM/carbon-components-ember"
discussionCount: 0
---

# Carbon Components Ember

An Ember implementation of IBM's [Carbon Design System](https://carbondesignsystem.com), kept in parity with [`@carbon/react`](https://react.carbondesignsystem.com): the same components, arguments and behaviour, written as idiomatic Ember with fully typed Glint signatures.

**[Browse the components →](https://ibm.github.io/carbon-components-ember/)** Every component has live stories, a generated API table and copyable code.

## Install

```sh
pnpm add carbon-components-ember @carbon/styles
```

It's a v2 addon for strict-mode templates (`.gts` and `.gjs`). Embroider and Vite apps work as they are; classic ember-cli apps need `ember-auto-import` 2 and `ember-template-imports`. Tested against `ember-source` 7, and in CI against its beta and alpha channels.

pnpm 12 stops the first install at dependencies' build scripts. Carbon's packages (`@carbon/*` and `@ibm/plex*`) only send IBM's install telemetry, so deny them with [`pnpm approve`](https://pnpm.io/cli/permissions) or [`allowBuilds`](https://pnpm.io/settings/build#allowbuilds).

## Set Up

Load Carbon's styles, then the addon's own, once in your app's entry point:

```ts
import…
