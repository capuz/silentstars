---
repo: "leanprover/lean-eval"
name: "lean-eval"
description: "Comparator-based Lean formal mathematics eval"
readmeQualityOk: true
url: "https://github.com/leanprover/lean-eval"
homepage: "https://lean-lang.org/eval/"
language: "Lean"
languages: ["Lean"]
languagePcts: [95]
stars: 41
forks: 37
openIssues: 5
closedIssues: 194
watchers: 3
contributors: 22
recentReleases: 0
createdAt: "2026-04-10T07:11:10Z"
lastCommitAt: "2026-08-30T00:45:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 51
maintainers: ["kim-em", "lean-eval-regenerator[bot]", "alreadydone"]
openGraphImageUrl: "https://opengraph.githubassets.com/841c60e40bddabc2fae064af132d6c223445c871325ca031e79316acd5bcb0cf/leanprover/lean-eval"
---

# Lean Eval

**[View the leaderboard →](https://lean-lang.org/eval/)** ·
**[Submission information →](https://lean-lang.org/eval/submit/)**

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

Each…
