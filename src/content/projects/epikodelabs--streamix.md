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
recentReleases: 1
createdAt: "2026-06-02T16:48:08Z"
lastCommitAt: "2026-11-10T13:30:11Z"
lastReleaseAt: "2026-11-08T08:59:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "community_hub"]
healthScore: 79
undervaluedScore: 55
maintainers: ["oleksii-shepel", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f3e0c5454d8c7c583e544a34e4a1c61801125793fd2f5085b35970ca8793a922/epikodelabs/streamix"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/streamix"]
discussionCount: 44
promoted: true
postedAt: "2026-11-07T14:03:06.871Z"
---

# Workspace

This repository is an Angular CLI monorepo that hosts **Angular, React, and Vue** application projects side by side under `projects/apps/`. The Streamix builders compile React (JSX adoption) and Vue sources as first-class citizens of the workspace:

| Projects | Framework |
| --- | --- |
| `app1` – `app4` | Angular |
| `app5` – `app7` | React |
| `app8` – `app9` | Vue |

Run any of them with the Angular CLI:

```sh
npx ng serve app1   # ... through app9
```

# Getting started

Configure your editor and build tools, then create your first reactive counter in Angular, React, or Vue. Start with an **existing application** and the Node.js and TypeScript versions supported by your framework.

| Framework | Requirements | Source preprocessing |
| --- | --- | --- |
| [Angular](#angular) | Angular 20+, TypeScript 5.5+ compatible with your Angular version | Angular builder |
| [React](#react) | React 18+, TypeScript 5.5+ | Vite plugin: `sx()` before `react()` |
| [Vue](#vue) | Vue 3.4+, TypeScript 5.5+ | Vite plugin: `sxVue()` before `vue()` |

Install `@epikodelabs/streamix` once; no separate compiler, builder, or editor packages are needed. Configure both the build and…
