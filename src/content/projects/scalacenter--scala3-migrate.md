---
repo: "scalacenter/scala3-migrate"
name: "scala3-migrate"
description: "A tool to help migrating from Scala 2 to Scala 3"
readmeQualityOk: true
url: "https://github.com/scalacenter/scala3-migrate"
homepage: "https://docs.scala-lang.org/scala3/guides/migration/scala3-migrate.html"
language: "Scala"
languages: ["Scala"]
languagePcts: [96]
topics: ["scala3", "tool", "scala"]
stars: 113
forks: 26
openIssues: 8
closedIssues: 35
watchers: 7
contributors: 18
recentReleases: 0
createdAt: "2020-09-09T07:44:38Z"
lastCommitAt: "2026-10-29T10:36:49Z"
lastReleaseAt: "2021-05-28T21:15:38Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 91
undervaluedScore: 35
maintainers: ["tgodzik", "scala-steward", "scala-center-steward[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/15bc6faedca71c19ac2db787e3152b42040cd6cc544ec7ad487f05838c6adc5a/scalacenter/scala3-migrate"
---

scala3-migrate
========

# Scala 3 migration plugin for sbt

## User documentation

The complete documentation of `sbt-scala3-migrate` can be found in [docs.scala-lang.org](https://docs.scala-lang.org/scala3/guides/migration/scala3-migrate.html).

## Usage

### Requirements 
- sbt 1.5 or higher
- java 8 or 11
- scala 2.13, preferred 2.13.15

### Installation
```
// project/plugins.sbt
addSbtPlugin("ch.epfl.scala" % "sbt-scala3-migrate" % "0.6.2")
```

### Porting the build

To port a build to Scala 3, run the following commands in order, in each project of the build: 
1. `migrateDependencies <project>` helps you update the list of `libraryDependencies`
2. `migrateScalacOptions <project>` helps you update the list of `scalacOptions`
3. `migrateSyntax <project>` fixes a number of syntax incompatibilities between Scala 2.13 and Scala 3 
4. `migrateTypes <project>` tries to make your code compile with Scala 3 by inferring a few types and resolving a few implicits.

## Contributions and feedbacks are welcome
The tool is still under development, and **we would love to hear from you**.
Every feedback will help us build a better tool: typos, clearer log messages, better documentation, bug…
