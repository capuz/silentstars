---
repo: "kubuszok/hearth"
name: "hearth"
description: "The first Scala macros' standard library"
readmeQualityOk: true
url: "https://github.com/kubuszok/hearth"
homepage: "https://scala-hearth.readthedocs.io"
language: "Scala"
languages: ["Scala"]
languagePcts: [100]
topics: ["macros", "scala", "metaprogramming", "scala-library", "scala-macros", "scala-native", "scala2", "scala3", "scalajs"]
stars: 166
forks: 9
openIssues: 6
closedIssues: 84
watchers: 3
contributors: 5
recentReleases: 2
createdAt: "2025-03-28T16:39:47Z"
lastCommitAt: "2026-11-13T18:29:45Z"
lastReleaseAt: "2026-10-04T16:11:07Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 96
undervaluedScore: 47
maintainers: ["MateuszKubuszok", "scala-steward", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/fb2fc52387f5f3347ce2272855268c686c4a348628ee7230fd9ed6cfdb54cdff/kubuszok/hearth"
discussionCount: 1
---

# Hearth

The first Scala macros' standard library.

Hearth helps you write robust, fast-to-compile, easy-to-maintain macros - for Scala 3, for Scala 2.13, or for both.

 - **corner cases already handled** - generic, opaque and singleton types, named tuples, enums, default values,
   recursive types - tested on Scala 2.13 and Scala 3, on JVM, Scala.js and Scala Native
 - **building blocks instead of compiler trees** - types, expressions, methods, case classes and enums, with error
   aggregation and logging built in
 - **integrate a library once** - a module on the classpath (e.g. for Cats, Iron or Refined) is picked up by every
   Hearth-based macro that asks Hearth about collections, options or wrapper types, with no extra imports
 - **single-version or cross-compiled** - Scala 3-only, Scala 2-only, or one macro for both; in single-version code the
   compiler's own API stays available
 - **general purpose** - type class derivation, optics, dependency injection, mocking, parsers and more
 - exhaustive documentation and no dependencies on other ecosystems

## Call for Feedback

Hearth is an evolution of the…
