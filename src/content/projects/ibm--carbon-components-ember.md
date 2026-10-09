---
repo: "IBM/carbon-components-ember"
name: "carbon-components-ember"
description: "Ember implementation of the Carbon Design System"
readmeQualityOk: true
url: "https://github.com/IBM/carbon-components-ember"
homepage: "https://ibm.github.io/carbon-components-ember/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
stars: 25
forks: 3
openIssues: 135
closedIssues: 211
watchers: 3
contributors: 10
recentReleases: 0
createdAt: "2019-07-11T12:09:31Z"
lastCommitAt: "2026-10-09T10:50:44Z"
lastReleaseAt: "2020-03-12T10:12:26Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 90
undervaluedScore: 60
maintainers: ["patricklx", "aklkv", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/81ab9a8033e2b6dbfcbd53cef4a7e56b37d691c7c4329502b05150618304be9e/IBM/carbon-components-ember"
discussionCount: 0
---

# Carbon Components Ember

An Ember implementation of IBM's [Carbon Design System](https://carbondesignsystem.com), kept in parity with [`@carbon/react`](https://react.carbondesignsystem.com): the same components, arguments and behaviour, written as idiomatic Ember with fully typed Glint signatures.

**[Browse the components →](https://ibm.github.io/carbon-components-ember/)** Every component has live stories, a generated API table and copyable code.

## Install

```sh
pnpm add carbon-components-ember @carbon/styles
pnpm add -D sass
```

It's a v2 addon. Embroider and Vite apps work as they are; classic ember-cli apps need `ember-auto-import` 2. Tested against `ember-source` 7, and in CI against its beta and alpha channels.

## Set Up

Load Carbon's styles, then the addon's own, once in your app's entry point:

```ts
import '@carbon/styles/css/styles.css';
import 'carbon-components-ember/styles.scss';
```

Add the two elements some components render into to your application template:

```gts
<template>
  {{outlet}}

  {{! Dropdown, Select and OverflowMenu menus }}
  <div id="ember-basic-dropdown-wormhole"></div>
  {{! The confirmation dialog of a @danger Button or Icon }}
  <div…
