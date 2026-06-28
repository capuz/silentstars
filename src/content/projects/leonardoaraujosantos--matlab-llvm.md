---
repo: "leonardoaraujosantos/matlab_llvm"
name: "matlab_llvm"
description: "LLVM Frontend for Matlab"
url: "https://github.com/leonardoaraujosantos/matlab_llvm"
language: "C++"
languages: ["C++"]
languagePcts: [74]
stars: 5
forks: 0
openIssues: 3
closedIssues: 135
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-04-21T20:31:08Z"
lastCommitAt: "2026-06-28T02:03:19Z"
lastReleaseAt: "2026-06-21T13:23:04Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 58
maintainers: ["leonardoaraujosantos"]
openGraphImageUrl: "https://opengraph.githubassets.com/943ac4e569d530552fbe8d7ea87a118d6960b28fbfadde593c6c873af8bf3668/leonardoaraujosantos/matlab_llvm"
---

# matlab_llvm

&nbsp;
&nbsp;

A self-contained **MATLAB compiler and tooling stack** for a practical,
tested subset of the language — one frontend feeding many backends, plus a
JIT-backed REPL, a debugger (DAP), a formatter, and a Language Server.

No MathWorks source, no Octave, no BLAS/LAPACK dependency for the compiled
backends. C++20 frontend, MLIR-based lowering, in-tree C / Python / TypeScript
runtimes.

## Pipeline

```mermaid
flowchart LR
  M[".m source"] --> FE
  F[".mflow graph"] --> FE["Frontend<br/>Lex · Parse · Sema"]
  FE --> IR["AST → MIR → MLIR"]
  IR --> B["Backends"]
  B --> O["LLVM · C/C++ · Python · TypeScript<br/>SystemVerilog · GPU · JIT/REPL<br/>-emit-matlab / -emit-mflow"]
```

Both frontends produce the same `TranslationUnit`; two reverse emitters round-trip
any input back to canonical `.m` (`-emit-matlab`) or an IDE `.mflow` diagram
(`-emit-mflow`). Architecture detail: [§ Architecture](#architecture).

## Code Generation

| Target | Flag | Notes |
|---|---|---|
| LLVM IR / native | `-emit-llvm` | primary path; JIT also drives the REPL/DAP |
| C / C++ | `-emit-c` / `-emit-cpp` | self-contained source + in-tree runtime |
| Python / TypeScript |…
