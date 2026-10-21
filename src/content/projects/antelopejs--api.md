---
repo: "AntelopeJS/api"
name: "api"
description: "A lightweight, flexible HTTP/WebSocket API module that implements the interface API of antelopejs."
readmeQualityOk: true
url: "https://github.com/AntelopeJS/api"
homepage: "https://antelopejs.com/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 6
recentReleases: 2
createdAt: "2025-05-08T20:00:50Z"
lastCommitAt: "2026-10-21T23:36:38Z"
lastReleaseAt: "2026-08-10T15:26:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 87
maintainers: ["Upd4ting", "github-actions[bot]", "Thomasims"]
openGraphImageUrl: "https://opengraph.githubassets.com/245f9bb97c0a9b81abfbbc365f12dfd0f62160884c3caf38f73faa8b2dc4bdb6/AntelopeJS/api"
---

# @antelopejs/api

The HTTP and WebSocket server of AntelopeJS, built on the Node.js `http`, `https` and `ws` servers.

## Interfaces

| Interface                                                                            | Documentation                                                            |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| [`@antelopejs/interface-api`](https://github.com/AntelopeJS/interface-api)           | [API](https://interfaces.antelopejs.com/docs/api/introduction)           |
| [`@antelopejs/interface-api-util`](https://github.com/AntelopeJS/interface-api-util) | [API Util](https://interfaces.antelopejs.com/docs/api-util/introduction) |

Controllers, routes, parameter injection, prefix and postfix handlers and WebSocket handlers are documented on the interface pages.

## Install

```bash
ajs project modules add @antelopejs/api
```

The command writes the module's default configuration: one HTTP server on `localhost:8080`. In a project whose modules import `@antelopejs/interface-api`, `ajs project modules install` also adds this module…
