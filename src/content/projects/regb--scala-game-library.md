---
repo: "regb/scala-game-library"
name: "scala-game-library"
description: "Scala library for cross-platform game development"
readmeQualityOk: true
url: "https://github.com/regb/scala-game-library"
language: "Scala"
languages: ["Scala"]
languagePcts: [61]
topics: ["scala", "scala-library", "game-engine", "game-2d", "scalajs", "scala-native", "scala-android", "game", "game-3d", "game-dev"]
stars: 159
forks: 10
openIssues: 2
closedIssues: 3
watchers: 11
contributors: 6
recentReleases: 0
createdAt: "2016-05-27T23:31:28Z"
lastCommitAt: "2026-11-25T03:13:01Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 88
undervaluedScore: 39
maintainers: ["regb", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b0c4c86fcd601f75c79af894530354b018f91ef4fdac4b7f3dc905dfab99cc0d/regb/scala-game-library"
---

# SGL: Scala Game Library

Scala Game Library (SGL) is a library for developing cross-platform video games
in Scala. It provides a high-level API for building games, and can export games
to the Desktop, Android, iOS, and the web.

SGL is modular and provides both a minimal, lightweight abstraction over
platforms and a component-based GameObject engine. The engine is optional, and
SGL can also be used as a cross-platform toolkit.

## Objectives

SGL aims at providing a generic and cross-platform game API. The API provides
some layers of abstraction on top of the underlying systems, and a game written
using the API should be able to get compiled and run on each platform with very
litle platform-specific code. However, there are several non-goals of SGL:
