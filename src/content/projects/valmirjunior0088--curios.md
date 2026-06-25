---
repo: "valmirjunior0088/curios"
name: "curios"
description: "Work-in-progress functional dependently typed programming language"
url: "https://github.com/valmirjunior0088/curios"
language: "C++"
languages: ["C++", "Rust"]
languagePcts: [73, 25]
stars: 35
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 5
createdAt: "2019-08-19T10:05:27Z"
lastCommitAt: "2026-06-25T01:37:28Z"
lastReleaseAt: "2026-06-10T09:22:02Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "release_machine"]
healthScore: 80
undervaluedScore: 57
maintainers: ["valmirjunior0088"]
openGraphImageUrl: "https://opengraph.githubassets.com/23b8daf57f8e1cfb0c85b84becf05d6a7ed9ba574db7938ad448a8741776f1eb/valmirjunior0088/curios"
---

# Curios

Curios is a functional language with dependent types that compiles to WebAssembly. Most languages with dependent types evolved from proof assistants, where non-determinism is a property to be excluded rather than embraced - Curios inverts this, aiming to bring dependent function types (Π-types, λ-abstractions), dependent tuple types (Σ-types, dependent pairs), and nominal sum types (inductive types with dependent elimination semantics) to a programming context where non-determinism is simply part of daily life.

Dependent types pay off most in a handful of recurring patterns. Length-indexed collections rule out bounds errors by construction, replacing runtime panics with type-level guarantees. Typed format strings derive their argument list directly from the format value, eliminating a whole class of variadic bugs. Dependent records encode protocol state in the type itself, turning invalid transitions into compile-time errors rather than runtime failures.

Curios is an impure language, like OCaml. Side effects — currently terminal IO through `/std/Io` — are ordinary expressions that can appear anywhere in a program. The type system accommodates this by treating effectful…
