---
repo: "ymm-oss/fsl"
name: "fsl"
description: "AI-Native Formal Specification Language — a bounded model checker (Lark + Z3) built for LLM write/verify/repair loops."
readmeQualityOk: true
url: "https://github.com/ymm-oss/fsl"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [71, 26]
topics: ["bounded-model-checking", "formal-methods", "formal-specification", "llm", "model-checking", "python", "refinement", "verification", "z3"]
stars: 18
forks: 2
openIssues: 129
closedIssues: 388
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-06-15T21:04:42Z"
lastCommitAt: "2026-08-25T04:10:18Z"
lastReleaseAt: "2026-07-02T20:37:57Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 50
maintainers: ["rizumita"]
openGraphImageUrl: "https://opengraph.githubassets.com/58d12c005bd73cbf3747d951e72b0051df283e17b83f3ba529a144dfc227c995/ymm-oss/fsl"
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

For the language specification, semantics, and output JSON see [`docs/LANGUAGE.md`](https://github.com/ymm-oss/fsl/blob/HEAD/docs/LANGUAGE.md);
for a map of all the documentation see…
