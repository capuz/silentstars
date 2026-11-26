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
stars: 8
forks: 2
openIssues: 23
closedIssues: 15
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-09-05T21:17:52Z"
lastCommitAt: "2026-11-26T15:23:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 87
undervaluedScore: 69
maintainers: ["ValentinAebi"]
openGraphImageUrl: "https://opengraph.githubassets.com/74d4eeacd6a77a9774413b742e466b8c52baca01acfa934ff409ddeae52708a5/ValentinAebi/licorne-lang"
---

# The Licorne programming language 🦄

Licorne is an experimental programming language exploring refinement types and language-based support for lightweight verification.
Its syntax is heavily inspired from Kotlin, of which Licorne can be considered a dialect. Beside Kotlin, Licorne draws some inspiration from Scala, which is also the implementation language of the compiler.

Some of Licorne's features:
 - Refinement types: `Int with it % 2 == 0`
 - Dependent integer range types, treated as a restricted form of refinement types: `[0 ..< array.length()]`
 - Nullability aware types (non-nullability is partly treated as a refinement): `T?`
 - Function-wide bidirectional type inference (see for instance the `reverse` and `filter` methods in [the OOP lists example](https://github.com/ValentinAebi/licorne-lang/blob/HEAD/licorne-compiler/src/test/res/analyzer-tests/lists_oop_style.lic))
 - Smart casts (think of Kotlin's smart casts, but generalized to refinement types)
 - Automated type simplification
 - Constrained generics, with covariance and contravariance: `Foo[out/in TypeParam : UpperBound super LowerBound]` (note that unlike Kotlin, Licorne uses square brackets instead of angle…
