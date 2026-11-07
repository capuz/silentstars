---
repo: "epikodelabs/streamix"
name: "streamix"
description: "Reactive runtime built on async iterators"
readmeQualityOk: true
url: "https://github.com/epikodelabs/streamix"
homepage: "https://epikodelabs.github.io/streamix"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
topics: ["async-iterators", "javascript", "observables", "reactive-programming", "streamix", "typescript", "rxjs-alternative"]
stars: 4
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-02T16:48:08Z"
lastCommitAt: "2026-11-06T14:13:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "community_hub"]
healthScore: 79
undervaluedScore: 52
maintainers: ["oleksii-shepel", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/81a133852cfccf9c17bf0826b1a11b0a792a1d78f3ca6956540e42bee093fac2/epikodelabs/streamix"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/streamix"]
discussionCount: 43
promoted: true
---

# Getting started

Configure your editor and build tools, then create your first reactive counter in Angular, React, or Vue. Start with an **existing application** and the Node.js and TypeScript versions supported by your framework.

| Framework | Requirements | Source preprocessing |
| --- | --- | --- |
| [Angular](#angular) | Angular 20+, TypeScript 5.5+ compatible with your Angular version | Angular builder |
| [React](#react) | React 18+, TypeScript 5.5+ | Vite plugin: `sx()` before `react()` |
| [Vue](#vue) | Vue 3.4+, TypeScript 5.5+ | Vite plugin: `sxVue()` before `vue()` |

Install `@epikodelabs/streamix` once; no separate compiler, builder, or editor packages are needed. Configure both the build and editor before using the examples below.

## Angular

### 1. Install

```sh
npm install @epikodelabs/streamix
npm install -D @angular/language-service
```

Keep the language-service version aligned with your Angular packages.

### 2. Configure the builder

In `angular.json`, keep your existing Angular build target as `application`, then add a Streamix `build` wrapper. The following is an **Architect target fragment**, not a replacement for the whole workspace configuration.…
