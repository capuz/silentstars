---
repo: "matejcerny/pgmq4s"
name: "pgmq4s"
description: "Scala 3 client for pgmq (Postgres Message Queue)"
readmeQualityOk: true
url: "https://github.com/matejcerny/pgmq4s"
homepage: "https://matejcerny.github.io/pgmq4s/"
language: "Scala"
languages: ["Scala"]
languagePcts: [100]
topics: ["pgmq", "queue", "scala3"]
stars: 39
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-02-26T11:01:21Z"
lastCommitAt: "2026-10-19T09:15:01Z"
lastReleaseAt: "2026-03-30T15:41:54Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 82
undervaluedScore: 22
maintainers: ["scala-steward", "matejcerny"]
openGraphImageUrl: "https://opengraph.githubassets.com/0b9afe01cc42e4dce0bf19c2fe4957ab3a887bfbf9941d9092a5622160e80ea2/matejcerny/pgmq4s"
---

# <img src="docs/_assets/images/logo.png" alt="pgmq4s" height="40" style="padding-top:16px" /> pgmq4s

Scala 3 client for [pgmq](https://github.com/pgmq/pgmq) (Postgres Message Queue).

> **Note:** This library is under active development. The API may contain breaking changes between releases.

Requires **PGMQ v1.11.0+** (topic-based routing). Core messaging works with v1.10.0.

Supports JVM, Scala.js, and Scala Native.

Database backends:
- Anorm
- Doobie
- Skunk
- Slick
- Kyo (kyo-sql)

JSON codecs
- Circe
- Jsoniter-scala
- Play JSON
- Spray JSON
- uPickle
- Kyo (kyo-schema-json)

Need a specific DB backend or JSON bridge? Create an issue [here](https://github.com/matejcerny/pgmq4s/issues/new).

## Architecture

pgmq4s provides two main traits:

- **`PgmqClient[F]`** — message operations (send, read, pop, archive, delete)
- **`PgmqAdmin[F]`** — queue management and observability (create, drop, list, metrics)

Each database backend provides both: e.g. `DoobiePgmqClient` + `DoobiePgmqAdmin`.

## Getting Started

Add to your `build.sbt` (replace `<version>` with the latest version shown in the badge above):

```scala
libraryDependencies ++= Seq(
  "io.github.matejcerny" %%…
