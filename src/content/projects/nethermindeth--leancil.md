---
repo: "NethermindEth/LeanCIL"
name: "LeanCIL"
description: "LeanCIL is a Lean 4 formal verification framework for .NET programs. It enables machine-checked proofs of correctness and safety against compiled Common Intermediate Language (CIL), supporting applications written in C#, F#, and other .NET languages."
readmeQualityOk: true
url: "https://github.com/NethermindEth/LeanCIL"
language: "Lean"
languages: ["Lean", "C#"]
languagePcts: [54, 46]
stars: 53
forks: 0
openIssues: 24
closedIssues: 36
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-10-14T01:08:15Z"
lastCommitAt: "2026-10-22T08:52:00Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 31
maintainers: ["benaadams"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1418197183/c4ae4038-0720-4783-bc89-58e0b4c9900b"
---

# LeanCIL: Formal Verification for .NET

LeanCIL is a Lean 4 formal verification framework for .NET programs. It enables machine-checked proofs of correctness and safety against compiled Common Intermediate Language (CIL), supporting applications written in C#, F#, and other .NET languages.

Verification operates on the assembly's actual compiled instructions using CIL semantics defined in Lean. The current [supported subset](#supported-subset-and-limits) covers selected instructions and runtime features; unsupported behaviour is rejected explicitly.

```mermaid
flowchart TD
    source["C#, F# or other .NET source"] -- ".NET compiler" --> assembly["Compiled assembly<br/>(the actual CIL)"]
    assembly --> extract["leancil extract<br/>validate and translate"]
    extract --> generated["Extracted.lean<br/>and identity.json"]
    semantics["CIL semantics<br/>in Lean"] --> verify
    generated --> verify["leancil verify<br/>kernel check, replay, axiom audit"]
    assembly -. "SHA-256, regenerate and compare" .-> verify
    proof["Your theorem<br/>and proof"] --> verify
    verify --> report["verified.json<br/>the theorem holds for this CIL"]

    classDef trusted stroke-dasharray: 6 4…
