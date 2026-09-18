---
repo: "formal-applied-math/formal-mathfin"
name: "formal-mathfin"
description: "Formally verified mathematical finance in Lean 4. Black–Scholes/Greeks/PDE, Itô calculus, FTAP/Girsanov, CRR→BS convergence, Merton jump-diffusion."
readmeQualityOk: true
url: "https://github.com/formal-applied-math/formal-mathfin"
language: "Lean"
languages: ["Lean"]
languagePcts: [96]
topics: ["black-scholes", "formal-verification", "lean4", "mathlib", "option-pricing", "quantitative-finance", "theorem-proving", "derivatives-pricing", "formal-methods", "ito-calculus"]
stars: 36
forks: 12
openIssues: 137
closedIssues: 30
watchers: 0
contributors: 8
recentReleases: 3
createdAt: "2026-05-08T17:45:52Z"
lastCommitAt: "2026-09-18T14:03:23Z"
lastReleaseAt: "2026-08-14T01:46:09Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 82
undervaluedScore: 39
maintainers: ["raphaelrrcoelho", "osalkutsan-godaddy", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/78cf90ac693211f95ccedfffc7a89a34408883fc15d3551f883394996ac6ba75/formal-applied-math/formal-mathfin"
discussionCount: 0
---

# Mathematical finance, formally verified

> A Lean 4 library building toward a **formal theory of mathematical finance** — every result
> machine-checked against [Mathlib](https://github.com/leanprover-community/mathlib4) and
> [Degenne's BrownianMotion](https://github.com/RemyDegenne/brownian-motion), with an exact statement of
> what is proved and what is assumed, and the deep connections between the field's pillars made
> *load-bearing* rather than decorative.

**`372` theorems · `359` delivery-ready · `0` sorries · axioms-clean · `lake build` is the proof.**

---

## What we're building

Formalized finance is usually a scattering of isolated results. The ambition here is a **theory**: prove
the Black–Scholes world, the Itô tower, the Fundamental Theorem of Asset Pricing, and the risk-measure
layer — then wire them together around the field's actual organizing principles, so that the
**architecture** is the artifact, not just the catalogue. "Top-notch" here is not *more theorems* — it is
the theorems organized around the field's spine, with the deep cross-connections proved.

Two commitments make that trustworthy:

- **The build is the proof.** A clean `lake build`…
