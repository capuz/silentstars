---
repo: "igor-vovk/cedi"
name: "cedi"
description: "cedi [tsedi] – Cats-Effect Dependency Injection library for Scala"
url: "https://github.com/igor-vovk/cedi"
language: "Scala"
languages: ["Scala"]
languagePcts: [100]
topics: ["dependency-injection", "scala", "cats-effect"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-07-03T06:11:29Z"
lastCommitAt: "2026-06-23T06:41:53Z"
lastReleaseAt: "2025-09-21T17:51:44Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 92
undervaluedScore: 59
maintainers: ["scala-steward", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6c7b07353b17b8ecf30099ba6702f71db5d6ed9f869868e67a9f0834147229b8/igor-vovk/cedi"
---

# cedi [tsedi] – Cats-Effect Dependency Injection library

A tiny library that makes dependency injection with [cats-effect](https://github.com/typelevel/cats-effect) simple.
This is a follow-up of
an [article](https://medium.com/@ivovk/dependency-injection-with-cats-effect-resource-monad-ad7cd47b977) I wrote about
the topic.

Usually, what you want from a dependency injection library is to be able to:

- Define dependencies in a single place
- Instantiate dependencies only when they are needed
- Ensure that dependencies are shut down in the right order when the application finishes
- Instantiate dependencies only once, even if they are accessed multiple times
- Support modularization of dependencies, so that you can have multiple dependency objects and combine them together

The traditional approach to dependency injection with cats-effect is to build a single for-comprehension that wires all
dependencies together. This approach is not very scalable and can become quite messy as the number of dependencies
grows.

The suggested approach with this library is to:

1. Define a `Dependencies` class that holds all the dependencies.
2. Instantiate an `Allocator` and pass it as a…
