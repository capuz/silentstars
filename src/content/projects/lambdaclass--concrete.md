---
repo: "lambdaclass/concrete"
name: "concrete"
description: "Experimental systems language with linear ownership, explicit capabilities, and Lean-checked proofs for supported code."
readmeQualityOk: true
url: "https://github.com/lambdaclass/concrete"
homepage: "https://lambdaclass.github.io/concrete/"
language: "Lean"
languages: ["Lean", "Shell"]
languagePcts: [44, 32]
topics: ["mlir", "programming-language"]
stars: 352
forks: 22
openIssues: 84
closedIssues: 25
watchers: 9
contributors: 11
recentReleases: 1
createdAt: "2023-12-28T15:10:17Z"
lastCommitAt: "2026-11-26T11:56:29Z"
lastReleaseAt: "2026-11-07T23:50:55Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 82
undervaluedScore: 35
maintainers: ["unbalancedparentheses"]
openGraphImageUrl: "https://opengraph.githubassets.com/6b81600a3f97369d200a2d2dee216c809dee011aba26b0b5c6c084adbedcd1b2/lambdaclass/concrete"
discussionCount: 0
---

# The Concrete Programming Language

**Concrete is a fully proven systems programming language with no garbage collector, where you can
know everything a program does: what it does, what it may touch, whether it can fail or stop, and
what is proved about it.** Every unproven step is named as an explicit assumption, never silently
trusted. This states the project's goal: each guarantee holds only as its evidence lands, compiler
correctness and program correctness need separate proofs, and native claims remain conditional on
their named assumptions ([decision](https://github.com/lambdaclass/concrete/blob/HEAD/docs/decisions.md#decided-project-core-statement)).

It checks resource ownership, makes external authority explicit at every use, and is specified in
Lean so that its rules can be proved about. From the first compiler slice, you can ask the compiler
what any function may do: its capabilities and reachable resources, allocation, trusted and foreign
boundaries, how each possible failure is handled, termination and proof status, each with its reason
and evidence ([decision](https://github.com/lambdaclass/concrete/blob/HEAD/docs/decisions.md#decided-project-facts-report)).
