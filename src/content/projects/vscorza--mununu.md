---
repo: "vscorza/mununu"
name: "mununu"
description: "RUST library for verification"
url: "https://github.com/vscorza/mununu"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-03-16T13:19:42Z"
lastCommitAt: "2026-06-23T23:30:06Z"
lastReleaseAt: "2026-05-02T21:21:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 53
maintainers: ["vscorza"]
openGraphImageUrl: "https://opengraph.githubassets.com/9774e1ee16400a705a548fa7512e91fd73607132a670fec5b27e72302be78d30/vscorza/mununu"
---

# Mununu

**Formal verification and controller synthesis for reactive systems**

**[Video Tutorials](https://www.youtube.com/watch?v=PovNx1rWOy8&list=PL8lIyan4cdjWOUZy32IKu4Yc3Ivi1_YLZ)** &mdash; Watch the Mununu tutorial series on YouTube

## What is Mununu?

Mununu is a verification tool for analyzing and synthesizing controllers for reactive systems modeled as Compositional Labeled Transition Systems (CLTS). It evaluates mu-calculus and LTL properties, performs controller synthesis, and supports compositional modeling of concurrent systems through a dedicated DSL.

## Features

- **CTXDSL** &mdash; A domain-specific language for defining automata, compositions, properties, and controllers with enum types, parameterized automata (process templates), and state groups/wildcards
- **Mu-calculus evaluation** &mdash; Fixpoint-based property verification with bitvec-backed state sets
- **LTL support** &mdash; Linear temporal logic formulas automatically translated to mu-calculus
- **GR(1) specifications** &mdash; Generalized Reactivity(1) properties for reactive synthesis
- **Composition** &mdash; Synchronous, asynchronous, and superset composition of CLTS components
- **Controller…
