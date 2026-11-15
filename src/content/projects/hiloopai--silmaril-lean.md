---
repo: "hiloopai/silmaril-lean"
name: "silmaril-lean"
description: "Lean models of program behavior, compiler foundations and verified WebAssembly tools."
readmeQualityOk: true
url: "https://github.com/hiloopai/silmaril-lean"
language: "Lean"
languages: ["Lean"]
languagePcts: [97]
stars: 23
forks: 0
openIssues: 2
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-10-25T17:06:44Z"
lastCommitAt: "2026-11-15T11:22:32Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 34
maintainers: ["imbrem", "tboser"]
openGraphImageUrl: "https://opengraph.githubassets.com/7de9c82823a66c426a8b6f09916e3f2f44fffb5dc096c8da65550425170ed8d7/hiloopai/silmaril-lean"
---

# Silmaril

Silmaril uses Lean 4 to model programs and prove properties about them. It includes
a WebAssembly toolkit with Binaryen-style commands and a library of logics,
models, lambda calculi and verified translations.

## Try the Binaryen demo

Install [elan](https://github.com/leanprover/elan), Git, GNU Make, a native C
toolchain, Python 3.11+ and Node.js 24+, or use the
[development environments](https://github.com/hiloopai/silmaril-lean/blob/HEAD/docs/development.md).

```sh
git clone https://github.com/hiloopai/silmaril-lean.git
cd silmaril-lean
make cache
make demo
```

The demo exercises all seven tools: it assembles two modules, removes dead code,
links them, keeps the selected exports, converts the result to text and back,
and checks that `run()` returns **42** in both the Lean WebAssembly interpreter
and Node.
A second example precomputes a constructor and checks that its getter returns
**9**.

```mermaid
flowchart LR
  A[Assemble] --> O[Optimize]
  O --> L[Link]
  L --> D[Remove unused exports]
  D --> T[Disassemble and reassemble]
  T --> R["run() = 42"]
```

The binaries are in `build/bin/`. Use their standalone names or the `sil`
dispatcher:

```sh
export…
