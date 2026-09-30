---
repo: "evolution-gaming/kafka-flow"
name: "kafka-flow"
description: "library for reliable processing records received from kafka"
readmeQualityOk: true
url: "https://github.com/evolution-gaming/kafka-flow"
language: "Scala"
languages: ["Scala"]
languagePcts: [98]
topics: ["kafka", "kafka-streams", "scala", "cats", "cats-effect"]
stars: 23
forks: 13
openIssues: 11
closedIssues: 10
watchers: 11
contributors: 27
recentReleases: 0
createdAt: "2019-08-28T19:36:59Z"
lastCommitAt: "2026-09-30T09:56:13Z"
lastReleaseAt: "2022-09-05T09:51:17Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 86
undervaluedScore: 58
maintainers: ["scala-steward", "dependabot[bot]", "mr-git"]
openGraphImageUrl: "https://opengraph.githubassets.com/9d72a2d484da8495e2d64c8b99a370d5758ecdc1b0d8ffedd6a2f486e10c8ffb/evolution-gaming/kafka-flow"
---

# kafka-flow

## Microsite

https://evolution-gaming.github.io/kafka-flow

## Scala 3 compatibility
Starting from version `6.1.0` all of the modules are cross-compiled to Scala 3 except `kafka-flow-kafka-journal` which doesn't support Scala 3 yet.

## Setup

```scala
addSbtPlugin("com.evolution" % "sbt-artifactory-plugin" % "0.0.2")

lazy val version = "<version>" // see the latest one in the badge above or in Releases page 

libraryDependencies ++= Seq(
  "com.evolutiongaming" %% "kafka-flow" % version,
  // if you want to use Cassandra for storing persistent state
  "com.evolutiongaming" %% "kafka-flow-persistence-cassandra" % version,
  // if you want to use Kafka compact topic for storing persistent state
  "com.evolutiongaming" %% "kafka-flow-persistence-kafka" % version,
  // if you want to use predefined metrics
  "com.evolutiongaming" %% "kafka-flow-metrics" % version,
  // if you want to use kafka-journal integration
  "com.evolutiongaming" %% "kafka-flow-kafka-journal" % version,
)
```

## Release process
The release process is based on Git tags and makes use of [evolution-gaming/scala-github-actions](https://github.com/evolution-gaming/scala-github-actions) which uses…
