---
repo: "kinoplan/utils"
name: "utils"
description: "A set of tools that make working with the Scala ecosystem even better."
url: "https://github.com/kinoplan/utils"
language: "Scala"
languages: ["Scala"]
languagePcts: [99]
topics: ["scala", "utility", "tools", "utils"]
stars: 13
forks: 6
openIssues: 5
closedIssues: 73
watchers: 6
contributors: 16
recentReleases: 0
createdAt: "2021-02-08T13:12:50Z"
lastCommitAt: "2026-06-28T01:33:25Z"
lastReleaseAt: "2022-06-07T19:02:53Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 93
undervaluedScore: 70
maintainers: ["scala-steward", "kazievab", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/337080654/07658400-6a30-11eb-8728-7164466489a8"
---

# Utils

A set of various libraries that encapsulate the methods of working with Scala and the ecosystem
to facilitate re-development and use.

##### Contents

* [utils-zio-redisson](docs/zio/redisson/redisson.md)
* [utils-zio-sttp-opentelemetry](docs/zio/sttp/opentelemetry.md)
* [utils-zio-tapir-opentelemetry](docs/zio/tapir/opentelemetry.md)
* [utils-zio-opentelemetry](docs/zio/opentelemetry.md)

## Usage

Utils is available for Scala 3.3+, Scala 2.13 and Scala 2.12, on the JVM and JS platforms.

You can add a module to your build by adding the following line to `libraryDependencies`:

```scala
"io.kinoplan" %% "utils-${module}" % ${version}
```

Here is the complete list of published artifacts:

```scala
libraryDependencies ++= Seq(
  // base
  "io.kinoplan" %% "utils-chimney-zio-prelude" % ${version}, // JVM and Scala.js
  "io.kinoplan" %% "utils-circe-reactivemongo-bson" % ${version}, // JVM only
  "io.kinoplan" %% "utils-circe-zio-prelude" % ${version}, // JVM and Scala.js
  "io.kinoplan" %% "utils-date" % ${version}, // JVM and Scala.js
  "io.kinoplan" %% "utils-http4s-server" % ${version}, // JVM and Scala.js
  "io.kinoplan" %% "utils-integration-check" % ${version}, //…
