---
repo: "titpetric/platform"
name: "platform"
description: "Platform: an experiment in modularity with Go"
readmeQualityOk: true
url: "https://github.com/titpetric/platform"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-10-25T13:05:54Z"
lastCommitAt: "2026-09-14T09:12:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 73
undervaluedScore: 49
maintainers: ["titpetric"]
openGraphImageUrl: "https://opengraph.githubassets.com/6df55ae3b86876cc94311edb3a23cad362beae150f2597c864002c866f4e22e3/titpetric/platform"
---

# platform - A modular system for building Go applications

## Motivation

The `platform` package is an extensible, modular system for building HTTP servers and sidecar services in Go.

It provides a global registry for modules and middleware, a lifecycle for graceful shutdown, named database connections, and a `SIGHUP` reload that replaces the running platform without dropping the socket, allowing you to structure services as composable, testable modules.

Application examples, with database use:

- A monolithic app with modules: [titpetric/platform-app](https://github.com/titpetric/platform-app).
- Extended `titpetric/platform-app` for a Mailing list manager app: [titpetric/platform-maillist](https://github.com/titpetric/platform-maillist).

Status: the app and maillist packages still need implementation surface.

## Coverage

| Status | Package                            | Coverage | Cognitive | Lines |
|--------|------------------------------------|----------|-----------|-------|
| ✅     | titpetric/platform                 | 89.25%   | 122       | 1041  |
| ✅     | titpetric/platform/cmd             | 46.70%   | 2         | 30    |
| ✅     | titpetric/platform/cmd/platform…
