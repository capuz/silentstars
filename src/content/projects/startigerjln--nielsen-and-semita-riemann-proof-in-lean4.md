---
repo: "startigerjln/Nielsen-and-Semita-Riemann-Proof-in-Lean4"
name: "Nielsen-and-Semita-Riemann-Proof-in-Lean4"
description: "Proof of the Riemann Hypothesis in Lean4"
readmeQualityOk: true
url: "https://github.com/startigerjln/Nielsen-and-Semita-Riemann-Proof-in-Lean4"
language: "Lean"
languages: ["Lean"]
languagePcts: [100]
stars: 9
forks: 2
openIssues: 6
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-11-12T03:22:13Z"
lastCommitAt: "2026-11-13T18:31:59Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 39
maintainers: ["startigerjln"]
openGraphImageUrl: "https://opengraph.githubassets.com/c3323c4504b94bc443f8ef1ff1d8187b13b0d20e3b3e2a91a599f2ebee2cf1a9/startigerjln/Nielsen-and-Semita-Riemann-Proof-in-Lean4"
---

# The Proof of the Riemann Hypothesis

J. L. Nielsen and L. Semita, Center for Topological Physics (2025)

Lean 4 + Mathlib formalization. Zero sorry, zero manuscript axioms, zero hypotheses on the final theorem.

## Overview

We resolve the Riemann Hypothesis through three independent proofs formalized in Lean 4 with Mathlib. Every axiom is either proved from Mathlib or is a published theorem with a standard citation. All novel claims are proved as Lean theorems.

The argument identifies a structural obstruction between arithmetic and analytic formulations of RH within ZFC, constructed from the compactness theorem (Chang and Keisler 1990), the overspill principle (Kaye 1991), Mergelyan's approximation theorem (1951), the Mertens-Schoenfeld bounds (1874, 1976), and Perron's contour method (1908). The round-trip translation of RH through its analytic encoding introduces Pi2 uniformity quantifiers that fail in nonstandard models where the Pi1 arithmetic statement holds.

Proof I: RH is independent of ZFC and true in the standard model, via the obstruction and Kreisel's observation on Pi1 sentences. Proof II: RH is provable in ZFC + Large Cardinal Analytic Completeness, where…
