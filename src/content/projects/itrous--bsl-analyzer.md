---
repo: "itrous/bsl-analyzer"
name: "bsl-analyzer"
description: "BSL (1C:Enterprise) code analyzer with LSP support. Written in Rust."
originalDescription: "Анализатор кода BSL (1С:Предприятие) с поддержкой LSP. Написан на Rust."
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/itrous/bsl-analyzer"
homepage: "https://t.me/+K7CcQPNZobE3YjUy"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 111
forks: 18
openIssues: 286
closedIssues: 157
watchers: 4
contributors: 11
recentReleases: 0
createdAt: "2026-03-07T18:24:53Z"
lastCommitAt: "2026-10-21T23:36:37Z"
lastReleaseAt: "2026-03-26T06:10:04Z"
status: "thriving"
tags: []
healthScore: 86
undervaluedScore: 32
maintainers: ["itrous"]
openGraphImageUrl: "https://opengraph.githubassets.com/245f9bb97c0a9b81abfbbc365f12dfd0f62160884c3caf38f73faa8b2dc4bdb6/itrous/bsl-analyzer"
---

# BSL Analyzer

Experimental Language Server for BSL (1C:Enterprise), written in Rust.

## Project idea

The project tests the hypothesis: what would a 1C developer get if the architecture of [rust-analyzer](https://github.com/rust-lang/rust-analyzer) were applied to the 1C:Enterprise language: incremental computation on Salsa, full-fidelity CST on Rowan, multi-layer HIR with type inference, and flow-sensitive analysis via CFG and dataflow.

Practical effects of this architecture:

- **Incremental recomputation.** Salsa invalidates only the part of the query graph that depends on the edit, without reprocessing the whole project.
- **Semantic hover and completion.** Real type inference (HIR/Ty): `Документы.ПКО.<TAB>` is filtered by the receiver's type; hover shows the actual type of the expression, including unions from `ОписаниеТипов` and JSDoc. After `Если ТипЗнч(Х) = Тип("Массив")`, the type inside the branch is narrowed (narrowing).
- **Find references and rename by symbol.** Search works through `SemanticSymbol`, not a text grep, so local variables and module exports with the same name are not confused.
- **Flow-sensitive diagnostics.** Unreachable code, unused assignments,…
