---
repo: "dawnop/dawn-lang"
name: "dawn-lang"
description: "A small, elegant, general-purpose functional language. Effects are in the type signature, including ones you name yourself. The compiler is self-hosted, and it is the only one there is. Two peer backends, JVM bytecode and C; that a program prints the same bytes on both is held by a gate, not a promise."
readmeQualityOk: true
url: "https://github.com/dawnop/dawn-lang"
homepage: "https://dawn-lang.dawnop.com"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [46, 32]
topics: ["bootstrapping", "bytecode", "compiler", "effect-system", "graalvm", "jvm", "language-design", "lsp", "native-image", "programming-language"]
stars: 69
forks: 2
openIssues: 5
closedIssues: 15
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-07-11T11:16:45Z"
lastCommitAt: "2026-09-02T08:04:29Z"
lastReleaseAt: "2026-07-23T03:19:44Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 40
maintainers: ["dawnop", "lingkong-q"]
openGraphImageUrl: "https://opengraph.githubassets.com/8f0b845ee7be1e6fc1f5ea67479534c3aa9e833929923061c4fcf584df301089/dawnop/dawn-lang"
---

# Dawn

*[中文版](https://github.com/dawnop/dawn-lang/blob/HEAD/README.zh-CN.md)*

A **small, elegant functional language**: immutable data, algebraic data types with
exhaustive pattern matching, effects written into the type signature. The language is
small and so is the implementation — a compact standard library with **zero `use java`**;
a compiler that is **self-hosted, and the only one there is** (the original Kotlin
implementation is archived at the `kotlin-final` tag). Two **peer** backends: **JVM
bytecode** and **C** (handed on to `cc`). That the same source gives the same answer on
both is held true by a gate, not by a promise.

```dawn run
type Shape =
  | Circle(r: Float)
  | Rect(w: Float, h: Float)

fn area(s: Shape) -> Float =
  match s {
    Circle(r)  -> 3.14159 * r * r
    Rect(w, h) -> w * h
  }

pub fn main() -> Unit !io =
  [Circle(1.0), Rect(2.0, 3.0)]
    |> map(area)
    |> fold(0.0, (a, x) => a + x)
    |> t => println("total: $t")
```

## Install

Every release publishes four install assets: two artifacts and the SHA-256 of
each. Check the digest. The seed the toolchain bootstraps from is verified on every
single use, and an install step that skipped the same…
