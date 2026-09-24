---
repo: "Lewin671/quickjs-rust"
name: "quickjs-rust"
description: "A Rust-native ECMAScript engine with an embeddable bytecode runtime."
readmeQualityOk: true
url: "https://github.com/Lewin671/quickjs-rust"
language: "Rust"
languages: ["Rust"]
languagePcts: [83]
topics: ["interpreter", "javascript", "javascript-engine", "lexer", "parser", "quickjs", "rust", "test262", "compiler", "ecmascript"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-05-27T16:09:45Z"
lastCommitAt: "2026-09-24T08:42:03Z"
lastReleaseAt: "2026-09-12T04:54:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 55
maintainers: ["Lewin671"]
openGraphImageUrl: "https://opengraph.githubassets.com/e047ff1e8d5f2aa15740a827745e39337f24c35c80b04c8e21b766d9bcc445e4/Lewin671/quickjs-rust"
---

# quickjs-rust

**A Rust-native ECMAScript engine and embeddable bytecode runtime.**

`quickjs-rust` is a Rust implementation of the ECMAScript language runtime. It
includes a span-preserving lexer and parser, bytecode compiler, virtual machine,
module linker, standard-library builtins, and a command-line host for local
execution.

The current normative target is ECMA-262 16th edition, June 2025
(ECMAScript 2025 / ES2025), corresponding to the `tc39/ecma262@es2025`
specification tag. TC39 living-draft features are tracked separately from the
default conformance baseline. Test262 does not publish edition-specific stable
tags; this repository therefore pins a concrete Test262 commit and evaluates it
against the ES2025 target and a pinned
[QuickJS-NG](https://github.com/quickjs-ng/quickjs) comparison baseline.

## ECMAScript Conformance

Conformance is tracked with pinned Test262 inputs and differential checks
against QuickJS-NG. CI runs Rust checks, QuickJS-NG comparison smoke tests,
curated Test262 subsets, and a sharded full Test262 coverage workflow.

Full-scan snapshots are recorded under…
