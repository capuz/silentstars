---
repo: "opencompl/veir"
name: "veir"
description: "Verified Intermediate Representation"
readmeQualityOk: true
url: "https://github.com/opencompl/veir"
language: "Lean"
languages: ["Lean", "MLIR"]
languagePcts: [73, 25]
stars: 128
forks: 43
openIssues: 44
closedIssues: 41
watchers: 2
contributors: 56
recentReleases: 0
createdAt: "2025-12-08T15:24:24Z"
lastCommitAt: "2026-10-26T09:14:21Z"
lastReleaseAt: "2026-05-16T05:44:38Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 89
undervaluedScore: 38
maintainers: ["tobiasgrosser", "regehr", "naveen-seth"]
openGraphImageUrl: "https://opengraph.githubassets.com/a60ff1a67b404dd8d0e900f06810cd99ac8802fb60c9c904081b9f3126efd8f0/opencompl/veir"
---

# Verified Intermediate Representation

VeIR is a compiler infrastructure written in Lean that offers both an
[MLIR](https://mlir.llvm.org/)-style imperative design and
(optional) ITP-level verification.
VeIR connects with MLIR via the MLIR textual format, making it
easy to combine MLIR and VeIR tools.

| VeIR Features                                         | Complete   | Verified |
|-------------------------------------------------------|------------| ---------|
| MLIR core data structures (block, operation, region)  | ✅         | 🔒        |
| define dialects                                       | ✅ (basic) |           |
| pass infrastructure                                   | ✅         |           |
| peephole rewriter                                     | ✅         |           |
| peephole rewriter (declarative)                       |            |           |
| interpreter framework                                 | ✅         |           |

## Building and testing

Building VeIR requires [Lean 4 and its build tool Lake](https://lean-lang.org/install/).

Common tasks are wrapped in the [`Makefile`](https://github.com/opencompl/veir/blob/HEAD/Makefile): `make build` to build…
