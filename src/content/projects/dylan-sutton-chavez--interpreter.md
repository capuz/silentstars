---
repo: "dylan-sutton-chavez/interpreter"
name: "interpreter"
description: "A Rust SDK for building runtimes, with a state-machine lexer, a single-pass SSA parser and a tiered register VM. "
readmeQualityOk: true
url: "https://github.com/dylan-sutton-chavez/interpreter"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
topics: ["rust", "wasm", "compiler", "bytecode", "garbage-collector", "inline-caching", "interpreter", "memoization", "nan-boxing", "no-std"]
stars: 274
forks: 16
openIssues: 1
closedIssues: 3
watchers: 5
contributors: 1
recentReleases: 1
createdAt: "2026-03-11T06:52:28Z"
lastCommitAt: "2026-11-17T14:40:30Z"
lastReleaseAt: "2026-11-17T05:02:32Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 30
maintainers: ["dylan-sutton-chavez"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c1825b787bc034afcc12913040b4dcb9f9e1cc50d7fb6670a17cdfb3c8c7643/dylan-sutton-chavez/interpreter"
---

# interpreter

`interpreter` is a Rust crate for building language runtimes. You write a token table, the rules of your language and the natives its programs call. The crate gives you a lexer, a single-pass parser that writes bytecode with no AST, and a register VM with an op budget, an exact memory meter, a garbage collector and snapshots.

A runtime compiles to one WebAssembly module that runs in a web page, in the `interpreter` CLI and inside a Rust program. A program reaches no file, network or environment unless its host grants it.

## Install

```bash
cargo add interpreter --features full
```

The CLI builds from this repo with Rust and Deno.

```bash
git clone https://github.com/dylan-sutton-chavez/interpreter
cd interpreter
make wasm-cli js lucide
cargo install --path cli
```

## Features

| Feature | Turns on |
|---|---|
| `std` | The standard library, on by default |
| `bytes`, `data`, `date`, `io`, `iter`, `map`, `num`, `reflect`, `seq`, `set`, `spec`, `text`, `types` | One module of `interpreter::lib`, the ready natives a runtime names in its own table |
| `full` | Every module of `interpreter::lib` |
| `plugin` | `interpreter::plugin`, for writing `.wasm` plugins a…
