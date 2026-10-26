---
repo: "cslib-community/complexitylib"
name: "complexitylib"
description: "Computational complexity theory in Lean built on top of CSLib."
readmeQualityOk: true
url: "https://github.com/cslib-community/complexitylib"
language: "Lean"
languages: ["Lean"]
languagePcts: [98]
stars: 6
forks: 4
openIssues: 65
closedIssues: 380
watchers: 0
contributors: 10
recentReleases: 0
createdAt: "2026-10-15T12:08:17Z"
lastCommitAt: "2026-10-26T20:54:40Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 63
maintainers: ["SamuelSchlesinger", "edemaine", "orbitingflea"]
openGraphImageUrl: "https://opengraph.githubassets.com/4e73f19e21b75dba6d22ab57fcdda1c60ed020dc7aacc72ac680c1f108d66fcf/cslib-community/complexitylib"
---

# Complexitylib

Complexitylib is a Lean 4 library of computational complexity theory, built on
[CSLib](https://github.com/leanprover/cslib) and Mathlib. It develops reusable arguments about
algorithms, resource bounds, reductions, lower bounds, and cryptographic security.

A central goal is to let you write recognizable functional programs and prove their efficiency
compositionally, with Turing-machine implementations justified underneath. Nonconstructive
mathematics and model-specific lower bounds also belong. Developments should establish useful
results or make those results easier to state, prove, and reuse.

Development is AI-assisted. Contributors are responsible for the mathematical statements,
source attribution, and maintainability of their changes. Lean checks proofs against their stated
definitions; independent review checks that those definitions and statements express the intended
mathematics. See [Contributing](https://github.com/cslib-community/complexitylib/blob/HEAD/CONTRIBUTING.md) to propose, implement, or review a development.

## Start here

| I want to… | Start with… |
| --- | --- |
| Certify functional programs and loops | [PolyTime…
