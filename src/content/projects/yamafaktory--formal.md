---
repo: "yamafaktory/formal"
name: "formal"
description: "A Lean 4 + Mathlib proof service for the agent working on your code"
readmeQualityOk: true
url: "https://github.com/yamafaktory/formal"
language: "Rust"
languages: ["Rust"]
languagePcts: [88]
topics: ["agents", "ai", "formal-verification", "lean4", "claude", "mathlib", "theorem-proving"]
stars: 26
forks: 0
openIssues: 2
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 7
createdAt: "2026-04-10T14:24:02Z"
lastCommitAt: "2026-11-23T10:24:39Z"
lastReleaseAt: "2026-11-21T20:25:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 84
undervaluedScore: 26
maintainers: ["yamafaktory"]
openGraphImageUrl: "https://opengraph.githubassets.com/ef368b95f47da4d3ce23292e8f69548654d6e2140fd919b64a5f1a03ddf38faa/yamafaktory/formal"
---

# formal

**Property checker for code, backed by Lean 4 and Mathlib. Your agent writes the
properties and the proofs; formal checks them.**

Take a function that applies a discount. The property to establish: for every
non-negative price and every rate, the result lies between 0 and the price. Your agent
states it as a Lean theorem and writes a proof. formal has Lean check the proof and
returns the verdict: verified, or rejected with Lean's first error and a hint.

formal does not call a model. It needs no API key and has no opinion about which model
you use. The agent that already reads your code writes the Lean. formal does everything
that needs no model:

- it checks proofs, in Lean processes that keep Mathlib loaded between checks,
- it retries a rejected proof with an automatic tactic chain, then a Mathlib premise
  search (`exact?`),
- it audits the axioms every accepted proof depends on,
- it caches every proof that passes, and
- it detects when the code changes under a property.

## How it works

Three judgements precede any Lean run, and your agent makes all three:
