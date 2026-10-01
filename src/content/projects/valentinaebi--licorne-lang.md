---
repo: "ValentinAebi/licorne-lang"
name: "licorne-lang"
description: "Licorne is an experimental programming language exploring refinement types and language-based support for lightweight verification"
readmeQualityOk: true
url: "https://github.com/ValentinAebi/licorne-lang"
language: "Scala"
languages: ["Scala"]
languagePcts: [100]
topics: ["compiler", "programming-language", "refinement-types", "lightweight-verification"]
stars: 7
forks: 2
openIssues: 14
closedIssues: 7
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-09-05T21:17:52Z"
lastCommitAt: "2026-10-01T10:24:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 84
undervaluedScore: 67
maintainers: ["ValentinAebi"]
openGraphImageUrl: "https://opengraph.githubassets.com/e74e804e5e5d7681d103448b2e242278f70f2d6988d6294c6a3452e71d974acc/ValentinAebi/licorne-lang"
---

# The Licorne programming language 🦄

Licorne is an experimental programming language exploring refinement types and language-based support for lightweight verification.
It is primarily inspired from Kotlin and Scala.

The compiler is still only partially implemented. It supports parsing, IR generation, type inference, and type-checking. 
A backend to JVM bytecode is work in progress.

Some features that are already supported:
 - General refinement types: `Int with it % 2 == 0`
 - Dependent integer range types, treated as a restricted form of refinement types: `[0 ..< array.length()]`
 - Nullability aware types (non-nullability is partly treated as a refinement): `T?`
 - Function-wide bidirectional type inference (see for instance the `reverse` and `filter` methods in [the OOP lists example](https://github.com/ValentinAebi/licorne-lang/blob/HEAD/licorne-compiler/src/test/res/analyzer-tests/lists_oop_style.lic))
 - Smart casts (think of Kotlin's smart casts, but generalized to refinement types)
 - Automated type simplification
 - Constrained generics, with covariance and contravariance (like Kotlin or Scala): `Foo[TypeParam sub UpperBound]`
 - Union and intersection types (like…
