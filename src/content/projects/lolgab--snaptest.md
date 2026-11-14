---
repo: "lolgab/snaptest"
name: "snaptest"
description: "Snapshot testing for Scala: munit, ScalaTest, uTest, specs2, weaver and ZIO Test, on the JVM, Scala.js and Scala Native"
readmeQualityOk: true
url: "https://github.com/lolgab/snaptest"
homepage: "https://lolgab.github.io/snaptest"
language: "Scala"
languages: ["Scala"]
languagePcts: [77]
topics: ["cats-effect", "munit", "scala", "scala-js", "scala-native", "scalatest", "snapshot-testing", "testing", "zio-test"]
stars: 14
forks: 5
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2021-02-10T20:53:38Z"
lastCommitAt: "2026-11-14T10:41:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 45
maintainers: ["lolgab"]
openGraphImageUrl: "https://opengraph.githubassets.com/071fcc178d77653eb137fd1d5ba5d50346e4ab6209b469d522c4d473efddf249/lolgab/snaptest"
---

# snaptest

Snapshot testing for Scala, inspired by [Jest](https://jestjs.io/docs/snapshot-testing)
and [insta](https://insta.rs). Snapshots are stored as generated Scala sources,
so build tools pick up their changes without any configuration.

Published for Scala 3.9+, on the JVM, Scala.js 1 and Scala Native 0.5.

Documentation: https://lolgab.github.io/snaptest/

| Test framework | Artifact | Status |
|----------------|----------|--------|
| [munit](https://scalameta.org/munit/) | `snaptest-munit` | available |
| [ScalaTest](https://www.scalatest.org) | `snaptest-scalatest` | available |
| [uTest](https://github.com/com-lihaoyi/utest) | `snaptest-utest` | available |
| [specs2](https://etorreborre.github.io/specs2/) | `snaptest-specs2` | available |
| [munit-cats-effect](https://github.com/typelevel/munit-cats-effect) | `snaptest-munit-cats-effect` | available |
| [weaver](https://typelevel.org/weaver-test/) | `snaptest-weaver` | available |
| [ZIO Test](https://zio.dev/reference/test/) | `snaptest-zio` | available |

`snaptest-core` holds the framework-independent parts, to integrate other test
frameworks.

## Getting started

After adding the `snaptest-munit` dependency:…
