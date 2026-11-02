---
repo: "greenflagged/herdr-greenflagged"
name: "herdr-greenflagged"
description: "Show a dependency panel with Greenflagged status in herdr"
readmeQualityOk: true
url: "https://github.com/greenflagged/herdr-greenflagged"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["herdr-mod"]
stars: 9
forks: 0
openIssues: 3
closedIssues: 6
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-10-30T16:18:59Z"
lastCommitAt: "2026-11-02T15:17:50Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 91
undervaluedScore: 45
maintainers: ["seanmadden"]
openGraphImageUrl: "https://opengraph.githubassets.com/a4bcac766de253ed332cd8301b3c0aaa9e3c73d4d18e3054e4a8719fbb5982ae/greenflagged/herdr-greenflagged"
---

# Greenflagged for Herdr

A [Herdr](https://herdr.dev) panel that follows the terminal you're working in, finds its
`package.json`, and shows each direct dependency's [Greenflagged](https://greenflagged.dev) status.
The problems come first, and the greenflagged packages fold away behind a count.

npm only for now. In a Python project the panel shows a plain tree of its dependencies, read from
`uv.lock` or `poetry.lock`, with no verdicts, and sends nothing. A Go project gets the same plain
tree, read from `go.mod` alone: its direct modules, then its indirect ones in a group. A Java or
Kotlin project gets its direct dependencies from `pom.xml` or the Gradle build file, without running
Maven or Gradle, plus the versions in `gradle.lockfile` when there is one. In a Rust project it says
Greenflagged doesn't check that language yet. Python verdicts follow once Greenflagged's PyPI audit
is live.

## What it looks like

The panel opens on a project with one blocked dependency and suggests a replacement for it:

Swapping `request` for `@cypress/request` clears the block, and the panel updates by itself:

Moving the other three to the suggested versions greenflags every dependency:

##…
