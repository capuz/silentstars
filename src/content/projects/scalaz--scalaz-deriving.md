---
repo: "scalaz/scalaz-deriving"
name: "scalaz-deriving"
description: "Principled, fast, typeclass derivation."
readmeQualityOk: true
url: "https://github.com/scalaz/scalaz-deriving"
language: "Scala"
languages: ["Scala"]
languagePcts: [100]
topics: ["scalaz", "macros", "compiler-plugin", "typeclasses"]
stars: 54
forks: 11
openIssues: 4
closedIssues: 11
watchers: 9
contributors: 16
recentReleases: 0
createdAt: "2018-07-08T05:47:05Z"
lastCommitAt: "2026-07-04T22:21:40Z"
lastReleaseAt: "2019-08-18T08:26:17Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 92
undervaluedScore: 50
maintainers: ["scalaz-bot[bot]", "dependabot[bot]", "xuwei-k"]
openGraphImageUrl: "https://opengraph.githubassets.com/cea6e120ad5b1f358dd979edd5fb2d22dbf20eb1be10d5a4a91e1e0e660efb80/scalaz/scalaz-deriving"
---

`scalaz-deriving` makes it easy to derive typeclass instances for your data types. The benefits are:

- [much faster compiles](https://github.com/softwaremill/magnolia/pull/45)
- simpler implicit rules (less time fighting the compiler)
- easy to write derivation logic for your own typeclasses

There are two independent and complementary parts to this library:

- a `@deriving` annotation to easily add `implicit` typeclass instances to companion objects. This macro is compatible with [magnolia](https://github.com/softwaremill/magnolia), [shapeless generic derivation](http://fommil.com/scalax15/), and hand-rolled derivers (e.g. `play-json`). `@deriving` **does not depend on scalaz**.
- `scalaz-deriving`, a principled way for typeclass authors to define typeclass derivations, plus derivations for some `scalaz-core` typeclasses (e.g. `Equal`, `Monoid`).

**NOTE: Bug reports and feature requests can be filed in the "Pull Request" tab above.** Issues filed in the issue tracker are considered documentary at best. This is maintained but unsupported free software; tickets will be resolved only if someone writes the code. (That someone can be you!)

**Table of Contents**

- [Compiler…
