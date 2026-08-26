---
repo: "leanprover/lean-eval"
name: "lean-eval"
description: "Comparator-based Lean formal mathematics eval"
readmeQualityOk: true
url: "https://github.com/leanprover/lean-eval"
homepage: "https://lean-lang.org/eval/"
language: "Lean"
languages: ["Lean"]
languagePcts: [94]
stars: 40
forks: 37
openIssues: 6
closedIssues: 193
watchers: 3
contributors: 22
recentReleases: 0
createdAt: "2026-04-10T07:11:10Z"
lastCommitAt: "2026-08-26T04:16:17Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 51
maintainers: ["kim-em", "lean-eval-regenerator[bot]", "alreadydone"]
openGraphImageUrl: "https://opengraph.githubassets.com/f176c77d072cb66a358fbad9ec84e4d302d48a7907ed55d70b4bb04434576425/leanprover/lean-eval"
---

# Lean Eval

**[View the leaderboard →](https://lean-lang.org/eval/)**

This repository is a comparator-based Lean benchmark for formal mathematics.
Benchmark authors write trusted problem statements once in shared Lean modules, and the
tooling generates one comparator workspace per problem under `generated/`.

A submission is scored entirely by comparator results: a problem counts as solved iff
comparator accepts the submitted solution.

The main user-facing entrypoint is:

```bash
lake exe lean-eval --help
```

## Quick Start For Benchmark Problem Contributors

Use this path if you are adding or editing benchmark problems.

### 1. Install and fetch dependencies

```bash
lake exe cache get
lake build
```

### 2. Add or edit a trusted theorem

Put the statement in one of the shared modules under `LeanEval/` and mark it with
`@[eval_problem]`.

```lean
@[eval_problem]
theorem my_new_problem : ... := by
  sorry
```

Current source modules live in topic folders such as:

- `LeanEval/NumberTheory/`
- `LeanEval/Topology/`
- `LeanEval/ComplexAnalysis/`
- `LeanEval/EasyProblems.lean`

### 3. Add the manifest entry

Each tagged declaration must be listed by exactly one file under…
