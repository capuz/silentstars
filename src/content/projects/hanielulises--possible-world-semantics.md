---
repo: "HanielUlises/Possible-World-Semantics"
name: "Possible-World-Semantics"
description: "A Lean 4 formalization of possible-world and situation semantics, following the higher-order modal and situation-theoretic tradition of Zalta, Fine, and Barwise–Perry."
readmeQualityOk: true
url: "https://github.com/HanielUlises/Possible-World-Semantics"
homepage: "https://hanielulises.github.io/Possible-World-Semantics/"
language: "Lean"
languages: ["Lean"]
languagePcts: [100]
topics: ["automated-reasoning", "graph-theory", "lattice", "modal-logic", "theorem-proving"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-27T18:00:30Z"
lastCommitAt: "2026-11-19T05:01:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 65
undervaluedScore: 24
maintainers: ["HanielUlises"]
openGraphImageUrl: "https://opengraph.githubassets.com/43e1418d37a84f2ca22c2f4474df42ed0cd2f6788ce9c9b7c3795b74de7e767c/HanielUlises/Possible-World-Semantics"
---

# Possible-World-Semantics

> A machine-checked theory of possible worlds, situations, and modal necessity — formalizing *what could have been*, and proving it, in Lean 4.

A Lean 4 formalization of possible-world and situation semantics, following the higher-order modal and situation-theoretic tradition of Zalta, Fine, and Barwise–Perry. Every theorem that builds is checked by the Lean kernel, and every remaining gap is tabulated as an open proof obligation or a [known issue](#known-issues). The current axioms have a known collapse: see [KI-1](#ki-1--truth-clauses-collapse-the-situation-lattice) before relying on any result about partial situations.

## Architecture

The development is layered: an ontological **Grounding** core fixes the primitives and their algebra, a **Modality** layer defines `□` and `◊` over an accessibility relation and derives S5, and a **Situation** layer builds worlds and their meet-semilattice on top.
