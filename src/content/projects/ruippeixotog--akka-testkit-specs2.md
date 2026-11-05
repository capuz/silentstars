---
repo: "ruippeixotog/akka-testkit-specs2"
name: "akka-testkit-specs2"
description: "Specs2 specifications and matchers for akka-testkit"
readmeQualityOk: true
url: "https://github.com/ruippeixotog/akka-testkit-specs2"
language: "Scala"
languages: ["Scala"]
languagePcts: [100]
stars: 9
forks: 10
openIssues: 0
closedIssues: 3
watchers: 2
contributors: 8
recentReleases: 0
createdAt: "2016-10-12T20:45:22Z"
lastCommitAt: "2026-11-05T00:21:57Z"
lastReleaseAt: "2016-11-03T00:21:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 88
undervaluedScore: 58
maintainers: ["scala-steward"]
openGraphImageUrl: "https://opengraph.githubassets.com/20782df18c587e4641dbb55d4becceaf194f489c4236d198edc25cbd64d5faea/ruippeixotog/akka-testkit-specs2"
---

# akka-testkit-specs2 [](https://travis-ci.org/ruippeixotog/akka-testkit-specs2) [](https://coveralls.io/github/ruippeixotog/akka-testkit-specs2?branch=master)

A small library for those who use [akka-testkit](http://doc.akka.io/docs/akka/current/scala/testing.html) in [specs2](http://etorreborre.github.io/specs2/) specifications. Provides idiomatic specs2 matchers for checking the correct reception of messages by test actors and probes, handling the provision and proper termination of test actor systems.

## Usage

To use akka-testkit-specs2 in an existing SBT project with Scala 2.13 or 3.2, add the following dependency to your `build.sbt`:

```scala
libraryDependencies += "net.ruippeixotog" %% "akka-testkit-specs2" % "0.4.1"
```

To use it in your specifications, just extend `AkkaSpecification`:

```scala
class MySpec extends AkkaSpecification {

  "MySpec" should {

    "provide a test actor and matchers for messages" in {
      testActor ! "hello"
      this must receive("hello")
    }
  }
}
```

If you can't extend classes in your specification, just mix-in the trait `AkkaSpecificationLike` (you just need to provide it an `ActorSystem`). If you only need the matchers, you can…
