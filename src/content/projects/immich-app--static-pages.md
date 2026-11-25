---
repo: "immich-app/static-pages"
name: "static-pages"
description: "Sites and packages for Immich"
readmeQualityOk: true
url: "https://github.com/immich-app/static-pages"
homepage: "https://immich.app"
language: "TypeScript"
languages: ["TypeScript", "Svelte"]
languagePcts: [49, 48]
stars: 19
forks: 82
openIssues: 1
closedIssues: 6
watchers: 3
contributors: 114
recentReleases: 0
createdAt: "2024-07-01T17:38:28Z"
lastCommitAt: "2026-11-25T11:19:15Z"
lastReleaseAt: "2026-06-15T18:35:17Z"
status: "thriving"
tags: ["hidden_gem", "funded", "fork_magnet"]
healthScore: 96
undervaluedScore: 78
maintainers: ["renovate[bot]", "jrasm91", "immich-push-o-matic[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6190c545dc74576605bc2982eef0ec205013edb957bdf7c2bbb01324c6b1c8fa/immich-app/static-pages"
fundingLinks: ["CUSTOM:https://buy.immich.app", "CUSTOM:https://immich.store"]
postedAt: "2026-11-02T11:44:50.353Z"
---

# Static sites

## Structure

This repository structure is as follows

```
apps/      <-- web apps
packages/  <-- npm packages
```

## Setup

Install [Mise](https://mise.jdx.dev/installing-mise.html) and then activate it via `mise install`.

## Mise commands

This `mise dev` command watches both `packages/ui` and `packages/svelte-markdown-preprocess` for changes and rebuilds them automatically. It also launches a svelte-kit development server for the selected app, or `root.immich.app` if unspecified.

```
mise dev                 # launches root.immich.app
mise dev <app>           # launches <app>.immich.app

# examples
mise dev api
mise dev awesome
mise dev buy
mise dev get
mise dev my
mise dev root
mise dev ui
##
```
