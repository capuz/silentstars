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
openIssues: 117
closedIssues: 51
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-06-02T16:48:08Z"
lastCommitAt: "2026-11-17T07:21:24Z"
lastReleaseAt: "2026-11-08T08:59:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "under_pressure", "community_hub"]
healthScore: 77
undervaluedScore: 52
maintainers: ["oleksii-shepel"]
openGraphImageUrl: "https://opengraph.githubassets.com/1eff40b17b69465cdd8a1c5ace5611cd61481a95d6ccf8431a9f957cfd9a6c66/epikodelabs/streamix"
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
| `app5` – `app8` | React |
| `app9` – `app10` | Vue |

Run any of them with the Angular CLI:

```sh
npx ng serve app1   # ... through app9
```

## Builder not found after cloning

Starting an application in a fresh checkout can fail with:

```text
Error: Could not find the '@epikodelabs/streamix/angular/builder:application' builder's node package.
```

**Cause:** the workspace applications and the Streamix builder resolve `@epikodelabs/streamix` from `node_modules`. There, the package is linked to `dist/streamix`, which does not exist until the library has been built. `npm install` installs dependencies but does not produce that build output.

**Solution:** build the package once, then start the application:

```sh
npm run build
npx ng serve app1
```

`npm run build` compiles the library into `dist/streamix` and links it into…
