---
repo: "Mumunu-team/mununu"
name: "mununu"
description: "RUST library for verification"
readmeQualityOk: true
url: "https://github.com/Mumunu-team/mununu"
homepage: "https://mumunu-team.github.io/mununu/"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
stars: 13
forks: 1
openIssues: 2
closedIssues: 144
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-16T13:19:42Z"
lastCommitAt: "2026-11-07T22:51:09Z"
lastReleaseAt: "2026-05-02T21:21:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 58
maintainers: ["vscorza"]
openGraphImageUrl: "https://opengraph.githubassets.com/020ee58abf41b371ae02a9ed6783dfce313b4bb21c0b1acaf9aaaa35e5e08300/Mumunu-team/mununu"
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
