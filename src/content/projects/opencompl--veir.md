---
repo: "opencompl/veir"
name: "veir"
description: "Verified Intermediate Representation"
readmeQualityOk: true
url: "https://github.com/opencompl/veir"
language: "Lean"
languages: ["Lean"]
languagePcts: [82]
stars: 69
forks: 17
openIssues: 38
closedIssues: 22
watchers: 2
contributors: 23
recentReleases: 1
createdAt: "2025-12-08T15:24:24Z"
lastCommitAt: "2026-07-12T06:13:59Z"
lastReleaseAt: "2026-05-16T05:44:38Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 86
undervaluedScore: 34
maintainers: ["tobiasgrosser", "math-fehr", "regehr"]
openGraphImageUrl: "https://opengraph.githubassets.com/0b33d02ffcbf9f18e564c72b3c449dd5aa8eebdb986e9eec83f83c2a331ce928/opencompl/veir"
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

## Testing

Our testing framework is split into two parts: unit tests written in Lean and
[FileCheck](https://llvm.org/docs/CommandGuide/FileCheck.html) tests for the
command line tool `veir-opt`.

### Unit Tests

Run the unit tests…
