---
repo: "softwaremill/retry"
name: "retry"
description: "because you should never give up, at least not on the first try"
readmeQualityOk: true
url: "https://github.com/softwaremill/retry"
homepage: "https://softwaremill.com/open-source"
language: "Scala"
languages: ["Scala"]
languagePcts: [100]
topics: ["scala", "retry", "future", "scalajs"]
stars: 360
forks: 36
openIssues: 6
closedIssues: 19
watchers: 30
contributors: 26
recentReleases: 0
createdAt: "2013-04-25T03:03:46Z"
lastCommitAt: "2026-10-06T10:42:01Z"
lastReleaseAt: "2022-09-13T17:12:49Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 90
undervaluedScore: 22
maintainers: ["pierscin", "adamw"]
openGraphImageUrl: "https://opengraph.githubassets.com/53b171bb54df54e2055d06be8908e8b22169d3825c491bebb149bf622201fe20/softwaremill/retry"
---

# retry

don't give up

## install

With sbt, add the following to your project's build.sbt

```scala
libraryDependencies += "com.softwaremill.retry" %% "retry" % "0.3.6"
```
## usage

Applications fail. Network connections drop. Connections timeout. Bad things happen.

Failure to address this will cause other bad things to happen. Effort is the measurement of how hard you try.

You can give your application perseverance with retry.

Retry provides interfaces for common retry strategies that operate on Scala [Futures][fut].

Basic usage requires three things

- an implicit execution context for executing futures 
- a definition of [Success](#defining-success) encode what "success" means for the type of your future
- a block of code that results in a Scala [Future][fut].

Depending on your strategy for retrying a future you may also need an [odelay.Timer][timer] for asynchronously scheduling followup attempts

Retry provides a set of defaults that provide `retry.Success` definitions for [Option][option], [Either][either], [Try][try], and a partial function (defined with Success.definedAt(partialFunction)) out of the box.

```scala
import…
