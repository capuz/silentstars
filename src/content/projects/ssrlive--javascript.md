---
repo: "ssrlive/javascript"
name: "javascript"
description: "A JavaScript engine implementation written in Rust"
readmeQualityOk: true
url: "https://github.com/ssrlive/javascript"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
stars: 7
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2025-11-28T01:51:03Z"
lastCommitAt: "2026-10-24T08:05:40Z"
lastReleaseAt: "2026-10-22T13:27:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 54
undervaluedScore: 34
maintainers: ["ssrlive"]
openGraphImageUrl: "https://opengraph.githubassets.com/20306eeaf1f17ffd2c623ec6e8590d341cdf522380aac531fd09f5b42ae3d508/ssrlive/javascript"
---

# JavaScript Engine in Rust

A JavaScript engine written in Rust, with a full pipeline from source text to bytecode execution:

Source -> Lexer -> Parser -> Compiler -> VM

The repository contains:

- A library crate: javascript
- A CLI example target: js-rs
- Rust integration tests and JavaScript self-tests
- A Node-based Test262 runner under ci/runner.js

## Current status

This project is actively developed and already passes a large portion of Test262 in practice.

Important: decorators are implemented for classes, methods, and fields, while support for advanced decorator semantics continues to expand.

Important: Proper tail calls (tail call optimization) are supported for strict-mode functions.

## Language mode policy

This engine is intentionally not a legacy-web-quirk-compatible sloppy-mode runtime.

- This engine does not explicitly target full, historical sloppy-mode compatibility.
- Legacy web quirks and edge-case loose-mode behaviors are not a primary compatibility goal.
- In practice, strict and modern ECMAScript behavior is prioritized over preserving legacy oddities.

## Highlights

- Bytecode VM architecture (not AST tree-walking execution)
- ECMAScript parser and…
