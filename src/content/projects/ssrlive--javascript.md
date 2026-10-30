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
recentReleases: 3
createdAt: "2025-11-28T01:51:03Z"
lastCommitAt: "2026-10-30T10:22:15Z"
lastReleaseAt: "2026-10-29T04:34:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 60
undervaluedScore: 54
maintainers: ["ssrlive"]
openGraphImageUrl: "https://opengraph.githubassets.com/9f548f1f29b1d1fe19a25c1cb7c15b88910e90ebafd152852c196e8d985a18e8/ssrlive/javascript"
---

# JavaScript Engine in Rust

A JavaScript engine written in Rust. Source text is tokenized, parsed, compiled to bytecode, and executed by a bytecode VM:

Source -> Lexer -> Parser -> Compiler -> VM

The repository contains:

- A library crate: javascript
- A CLI example target: js-rs
- Rust integration tests and JavaScript self-tests
- A Node-based Test262 runner under ci/runner.js

## Current status

This project is actively developed. ECMAScript conformance is measured with the included Test262 runner; support is still incomplete.

Important: decorators are implemented for classes, methods, and fields, while support for advanced decorator semantics continues to expand.

Important: Proper tail calls (tail call optimization) are supported for strict-mode functions.

## Language mode policy

This engine is intentionally not a legacy-web-quirk-compatible sloppy-mode runtime.

- This engine does not explicitly target full, historical sloppy-mode compatibility.
- Legacy web quirks and edge-case loose-mode behaviors are not a primary compatibility goal.
- In practice, strict and modern ECMAScript behavior is prioritized over preserving legacy oddities.

## Highlights

- Bytecode VM…
