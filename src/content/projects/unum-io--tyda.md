---
repo: "unum-io/tyda"
name: "tyda"
description: "Typed Dataset api for Scala 3"
url: "https://github.com/unum-io/tyda"
language: "Scala"
languages: ["Scala"]
languagePcts: [98]
stars: 6
forks: 6
openIssues: 28
closedIssues: 7
watchers: 0
contributors: 4
recentReleases: 6
createdAt: "2026-05-26T12:33:27Z"
lastCommitAt: "2026-06-26T06:46:24Z"
lastReleaseAt: "2026-06-22T11:59:43Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 78
undervaluedScore: 66
maintainers: ["eejbyfeldt", "dahlbaek", "shambala-ifmo"]
openGraphImageUrl: "https://opengraph.githubassets.com/e8e86c1848eebef36e1d81113eef67ca302300a69db63143f39abdad0cac5006/unum-io/tyda"
---

# Tyda

Tyda is a type-safe Dataset library for Scala 3. It provides a fully type-safe expression API that compiles to multiple execution engines — including Spark and an in-process engine for fast unit tests.

## Why Tyda?

Spark's column API loses type information at compile time, forcing you to cast results and discover errors at runtime. Tyda solves this with an expression API that is checked by the compiler, so missing columns and type mismatches are caught before the job runs.

```scala
import com.choreograph.tyda.Dataset
import com.choreograph.tyda.functions.explode

case class Person(name: String, age: Int)
val persons: Dataset[Person] = Dataset.from(Seq(Person("Alice", 30), Person("Bob", 25)))

// Type-safe: the compiler knows this produces Dataset[String]
val names: Dataset[String] = persons.select(_.name)

// Joins use lambdas — no string column names
case class User(id: Long, name: String, age: Int, location: Option[String])
case class Event(id: Long, userId: Long, eventType: String)
val joined: Dataset[(User, Event)] =
  users.join(events, (u, e) => u.id == e.userId)

// Option is used for nullable values, not null
val withLocation: Dataset[(Long, String)] =…
