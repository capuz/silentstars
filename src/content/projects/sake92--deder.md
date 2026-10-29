---
repo: "sake92/deder"
name: "deder"
description: "Config based client-server JVM build tool"
readmeQualityOk: true
url: "https://github.com/sake92/deder"
homepage: "https://sake92.github.io/deder/"
language: "Scala"
languages: ["Scala"]
languagePcts: [86]
topics: ["build-tool", "java", "scala", "scalajs", "scalanative"]
stars: 21
forks: 1
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-11-14T17:55:07Z"
lastCommitAt: "2026-10-29T14:07:25Z"
lastReleaseAt: "2026-03-12T00:21:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 47
maintainers: ["sake92", "github-actions[bot]", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/d2af2b4aa5b137426aa153843d02e4840263be1b801bd85cda3fcd85cbaa65ac/sake92/deder"
---

# Deder

Config based, concurrent-first, client-server JVM build tool.

:construction: Work in progress, expect some rough edges and breaking changes.

Feedback and [contributions](https://github.com/sake92/deder/blob/HEAD/CONTRIBUTING.md) are very welcome! :heart:

## Demos

### Hello world

### Watch mode

## Current status and features
- **CLI client** with shell completions
- **BSP client** with support for VSCode and IntelliJ
- **explore the build** with listing modules, tasks, and execution plans (visualized as DOT graphs)
- **package** module as JAR, uber JAR, Scala.js bundle, Scala Native executable, GraalVM native executable
- **publish** module locally to ~/.m2 and to Maven Central
- executing **tests**
- **REPL** (scala and jshell)
- **watch mode** with **concurrent execution** in multiple terminals
- **import from sbt**
- **OTEL** tracing support
- **plugins** support with **automatic reloading**

## Concepts
- **project** is the root of your git repo
- **module** is a "subproject", like `common`/`frontend`/`app`..
- **task** is something you can run *on a module*, like `compile`/`test`/`run`/`assembly`..

The…
