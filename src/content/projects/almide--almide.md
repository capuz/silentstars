---
repo: "almide/almide"
name: "almide"
description: "A statically-typed language built for LLMs to write correctly. When the model is wrong, the compiler names the fix. Builds native binaries and WebAssembly from one source."
readmeQualityOk: true
url: "https://github.com/almide/almide"
homepage: "https://almide.github.io/docs/"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
topics: ["code-generation", "compiler", "llm", "programming-language", "rust", "webassembly", "statically-typed"]
stars: 36
forks: 5
openIssues: 153
closedIssues: 1972
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-03-07T10:48:58Z"
lastCommitAt: "2026-11-06T10:31:51Z"
lastReleaseAt: "2026-03-10T13:50:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 48
maintainers: ["O6lvl4"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1175180941/9fb2ea87-22dd-4fc1-bd73-ddd3c5181e17"
---

---

Almide is a statically-typed language for code that AI writes and edits. The claim is not that the model gets it right. It is that **when the model is wrong, the compiler says so at author time and names the fix**. Programs compile to native binaries (via Rust) and to WebAssembly, with byte-identical output on every [contracted behaviour](https://github.com/almide/almide/blob/HEAD/docs/contracts/). `almide verify` checks the ownership, bounds, name and capability witnesses of the wasm module `almide build` ships, pinned to that file by its SHA-256 ([what is proven, what is trusted](https://github.com/almide/almide/blob/HEAD/docs/contracts/proven-vs-trusted.md)).

## An edit that survives

A model adds a case to a type and, as models do, touches nothing else:

```almd
type Shape =
  | Circle(Float)
  | Square(Float)
  | Triangle(Float, Float)   // the edit

fn area(s: Shape) -> Float =
  match s {
    Circle(r) => 3.14159 * r * r
    Square(w) => w * w
  }
```

```text
error[E010]: non-exhaustive match: missing Triangle(_, _)
  --> shape.almd:7:9
  in match
  here: match s {
  hint: add arms for Triangle(_, _):
  Triangle(arg1, arg2) => _
Or use `_ => todo()` to compile…
