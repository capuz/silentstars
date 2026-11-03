---
repo: "kubuszok/kindlings"
name: "kindlings"
description: "Hearth fire starter - incubator/dogfooding for Hearth-based macro libraries"
readmeQualityOk: true
url: "https://github.com/kubuszok/kindlings"
homepage: "https://kindlings.readthedocs.io"
language: "Scala"
languages: ["Scala"]
languagePcts: [100]
topics: ["scala", "scala-3", "scala-js", "scala-native", "typeclass-derivation"]
stars: 68
forks: 7
openIssues: 1
closedIssues: 25
watchers: 2
contributors: 5
recentReleases: 2
createdAt: "2025-11-24T17:17:55Z"
lastCommitAt: "2026-11-03T12:47:03Z"
lastReleaseAt: "2026-10-04T16:11:40Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 53
maintainers: ["MateuszKubuszok", "scala-steward", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/83db7c5cc4ef0797f3f4859d23e1a3f129d83c54982c70d78fa0aff0d7a21213/kubuszok/kindlings"
discussionCount: 1
---

# Kindlings

Type class derivation that compiles faster, runs faster, and works the same on Scala 2.13 and Scala 3. Drop-in replacements for derivation in Circe, Jsoniter Scala, Avro, and more — built on Hearth, powered by macros, free of the trade-offs you've learned to accept.

## Why Kindlings?

Most Scala libraries derive type class instances using Shapeless (Scala 2), Scala 3 Mirrors, or Magnolia. These approaches work, but they come with trade-offs that compound as your project grows: slow compilation, poor error messages, runtime overhead from intermediate representations, and API fragmentation between Scala 2 and Scala 3.

Kindlings takes a different path. Built on [Hearth](https://github.com/kubuszok/hearth), it uses macros to generate code that is closer to what you'd write by hand — while providing a better developer experience than any of the alternatives.

### One API across Scala 2.13 and Scala 3

No conditional imports, no platform-specific code. Your derivation calls look the same regardless of the Scala version. Migration between Scala 2.13 and Scala 3 requires zero changes to your derivation code.

### Automatic derivation without the usual cost

Traditional…
