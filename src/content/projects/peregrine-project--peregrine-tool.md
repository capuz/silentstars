---
repo: "peregrine-project/peregrine-tool"
name: "peregrine-tool"
description: "Verified compiler from LambdaBox to WebAssembly, C, Rust, and OCaml"
readmeQualityOk: true
url: "https://github.com/peregrine-project/peregrine-tool"
language: "Rocq Prover"
languages: ["Rocq Prover"]
languagePcts: [73]
topics: ["coq", "extraction"]
stars: 32
forks: 6
openIssues: 31
closedIssues: 11
watchers: 4
contributors: 7
recentReleases: 0
createdAt: "2024-12-11T15:35:22Z"
lastCommitAt: "2026-11-10T11:38:30Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 84
undervaluedScore: 51
maintainers: ["spitters", "barabbs", "yforster"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/901934980/62ac8a51-ac15-4932-b1b0-925f25c35a32"
---

# Peregrine

Peregrine extracts code from proof assistants. Its frontends erase Rocq, Agda and Lean programs to $\lambda_\square$ (LambdaBox), the untyped lambda calculus of MetaRocq's verified erasure. Its middle-end, written and partly verified in Rocq, validates and transforms $\lambda_\square$. Its backends then compile the result to C, WebAssembly, LLVM IR, OCaml, CakeML, Rust, Elm, Lean, F# or Koka.

See [overview.md](https://github.com/peregrine-project/peregrine-tool/blob/HEAD/doc/overview.md) for the pipeline and [usage.md](https://github.com/peregrine-project/peregrine-tool/blob/HEAD/doc/usage.md) for every command and option.

## Install
Peregrine needs OCaml 4.14 and [opam](https://opam.ocaml.org/doc/Install.html):
```bash
opam repo add rocq-released https://rocq-prover.org/opam/released
opam update
opam install rocq-peregrine
```
This installs the `peregrine` command and the Rocq frontend. The Agda and Lean frontends are installed separately (see [Frontends](#frontends)). To build from source, see [dev.md](https://github.com/peregrine-project/peregrine-tool/blob/HEAD/doc/dev.md).

## Quick start
```
peregrine BACKEND INPUT [-o OUTPUT] [OPTIONS]
```
`INPUT` is a…
