---
repo: "opencompl/veir"
name: "veir"
description: "Verified Intermediate Representation"
readmeQualityOk: true
url: "https://github.com/opencompl/veir"
language: "Lean"
languages: ["Lean", "MLIR"]
languagePcts: [71, 26]
stars: 110
forks: 32
openIssues: 42
closedIssues: 37
watchers: 1
contributors: 41
recentReleases: 0
createdAt: "2025-12-08T15:24:24Z"
lastCommitAt: "2026-09-18T13:58:14Z"
lastReleaseAt: "2026-05-16T05:44:38Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 88
undervaluedScore: 36
maintainers: ["tobiasgrosser", "regehr", "math-fehr"]
openGraphImageUrl: "https://opengraph.githubassets.com/5e448a382fea594e2155bf49d0831873dca29b4aa1e8ae0a3ce91802ec384c75/opencompl/veir"
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

Common tasks are wrapped in the [`Makefile`](https://github.com/opencompl/veir/blob/HEAD/Makefile): `make build` to build and
`make tests` to run the tests. Run `make` to list every target.

With Nix, `nix…
