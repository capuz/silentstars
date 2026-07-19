---
repo: "max-leuthaeuser/SCROLL"
name: "SCROLL"
description: "SCROLL - SCala ROLes Language (A DSL based on Scala for role-based programming and dispatch)"
readmeQualityOk: true
url: "https://github.com/max-leuthaeuser/SCROLL"
language: "Scala"
languages: ["Scala"]
languagePcts: [100]
topics: ["scala", "dispatch", "dsl", "meta-programming", "role-oriented", "roles"]
stars: 29
forks: 11
openIssues: 0
closedIssues: 19
watchers: 4
contributors: 7
recentReleases: 0
createdAt: "2014-04-16T09:33:09Z"
lastCommitAt: "2026-07-19T06:13:13Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 97
undervaluedScore: 63
maintainers: ["max-leuthaeuser", "scala-steward"]
openGraphImageUrl: "https://opengraph.githubassets.com/b249d2e570a104ad87bcbca307e133b46b5c10427535ecfec7b119007ce5a2a9/max-leuthaeuser/SCROLL"
---

SCROLL
======
*SCala ROLes Language*

## Introduction ##

*SCROLL* is an embedded method-call interception domain-specific language (DSL) tailored to the features needed to implement roles and resolve the ambiguities arising with regard to dynamic dispatch. The library approach together with an implementation with Scala was chosen for mainly the following reasons: it allows focusing on role semantics, supports a customizable, dynamic dispatch at runtime, and allows for a terse, flexible representation. No additional tooling (like a custom lexer, parser or compiler) is needed to execute the *SCROLL* meta-object protocol (MOP). It is purely embedded in the host language, thus uses the standard Scala compiler to generate Java Virtual Machine bytecode. With that, the implementation is reasonable small (∼1400 lines of code) and maintainable. The programming interface with Scala's  exible syntax holds the property of being easily readable, even to inexperienced users.

See the [wiki](https://github.com/max-leuthaeuser/SCROLL/wiki) for further information.

## Basic Implementation Concepts ##

To provide a DSL for the pure embedding of roles in structured contexts, *SCROLL* requires the…
