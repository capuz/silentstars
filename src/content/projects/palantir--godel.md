---
repo: "palantir/godel"
name: "godel"
description: "Go tool for formatting, checking, building, distributing and publishing projects"
readmeQualityOk: true
url: "https://github.com/palantir/godel"
language: "Go"
languages: ["Go"]
languagePcts: [93]
topics: ["octo-correct-managed"]
stars: 336
forks: 36
openIssues: 14
closedIssues: 98
watchers: 255
contributors: 50
recentReleases: 0
createdAt: "2016-12-02T03:11:54Z"
lastCommitAt: "2026-07-24T06:09:22Z"
lastReleaseAt: "2017-04-24T08:35:58Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 95
undervaluedScore: 34
maintainers: ["svc-excavator-bot", "svc-autorelease", "tabboud"]
openGraphImageUrl: "https://opengraph.githubassets.com/88c9c5e547ea9afdd9ec9111742d8a9ddf76b620b3943ee284f2eba1ed007e56/palantir/godel"
---

</p>

gödel
=====

gödel is a Go build tool that provides tasks for configuring, formatting, checking, testing, building and publishing Go
projects in a declarative, consistent and reproducible manner across different platforms and environments. gödel can be
used in both local development environments and for verifying the correctness of project in CI environments. gödel uses
declarative configuration to define the parameters for a project and provides an executable that orchestrates build
tasks using standard Go commands. It centralizes project configuration and eliminates the need for custom build scripts
that conflate configuration with logic. gödel is designed to be portable, fast and lightweight -- adding it to a project
consists of copying a single file and directory into the project and adds less than 50kb of version-controlled material.

gödel is also highly extensible and configurable. The core functionality of gödel is provided by plugins and assets,
and it is easy to write new plugins or assets and to configure a gödel instance to use custom plugins or assets as
needed.

Features
--------
The following features are provided by a default gödel installation (either as…
