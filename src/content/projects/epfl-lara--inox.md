---
repo: "epfl-lara/inox"
name: "inox"
description: "Solver for higher-order functional programs, used by Stainless"
readmeQualityOk: true
url: "https://github.com/epfl-lara/inox"
language: "Scala"
languages: ["Scala"]
languagePcts: [100]
stars: 99
forks: 24
openIssues: 13
closedIssues: 49
watchers: 11
contributors: 44
recentReleases: 0
createdAt: "2016-07-08T13:47:28Z"
lastCommitAt: "2026-10-23T09:32:33Z"
lastReleaseAt: "2021-04-15T14:44:29Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 83
undervaluedScore: 32
maintainers: ["samuelchassot", "sankalpgambhir", "kasiaMarek"]
openGraphImageUrl: "https://opengraph.githubassets.com/02f992ed36b2b88e96fdcd2c8fe7912b1185e82e40b3b7c27b659d21f8d2495a/epfl-lara/inox"
---

# Inox: Solver for Higher-Order Functional Programs

Inox is a solver for higher-order functional programs, providing first-class support for features such as:

- Recursive and first-class functions
- ADTs, integers, bitvectors, strings, set-multiset-map abstractions
- Quantifiers
- ADT invariants
- Dependent types

Interfacing with the solver can be done through the Scala API by constructing the AST for your query and feeding it to one of the solvers. For more information, see:
- The usage [tutorial](https://github.com/epfl-lara/inox/blob/HEAD/doc/tutorial.md) for using Inox as a library.
- The tree [interpolators](https://github.com/epfl-lara/inox/blob/HEAD/doc/interpolations.md) for easy tree construction/extraction.
- The [API](https://github.com/epfl-lara/inox/blob/HEAD/doc/API.md) for available solver/evaluator calls.
- The [trees](https://github.com/epfl-lara/inox/blob/HEAD/doc/trees.md) API and how to extend them.

## Add Inox as a Dependency

To use Inox as a Scala 3 dependency, refer to a specific git commit in your
`build.sbt` file as follows: 

```scala
def remoteProject(repo: String, version: String) = RootProject(uri(s"${repo}#${version}"))

// Choose a commit hash…
