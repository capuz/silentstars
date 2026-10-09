---
repo: "dahlia/oseo"
name: "oseo"
description: "A JavaScript and TypeScript engine that compiles every function to native code ahead of time, using type annotations as guarded optimization hints. No interpreter, no JIT, no deoptimization."
readmeQualityOk: true
url: "https://github.com/dahlia/oseo"
language: "TypeScript"
languages: ["TypeScript", "C"]
languagePcts: [67, 32]
topics: ["aot", "compiler", "javascript", "typescript"]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-17T15:18:22Z"
lastCommitAt: "2026-10-09T10:50:20Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 38
maintainers: ["dahlia"]
openGraphImageUrl: "https://opengraph.githubassets.com/5fbbfafd643378085eedebbf825a3f7a3647fecefb170e085dbb4bad254afa2e/dahlia/oseo"
---

Oseo
====

A JavaScript and TypeScript engine that compiles every function to native
code ahead of time, using type annotations as guarded optimization hints.
No interpreter, no JIT, no deoptimization.

How it works
------------

Every function is compiled into a generic path that implements the full
language semantics of the current release. Wherever Oseo can generate a cheap
runtime guard for a value's kind, type, or shape, it compiles a specialized
path alongside. A failed guard branches straight into the generic path, which
is already sitting in the binary, compiled, not interpreted. Nothing gets
deoptimized because nothing was left uncompiled.

This follows the lineage of Common Lisp implementations like SBCL and of Chez
Scheme rather than the interpreter-plus-speculative-JIT design of mainstream
JavaScript engines. There is no profiling tier to warm up.

Normally `tsc` erases type annotations before an engine ever sees the code.
Because Oseo compiles from the original source, it keeps those annotations, and
JSDoc types in plain JavaScript, as optimization hints that select which
specialized path to generate. Every resulting assumption stays guarded at
runtime, since a `:…
