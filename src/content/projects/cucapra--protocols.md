---
repo: "cucapra/protocols"
name: "protocols"
description: "New implementation of protocols"
readmeQualityOk: true
url: "https://github.com/cucapra/protocols"
language: "Rust"
languages: ["Rust", "Verilog"]
languagePcts: [73, 21]
stars: 15
forks: 0
openIssues: 49
closedIssues: 72
watchers: 4
contributors: 10
recentReleases: 0
createdAt: "2024-11-08T21:24:38Z"
lastCommitAt: "2026-10-31T15:58:36Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 59
maintainers: ["Nikil-Shyamsunder", "ekiwi", "ngernest"]
openGraphImageUrl: "https://opengraph.githubassets.com/47cd70f51d6505658711617f8657414e1def7f7ccc78d7be4ef55d59f0206d1c/cucapra/protocols"
---

# Protocols
**Protocols** is a DSL for specifying & testing hardware communication protocols at the cycle-level register-transfer level (RTL).
A protocol is described using an `prot` definition containing a sequence of statements:
- `symbol := RHS` assigns the value of the `RHS` expression to the DUT input port `symbol`. The right-hand side expression may be an arbitrary value, represented by `X` ("don't care").
- `step(n)`  advances the clock by `n` cycles (`n > 0`)
- `fork()`  allows for concurrent protocol execution.
- `assert_eq(e1, e2)` tests equality between `e1` and `e2`.
- `while` and `if/else` blocks allow for control flow
- `repeat num_iters iterations { ... }` is a loop that executes for `num_iters` iterations exactly, where `num_iters` must be 
  an input parameter supplied to the `prot`

This repository contains:
- An *interpreter* for the DSL
- A *backwards interpreter* (BI) tool, which given a specification of a hardware module's communication behavior (written in our DSL)
  and a `.fst` waveform file, infers a transaction-level trace that is consistent with the waveform data 
- Common infrastructure shared between the interpreter & the BI, such as a parser,…
