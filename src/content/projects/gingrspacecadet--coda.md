---
repo: "gingrspacecadet/coda"
name: "coda"
description: "A fresh attempt at a systems language, without all the clutter!"
readmeQualityOk: true
url: "https://github.com/gingrspacecadet/coda"
language: "C"
languages: ["C"]
languagePcts: [99]
stars: 26
forks: 2
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-02-11T20:17:57Z"
lastCommitAt: "2026-09-19T01:17:14Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 78
undervaluedScore: 40
maintainers: ["gingrspacecadet", "HastingsGreer"]
openGraphImageUrl: "https://opengraph.githubassets.com/fddd2c2c3b8de21c33deda04a48d7c6a9c3205508b5a23a016edef422be4896f/gingrspacecadet/coda"
---

# Coda

Coda is a systems programming language exploring a simpler approach to low-level programming: explicit resources, predictable behaviour, and a small language core.

It aims to provide:

* C-like control and performance
* immutable-by-default semantics
* simple, explicit memory management
* fast compilation
* a complete toolchain written from scratch

## Hello World

```coda
module main;

include std::debug = dbg;

@export
fn int main() {
    dbg::println("Hello, world!");
    return 0;
}
```

Compile and run:

```bash
coda --run hello.coda
```

## Why Coda?

Coda is designed for programmers who want low-level control without the complexity that has accumulated around existing systems languages.

Unlike C, Coda provides stronger compile-time guarantees and safer defaults while keeping explicit control over memory, data layout, and performance.

Unlike higher-level languages, Coda avoids hidden allocations, runtime dependencies, and implicit behaviour.

Key design choices include:

- Immutable-by-default variables to prevent accidental mutation
- Explicit mutability through `mut`
- No warnings, only errors
- A simple compilation model with no dependency on large compiler…
