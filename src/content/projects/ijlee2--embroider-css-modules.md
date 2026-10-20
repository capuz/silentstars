---
repo: "ijlee2/embroider-css-modules"
name: "embroider-css-modules"
description: "CSS modules for Embroider projects"
readmeQualityOk: true
url: "https://github.com/ijlee2/embroider-css-modules"
homepage: "https://embroider-css-modules.netlify.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["css-modules", "emberjs", "ember-addon", "ember-codemod", "ember"]
stars: 18
forks: 4
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-03-30T06:14:21Z"
lastCommitAt: "2026-10-20T08:49:50Z"
lastReleaseAt: "2023-06-13T09:35:42Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 95
undervaluedScore: 51
maintainers: ["ijlee2"]
openGraphImageUrl: "https://opengraph.githubassets.com/0630929d05b996683111ac177a47dba49994d7645e77ccb4294727eb82c79274/ijlee2/embroider-css-modules"
fundingLinks: ["GITHUB:https://github.com/ijlee2"]
---

# embroider-css-modules

_CSS modules for Embroider projects_

## What is it?

`embroider-css-modules` provides **tools and conventions** to help you use [CSS modules](https://github.com/css-modules/css-modules) in Embroider projects. It works on "bleeding-edge" Ember:

- [Embroider on the strictest settings](https://github.com/embroider-build/embroider/#options) (including route splitting)
- [TypeScript](https://www.typescriptlang.org/docs/) + [Glint](https://typed-ember.gitbook.io/glint/)
- [`<template>` tag](https://github.com/ember-template-imports/ember-template-imports)

A key idea behind `embroider-css-modules`: _How_ we map local class names to global ones has little to do with Ember. It's also allowed to change in the future.

```ts
// We can somehow map local class names to global ones
const styles = {
  'container': 'lzeQ4',
  'is-inline': 'mJGCE',
  'is-wide': '_2lPSR',
  'no-feedback': 'YpQbt',
};
```

As you will see in the [Guides](#guides) below, we delegate the how to Rollup, Webpack, and Vite—build tools from the wider JavaScript. With fewer responsibilities, `embroider-css-modules` can focus on improving developer experience (DX).

## Package overview

-…
