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
stars: 17
forks: 1
openIssues: 111
closedIssues: 356
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-06-15T21:04:42Z"
lastCommitAt: "2026-08-12T05:14:31Z"
lastReleaseAt: "2026-07-02T20:37:57Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 50
maintainers: ["rizumita"]
openGraphImageUrl: "https://opengraph.githubassets.com/348401e5a5e08334d339f69e60d53f0aaed4bf27823f34627b1d0b45c534cd3d/ymm-oss/fsl"
---

# FSL — AI-Native Formal Specification Language

FSL is a formal specification language for application development, designed with
the primary goal of being **written, verified, and repaired by generative AI**.
The verifier `fslc` uses Lark + Z3 to perform **bounded model checking (BMC)**
and **infinite-depth proofs via k-induction**, and always returns results as
**machine-readable JSON** (for the LLM write→verify→repair loop).
It also includes `fslc scenarios`, which generates integration-test scaffolds from a spec.

Specs can be written in **three layered dialects — consulting (business) / requirements / design (spec)** —
chained via refinement so that requirement IDs propagate transparently across all diagnostics. Non-functional requirements are also supported, down to SLAs (discrete time).
For the language specification, semantics, and output JSON see [`docs/LANGUAGE.md`](https://github.com/ymm-oss/fsl/blob/HEAD/docs/LANGUAGE.md);
for a map of all the documentation see [`docs/README.md`](https://github.com/ymm-oss/fsl/blob/HEAD/docs/README.md).

## First steps

The basic way to use FSL is **not** for a person to memorize the FSL syntax and write it by hand;
instead, you…
