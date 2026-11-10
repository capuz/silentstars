---
repo: "immich-app/static-pages"
name: "static-pages"
description: "Sites and packages for Immich"
readmeQualityOk: true
url: "https://github.com/immich-app/static-pages"
homepage: "https://immich.app"
language: "Svelte"
languages: ["Svelte", "TypeScript"]
languagePcts: [50, 47]
stars: 18
forks: 76
openIssues: 2
closedIssues: 5
watchers: 3
contributors: 107
recentReleases: 0
createdAt: "2024-07-01T17:38:28Z"
lastCommitAt: "2026-11-10T11:54:20Z"
lastReleaseAt: "2026-06-15T18:35:17Z"
status: "thriving"
tags: ["hidden_gem", "funded", "fork_magnet"]
healthScore: 93
undervaluedScore: 77
maintainers: ["renovate[bot]", "jrasm91", "bo0tzz"]
openGraphImageUrl: "https://opengraph.githubassets.com/9dc6fdc220b406fc0d84d8f78d016de5e1637527b69522213a73619b0a81a7fa/immich-app/static-pages"
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
