---
repo: "solomon-b/lambda-calculus-hs"
name: "lambda-calculus-hs"
description: "A bestiary of lambda calculus"
url: "https://github.com/solomon-b/lambda-calculus-hs"
language: "Haskell"
languages: ["Haskell"]
languagePcts: [99]
stars: 77
forks: 5
openIssues: 2
closedIssues: 4
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2020-03-02T05:28:42Z"
lastCommitAt: "2026-06-29T07:23:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 87
undervaluedScore: 41
maintainers: ["solomon-b"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc478433f27375086ebbe5bd676d561b4cdd61070d385f547dec2989f82281ae/solomon-b/lambda-calculus-hs"
---

# Lambda Calculus Examples

An exploration of Lambda Calculus, programming language design, and type theory
starting from a foundation of Bidirectional Typechecking and Normalization by
Evaluation.

The `foundation` series sets the stage with a cohesive STLC implementation we
can build on. The `feature museum` then grafts on a variety of popular language
features. `program` and `proof` build up System Fomega and MLTT based systems
respectively.

Every module is a standalone executable written in a direct style of Haskell
with tests. We skip parsing for brevity but include pretty printers from the
concrete syntax to a human readable notation to make the examples easier to
read.

Each section will eventually conclude with a capstone project implementing a
full language including parsing and a repl.

The goal is to provide best practices examples of all the features you might
want to include in your custom language in one place.

1. Foundation
  - [X] Simply Typed Evaluation
  - [X] Bidirectional Typechecking
  - [X] Normalization By Evaluation
  - [X] Elaboration
  - [X] Typed Holes
  - [X] First Order Unification
2. Feature Museum
  - [X] Records
  - [X] System T
  - [X] Nominal…
