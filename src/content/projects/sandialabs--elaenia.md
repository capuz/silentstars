---
repo: "sandialabs/elaenia"
name: "elaenia"
description: "Automated Error Analysis of Numerical Software for High-Consequence Systems"
url: "https://github.com/sandialabs/elaenia"
language: "Haskell"
languages: ["Haskell", "OCaml", "C"]
languagePcts: [29, 25, 23]
topics: ["floating-point", "formal-methods", "snl-other", "scr-3087"]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2024-10-28T20:00:18Z"
lastCommitAt: "2026-06-27T00:36:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 65
undervaluedScore: 34
maintainers: ["sampollard"]
openGraphImageUrl: "https://opengraph.githubassets.com/90c17f70086feac5977c5126b3dc3ada05db3ed1b7f26821b1345b4fe9912661/sandialabs/elaenia"
---

# Elaenia: Automated Error Analysis of Numerical Software for High-Consequence Systems

This repository provides tools and techniques for automated
floating-point error analysis of C programs with the goal of making it
easier to specify and verify behavior of numerics-heavy C programs, with
a focus on embedded systems.

## Structure of this Repository

This project began with exploration into a Frama-C plug-in. We soon
realized that the ReFlow project provides better opportunities for
improvement rather than writing our own Frama-C plug-ins. This is now
maintained as a fork for [ReFlow](https://github.com/nasa/reflow).

- `examples` - example functions for analysis. They are ordered in
  roughly increasing complexity as follows
    1. 01_straightline - No control flow, no transcendentals.
    2. 02_tricky       - Edge cases with scalars and control flow
    3. 03_vectors      - No control flow, but operations on vectors
    4. 04_matrices     - Operations on matrices
    5. 05_kalman       - Various Kalman filter examples

- `acsl` - Proposed language extensions for the ANSI C Specification
  Language (ACLS) to better support compositional floating-point
  reasoning.

-…
