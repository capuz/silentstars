---
repo: "ymm-oss/fsl"
name: "fsl"
description: "AI-Native Formal Specification Language — a bounded model checker (Lark + Z3) built for LLM write/verify/repair loops."
readmeQualityOk: true
url: "https://github.com/ymm-oss/fsl"
language: "Rust"
languages: ["Rust"]
languagePcts: [81]
topics: ["bounded-model-checking", "formal-methods", "formal-specification", "llm", "model-checking", "python", "refinement", "verification", "z3"]
stars: 35
forks: 3
openIssues: 269
closedIssues: 663
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-06-15T21:04:42Z"
lastCommitAt: "2026-10-29T21:02:23Z"
lastReleaseAt: "2026-07-02T20:37:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 37
maintainers: ["rizumita"]
openGraphImageUrl: "https://opengraph.githubassets.com/169cfedd6f91aa8a5b86845a541db18251f73d4737a497dcd16137709aec7c37/ymm-oss/fsl"
---

# FSL — AI-Native Formal Specification Language

FSL is a formal specification language for application development, designed with
the primary goal of being **written, verified, and repaired by generative AI**.

The verifier is **`fslc`**, distributed as a native Rust executable with **Z3 bundled in**.
It performs **bounded model checking (BMC)** and **infinite-depth proofs via k-induction**
(plus a Z3-free explicit-state engine for the solver-independent path), and always returns
results as **machine-readable JSON**, for the LLM write → verify → repair loop. It also
includes `fslc scenarios` and `fslc testgen`, which generate integration-test scaffolds
from a spec.

Specs can be written in **three layered dialects — consulting (business) / requirements / design (spec)** —
chained via refinement so that requirement IDs propagate transparently across all diagnostics.
Non-functional requirements are also supported, down to SLAs (discrete time).

For the language specification, semantics, and output JSON see [`docs/manual/LANGUAGE.md`](https://github.com/ymm-oss/fsl/blob/HEAD/docs/manual/LANGUAGE.md);
for a map of all the documentation see…
