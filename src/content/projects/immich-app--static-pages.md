---
repo: "immich-app/static-pages"
name: "static-pages"
description: "Sites and packages for Immich"
readmeQualityOk: true
url: "https://github.com/immich-app/static-pages"
homepage: "https://immich.app"
language: "Svelte"
languages: ["Svelte", "TypeScript"]
languagePcts: [49, 47]
stars: 18
forks: 74
openIssues: 2
closedIssues: 5
watchers: 3
contributors: 107
recentReleases: 0
createdAt: "2024-07-01T17:38:28Z"
lastCommitAt: "2026-11-05T18:54:14Z"
lastReleaseAt: "2026-06-15T18:35:17Z"
status: "thriving"
tags: ["hidden_gem", "funded", "fork_magnet"]
healthScore: 92
undervaluedScore: 77
maintainers: ["renovate[bot]", "jrasm91", "bo0tzz"]
openGraphImageUrl: "https://opengraph.githubassets.com/44974fa38aea43c4d9023b00fb464adfb345c05b0193b27b4a351e343919bc0f/immich-app/static-pages"
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
