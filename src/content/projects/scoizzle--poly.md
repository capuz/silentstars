---
repo: "scoizzle/Poly"
name: "Poly"
description: "Poly: An extension to .Net applications!"
readmeQualityOk: true
url: "https://github.com/scoizzle/Poly"
homepage: "http://www.scoizzle.com/"
language: "C#"
languages: ["C#"]
languagePcts: [99]
stars: 5
forks: 1
openIssues: 212
closedIssues: 106
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2014-01-20T21:54:00Z"
lastCommitAt: "2026-11-12T05:42:52Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 87
undervaluedScore: 74
maintainers: ["scoizzle"]
openGraphImageUrl: "https://opengraph.githubassets.com/6f844e4dfb9b1b35f7c25ede42844052764a5c4bc26047c359ae873e9c05c3fb/scoizzle/Poly"
---

# Poly

Deterministic code generation from non-deterministic sources.

Domain models, discovered heuristics, and natural-language specifications all express *what could be*. Poly's analysis, lowering, and VM pipeline determines *what actually happens* — validating constraints, resolving ambiguities, expanding macros, and producing executable code through a canonical stack VM. The source is the ground truth; the pipeline turns intention into provably correct behavior.

## Key Concepts

- **Domain-first.** The `.poly` DSL, entities, policies, stages, and actions are the ground truth. Tools, languages, and infrastructure are evaluated by how faithfully they express the domain.
- **Analysis pipeline.** A multi-pass analyzer validates types, scopes, control flow, side effects, and structural well-formedness before anything executes. Node rewrites happen in analysis metadata — never by mutating the tree.
- **Canonical VM.** Every lowered program's meaning is determined by execution on a stack VM — the single source of truth for behavior. The same AST compiles to LINQ expressions, C# source, or runs directly through the VM.
- **Domain as library.** A domain is a library of legal…
